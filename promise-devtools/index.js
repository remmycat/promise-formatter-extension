import createFormatters from "./create-formatters"

export default function install() {
  if (typeof window === "undefined") {
    throw new Error("Can only install promise-devtools in a browser environment.");
  }

  // Don't install more than once.
  if (window.__PromiseDevToolsFormattersInstalled === true) {
    return;
  }

  window.devtoolsFormatters = window.devtoolsFormatters || [];
  window.__PromiseDevToolsFormattersInstalled = true;

  const {
    BluebirdPromiseFormatter,
  } = createFormatters();

  window.devtoolsFormatters.push(
    BluebirdPromiseFormatter
  );
}
