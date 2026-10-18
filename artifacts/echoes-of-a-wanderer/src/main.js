const root = document.documentElement;
const toggle = document.querySelector("#theme-toggle");
const archiveSurface = document.querySelector(".echoes-archive");

function track(name) {
  window.dispatchEvent(new CustomEvent("echoes:analytics", {
    detail: { name, location: window.location.pathname }
  }));
}

function applyTheme(theme, persist = false) {
  root.dataset.theme = theme;
  if (archiveSurface) archiveSurface.dataset.theme = theme;
  const dark = theme === "dark";
  toggle.setAttribute("aria-pressed", String(dark));
  toggle.setAttribute("aria-label", dark ? "লাইট মোড চালু করুন" : "ডার্ক মোড চালু করুন");
  document.querySelector('meta[name="theme-color"]').content = dark ? "#202a27" : "#f3f0e7";
  if (persist) {
    try { localStorage.setItem("echoes-theme", theme); } catch (_) {}
    track("theme_changed");
  }
}

applyTheme(root.dataset.theme || "light");
toggle.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
});

document.querySelectorAll("[data-track]").forEach((control) => {
  control.addEventListener("click", () => track(control.dataset.track));
});

window.addEventListener("echoes:analytics", (event) => {
  // Consumer-ready local hook. No provider or network request is configured.
  window.echoesAnalytics?.(event.detail);
});

const archive = document.querySelector("#essay-content");
const archiveBody = document.querySelector("#archive-body");
const dialog = document.querySelector("#letter-dialog");
const reader = document.querySelector("#letter-reader");
const openLetter = document.querySelector("#open-letter");
const closeButtons = document.querySelectorAll("[data-close-letter]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const chapterIds = [
  "chapter-letters",
  "chapter-diary",
  "chapter-memory",
  "chapter-poetry",
  "chapter-fragments",
  "chapter-thoughts",
  "chapter-echoes",
  "featured-letter",
];
let archiveLoaded = false;
let loadingArchive = false;
let letterLoaded = false;
let loadingLetter = false;
let closingLetter = false;
let openingAnimation = null;
let lastFocusedElement = null;

function appendInline(parent, source) {
  const pattern = /(<mark>[\s\S]*?<\/mark>|\*\*[\s\S]*?\*\*|\*[^*\n]+\*)/g;
  let cursor = 0;

  for (const match of source.matchAll(pattern)) {
    const token = match[0];
    const start = match.index ?? 0;
    if (start > cursor) parent.append(document.createTextNode(source.slice(cursor, start)));

    if (token.startsWith("<mark>")) {
      const mark = document.createElement("mark");
      mark.textContent = token.slice(6, -7);
      parent.append(mark);
    } else if (token.startsWith("**")) {
      const strong = document.createElement("strong");
      strong.textContent = token.slice(2, -2);
      parent.append(strong);
    } else if (token.startsWith("*")) {
      const emphasis = document.createElement("em");
      emphasis.textContent = token.slice(1, -1);
      parent.append(emphasis);
    }
    cursor = start + token.length;
  }

  if (cursor < source.length) parent.append(document.createTextNode(source.slice(cursor)));
}

function parseArchiveMarkdown(markdown) {
  const lines = markdown.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n").split("\n");
  if (lines[0]?.startsWith("# ")) {
    lines.shift();
    if (lines[0]?.startsWith("*") && lines[0]?.endsWith("*")) lines.shift();
  }

  const fragment = document.createDocumentFragment();
  let index = 0;
  let chapter = 0;
  let firstParagraph = true;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    if (/^---+$/.test(line)) {
      const divider = document.createElement("div");
      divider.className = "ea-divider";
      divider.setAttribute("aria-hidden", "true");
      divider.textContent = "সংরক্ষিত শব্দ";
      fragment.append(divider);
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      const heading = document.createElement("h2");
      chapter += 1;
      heading.id = chapterIds[chapter - 1] || `chapter-${chapter}`;
      if (heading.id === "featured-letter") heading.dataset.featured = "true";

      const chapterNumber = document.createElement("span");
      chapterNumber.className = "ea-chapter-number";
      chapterNumber.textContent = `অধ্যায় / ${String(chapter).padStart(2, "0")}`;
      heading.append(chapterNumber);

      const title = line.slice(3).replace(/^[^A-Za-z\u0980-\u09FF]+/, "").trim();
      appendInline(heading, title);
      fragment.append(heading);
      index += 1;
      continue;
    }

    if (line.startsWith("> ")) {
      const quoteLines = [];
      while (index < lines.length && lines[index].trim().startsWith("> ")) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }
      const quote = document.createElement("blockquote");
      const paragraph = document.createElement("p");
      appendInline(paragraph, quoteLines.join(" "));
      quote.append(paragraph);
      fragment.append(quote);
      continue;
    }

    if (line.startsWith("- ")) {
      const list = document.createElement("ul");
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        const item = document.createElement("li");
        appendInline(item, lines[index].trim().slice(2));
        list.append(item);
        index += 1;
      }
      fragment.append(list);
      continue;
    }

    const paragraphLines = [line];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].trim().startsWith("## ") &&
      !lines[index].trim().startsWith("> ") &&
      !lines[index].trim().startsWith("- ") &&
      !/^---+$/.test(lines[index].trim())
    ) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }

    const paragraph = document.createElement("p");
    if (firstParagraph) {
      paragraph.classList.add("ea-opening-question");
      firstParagraph = false;
    }
    appendInline(paragraph, paragraphLines.join(" "));
    fragment.append(paragraph);
  }

  return fragment;
}

