const root = document.documentElement;
const toggle = document.querySelector("#theme-toggle");

function track(name) {
  window.dispatchEvent(new CustomEvent("echoes:analytics", {
    detail: { name, location: window.location.pathname }
  }));
}

function applyTheme(theme, persist = false) {
  root.dataset.theme = theme;
  const dark = theme === "dark";
  toggle.setAttribute("aria-pressed", String(dark));
  toggle.setAttribute("aria-label", dark ? "লাইট মোড চালু করুন" : "ডার্ক মোড চালু করুন");
  document.querySelector('meta[name="theme-color"]').content = dark ? "#1d2422" : "#f5f2eb";
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

const recentLetter = document.querySelector("#recent-letter");
const dialog = document.querySelector("#letter-dialog");
const reader = document.querySelector("#letter-reader");
const openLetter = document.querySelector("#open-letter");
const closeButtons = document.querySelectorAll("[data-close-letter]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let letterLoaded = false;
let loadingLetter = false;
let closingLetter = false;
let openingAnimation = null;
let lastFocusedElement = null;

if (recentLetter) {
  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    recentLetter.classList.add("is-visible");
  } else {
    recentLetter.classList.add("is-pending");
    const revealObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        recentLetter.classList.add("is-visible");
        revealObserver.disconnect();
      }
    }, { threshold: 0.16 });
    revealObserver.observe(recentLetter);
  }
}

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
