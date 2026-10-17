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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }, { once: true });
}