function setupArchiveReveals() {
  const targets = [
    document.querySelector("#recent-letter"),
    ...archiveBody.querySelectorAll("h2, blockquote"),
  ].filter(Boolean);

  targets.forEach((target) => target.classList.add("ea-reveal"));
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      entry.target.classList.remove("is-pending");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -4% 0px" });

  targets.forEach((target) => {
    target.classList.add("is-pending");
    revealObserver.observe(target);
  });
}

function setArchiveError(message) {
  archiveBody.replaceChildren();
  const status = document.createElement("p");
  status.className = "ea-archive-status";
  status.setAttribute("role", "alert");
  status.textContent = message;

  const retry = document.createElement("button");
  retry.className = "ea-archive-retry";
  retry.type = "button";
  retry.textContent = "আবার চেষ্টা করুন";
  retry.addEventListener("click", loadArchiveEssay);
  archiveBody.append(status, retry);
  archiveBody.setAttribute("aria-busy", "false");
  archive.setAttribute("aria-busy", "false");
}

async function loadArchiveEssay() {
  if (!archive || !archiveBody || archiveLoaded || loadingArchive) return;
  loadingArchive = true;
  archive.setAttribute("aria-busy", "true");
  archiveBody.setAttribute("aria-busy", "true");

  try {
    const response = await fetch(archive.dataset.source);
    if (!response.ok) throw new Error(`Archive request failed: ${response.status}`);
    const markdown = await response.text();
    if (!markdown.trim()) throw new Error("Archive content is empty");

    archiveBody.replaceChildren(parseArchiveMarkdown(markdown));
    archiveBody.setAttribute("aria-busy", "false");
    archive.setAttribute("aria-busy", "false");
    archiveLoaded = true;
    setupArchiveReveals();
    track("archive_loaded");
  } catch (error) {
    console.error("Unable to load the archive essay.", error);
    setArchiveError("লেখাগুলো লোড করা যাচ্ছে না। সংযোগ এলে আবার চেষ্টা করুন।");
  } finally {
    loadingArchive = false;
  }
}

loadArchiveEssay();

function setLetterStatus(message, retry = false) {
  const status = document.createElement("p");
  status.className = "letter-status";
  status.setAttribute("role", "status");
  status.textContent = message;
  reader.replaceChildren(status);
  if (retry) {
    const button = document.createElement("button");
    button.className = "letter-retry";
    button.type = "button";
    button.textContent = "আবার চেষ্টা করুন";
    button.addEventListener("click", loadLetter);
    reader.append(button);
  }
}

async function loadLetter() {
  if (letterLoaded || loadingLetter) return;
  loadingLetter = true;
  reader.setAttribute("aria-busy", "true");
  setLetterStatus("চিঠিটি খুলছে…");

  try {
    const response = await fetch(dialog.dataset.letterSource);
    if (!response.ok) throw new Error(`Letter request failed: ${response.status}`);
    const markdown = await response.text();
    const body = markdown.replace(/^---\s*\r?\n[\s\S]*?\r?\n---\s*(?:\r?\n|$)/, "").trim();
    const paragraphs = body.split(/\n[\t ]*\n/).filter((paragraph) => paragraph.trim());
    if (paragraphs.length === 0) throw new Error("Letter content is empty");

    const fragment = document.createDocumentFragment();
    paragraphs.forEach((text, index) => {
      const paragraph = document.createElement("p");
      paragraph.className = "letter-paragraph";
      paragraph.textContent = text.trim();
      paragraph.style.animationDelay = `${Math.min(index * 18, 360)}ms`;
      fragment.append(paragraph);
    });
    reader.replaceChildren(fragment);
    reader.classList.add("is-loaded");
    reader.setAttribute("aria-busy", "false");
    letterLoaded = true;
  } catch (error) {
    console.error("Unable to load the featured letter.", error);
    reader.setAttribute("aria-busy", "false");
    setLetterStatus("চিঠিটি লোড করা যাচ্ছে না। আবার চেষ্টা করুন।", true);
  } finally {
    loadingLetter = false;
  }
}

function openLetterDialog() {
  if (dialog.open) return;
  lastFocusedElement = document.activeElement;
  dialog.showModal();
  document.body.classList.add("letter-is-open");
  dialog.querySelector(".letter-close").focus({ preventScroll: true });
  if (!reduceMotion.matches && typeof dialog.animate === "function") {
    const animation = dialog.animate(
      [
        { opacity: 0, transform: "translateY(18px) scale(.99)" },
        { opacity: 1, transform: "translateY(0) scale(1)" },
      ],
      { duration: 320, easing: "cubic-bezier(.2,.75,.25,1)" },
    );
    openingAnimation = animation;
    animation.finished.then(
      () => { if (openingAnimation === animation) openingAnimation = null; },
      () => { if (openingAnimation === animation) openingAnimation = null; },
    );
  }
  track("letter_opened");
  loadLetter();
}

async function closeLetterDialog() {
  if (!dialog.open || closingLetter) return;
  closingLetter = true;
  openingAnimation?.cancel();
  openingAnimation = null;
  dialog.classList.add("is-closing");
  if (!reduceMotion.matches && typeof dialog.animate === "function") {
    const animation = dialog.animate(
      [
        { opacity: 1, transform: "translateY(0) scale(1)" },
        { opacity: 0, transform: "translateY(12px) scale(.99)" },
      ],
      { duration: 210, easing: "ease-in", fill: "forwards" },
    );
    await animation.finished.catch(() => {});
  }
  dialog.close();
  dialog.classList.remove("is-closing");
  document.body.classList.remove("letter-is-open");
  closingLetter = false;
  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus({ preventScroll: true });
  }
  track("letter_closed");
}

openLetter.addEventListener("click", openLetterDialog);
closeButtons.forEach((button) => button.addEventListener("click", closeLetterDialog));
dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeLetterDialog();
});
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeLetterDialog();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }, { once: true });
}
