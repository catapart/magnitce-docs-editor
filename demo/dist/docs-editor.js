// src/docs-editor.css?raw
var docs_editor_default = `:host\r
{\r
    /*** gray ***/\r
    --uchu-light-gray-raw: 95.57% 0.003 286.35;\r
    --uchu-light-gray: oklch(var(--uchu-light-gray-raw));\r
\r
    --uchu-gray-raw: 84.68% 0.002 197.12;\r
    --uchu-gray: oklch(var(--uchu-gray-raw));\r
\r
    --uchu-dark-gray-raw: 63.12% 0.004 219.55;\r
    --uchu-dark-gray: oklch(var(--uchu-dark-gray-raw));\r
\r
    /*** red ***/\r
    --uchu-light-red-raw: 88.98% 0.052 3.28;\r
    --uchu-light-red: oklch(var(--uchu-light-red-raw));\r
\r
    --uchu-dark-red-raw: 45.8% 0.177 17.7;\r
    --uchu-dark-red: oklch(var(--uchu-dark-red-raw));\r
\r
    /*** purple ***/\r
    --uchu-light-purple-raw: 89.1% 0.046 305.24;\r
    --uchu-light-purple: oklch(var(--uchu-light-purple-raw));\r
\r
    --uchu-dark-purple-raw: 39.46% 0.164 298.29;\r
    --uchu-dark-purple: oklch(var(--uchu-dark-purple-raw));\r
\r
    /*** blue ***/\r
    --uchu-light-blue-raw: 89.66% 0.046 260.67;\r
    --uchu-light-blue: oklch(var(--uchu-light-blue-raw));\r
\r
    --uchu-blue-raw: 62.39% 0.181 258.33;\r
    --uchu-blue: oklch(var(--uchu-blue-raw));\r
\r
    --uchu-dark-blue-raw: 43.48% 0.17 260.2;\r
    --uchu-dark-blue: oklch(var(--uchu-dark-blue-raw));\r
\r
    /*** green ***/\r
    --uchu-light-green-raw: 93.96% 0.05 148.74;\r
    --uchu-light-green: oklch(var(--uchu-light-green-raw));\r
\r
    --uchu-green-raw: 79.33% 0.179 145.62;\r
    --uchu-green: oklch(var(--uchu-green-raw));\r
\r
    --uchu-dark-green-raw: 58.83% 0.158 145.05;\r
    --uchu-dark-green: oklch(var(--uchu-dark-green-raw));\r
\r
    /*** general ***/\r
    --uchu-yang-raw: 99.4% 0 0;\r
    --uchu-yang: oklch(var(--uchu-yang-raw));\r
\r
    --uchu-yin-raw: 14.38% 0.007 256.88;\r
    --uchu-yin: oklch(var(--uchu-yin-raw));\r
\r
    /*** code-tests vars ***/\r
\r
    --spacer: calc(1em - 7px);\r
    --small-spacer: calc(var(--spacer) / 2);\r
\r
    --color-success: var(--uchu-green);\r
    --color-fail: var(--uchu-red);\r
    --color-process: var(--uchu-blue);\r
\r
    --text-surface: var(--uchu-yin);\r
    --text-result: var(--uchu-yang); /* --uchu-yang: #fdfdfd; */\r
    --text-collapse-icon: var(--uchu-dark-gray);  /* --uchu-dark-gray: #878a8b; */\r
    --text-hook-summary: var(--uchu-dark-purple);\r
    --text-success: var(--uchu-dark-green); /* --uchu-dark-green: #2e943a; */\r
    --text-fail: var(--uchu-dark-red); /* --uchu-dark-red: #a30d30; */\r
    --text-process: var(--uchu-dark-blue); /* --uchu-dark-blue: #0949ac; */\r
    --text-button: var(--uchu-yang); /* --uchu-dark-blue: #0949ac; */\r
    --text-placeholder: var(--uchu-dark-gray);\r
\r
    --surface-0: var(--uchu-light-gray);\r
    --surface-test: var(--uchu-yang);\r
    --surface-test-summary: var(--uchu-gray);\r
    --surface-hook-summary: var(--uchu-light-purple);\r
    --surface-success: var(--uchu-light-green);\r
    --surface-fail: var(--uchu-light-red);\r
    --surface-process: var(--uchu-light-blue);\r
    --surface-button: var(--uchu-blue); /* --uchu-blue: #3984f2 */\r
    --surface-button-hover: var(--uchu-light-blue);\r
    --surface-button-active: var(--uchu-dark-blue);\r
\r
    --border-test: solid 1px var(--uchu-dark-gray);\r
    --border-hook: solid 1px var(--uchu-dark-purple);\r
    --border-success: solid 1px var(--uchu-dark-green);\r
    --border-fail: solid 1px var(--uchu-dark-red);\r
    --border-process: solid 1px var(--uchu-dark-blue);\r
    --border-button: solid 1px var(--uchu-blue);\r
\r
    --info-icon: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2022.812714%2022.814663%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20style%3D%22fill%3Atransparent%3Bstroke%3Atransparent%3Bstroke-width%3A0.999999%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A6.3%3Bstroke-dasharray%3Anone%3Bstroke-dashoffset%3A29.2913%3Bstroke-opacity%3A1%22%20d%3D%22M%2022.295505%2C11.407332%20A%2010.889144%2C10.889144%200%200%201%2011.406424%2C22.296479%2010.889144%2C10.889144%200%200%201%200.51720881%2C11.407332%2010.889144%2C10.889144%200%200%201%2011.406424%2C0.51818382%2010.889144%2C10.889144%200%200%201%2022.295505%2C11.407332%20Z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22m%2013.945668%2C4.3053761%20c%200.150778%2C-0.96462%20-0.30687%2C-1.43709%20-1.36997%2C-1.43709%20-1.063%2C0%20-1.668452%2C0.47247%20-1.81923%2C1.43709%20-0.150779%2C0.96462%200.306971%2C1.43708%201.369971%2C1.43708%201.004%2C0%201.66845%2C-0.47246%201.819229%2C-1.43708%20z%20M%2011.693889%2C17.829726%2013.373994%2C7.0811161%20h%20-2.9333%20L%208.7605887%2C17.829726%20Z%22%20style%3D%22font-size%3A19.6861px%3Bfont-family%3APassageway%3B-inkscape-font-specification%3APassageway%3Bfill%3A%23a30d30%3Bstroke-width%3A2.5%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A6.3%3Bstroke-dashoffset%3A29.2913%22%20aria-label%3D%22i%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');\r
\r
    --font-text: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\r
\r
    /*** styles ***/\r
\r
    color-scheme: light dark;\r
    display: grid;\r
    gap: var(--spacer);\r
\r
\r
    background-color: var(--surface-0);\r
    color: var(--text-surface); \r
    padding: var(--small-spacer);\r
    font-family: var(--font-text);\r
}\r
@media (prefers-color-scheme: dark) \r
{\r
    :host\r
    {\r
        --text-surface: var(--uchu-yang);\r
        --text-result: var(--uchu-yang);\r
\r
        --surface-0: var(--uchu-yin);\r
        --surface-test: oklch(25.11% 0.006 258.36);\r
        --surface-test-summary: oklch(35.02% 0.005 236.66);\r
\r
        /* user-agent input defaults */\r
        --input-border-color: rgb(133, 133, 133);\r
    }\r
}\r
\r
.field\r
{\r
    display: grid;\r
    grid-template-rows: auto 1fr;\r
    gap: var(--small-spacer);\r
    overflow: hidden;\r
}\r
\r
path-router\r
{\r
    overflow: hidden;\r
}\r
\r
route-page\r
{\r
    overflow: auto;\r
}\r
\r
#viewer\r
{\r
    overflow: hidden;\r
    display: grid;\r
    gap: var(--spacer);\r
    grid-template-columns: 250px 1fr;\r
    grid-template-rows: 1fr 0px;\r
    transition: grid-template-columns 200ms ease-out, grid-template-rows 200ms ease-out;\r
}\r
:host([target]) #viewer\r
{\r
    height: auto;\r
    grid-template-rows: 1fr 300px;\r
}\r
\r
#menu\r
{\r
    grid-row: span 2;\r
\r
    display: flex;\r
    flex-direction: column;\r
    gap: var(--spacer);\r
\r
    padding: 0;\r
    margin: 0;\r
}\r
\r
#menu-header\r
{\r
    display: grid;\r
    align-items: center;\r
    justify-content: center;\r
    text-align: center;\r
}\r
#header-links\r
{\r
    display: grid;\r
    grid-template-columns: 1fr 1fr;\r
    gap: var(--spacer);\r
}\r
.header-link\r
{\r
    text-align: center;\r
    padding: 5px 14px;\r
    background-color: var(--surface-test);\r
    border-radius: 30px;\r
    font-size: 12px;\r
    font-weight: bold;\r
}\r
\r
#nav\r
{\r
    display: flex;\r
    flex-direction: column;\r
    gap: var(--spacer);\r
    overflow: auto;\r
}\r
\r
#nav:empty::before\r
{\r
    content: '[No Documents Available]';\r
    color: var(--text-placeholder);\r
}\r
\r
#menu-footer\r
{\r
    font-size: 12px;\r
    display: flex;\r
    gap: var(--spacer);\r
}\r
\r
#composer\r
{\r
    overflow: hidden;\r
    height: 0;\r
    padding: 0;\r
    \r
    display: grid;\r
    column-gap: 0;\r
    row-gap: var(--spacer);\r
    grid-template-columns: 1fr 0px;\r
    grid-template-rows: auto 1fr;\r
    transition: grid-template-columns 200ms ease-out, grid-template-rows 200ms ease-out;\r
}\r
:host([target]) #composer\r
{\r
    height: auto;\r
    padding: var(--small-spacer);\r
}\r
:host([markdown-guide]) #composer\r
{\r
    height: auto;\r
    grid-template-columns: 1fr 300px;\r
    column-gap: var(--spacer);\r
}\r
\r
#composer-menu\r
{\r
    grid-column: span 2;\r
    display: grid;\r
    grid-template-columns: auto 1fr auto;\r
    gap: var(--small-spacer);\r
}\r
\r
#features\r
{\r
    display: flex;\r
    align-items: flex-end;\r
}\r
\r
#document-title-field\r
{\r
    display: grid;\r
    align-items: flex-end;\r
    justify-content: center;\r
}\r
\r
#data\r
{\r
    display: flex;\r
    align-items: flex-end;\r
    gap: var(--small-spacer);\r
}\r
\r
/* #editable-wrapper\r
{\r
    display: inline-block;\r
} */\r
\r
#document-content\r
{\r
    /* user-agent input defaults */\r
    --input-border-color: rgb(118, 118, 118);\r
\r
    border-radius: 2px;\r
    min-height: 1.2em;\r
    min-width: 24px;\r
    font-size: 12px;\r
    font-family: inherit;\r
\r
    /* background-color: field;\r
    color: fieldtext;\r
    border: solid 1px var(--input-border-color, fieldtext);\r
    padding: 3px 15px 3px 5px;\r
    font-size: 12px;\r
    font-family: sans-serif;\r
    display: inline-block;\r
    overflow: auto;\r
    overflow-wrap: normal;\r
    margin: 0; */\r
}\r
\r
#markdown-guide\r
{\r
    padding: 0;\r
    width: 0;\r
\r
    grid-row: span 2;\r
    overflow: hidden;\r
}\r
\r
:host([markdown-guide]) #markdown-guide\r
{\r
    padding: var(--small-spacer);\r
    width: auto;\r
}\r
\r
/* only mobile */\r
@media (max-width: 665px) \r
{\r
    :host\r
    {\r
    }\r
}\r
/* only desktop */\r
@media (min-width: 665px) \r
{\r
\r
}\r
\r
\r
\r
@keyframes spin\r
{\r
    from { transform: rotate(0deg); }\r
    to { transform: rotate(360deg); }\r
}`;

// src/docs-editor.html?raw
var docs_editor_default2 = `<div id="viewer">\r
    <menu id="menu">\r
        <header id="menu-header" class="header">\r
            <h4>Documentation</h4>\r
            <div id="header-links">\r
                <a class="header-link" part="header-link" data-route="">\r
                    <span class="icon"></span>\r
                    <span class="label">Welcome</span>\r
                </a>\r
                <a class="header-link" part="header-link" data-route="help">\r
                    <span class="icon"></span>\r
                    <span class="label">Help</span>\r
                </a>\r
            </div>\r
        </header>\r
        <nav id="nav"></nav>\r
        <button class="button" id="new-document-menu" type="button">New Document</button>\r
    </menu>\r
    <path-router id="router" path="">\r
        <route-page id="welcome" path="">\r
            <div class="container">\r
                <h2 class="header">Docs Editor</h2>\r
                <div class="panel">\r
                    <div class="description">\r
                        <p>Welcome to the Docs Editor!</p>\r
                        <p>This web app manages markdown files in a collection that can be exported as application documentation for the web.</p>\r
                        <p>To get started, create a new doc using the button below, or in the doc navigation menu.</p>\r
                    </div>\r
                    <button class="button" id="new-document-welcome" type="button">New Document</button>\r
                </div>\r
            </div>\r
        </route-page>\r
        <route-page id="help" path="help">\r
            <div class="container">\r
                <h2 class="header">Help</h2>\r
                <div class="panel documents-panel">\r
                    <h3 class="header panel-header">Documents</h3>\r
                    <div class="description">\r
                        <p>Documents are written in <a href="" target="_blank">Markdown</a>.</p>\r
                    </div>\r
                </div>\r
                <div class="panel exporting-panel">\r
                    <h3 class="header panel-header">Exporting</h3>\r
                    <div class="description">\r
                        <p>Documents can be exported as either a single .json file, to be used by the doc-viewer element, or as a .</p>\r
                        <ul class="description-list">\r
                            <li class="description-item">Single <code>.json</code> file.</li>\r
                            <li class="description-item">A package (<code>.zip</code>) of <code>.html</code> and <code>.css</code> files with no javascript.</li>\r
                        </ul>\r
                    </div>\r
                </div>\r
            </div>\r
        </route-page>\r
        <route-page id="document" path="doc/:id">\r
        </route-page>\r
    </path-router>\r
    <div id="composer">\r
        <div id="composer-menu">\r
            <div id="features">\r
                <button id="markdown-guide-button" class="button" type="button">Markdown Guide</button>\r
            </div>\r
            <label id="document-title-field" class="label field">\r
                <span id="document-title-label" class="label field-label">Document Title</span>\r
                <input id="document-title" class="input text" type="text" />\r
            </label>\r
            <div id="data">\r
                <div id="export-type-description"></div>\r
                <label id="export-toggle-field"\r
                class="label field"\r
                data-true="Export using the Save-As feature to select where, on your device, you would like to export the docs to. (if available)"\r
                data-false="Use the browser's default download feature to export the docs.">\r
                    <span id="export-toggle-label" class="label field-label">Save As?</span>\r
                    <input id="export-toggle" class="input checkbox toggle" type="checkbox" />\r
                </label>\r
                <label id="export-type-field" class="label field">\r
                    <span id="export-type-label" class="label field-label">Export Type</span>\r
                    <select id="export-type" class="input select">\r
                    </select>\r
                </label>\r
                <button id="export-button" class="button" type="button">Export</button>\r
            </div>\r
        </div>\r
        <label id="document-content-field" class="label field">\r
            <span id="document-content-label" class="label field-label">Document Content</span>\r
            <textarea id="document-content" class="input text"></textarea>\r
        </label>\r
        <div id="markdown-guide">\r
            <h1 class="header">Markdown Guide</h1>\r
\r
        </div>\r
    </div>\r
    <template id="nav-item-template">\r
        <a class="nav-item" part="nav-item">\r
            <span class="positioners"></span>\r
            <span class="icon"></span>\r
            <span class="label"></span>\r
        </a>\r
    </template>\r
</div>`;

// node_modules/.pnpm/ce-part-utils@0.0.0/node_modules/ce-part-utils/dist/ce-part-utils.js
var DEFAULT_ELEMENT_SELECTOR = ":not(slot,defs,g,rect,path,circle,ellipse,line,polygon,text,tspan,use,svg image,svg title,desc,template,template *)";
function assignClassAndIdToPart(shadowRoot) {
  const identifiedElements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR}[id]`)];
  for (let i = 0; i < identifiedElements.length; i++) {
    identifiedElements[i].part.add(identifiedElements[i].id);
  }
  const classedElements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR}[class]`)];
  for (let i = 0; i < classedElements.length; i++) {
    classedElements[i].part.add(...classedElements[i].classList);
  }
}

// node_modules/.pnpm/@magnit-ce+path-router@0.2.8/node_modules/@magnit-ce/path-router/dist/path-router.js
var path_router_default = "/* \n   Animations will not be awaitable in code if they have a display of none.\n   Instead, the routes are stacked in a grid.\n */\npath-router\n,.route-view\n{ \n    display: var(--router-display, grid);\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n}\n\nroute-page\n{\n    display: var(--route-display, block);\n    visibility: hidden;\n    grid-row: 1;\n    grid-column: 1;\n}\n/* \n   Visibility is visible during the entering and exiting phases\n   to allow for animations to be awaited.\n */\nroute-page[open]\n,route-page[data-entering]\n,route-page[data-exiting]\n{\n    visibility: visible;\n}\n\n/* sub routes should respect the visibility of the parent routes */\nroute-page:not([open],[data-entering],[data-exiting]) route-page[open]\n{\n    visibility: inherit;\n}";
var RouteType = (elementType = HTMLElement) => {
  return class extends elementType {
    currentProcess = Promise.resolve();
    canBeOpened = async () => true;
    canBeClosed = async () => true;
    getProperties() {
      const dataValues = Object.entries(this.dataset);
      const properties = dataValues.reduce((result, item) => {
        const dataItemName = item[0];
        if (!dataItemName.startsWith(ROUTEPROPERTY_DATA_ATTRIBUTE_KEYWORD)) {
          return result;
        }
        const key = dataItemName[ROUTEPROPERTY_DATA_ATTRIBUTE_KEYWORD.length].toLowerCase() + dataItemName.substring(ROUTEPROPERTY_DATA_ATTRIBUTE_KEYWORD.length + 1);
        const value = item[1];
        result[key] = value;
        return result;
      }, {});
      return properties;
    }
    async enter(path) {
      const canNavigate = await this.canBeOpened();
      if (!canNavigate) {
        console.info("Navigation blocked by validity check.");
        return false;
      }
      this.currentProcess = this.#enter(path);
      await this.currentProcess;
      this.currentProcess = Promise.resolve();
      return true;
    }
    async #enter(path) {
      this.dispatchEvent(new CustomEvent("beforeopen", { detail: { path, properties: this.getProperties() } }));
      await Promise.allSettled(this.#blockingBeforeOpen.map((value) => value()));
      this.dataset.entering = "";
      await Promise.allSettled(this.getAnimations({ subtree: true }).map((animation) => animation.finished));
      delete this.dataset.entering;
      this.#open();
      this.dispatchEvent(new Event(
        "afteropen"
        /* AfterOpen */
      ));
      await Promise.allSettled(this.#blockingAfterOpen.map((value) => value()));
    }
    async #open() {
      this.toggleAttribute("open", true);
      this.setAttribute("aria-current", "page");
    }
    async exit() {
      const canNavigate = await this.canBeClosed();
      if (canNavigate == false) {
        console.info("Navigation blocked by validity check.");
        return false;
      }
      this.currentProcess = this.#exit();
      await this.currentProcess;
      this.currentProcess = Promise.resolve();
      return true;
    }
    async #exit() {
      this.dispatchEvent(new Event(
        "beforeclose"
        /* BeforeClose */
      ));
      await Promise.allSettled(this.#blockingBeforeClose.map((value) => value()));
      this.dataset.exiting = "";
      this.removeAttribute("open");
      await Promise.all(this.getAnimations({ subtree: true }).map((animation) => animation.finished));
      this.#close();
      delete this.dataset.exiting;
      this.dispatchEvent(new Event(
        "afterclose"
        /* AfterClose */
      ));
      await Promise.allSettled(this.#blockingAfterClose.map((value) => value()));
    }
    #close() {
      this.toggleAttribute("open", false);
      this.removeAttribute("aria-current");
    }
    #blockingBeforeOpen = [];
    #blockingAfterOpen = [];
    #blockingBeforeClose = [];
    #blockingAfterClose = [];
    applyEventListener(type, listener, options) {
      const isOpen = this.getAttribute("open") != null;
      this.addEventListener(type, listener, options);
      if ((type == "beforeopen".toString() || type == "afteropen".toString()) && isOpen == true) {
        this.dispatchEvent(new Event(type));
      } else if (type == "beforeclose".toString() || type == "afterclose".toString() && isOpen == false) {
        this.dispatchEvent(new Event(type));
      }
    }
    addBlockingEventListener(eventName, handler) {
      switch (eventName) {
        case "beforeopen":
          this.#blockingBeforeOpen.push(handler);
          break;
        case "afteropen":
          this.#blockingAfterOpen.push(handler);
          break;
        case "beforeclose":
          this.#blockingBeforeClose.push(handler);
          break;
        case "afterclose":
          this.#blockingAfterClose.push(handler);
          break;
      }
    }
    applyBlockingEventListener(eventName, handler) {
      const isOpen = this.getAttribute("open") != null;
      this.addBlockingEventListener(eventName, handler);
      if ((eventName == "beforeopen".toString() || eventName == "afteropen".toString()) && isOpen == true) {
        this.dispatchEvent(new Event(eventName));
      } else if (eventName == "beforeclose".toString() || eventName == "afterclose".toString() && isOpen == false) {
        this.dispatchEvent(new Event(eventName));
      }
    }
  };
};
var COMPONENT_TAG_NAME = "route-dialog";
var RouteDialogElement = class extends RouteType(HTMLDialogElement) {
};
if (customElements.get(COMPONENT_TAG_NAME) == null) {
  customElements.define(COMPONENT_TAG_NAME, RouteDialogElement, { extends: "dialog" });
}
var COMPONENT_TAG_NAME2 = "route-page";
var RoutePageElement = class extends RouteType() {
};
if (customElements.get(COMPONENT_TAG_NAME2) == null) {
  customElements.define(COMPONENT_TAG_NAME2, RoutePageElement);
}
var COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(path_router_default);
var DOMCONTENTLOADED_PROMISE = new Promise((resolve) => document.addEventListener("DOMContentLoaded", resolve));
var ROUTEPROPERTY_DATA_ATTRIBUTE_KEYWORD = "property";
var COMPONENT_TAG_NAME3 = "path-router";
var PathRouterElement = class extends HTMLElement {
  get routePages() {
    return Array.from(this.querySelectorAll(`:scope > ${COMPONENT_TAG_NAME2}, ${COMPONENT_TAG_NAME3} :not(${COMPONENT_TAG_NAME3}) ${COMPONENT_TAG_NAME2}`), (route) => route);
  }
  get routeDialogs() {
    return Array.from(this.querySelectorAll(`:scope > [is="${COMPONENT_TAG_NAME}"]`), (routeDialog) => routeDialog);
  }
  get routes() {
    return Array.from(this.querySelectorAll(`:scope > ${COMPONENT_TAG_NAME2},${COMPONENT_TAG_NAME3} :not(${COMPONENT_TAG_NAME3}) ${COMPONENT_TAG_NAME2},:scope > [is="${COMPONENT_TAG_NAME}"]`), (route) => route);
  }
  /** The `<page-route>` element currently being navigated to. */
  targetPageRoute;
  /** The `<page-route>` element that the router currently has open. */
  currentPageRoute;
  /** The `route-dialog` element currently being navigated to. */
  targetDialogRoute;
  /** The `route-dialog` element that the router currently has open. */
  currentDialogRoute;
  /** The route that will be selected if no other routes match the current path. */
  defaultRoute;
  /** The path which controls the router's navigation. */
  get path() {
    return this.getAttribute("path");
  }
  set path(value) {
    this.setAttribute("path", value);
  }
  #activationPromise;
  #toUpdate = [];
  #resolveNavigation;
  /**
   * Navigate to a route path.
   * @param path route path
   */
  async navigate(path) {
    return new Promise((resolve) => {
      this.#resolveNavigation = resolve;
      this.setAttribute("path", path);
    });
  }
  /**
   * Adds simple click handling to a parent element that contains all of the 
   * route links that you want to use for the target `<path-router>` element.
   * @param parent An element that will contain every link that should be listened for. If no parent is provided, the document `<body>` will be used.
   * @param linkQuery A query that will be used to de-select all route links. This can be customized for use-cases like nested path routers which may benefit from scoped selectors. By default, the query is `a[data-route],button[data-route]`.
   */
  addRouteLinkClickHandlers(parent, linkQuery = "a[data-route],button[data-route]") {
    parent = parent ?? document.body;
    parent.addEventListener("click", (event) => this.routeLink_onClick(parent, event, linkQuery));
  }
  routeLink_onClick(parent, event, linkQuery = "a[data-route],button[data-route]") {
    let targetLink = event.composedPath().find((item) => item.dataset?.route != null);
    if (targetLink != null) {
      const links = [...parent.querySelectorAll(linkQuery)];
      for (let i = 0; i < links.length; i++) {
        links[i].removeAttribute("aria-current");
      }
      let path = targetLink.dataset.route;
      if (path.indexOf(":") != -1) {
        let parentRoute = targetLink.closest('route-page,[is="route-dialog"]');
        while (parentRoute != null) {
          const parentProperties = parentRoute.getProperties();
          const linkProperties = path.split("/").filter((item) => item.startsWith(":"));
          for (let i = 0; i < linkProperties.length; i++) {
            const linkPropertyName = linkProperties[i].substring(1);
            if (parentProperties[linkPropertyName] != null) {
              path = path.replace(`:${linkPropertyName}`, parentProperties[linkPropertyName]);
            }
          }
          parentRoute = parentRoute.parentElement?.closest('route-page,[is="route-dialog"]');
        }
      }
      if (path.startsWith("#")) {
        const currentPath = this.path ?? "";
        const currentPathArray = currentPath.split("#");
        currentPathArray[1] = path.substring(1);
        path = currentPathArray.join("#");
      }
      this.setAttribute("path", path);
      targetLink.setAttribute("aria-current", "page");
    }
  }
  getRouteProperties(route) {
    if (route != null) {
      return route.getProperties();
    }
    const properties = {};
    for (let i = 0; i < this.routes.length; i++) {
      const route2 = this.routes[i];
      Object.assign(properties, route2.getProperties());
    }
    return properties;
  }
  /**
   * Compare two `URL` objects to determine whether they represet different locations and, if so, whether or not the new location is marked as a replacement change.
   * @param currentLocation a url object representing the current location
   * @param updatedLocation a url object representing the location to compare against
   * @returns `{ hasChanged, isReplacementChange }`: Whether there was a change, and whether history management should add an entry, or replace the last entry.
   */
  compareLocations(currentLocation, updatedLocation) {
    let hasChanged = false;
    let isReplacementChange = false;
    if (updatedLocation.pathname != currentLocation.pathname) {
      hasChanged = true;
    } else if (updatedLocation.pathname == currentLocation.pathname && updatedLocation.hash != currentLocation.hash) {
      hasChanged = true;
      if (currentLocation.hash != "" && updatedLocation.hash != "") {
        isReplacementChange = true;
      }
    }
    return { hasChanged, isReplacementChange };
  }
  async #update(path, previousPath) {
    if (this.#isActivated == false) {
      throw new Error("Unable to update path-router before activation.");
    }
    const sanitizedPath = path.startsWith("/") ? path.substring(1) : path;
    const [pagePath, dialogPath] = this.#getTypedPaths(sanitizedPath);
    const [currentPagePath, currentDialogPath] = this.#getTypedPaths(previousPath);
    let openedPage = false;
    let openedDialog = false;
    const pageHasChanged = dialogPath != "" && pagePath == "" ? false : currentPagePath != pagePath;
    const hashHasChanged = dialogPath != currentDialogPath;
    const currentlyOpen = this.querySelector("[open]");
    if (pageHasChanged == false && hashHasChanged == false && currentlyOpen != null) {
      if (this.#resolveNavigation != null) {
        this.#resolveNavigation();
        this.#resolveNavigation = void 0;
      }
      currentlyOpen.dispatchEvent(new CustomEvent("refresh", { detail: { path }, bubbles: true, cancelable: true }));
      return [openedPage, openedDialog];
    }
    await this.#awaitAllRouteProcesses();
    const matchingRoutes = this.#findMatchingRoutes(sanitizedPath);
    let matchingPageRoutes = matchingRoutes.filter((item) => item.route instanceof RoutePageElement);
    const matchingDialogRoutes = matchingRoutes.filter((item) => item.route instanceof RouteDialogElement);
    let openPagePromise = new Promise((resolve) => resolve(false));
    matchingPageRoutes = this.#filterPropertyRoutes(matchingPageRoutes);
    let hasClosedPages = false;
    const pagesToRemainOpen = matchingPageRoutes.map((item) => item.route);
    if (pageHasChanged == true || currentlyOpen == null) {
      const closed = await this.#closeCurrentRoutePages(pagesToRemainOpen);
      if (closed == false) {
        console.warn("Navigation was prevented.");
        console.info(`Requested path: ${path}`);
        if (this.#resolveNavigation != null) {
          this.#resolveNavigation();
          this.#resolveNavigation = void 0;
        }
        return false;
      }
      hasClosedPages = true;
      for (let i = 0; i < matchingPageRoutes.length; i++) {
        const routeData = matchingPageRoutes[i];
        openPagePromise = this.#openRoutePage(routeData.route, dialogPath);
        this.#assignRouteProperties(routeData.route, routeData.properties);
      }
    }
    if (pageHasChanged || currentDialogPath != dialogPath) {
      const closed = await this.#closeCurrentRouteDialogs(matchingDialogRoutes.map((item) => item.route));
      if (closed != false) {
        for (let i = 0; i < matchingDialogRoutes.length; i++) {
          const routeData = matchingDialogRoutes[i];
          openedDialog = await this.#openRouteDialog(routeData.route, dialogPath);
          this.#assignRouteProperties(routeData.route, routeData.properties);
          if (hasClosedPages == false) {
            const subroutes = [...routeData.route.querySelectorAll("route-page")];
            for (let i2 = 0; i2 < subroutes.length; i2++) {
              if (pagesToRemainOpen.indexOf(subroutes[i2]) > -1) {
                continue;
              }
              await subroutes[i2].exit();
            }
          }
        }
        for (let i = 0; i < matchingPageRoutes.length; i++) {
          const routeData = matchingPageRoutes[i];
          if (routeData.route.closest(`[is="${COMPONENT_TAG_NAME}"][open]`) != null) {
            openPagePromise = this.#openRoutePage(routeData.route, dialogPath);
            this.#assignRouteProperties(routeData.route, routeData.properties);
          }
        }
      }
    }
    openedPage = await openPagePromise;
    this.targetPageRoute = void 0;
    this.targetDialogRoute = void 0;
    if (this.#resolveNavigation != null) {
      this.#resolveNavigation();
      this.#resolveNavigation = void 0;
    }
    this.dispatchEvent(new CustomEvent("pathchange", { detail: { sanitizedPath }, bubbles: true, cancelable: true }));
    return [openedPage, openedDialog];
  }
  #getTypedPaths(path) {
    const pathArray = path.split("#");
    const pagePath = pathArray[0];
    const remainingPath = path.length > 1 ? pathArray[1] : null;
    const remainingPathArray = remainingPath == null ? [""] : remainingPath.split("?");
    const dialogPath = remainingPathArray == null ? "" : remainingPathArray[0];
    return [pagePath, dialogPath];
  }
  #findMatchingRoutes(path) {
    const routes = [];
    const previousMatches = [];
    for (let i = 0; i < this.routes.length; i++) {
      const route = this.routes[i];
      const [routeMatches, properties] = this.routeMatchesPath(route, path, previousMatches, route instanceof RouteDialogElement);
      if (routeMatches == true) {
        routes.push({ route, properties });
        previousMatches.push(route);
      }
    }
    return routes;
  }
  #filterPropertyRoutes(matchingPageRoutes) {
    const toRemove = [];
    for (let i = 0; i < matchingPageRoutes.length; i++) {
      const currentMatch = matchingPageRoutes[i];
      const currentMatchPath = currentMatch.route.getAttribute("path");
      const closestCurrentMatchRouteParent = currentMatch.route.parentElement?.closest('route-page,[is="route-dialog"],path-router');
      const comparisonMatch = matchingPageRoutes.find((item) => {
        return toRemove.indexOf(item) == -1 && item != currentMatch && item.route.parentElement?.closest('route-page,[is="route-dialog"],path-router') == closestCurrentMatchRouteParent;
      });
      if (comparisonMatch == null) {
        continue;
      }
      if (currentMatchPath?.startsWith(":")) {
        toRemove.push(currentMatch);
        continue;
      }
      const comparisonMatchPath = comparisonMatch.route.getAttribute("path");
      if (comparisonMatchPath?.startsWith(":")) {
        toRemove.push(comparisonMatch);
      }
    }
    const result = matchingPageRoutes.filter((item) => toRemove.indexOf(item) == -1);
    return result;
  }
  async #awaitAllRouteProcesses() {
    return Promise.allSettled(this.routes.map((route) => {
      return route.currentProcess;
    }));
  }
  async #openRoutePage(route, path) {
    this.targetPageRoute = route;
    this.targetPageRoute = this.targetPageRoute || this.defaultRoute;
    if (this.targetPageRoute == null) {
      return false;
    }
    const opened = await this.targetPageRoute.enter(path);
    if (opened) {
      this.currentPageRoute = this.targetPageRoute;
      this.dispatchEvent(new CustomEvent("change", { detail: { route: this.targetPageRoute, path } }));
    }
    return opened;
  }
  async #openRouteDialog(route, path) {
    this.targetDialogRoute = route;
    if (this.targetDialogRoute == null) {
      return false;
    }
    const opened = await this.targetDialogRoute.enter(path);
    if (opened) {
      this.currentDialogRoute = this.targetDialogRoute;
      this.dispatchEvent(new CustomEvent("change", { detail: { route: this.targetDialogRoute, path } }));
    }
    return opened;
  }
  async #closeCurrentRoutePages(toRemainOpen) {
    const openPages = this.routePages.filter((item) => item.getAttribute("aria-current") == "page");
    let closed = true;
    for (let i = 0; i < openPages.length; i++) {
      if (toRemainOpen.indexOf(openPages[i]) > -1) {
        continue;
      }
      closed = closed == false ? closed : await openPages[i].exit();
    }
    return closed;
  }
  async #closeCurrentRouteDialogs(toRemainOpen) {
    const openDialogs = this.routeDialogs.filter((item) => item.getAttribute("aria-current") == "page");
    let closed = true;
    for (let i = 0; i < openDialogs.length; i++) {
      if (toRemainOpen.indexOf(openDialogs[i]) > -1) {
        continue;
      }
      closed = closed == false ? closed : await openDialogs[i].exit();
    }
    return closed;
  }
  #assignRouteProperties(route, properties) {
    for (const [key, value] of Object.entries(properties)) {
      const dataKey = ROUTEPROPERTY_DATA_ATTRIBUTE_KEYWORD + key.substring(0, 1).toUpperCase() + key.substring(1);
      route.dataset[dataKey] = value;
    }
  }
  routeMatchesPath(route, queryPath, previousMatches, isDialog = false) {
    const queryPathArray = queryPath.split("#");
    const pagePath = queryPathArray[0];
    const dialogPath = queryPathArray.length > 1 ? queryPathArray[1] : null;
    const routePath = route.getAttribute("path") ?? "";
    const routePathArray = routePath.split("/");
    const pagePathArray = pagePath.split("/");
    const pathType = route.closest(`[is="${COMPONENT_TAG_NAME}"]`) == null ? "Page" : "Dialog";
    if (pathType == "Page") {
      return this.routeTypeMatches(route, pagePathArray, routePathArray, `${COMPONENT_TAG_NAME2}`, previousMatches);
    } else if (dialogPath == null) {
      return [false, {}];
    }
    const dialogPathArray = dialogPath.split("/");
    return this.routeTypeMatches(route, dialogPathArray, routePathArray, `${COMPONENT_TAG_NAME2},[is="${COMPONENT_TAG_NAME}"]`, previousMatches);
  }
  routeTypeMatches(route, queryPathArray, routePathArray, parentRouteSelector, previousMatches) {
    if (queryPathArray.length == 1 && queryPathArray[0].trim() == "") {
      return [routePathArray.length == 1 && routePathArray[0].trim() == "", {}];
    }
    const parentRoutes = [];
    let parentRoute = route.parentElement?.closest(parentRouteSelector);
    while (parentRoute != null) {
      if (previousMatches.indexOf(parentRoute) == -1) {
        return [false, {}];
      }
      parentRoutes.push(parentRoute);
      parentRoute = parentRoute.parentElement?.closest(parentRouteSelector);
    }
    let composedParentPath = parentRoutes.reverse().reduce((accumulation, item, index) => {
      return `${accumulation == "" ? "" : accumulation + "/"}${item.getAttribute("path") ?? ""}`;
    }, "");
    const parentRouteArray = composedParentPath.split("/");
    let subrouteArray = [...queryPathArray].filter((item, index) => {
      const parentRouteElement = parentRouteArray[index];
      const parentRouteElementIsProperty = parentRouteElement?.startsWith(":");
      return !(parentRouteElementIsProperty == true || parentRouteElement == item);
    });
    let { match, properties } = this.pathArraySelectsRouteArray(subrouteArray, routePathArray);
    return [match, properties];
  }
  pathArraySelectsRouteArray(pathArray, routeArray) {
    let properties = {};
    if (routeArray.length > pathArray.length) {
      return { match: false, properties };
    }
    let routeMatchesPath = false;
    for (let i = 0; i < pathArray.length; i++) {
      const routeSlug = routeArray[i];
      const pathSlug = pathArray[i];
      if (routeSlug == null) {
        return { match: routeMatchesPath, properties };
      }
      const isParameter = routeSlug.startsWith(":");
      if (isParameter == false) {
        if (routeSlug != pathSlug) {
          return { match: false, properties };
        }
      } else {
        properties[routeSlug.substring(1)] = pathSlug;
      }
      routeMatchesPath = true;
    }
    return { match: routeMatchesPath, properties };
  }
  async connectedCallback() {
    this.#activationPromise = this.#activateRouteManagement();
    this.#injectStyles();
    await this.#activationPromise;
    await this.#openPreActivationRoutes();
    if (this.getAttribute("path") != null && this.currentPageRoute == null && this.defaultRoute != null) {
      this.#openRoutePage(this.defaultRoute, "");
    }
  }
  disconnectedCallback() {
    this.#deactivateRouteManagement();
  }
  #isActivated = false;
  async #activateRouteManagement() {
    await DOMCONTENTLOADED_PROMISE;
    this.#assignDefaultRoute();
    this.#addDialogCloseHandlers();
    this.#isActivated = true;
  }
  #assignDefaultRoute() {
    this.defaultRoute = this.querySelector("route-page[default]");
    if (this.defaultRoute == null) {
      this.defaultRoute = this.querySelector("route-page");
    }
  }
  async #openPreActivationRoutes() {
    for (let i = 0; i < this.#toUpdate.length; i++) {
      await this.#update(this.#toUpdate[i].newValue, this.#toUpdate[i].oldValue);
    }
  }
  #boundDialogOnCloseHandler = this.#dialog_onClose.bind(this);
  #addDialogCloseHandlers() {
    for (let i = 0; i < this.routeDialogs.length; i++) {
      this.routeDialogs[i].addEventListener("close", this.#boundDialogOnCloseHandler);
    }
  }
  async #dialog_onClose(event) {
    const dialog = event.target;
    const isExiting = dialog.getAttribute("data-exiting") != null;
    if (!isExiting) {
      const pathAttribute = this.getAttribute("path") ?? "/";
      const path = pathAttribute.split("#")[0];
      await this.navigate(path);
    }
    dialog.removeAttribute("data-exiting");
  }
  #deactivateRouteManagement() {
    this.#unassignDefaultRoute();
    this.#removeDialogCloseHandler();
    this.#activationPromise = void 0;
    this.#isActivated = false;
  }
  #unassignDefaultRoute() {
    if (this.defaultRoute != null) {
      this.defaultRoute = void 0;
    }
  }
  #removeDialogCloseHandler() {
    this.removeEventListener("close", this.#boundDialogOnCloseHandler);
  }
  #injectStyles() {
    let parent = this.getRootNode();
    if (parent.adoptedStyleSheets.indexOf(COMPONENT_STYLESHEET) == -1) {
      parent.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
    }
  }
  static observedAttributes = ["path"];
  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (attributeName == "path") {
      if (this.#isActivated == true) {
        this.#update(newValue, oldValue ?? "");
      } else {
        this.#toUpdate.push({ newValue, oldValue: oldValue ?? "" });
      }
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME3) == null) {
  customElements.define(COMPONENT_TAG_NAME3, PathRouterElement);
}

// src/markdown-document.ts
var MarkdownDocument = class {
  id;
  navigationItemLabel = "New Document";
  content = "";
  constructor(content, id, navigationItemLabel) {
    this.id = id ?? generateId();
    this.navigationItemLabel = navigationItemLabel ?? this.navigationItemLabel;
    this.content = content ?? this.content;
  }
};
function generateId() {
  const rnd = new Uint8Array(20);
  crypto.getRandomValues(rnd);
  const b64 = [].slice.apply(rnd).map((ch) => {
    return String.fromCharCode(ch);
  }).join("");
  const secret = btoa(b64).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
  return secret;
}

// src/libs/cache/cache.ts
var Cache = class {
  isInitialized = false;
  #tableName;
  #datastore;
  constructor(datastore, tableName) {
    this.#datastore = datastore;
    this.#tableName = tableName;
    this.#datastore.addTable(this.#tableName);
    this.isInitialized = true;
  }
  //#region Data - Key/Value management
  /**
   * Get a value from the Key/Value table
   * @param key the key to match
   * @returns the value associated with the target key
   */
  async getValue(key) {
    return this.#getData(this.#tableName, key);
  }
  /**
   * Get values from the Key/Value table
   * @param keys the keys to match
   * @returns the values associated with the target keys
   */
  async getValues(keys) {
    return this.#getDataValues(this.#tableName, keys);
  }
  /**
   * Get all values from the Key/Value table
   * @returns an array of the values
   */
  async getAllValues() {
    return this.#getAllData(this.#tableName);
  }
  /**
   * Set a value in the Key/Value table
   * @param key the key to assign a value to
   * @param value the value to assign to the target key
   */
  async setValue(key, value) {
    await this.#setData(this.#tableName, key, value);
  }
  /**
   * Set values in the Key/Value table
   * @param items an array of key/value pairs defining the data to set
   */
  async setValues(items) {
    await this.#setDataValues(this.#tableName, items);
  }
  /**
   * remove values from the Key/Value table
   * @param keys an array of keys to remove from the cache
   */
  async removeValues(...keys) {
    await this.#removeData(this.#tableName, ...keys);
  }
  /**
   * remove values from the Key/Value table
   * @param keys an array of keys to remove from the cache
   */
  async clear() {
    await this.#clearData(this.#tableName);
  }
  //#endregion
  //#region Data Management
  /**
   * Get all data stored in the target `IDBObjectStore`
   * @param storeName the name of the `IDBObjectStore` to collect data from
   * @returns an array of all values stored in the target `IDBObjectStore`
   */
  async #getAllData(storeName) {
    if (this.#datastore == null) {
      throw new Error("The database has not been opened.");
    }
    const transaction = this.#datastore.openTransaction([storeName], "readonly");
    transaction.onerror = (event) => {
      throw event;
    };
    const value = await new Promise((resolve, reject) => {
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.getAll();
      request.onsuccess = (event) => {
        const items = event.target.result;
        const result = items == null ? [] : items.map((item) => item.value);
        resolve(result);
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
    return value;
  }
  /**
   * Get the value of an entry in the target `IDBObjectStore`, by key
   * @param storeName the name of the `IDBObjectStore` to get the value from
   * @param key the key to match 
   * @returns the value assigned to the matching key, or null
   */
  async #getData(storeName, key) {
    if (this.#datastore == null) {
      throw new Error("The database has not been opened.");
    }
    const transaction = this.#datastore.openTransaction([storeName], "readonly");
    transaction.onerror = (event) => {
      throw event;
    };
    const value = await new Promise((resolve, reject) => {
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.get(key);
      request.onsuccess = (event) => {
        const record = event.target.result;
        const result = record == null ? null : record.value;
        resolve(result);
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
    return value;
  }
  /**
   * Get the values of the entries in the target `IDBObjectStore`, by keys
   * @param storeName the name of the `IDBObjectStore` to get the values from
   * @param keys the keys to match 
   * @returns an array of the values assigned to the matching keys, or null
   */
  async #getDataValues(storeName, keys) {
    const transaction = this.#datastore.openTransaction([storeName], "readonly");
    const promises = [];
    for (let i = 0; i < keys.length; i++) {
      const id = keys[i];
      promises.push(new Promise((resolve, reject) => {
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.get(id);
        request.onsuccess = (event) => {
          const record = event.target.result;
          resolve(record == null ? null : record.value);
        };
        request.onerror = (event) => {
          reject(event);
        };
      }));
    }
    const records = await Promise.all(promises);
    return records;
  }
  /**
   * Set the value of an entry in the target `IDBObjectStore`, by key
   * @param storeName the name of the `IDBObjectStore` to set the values in
   * @param key the key to match 
   * @param value the value to assign to the matching key
   */
  async #setData(storeName, key, value) {
    if (this.#datastore == null) {
      throw new Error("The database has not been opened.");
    }
    const transaction = this.#datastore.openTransaction([storeName]);
    transaction.onerror = (event) => {
      throw event;
    };
    await new Promise((resolve, reject) => {
      const objectStore = transaction.objectStore(storeName);
      const request = value == void 0 ? objectStore.delete(key) : objectStore.put({ key, value });
      request.onsuccess = (event) => {
        const value2 = event.target.result;
        resolve(value2);
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
  }
  /**
   * Set the values of an entries in the target `IDBObjectStore`, by keys
   * @param storeName the name of the `IDBObjectStore` to set the values in
   * @param values an array of key/value pairs defining the data to set
   */
  async #setDataValues(storeName, values) {
    if (this.#datastore == null) {
      throw new Error("The database has not been opened.");
    }
    const transaction = this.#datastore.openTransaction([storeName]);
    transaction.onerror = (event) => {
      throw event;
    };
    const objectStore = transaction.objectStore(storeName);
    const promises = [];
    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      promises.push(new Promise((innerResolve, innerReject) => {
        const request = value.value == void 0 ? objectStore.delete(value.key) : objectStore.put(value);
        request.onsuccess = (event) => {
          const value2 = event.target.result;
          innerResolve(value2);
        };
        request.onerror = (event) => {
          innerReject(event);
        };
      }));
    }
    await Promise.all(promises);
  }
  /**
   * Remove an entries from the target `IDBObjectStore`, by key
   * @param storeName the name of the `IDBObjectStore` to remove the values from
   * @param keys the keys to match 
   */
  async #removeData(storeName, ...keys) {
    if (this.#datastore == null) {
      throw new Error("The database has not been opened.");
    }
    const transaction = this.#datastore.openTransaction([storeName]);
    transaction.onerror = (event) => {
      throw event;
    };
    await new Promise((resolve, _reject) => {
      const objectStore = transaction.objectStore(storeName);
      const promises = [];
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        promises.push(new Promise((innerResolve, innerReject) => {
          const request = objectStore.delete(key);
          request.onsuccess = (event) => {
            const value = event.target.result;
            innerResolve(value);
          };
          request.onerror = (event) => {
            innerReject(event);
          };
        }));
      }
      resolve(Promise.all(promises));
    });
  }
  /**
   * Clear all entries from the target `IDBObjectStore`
   * @param storeName the name of the `IDBObjectStore` to remove the values from
   * @param keys the keys to match 
   */
  async #clearData(storeName) {
    if (this.#datastore == null) {
      throw new Error("The database has not been opened.");
    }
    const transaction = this.#datastore.openTransaction([storeName]);
    transaction.onerror = (event) => {
      throw event;
    };
    await new Promise((resolve, reject) => {
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.clear();
      request.onsuccess = (event) => {
        const value = event.target.result;
        resolve(value);
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
  }
  //#endregion
};

// src/libs/cache/idb-manager.ts
var IndexedDBManager = class _IndexedDBManager {
  #isOpen = false;
  #isInitialized = false;
  #database;
  // #tableName: string = "keyValue";
  get ready() {
    return this.#isOpen && this.#isInitialized;
  }
  /**
   * Await and validate opening a `Cache` instance
   * @param options target `CacheOptions` values
   * @returns a validated `Cache` instance
   */
  async init(options) {
    if (this.#isOpen == true) {
      return;
    }
    const opened = await this.open(options);
    if (opened == false) {
      throw new Error("An error occurred opening the database.");
    }
  }
  /**
   * Create and then await and validate opening a `Cache` instance
   * @param options target `CacheOptions` values
   * @returns a validated `Cache` instance
   */
  static async init(options) {
    const instance = new _IndexedDBManager();
    await instance.init(options);
    return instance;
  }
  /**
   * Open the `Cache` instance's database and initialize its functionality
   * @param options target `CacheOptions` values
   * @returns a `boolean` to indicate success
   */
  async open(options) {
    await this.#openDatabase(options);
    return this.ready;
  }
  /**
   * Opens an instance of an `IDBDatabase` database, and registers for upgrade events.  
   * Listens for `onupgradeneeded` to create an `IDBDatabase` instance if it does not exist, and upgrade the instance if it does.
   * @param options target `IndexedDBManagerOptions` values
   * @returns an awaitable `Promise`
   */
  async #openDatabase(options) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(options.name, options.version);
      request.onsuccess = (event) => {
        const dbEvent = event.target;
        this.#database = dbEvent.result;
        this.#isOpen = true;
        this.#isInitialized = true;
        resolve();
      };
      request.onupgradeneeded = async (event) => {
        const dbEvent = event.target;
        this.#database = dbEvent.result;
        await this.#createDatabase(options);
        this.#isInitialized = true;
        this.#isOpen = true;
        resolve();
      };
      request.onerror = (event) => {
        reject(event);
      };
    });
  }
  /**
   * Create the database instance's object stores
   * @param options target `IndexedDBManagerOptions` values
   * @returns an awaitable `Promise`
   */
  async #createDatabase(options) {
    if (this.#isInitialized == true) {
      return;
    }
    const promises = [];
    for (const tableName of this.#tables) {
      promises.push(new Promise(async (resolve, reject) => {
        const objectStore = this.#database.createObjectStore(tableName, { keyPath: "key" });
        objectStore.transaction.oncomplete = (_event) => {
          resolve();
        };
        objectStore.transaction.onerror = (event) => {
          reject(event);
        };
      }));
    }
    await Promise.allSettled(promises);
  }
  #tables = /* @__PURE__ */ new Set();
  addTable(tableName) {
    if (this.#isInitialized == true) {
      throw new Error("Cannot add table after database has been initialized.");
    }
    this.#tables.add(tableName);
  }
  /**
   * Close the database connection and desconstruct the instance
   * @returns a `boolean` to indicate success
   */
  async close() {
    if (this.#database == null) {
      this.#isOpen = false;
      return !this.#isOpen;
    }
    this.#database.close();
    this.#isOpen = false;
    return !this.#isOpen;
  }
  /**
   * Closes the current database instance, if it is open, and then deletes the database.
   * @returns a `boolean` to indicate success
   */
  async delete() {
    if (this.#isOpen) {
      await this.close();
    }
    return this.#deleteDatabase();
  }
  /**
   * Deletes the database.
   * @returns a `boolean` to indicate success
   */
  #deleteDatabase() {
    return new Promise((resolve) => {
      if (this.#database == null || this.#isInitialized != true) {
        throw new Error("Unable to delete an uninitialized database.");
      }
      const deleteRequest = indexedDB.deleteDatabase(this.#database.name);
      deleteRequest.onsuccess = () => {
        this.#database = void 0;
        this.#isInitialized = false;
        resolve(true);
      };
      deleteRequest.onerror = (error) => {
        console.error(error);
        resolve(false);
      };
    });
  }
  /**
   * Open new transaction in the managed database
   * @param tables the tables to include in this transaction scope
   * @param transactionMode the `IDBTransactionMode` the transaction will operate in
   * @returns a new transaction on the managed database in the target mode
   */
  openTransaction(tables, transactionMode = "readwrite") {
    if (this.#database == null) {
      throw new Error("The database has not been opened.");
    }
    return this.#database.transaction(tables, transactionMode);
  }
};

// node_modules/.pnpm/marked@16.1.1/node_modules/marked/lib/marked.esm.js
function L() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var O = L();
function H(l3) {
  O = l3;
}
var E = { exec: () => null };
function h(l3, e = "") {
  let t = typeof l3 == "string" ? l3 : l3.source, n = { replace: (r, i) => {
    let s = typeof i == "string" ? i : i.source;
    return s = s.replace(m.caret, "$1"), t = t.replace(r, s), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var m = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (l3) => new RegExp(`^( {0,3}${l3})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}#`), htmlBeginRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}<(?:[a-z].*>|!--)`, "i") };
var xe = /^(?:[ \t]*(?:\n|$))+/;
var be = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var Re = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var C = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var Oe = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var j = /(?:[*+-]|\d{1,9}[.)])/;
var se = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var ie = h(se).replace(/bull/g, j).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var Te = h(se).replace(/bull/g, j).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var F = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var we = /^[^\n]+/;
var Q = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var ye = h(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Q).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var Pe = h(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, j).getRegex();
var v = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var U = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var Se = h("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", U).replace("tag", v).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var oe = h(F).replace("hr", C).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex();
var $e = h(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", oe).getRegex();
var K = { blockquote: $e, code: be, def: ye, fences: Re, heading: Oe, hr: C, html: Se, lheading: ie, list: Pe, newline: xe, paragraph: oe, table: E, text: we };
var re = h("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", C).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex();
var _e = { ...K, lheading: Te, table: re, paragraph: h(F).replace("hr", C).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", re).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex() };
var Le = { ...K, html: h(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", U).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: E, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: h(F).replace("hr", C).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ie).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() };
var Me = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var ze = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var ae = /^( {2,}|\\)\n(?!\s*$)/;
var Ae = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var D = /[\p{P}\p{S}]/u;
var X = /[\s\p{P}\p{S}]/u;
var le = /[^\s\p{P}\p{S}]/u;
var Ee = h(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, X).getRegex();
var ue = /(?!~)[\p{P}\p{S}]/u;
var Ce = /(?!~)[\s\p{P}\p{S}]/u;
var Ie = /(?:[^\s\p{P}\p{S}]|~)/u;
var Be = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g;
var pe = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var qe = h(pe, "u").replace(/punct/g, D).getRegex();
var ve = h(pe, "u").replace(/punct/g, ue).getRegex();
var ce = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var De = h(ce, "gu").replace(/notPunctSpace/g, le).replace(/punctSpace/g, X).replace(/punct/g, D).getRegex();
var Ze = h(ce, "gu").replace(/notPunctSpace/g, Ie).replace(/punctSpace/g, Ce).replace(/punct/g, ue).getRegex();
var Ge = h("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, le).replace(/punctSpace/g, X).replace(/punct/g, D).getRegex();
var He = h(/\\(punct)/, "gu").replace(/punct/g, D).getRegex();
var Ne = h(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var je = h(U).replace("(?:-->|$)", "-->").getRegex();
var Fe = h("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", je).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var q = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var Qe = h(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", q).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var he = h(/^!?\[(label)\]\[(ref)\]/).replace("label", q).replace("ref", Q).getRegex();
var de = h(/^!?\[(ref)\](?:\[\])?/).replace("ref", Q).getRegex();
var Ue = h("reflink|nolink(?!\\()", "g").replace("reflink", he).replace("nolink", de).getRegex();
var W = { _backpedal: E, anyPunctuation: He, autolink: Ne, blockSkip: Be, br: ae, code: ze, del: E, emStrongLDelim: qe, emStrongRDelimAst: De, emStrongRDelimUnd: Ge, escape: Me, link: Qe, nolink: de, punctuation: Ee, reflink: he, reflinkSearch: Ue, tag: Fe, text: Ae, url: E };
var Ke = { ...W, link: h(/^!?\[(label)\]\((.*?)\)/).replace("label", q).getRegex(), reflink: h(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q).getRegex() };
var N = { ...W, emStrongRDelimAst: Ze, emStrongLDelim: ve, url: h(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ };
var Xe = { ...N, br: h(ae).replace("{2,}", "*").getRegex(), text: h(N.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
var I = { normal: K, gfm: _e, pedantic: Le };
var M = { normal: W, gfm: N, breaks: Xe, pedantic: Ke };
var We = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var ke = (l3) => We[l3];
function w(l3, e) {
  if (e) {
    if (m.escapeTest.test(l3)) return l3.replace(m.escapeReplace, ke);
  } else if (m.escapeTestNoEncode.test(l3)) return l3.replace(m.escapeReplaceNoEncode, ke);
  return l3;
}
function J(l3) {
  try {
    l3 = encodeURI(l3).replace(m.percentDecode, "%");
  } catch {
    return null;
  }
  return l3;
}
function V(l3, e) {
  let t = l3.replace(m.findPipe, (i, s, o) => {
    let a = false, u = s;
    for (; --u >= 0 && o[u] === "\\"; ) a = !a;
    return a ? "|" : " |";
  }), n = t.split(m.splitPipe), r = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; r < n.length; r++) n[r] = n[r].trim().replace(m.slashPipe, "|");
  return n;
}
function z(l3, e, t) {
  let n = l3.length;
  if (n === 0) return "";
  let r = 0;
  for (; r < n; ) {
    let i = l3.charAt(n - r - 1);
    if (i === e && !t) r++;
    else if (i !== e && t) r++;
    else break;
  }
  return l3.slice(0, n - r);
}
function ge(l3, e) {
  if (l3.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < l3.length; n++) if (l3[n] === "\\") n++;
  else if (l3[n] === e[0]) t++;
  else if (l3[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
function fe(l3, e, t, n, r) {
  let i = e.href, s = e.title || null, o = l3[1].replace(r.other.outputLinkReplace, "$1");
  n.state.inLink = true;
  let a = { type: l3[0].charAt(0) === "!" ? "image" : "link", raw: t, href: i, title: s, text: o, tokens: n.inlineTokens(o) };
  return n.state.inLink = false, a;
}
function Je(l3, e, t) {
  let n = l3.match(t.other.indentCodeCompensation);
  if (n === null) return e;
  let r = n[1];
  return e.split(`
`).map((i) => {
    let s = i.match(t.other.beginningSpace);
    if (s === null) return i;
    let [o] = s;
    return o.length >= r.length ? i.slice(r.length) : i;
  }).join(`
`);
}
var y = class {
  options;
  rules;
  lexer;
  constructor(e) {
    this.options = e || O;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : z(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = Je(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = z(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: z(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = z(t[0], `
`).split(`
`), r = "", i = "", s = [];
      for (; n.length > 0; ) {
        let o = false, a = [], u;
        for (u = 0; u < n.length; u++) if (this.rules.other.blockquoteStart.test(n[u])) a.push(n[u]), o = true;
        else if (!o) a.push(n[u]);
        else break;
        n = n.slice(u);
        let p = a.join(`
`), c = p.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${p}` : p, i = i ? `${i}
${c}` : c;
        let f = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(c, s, true), this.lexer.state.top = f, n.length === 0) break;
        let k = s.at(-1);
        if (k?.type === "code") break;
        if (k?.type === "blockquote") {
          let x = k, g = x.raw + `
` + n.join(`
`), T = this.blockquote(g);
          s[s.length - 1] = T, r = r.substring(0, r.length - x.raw.length) + T.raw, i = i.substring(0, i.length - x.text.length) + T.text;
          break;
        } else if (k?.type === "list") {
          let x = k, g = x.raw + `
` + n.join(`
`), T = this.list(g);
          s[s.length - 1] = T, r = r.substring(0, r.length - k.raw.length) + T.raw, i = i.substring(0, i.length - x.raw.length) + T.raw, n = g.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: r, tokens: s, text: i };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim(), r = n.length > 1, i = { type: "list", raw: "", ordered: r, start: r ? +n.slice(0, -1) : "", loose: false, items: [] };
      n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
      let s = this.rules.other.listItemRegex(n), o = false;
      for (; e; ) {
        let u = false, p = "", c = "";
        if (!(t = s.exec(e)) || this.rules.block.hr.test(e)) break;
        p = t[0], e = e.substring(p.length);
        let f = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (Z) => " ".repeat(3 * Z.length)), k = e.split(`
`, 1)[0], x = !f.trim(), g = 0;
        if (this.options.pedantic ? (g = 2, c = f.trimStart()) : x ? g = t[1].length + 1 : (g = t[2].search(this.rules.other.nonSpaceChar), g = g > 4 ? 1 : g, c = f.slice(g), g += t[1].length), x && this.rules.other.blankLine.test(k) && (p += k + `
`, e = e.substring(k.length + 1), u = true), !u) {
          let Z = this.rules.other.nextBulletRegex(g), ee = this.rules.other.hrRegex(g), te = this.rules.other.fencesBeginRegex(g), ne = this.rules.other.headingBeginRegex(g), me = this.rules.other.htmlBeginRegex(g);
          for (; e; ) {
            let G = e.split(`
`, 1)[0], A;
            if (k = G, this.options.pedantic ? (k = k.replace(this.rules.other.listReplaceNesting, "  "), A = k) : A = k.replace(this.rules.other.tabCharGlobal, "    "), te.test(k) || ne.test(k) || me.test(k) || Z.test(k) || ee.test(k)) break;
            if (A.search(this.rules.other.nonSpaceChar) >= g || !k.trim()) c += `
` + A.slice(g);
            else {
              if (x || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || te.test(f) || ne.test(f) || ee.test(f)) break;
              c += `
` + k;
            }
            !x && !k.trim() && (x = true), p += G + `
`, e = e.substring(G.length + 1), f = A.slice(g);
          }
        }
        i.loose || (o ? i.loose = true : this.rules.other.doubleBlankLine.test(p) && (o = true));
        let T = null, Y;
        this.options.gfm && (T = this.rules.other.listIsTask.exec(c), T && (Y = T[0] !== "[ ] ", c = c.replace(this.rules.other.listReplaceTask, ""))), i.items.push({ type: "list_item", raw: p, task: !!T, checked: Y, loose: false, text: c, tokens: [] }), i.raw += p;
      }
      let a = i.items.at(-1);
      if (a) a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd();
      else return;
      i.raw = i.raw.trimEnd();
      for (let u = 0; u < i.items.length; u++) if (this.lexer.state.top = false, i.items[u].tokens = this.lexer.blockTokens(i.items[u].text, []), !i.loose) {
        let p = i.items[u].tokens.filter((f) => f.type === "space"), c = p.length > 0 && p.some((f) => this.rules.other.anyLine.test(f.raw));
        i.loose = c;
      }
      if (i.loose) for (let u = 0; u < i.items.length; u++) i.items[u].loose = true;
      return i;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t) return { type: "html", block: true, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] };
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: n, raw: t[0], href: r, title: i };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
    let n = V(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let o of r) this.rules.other.tableAlignRight.test(o) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? s.align.push("left") : s.align.push(null);
      for (let o = 0; o < n.length; o++) s.header.push({ text: n[o], tokens: this.lexer.inline(n[o]), header: true, align: s.align[o] });
      for (let o of i) s.rows.push(V(o, s.header.length).map((a, u) => ({ text: a, tokens: this.lexer.inline(a), header: false, align: s.align[u] })));
      return s;
    }
  }
  lheading(e) {
    let t = this.rules.block.lheading.exec(e);
    if (t) return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) };
  }
  paragraph(e) {
    let t = this.rules.block.paragraph.exec(e);
    if (t) {
      let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(e) {
    let t = this.rules.block.text.exec(e);
    if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e) {
    let t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: t[1] };
  }
  tag(e) {
    let t = this.rules.inline.tag.exec(e);
    if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t[0] };
  }
  link(e) {
    let t = this.rules.inline.link.exec(e);
    if (t) {
      let n = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n)) return;
        let s = z(n.slice(0, -1), "\\");
        if ((n.length - s.length) % 2 === 0) return;
      } else {
        let s = ge(t[2], "()");
        if (s === -2) return;
        if (s > -1) {
          let a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
          t[2] = t[2].substring(0, s), t[0] = t[0].substring(0, a).trim(), t[3] = "";
        }
      }
      let r = t[2], i = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(r);
        s && (r = s[1], i = s[3]);
      } else i = t[3] ? t[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), fe(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: i && i.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let r = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = t[r.toLowerCase()];
      if (!i) {
        let s = n[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return fe(n, i, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let r = this.rules.inline.emStrongLDelim.exec(e);
    if (!r || r[3] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(r[1] || r[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      let s = [...r[0]].length - 1, o, a, u = s, p = 0, c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, t = t.slice(-1 * e.length + s); (r = c.exec(t)) != null; ) {
        if (o = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !o) continue;
        if (a = [...o].length, r[3] || r[4]) {
          u += a;
          continue;
        } else if ((r[5] || r[6]) && s % 3 && !((s + a) % 3)) {
          p += a;
          continue;
        }
        if (u -= a, u > 0) continue;
        a = Math.min(a, a + u + p);
        let f = [...r[0]][0].length, k = e.slice(0, s + r.index + f + a);
        if (Math.min(s, a) % 2) {
          let g = k.slice(1, -1);
          return { type: "em", raw: k, text: g, tokens: this.lexer.inlineTokens(g) };
        }
        let x = k.slice(2, -2);
        return { type: "strong", raw: k, text: x, tokens: this.lexer.inlineTokens(x) };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), r = this.rules.other.nonSpaceChar.test(n), i = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return r && i && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: t[0], text: n };
    }
  }
  br(e) {
    let t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  del(e) {
    let t = this.rules.inline.del.exec(e);
    if (t) return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
  }
  autolink(e) {
    let t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, r;
      return t[2] === "@" ? (n = t[1], r = "mailto:" + n) : (n = t[1], r = n), { type: "link", raw: t[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let n, r;
      if (t[2] === "@") n = t[0], r = "mailto:" + n;
      else {
        let i;
        do
          i = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (i !== t[0]);
        n = t[0], t[1] === "www." ? r = "http://" + t[0] : r = t[0];
      }
      return { type: "link", raw: t[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(e) {
    let t = this.rules.inline.text.exec(e);
    if (t) {
      let n = this.lexer.state.inRawBlock;
      return { type: "text", raw: t[0], text: t[0], escaped: n };
    }
  }
};
var b = class l {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || O, this.options.tokenizer = this.options.tokenizer || new y(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let t = { other: m, block: I.normal, inline: M.normal };
    this.options.pedantic ? (t.block = I.pedantic, t.inline = M.pedantic) : this.options.gfm && (t.block = I.gfm, this.options.breaks ? t.inline = M.breaks : t.inline = M.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: I, inline: M };
  }
  static lex(e, t) {
    return new l(t).lex(e);
  }
  static lexInline(e, t) {
    return new l(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(m.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = false) {
    for (this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, "")); e; ) {
      let r;
      if (this.options.extensions?.block?.some((s) => (r = s.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false)) continue;
      if (r = this.tokenizer.space(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        r.raw.length === 1 && s !== void 0 ? s.raw += `
` : t.push(r);
        continue;
      }
      if (r = this.tokenizer.code(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.at(-1).src = s.text) : t.push(r);
        continue;
      }
      if (r = this.tokenizer.fences(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.heading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.hr(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.blockquote(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.list(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.html(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.def(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title });
        continue;
      }
      if (r = this.tokenizer.table(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.lheading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      let i = e;
      if (this.options.extensions?.startBlock) {
        let s = 1 / 0, o = e.slice(1), a;
        this.options.extensions.startBlock.forEach((u) => {
          a = u.call({ lexer: this }, o), typeof a == "number" && a >= 0 && (s = Math.min(s, a));
        }), s < 1 / 0 && s >= 0 && (i = e.substring(0, s + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(i))) {
        let s = t.at(-1);
        n && s?.type === "paragraph" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r);
        continue;
      }
      if (e) {
        let s = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(s);
          break;
        } else throw new Error(s);
      }
    }
    return this.state.top = true, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let n = e, r = null;
    if (this.tokens.links) {
      let o = Object.keys(this.tokens.links);
      if (o.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; ) o.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; ) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; ) n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let i = false, s = "";
    for (; e; ) {
      i || (s = ""), i = false;
      let o;
      if (this.options.extensions?.inline?.some((u) => (o = u.call({ lexer: this }, e, t)) ? (e = e.substring(o.raw.length), t.push(o), true) : false)) continue;
      if (o = this.tokenizer.escape(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.tag(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.link(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(o.raw.length);
        let u = t.at(-1);
        o.type === "text" && u?.type === "text" ? (u.raw += o.raw, u.text += o.text) : t.push(o);
        continue;
      }
      if (o = this.tokenizer.emStrong(e, n, s)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.codespan(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.br(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.del(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.autolink(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (!this.state.inLink && (o = this.tokenizer.url(e))) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      let a = e;
      if (this.options.extensions?.startInline) {
        let u = 1 / 0, p = e.slice(1), c;
        this.options.extensions.startInline.forEach((f) => {
          c = f.call({ lexer: this }, p), typeof c == "number" && c >= 0 && (u = Math.min(u, c));
        }), u < 1 / 0 && u >= 0 && (a = e.substring(0, u + 1));
      }
      if (o = this.tokenizer.inlineText(a)) {
        e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (s = o.raw.slice(-1)), i = true;
        let u = t.at(-1);
        u?.type === "text" ? (u.raw += o.raw, u.text += o.text) : t.push(o);
        continue;
      }
      if (e) {
        let u = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(u);
          break;
        } else throw new Error(u);
      }
    }
    return t;
  }
};
var P = class {
  options;
  parser;
  constructor(e) {
    this.options = e || O;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    let r = (t || "").match(m.notSpaceStart)?.[0], i = e.replace(m.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + w(r) + '">' + (n ? i : w(i, true)) + `</code></pre>
` : "<pre><code>" + (n ? i : w(i, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    let t = e.ordered, n = e.start, r = "";
    for (let o = 0; o < e.items.length; o++) {
      let a = e.items[o];
      r += this.listitem(a);
    }
    let i = t ? "ol" : "ul", s = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + i + s + `>
` + r + "</" + i + `>
`;
  }
  listitem(e) {
    let t = "";
    if (e.task) {
      let n = this.checkbox({ checked: !!e.checked });
      e.loose ? e.tokens[0]?.type === "paragraph" ? (e.tokens[0].text = n + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = n + " " + w(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = true)) : e.tokens.unshift({ type: "text", raw: n + " ", text: n + " ", escaped: true }) : t += n + " ";
    }
    return t += this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "", n = "";
    for (let i = 0; i < e.header.length; i++) n += this.tablecell(e.header[i]);
    t += this.tablerow({ text: n });
    let r = "";
    for (let i = 0; i < e.rows.length; i++) {
      let s = e.rows[i];
      n = "";
      for (let o = 0; o < s.length; o++) n += this.tablecell(s[o]);
      r += this.tablerow({ text: n });
    }
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${w(e, true)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: n }) {
    let r = this.parser.parseInline(n), i = J(e);
    if (i === null) return r;
    e = i;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + w(t) + '"'), s += ">" + r + "</a>", s;
  }
  image({ href: e, title: t, text: n, tokens: r }) {
    r && (n = this.parser.parseInline(r, this.parser.textRenderer));
    let i = J(e);
    if (i === null) return w(n);
    e = i;
    let s = `<img src="${e}" alt="${n}"`;
    return t && (s += ` title="${w(t)}"`), s += ">", s;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : w(e.text);
  }
};
var S = class {
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
};
var R = class l2 {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || O, this.options.renderer = this.options.renderer || new P(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new S();
  }
  static parse(e, t) {
    return new l2(t).parse(e);
  }
  static parseInline(e, t) {
    return new l2(t).parseInline(e);
  }
  parse(e, t = true) {
    let n = "";
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (this.options.extensions?.renderers?.[i.type]) {
        let o = i, a = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (a !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(o.type)) {
          n += a || "";
          continue;
        }
      }
      let s = i;
      switch (s.type) {
        case "space": {
          n += this.renderer.space(s);
          continue;
        }
        case "hr": {
          n += this.renderer.hr(s);
          continue;
        }
        case "heading": {
          n += this.renderer.heading(s);
          continue;
        }
        case "code": {
          n += this.renderer.code(s);
          continue;
        }
        case "table": {
          n += this.renderer.table(s);
          continue;
        }
        case "blockquote": {
          n += this.renderer.blockquote(s);
          continue;
        }
        case "list": {
          n += this.renderer.list(s);
          continue;
        }
        case "html": {
          n += this.renderer.html(s);
          continue;
        }
        case "paragraph": {
          n += this.renderer.paragraph(s);
          continue;
        }
        case "text": {
          let o = s, a = this.renderer.text(o);
          for (; r + 1 < e.length && e[r + 1].type === "text"; ) o = e[++r], a += `
` + this.renderer.text(o);
          t ? n += this.renderer.paragraph({ type: "paragraph", raw: a, text: a, tokens: [{ type: "text", raw: a, text: a, escaped: true }] }) : n += a;
          continue;
        }
        default: {
          let o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return n;
  }
  parseInline(e, t = this.renderer) {
    let n = "";
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (this.options.extensions?.renderers?.[i.type]) {
        let o = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (o !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          n += o || "";
          continue;
        }
      }
      let s = i;
      switch (s.type) {
        case "escape": {
          n += t.text(s);
          break;
        }
        case "html": {
          n += t.html(s);
          break;
        }
        case "link": {
          n += t.link(s);
          break;
        }
        case "image": {
          n += t.image(s);
          break;
        }
        case "strong": {
          n += t.strong(s);
          break;
        }
        case "em": {
          n += t.em(s);
          break;
        }
        case "codespan": {
          n += t.codespan(s);
          break;
        }
        case "br": {
          n += t.br(s);
          break;
        }
        case "del": {
          n += t.del(s);
          break;
        }
        case "text": {
          n += t.text(s);
          break;
        }
        default: {
          let o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return n;
  }
};
var $ = class {
  options;
  block;
  constructor(e) {
    this.options = e || O;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
  provideLexer() {
    return this.block ? b.lex : b.lexInline;
  }
  provideParser() {
    return this.block ? R.parse : R.parseInline;
  }
};
var B = class {
  defaults = L();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = R;
  Renderer = P;
  TextRenderer = S;
  Lexer = b;
  Tokenizer = y;
  Hooks = $;
  constructor(...e) {
    this.use(...e);
  }
  walkTokens(e, t) {
    let n = [];
    for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
      case "table": {
        let i = r;
        for (let s of i.header) n = n.concat(this.walkTokens(s.tokens, t));
        for (let s of i.rows) for (let o of s) n = n.concat(this.walkTokens(o.tokens, t));
        break;
      }
      case "list": {
        let i = r;
        n = n.concat(this.walkTokens(i.items, t));
        break;
      }
      default: {
        let i = r;
        this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((s) => {
          let o = i[s].flat(1 / 0);
          n = n.concat(this.walkTokens(o, t));
        }) : i.tokens && (n = n.concat(this.walkTokens(i.tokens, t)));
      }
    }
    return n;
  }
  use(...e) {
    let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      let r = { ...n };
      if (r.async = this.defaults.async || r.async || false, n.extensions && (n.extensions.forEach((i) => {
        if (!i.name) throw new Error("extension name required");
        if ("renderer" in i) {
          let s = t.renderers[i.name];
          s ? t.renderers[i.name] = function(...o) {
            let a = i.renderer.apply(this, o);
            return a === false && (a = s.apply(this, o)), a;
          } : t.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = t[i.level];
          s ? s.unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
      }), r.extensions = t), n.renderer) {
        let i = this.defaults.renderer || new P(this.defaults);
        for (let s in n.renderer) {
          if (!(s in i)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let o = s, a = n.renderer[o], u = i[o];
          i[o] = (...p) => {
            let c = a.apply(i, p);
            return c === false && (c = u.apply(i, p)), c || "";
          };
        }
        r.renderer = i;
      }
      if (n.tokenizer) {
        let i = this.defaults.tokenizer || new y(this.defaults);
        for (let s in n.tokenizer) {
          if (!(s in i)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let o = s, a = n.tokenizer[o], u = i[o];
          i[o] = (...p) => {
            let c = a.apply(i, p);
            return c === false && (c = u.apply(i, p)), c;
          };
        }
        r.tokenizer = i;
      }
      if (n.hooks) {
        let i = this.defaults.hooks || new $();
        for (let s in n.hooks) {
          if (!(s in i)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let o = s, a = n.hooks[o], u = i[o];
          $.passThroughHooks.has(s) ? i[o] = (p) => {
            if (this.defaults.async) return Promise.resolve(a.call(i, p)).then((f) => u.call(i, f));
            let c = a.call(i, p);
            return u.call(i, c);
          } : i[o] = (...p) => {
            let c = a.apply(i, p);
            return c === false && (c = u.apply(i, p)), c;
          };
        }
        r.hooks = i;
      }
      if (n.walkTokens) {
        let i = this.defaults.walkTokens, s = n.walkTokens;
        r.walkTokens = function(o) {
          let a = [];
          return a.push(s.call(this, o)), i && (a = a.concat(i.call(this, o))), a;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return b.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return R.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (n, r) => {
      let i = { ...r }, s = { ...this.defaults, ...i }, o = this.onError(!!s.silent, !!s.async);
      if (this.defaults.async === true && i.async === false) return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return o(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      s.hooks && (s.hooks.options = s, s.hooks.block = e);
      let a = s.hooks ? s.hooks.provideLexer() : e ? b.lex : b.lexInline, u = s.hooks ? s.hooks.provideParser() : e ? R.parse : R.parseInline;
      if (s.async) return Promise.resolve(s.hooks ? s.hooks.preprocess(n) : n).then((p) => a(p, s)).then((p) => s.hooks ? s.hooks.processAllTokens(p) : p).then((p) => s.walkTokens ? Promise.all(this.walkTokens(p, s.walkTokens)).then(() => p) : p).then((p) => u(p, s)).then((p) => s.hooks ? s.hooks.postprocess(p) : p).catch(o);
      try {
        s.hooks && (n = s.hooks.preprocess(n));
        let p = a(n, s);
        s.hooks && (p = s.hooks.processAllTokens(p)), s.walkTokens && this.walkTokens(p, s.walkTokens);
        let c = u(p, s);
        return s.hooks && (c = s.hooks.postprocess(c)), c;
      } catch (p) {
        return o(p);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        let r = "<p>An error occurred:</p><pre>" + w(n.message + "", true) + "</pre>";
        return t ? Promise.resolve(r) : r;
      }
      if (t) return Promise.reject(n);
      throw n;
    };
  }
};
var _ = new B();
function d(l3, e) {
  return _.parse(l3, e);
}
d.options = d.setOptions = function(l3) {
  return _.setOptions(l3), d.defaults = _.defaults, H(d.defaults), d;
};
d.getDefaults = L;
d.defaults = O;
d.use = function(...l3) {
  return _.use(...l3), d.defaults = _.defaults, H(d.defaults), d;
};
d.walkTokens = function(l3, e) {
  return _.walkTokens(l3, e);
};
d.parseInline = _.parseInline;
d.Parser = R;
d.parser = R.parse;
d.Renderer = P;
d.TextRenderer = S;
d.Lexer = b;
d.lexer = b.lex;
d.Tokenizer = y;
d.Hooks = $;
d.parse = d;
var Dt = d.options;
var Zt = d.setOptions;
var Gt = d.use;
var Ht = d.walkTokens;
var Nt = d.parseInline;
var Ft = R.parse;
var Qt = b.lex;

// src/progress-timeout.ts
var ProgressTimeout = class {
  duration;
  startTime = performance.now();
  elapsedTime = 0;
  onUpdate;
  onComplete;
  isPaused = false;
  #previousTimestamp = 0;
  #animationFrameHandle;
  #animationFrameHandler = this.update.bind(this);
  constructor(duration, onUpdate, onComplete) {
    this.duration = duration;
    this.onUpdate = onUpdate;
    this.onComplete = onComplete;
  }
  start() {
    this.clear();
    this.startTime = performance.now();
    this.#previousTimestamp = this.startTime;
    this.elapsedTime = 0;
    this.#animationFrameHandle = requestAnimationFrame(this.#animationFrameHandler);
  }
  pause() {
    this.isPaused = true;
    if (this.#animationFrameHandle != null) {
      cancelAnimationFrame(this.#animationFrameHandle);
    }
  }
  resume() {
    this.isPaused = false;
    this.#previousTimestamp = performance.now();
    this.#animationFrameHandle = requestAnimationFrame(this.#animationFrameHandler);
  }
  update(timestamp) {
    const delta = timestamp - this.#previousTimestamp;
    this.elapsedTime += delta;
    this.#previousTimestamp = timestamp;
    const timeLeft = this.duration - this.elapsedTime;
    if (this.onUpdate != null) {
      this.onUpdate(timestamp, timeLeft);
    }
    if (timeLeft > 0) {
      this.#animationFrameHandle = requestAnimationFrame(this.#animationFrameHandler);
    } else {
      if (this.onComplete != null) {
        this.onComplete();
      }
      this.clear();
    }
  }
  clear() {
    if (this.#animationFrameHandle != null) {
      cancelAnimationFrame(this.#animationFrameHandle);
    }
    this.isPaused = false;
  }
};

// src/docs-editor.ts
var DocsEditorEvent = /* @__PURE__ */ ((DocsEditorEvent2) => {
  DocsEditorEvent2["OpenDocument"] = "opendoc";
  DocsEditorEvent2["CloseDocument"] = "closedoc";
  DocsEditorEvent2["SaveTimeoutComplete"] = "savetimeoutcomplete";
  return DocsEditorEvent2;
})(DocsEditorEvent || {});
var LAST_OPENED_PAGE_KEY = "last-opened-id";
var DEFAULT_DURATION_MILLISECONDS = 1e3;
var COMPONENT_STYLESHEET2 = new CSSStyleSheet();
COMPONENT_STYLESHEET2.replaceSync(docs_editor_default);
var COMPONENT_TAG_NAME4 = "docs-editor";
var DocsEditorElement = class extends HTMLElement {
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  #datastore;
  #cache;
  #navItemTemplateContent;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = docs_editor_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET2);
    this.#datastore = new IndexedDBManager();
    this.#cache = new Cache(this.#datastore, "documents");
    const customTemplate_navItem = this.querySelector('template[slot="nav-item"]');
    this.#navItemTemplateContent = customTemplate_navItem != null ? customTemplate_navItem.content : this.findElement("nav-item-template").content;
  }
  #isInitialized = false;
  async #init() {
    if (this.#isInitialized == true) {
      return;
    }
    await this.#datastore.init({
      name: "docs-editor-cache",
      version: 1
    });
    this.updateDocumentsMenu();
    const router = this.findElement("router");
    const lastOpenedPage = await this.#cache.getValue(LAST_OPENED_PAGE_KEY);
    if (lastOpenedPage != null) {
      router.navigate(lastOpenedPage);
    }
    router.addRouteLinkClickHandlers(this.findElement("menu"));
    this.#isInitialized = true;
  }
  connectedCallback() {
    this.addEventListener("click", this.#boundClickHandler);
    this.findElement("router").addEventListener("change", this.#boundPathChangeHandler);
    this.findElement("document-content").addEventListener("keyup", this.#boundKeyUpHandler);
    this.findElement("document-title").addEventListener("keyup", async (event) => {
      if (this.currentDocument == null) {
        return;
      }
      const input = event.currentTarget;
      this.currentDocument.navigationItemLabel = input.value;
      await this.saveDocument(this.currentDocument);
      const navigationItem = this.shadowRoot.querySelector(`[data-route="doc/${this.currentDocument.id}"]`);
      if (navigationItem == null) {
        return;
      }
      navigationItem.textContent = this.currentDocument.navigationItemLabel;
    });
    assignClassAndIdToPart(this.shadowRoot);
    this.#init();
  }
  disconnectedCallback() {
    this.removeEventListener("click", this.#boundClickHandler);
  }
  async openNewDocument() {
    const document2 = new MarkdownDocument();
    await this.saveDocument(document2);
    await this.updateDocumentsMenu();
    this.findElement("router").navigate(`doc/${document2.id}`);
  }
  currentDocument;
  async openDocument(document2) {
    console.log("document");
    await this.closeDocument();
    await this.updateDocument(document2);
    this.findElement("document-content").value = document2.content;
    this.findElement("document-title").value = document2.navigationItemLabel;
    this.currentDocument = document2;
    this.setAttribute("target", document2.id);
    this.part.add("target");
    this.#cache.setValue(LAST_OPENED_PAGE_KEY, `doc/${document2.id}`);
  }
  async updateDocument(document2) {
    this.findElement("document").innerHTML = await d.parse(document2.content);
  }
  async closeDocument() {
    if (this.currentDocument == null) {
      return;
    }
    await this.saveDocument(this.currentDocument);
    this.findElement("document-title").value = "";
    this.findElement("document-content").value = "";
    this.removeAttribute("target");
    this.part.remove("target");
    this.currentDocument = void 0;
  }
  async getDocument(id) {
    const documentRecord = await this.#cache.getValue(id);
    if (documentRecord == null) {
      return null;
    }
    const document2 = JSON.parse(documentRecord);
    return document2;
  }
  async saveDocument(document2) {
    const documentRecord = JSON.stringify(document2);
    console.log(documentRecord);
    await this.#cache.setValue(document2.id, documentRecord);
  }
  async updateDocumentsMenu() {
    const navigationItemDescription = this.#navItemTemplateContent.cloneNode(true).querySelector("*");
    if (navigationItemDescription == null) {
      return;
    }
    const nav = this.findElement("nav");
    nav.innerHTML = "";
    const values = (await this.#cache.getAllValues()).filter((item) => item != null);
    for (let i = 0; i < values.length; i++) {
      if (!values[i].startsWith("{")) {
        continue;
      }
      const navigationItem = navigationItemDescription.cloneNode(true);
      try {
        const document2 = JSON.parse(values[i]);
        navigationItem.textContent = document2.navigationItemLabel;
        navigationItem.setAttribute("data-route", `doc/${document2.id}`);
        nav.append(navigationItem);
      } catch (exception) {
        console.error(exception);
      }
    }
  }
  toggleMarkdownGuide() {
    if (this.getAttribute("markdown-guide") == null) {
      this.openMarkdownGuide();
    } else {
      this.closeMarkdownGuide();
    }
  }
  openMarkdownGuide() {
    this.toggleAttribute("markdown-guide", true);
    this.part.add("markdown-guide");
  }
  closeMarkdownGuide() {
    this.toggleAttribute("markdown-guide", false);
    this.part.remove("markdown-guide");
  }
  #boundClickHandler = this.#onClick.bind(this);
  #onClick(event) {
    const composedPath = event.composedPath();
    console.log(composedPath);
    const newDocumentButton = composedPath.find((item) => item instanceof HTMLButtonElement && item.id.indexOf("new-document") > -1);
    if (newDocumentButton != null) {
      this.openNewDocument();
      return;
    }
    const markdownGuideButton = composedPath.find((item) => item instanceof HTMLButtonElement && item.id == "markdown-guide-button");
    if (markdownGuideButton != null) {
      this.toggleMarkdownGuide();
      return;
    }
    const exportButton = composedPath.find((item) => item instanceof HTMLButtonElement && item.id == "export-button");
    if (exportButton != null) {
      console.log("export");
      return;
    }
  }
  #boundPathChangeHandler = this.#onPathChange.bind(this);
  async #onPathChange(event) {
    const customEvent = event;
    if (customEvent.detail.route == this.findElement("welcome")) {
      if (this.#isInitialized == true) {
        await this.closeDocument();
        this.#cache.setValue(LAST_OPENED_PAGE_KEY, "");
      }
      return;
    } else if (customEvent.detail.route == this.findElement("help")) {
      await this.closeDocument();
      this.#cache.setValue(LAST_OPENED_PAGE_KEY, "help");
      return;
    }
    const documentId = event.target?.getAttribute("path")?.substring(4);
    if (documentId == null || event.detail.route != this.findElement("document")) {
      return;
    }
    const document2 = await this.getDocument(documentId);
    if (document2 == null) {
      return;
    }
    await this.openDocument(document2);
  }
  #boundKeyUpHandler = this.#onKeyUp.bind(this);
  #onKeyUp(event) {
    if (this.currentDocument == null) {
      return;
    }
    this.currentDocument.content = this.findElement("document-content").value ?? "";
    this.endTimeout();
    requestAnimationFrame(() => {
      this.startTimeout();
    });
  }
  #timeout;
  // #animationFrameHandle?: ReturnType<typeof requestAnimationFrame>;
  startTimeout() {
    this.#timeout = new ProgressTimeout(this.saveTimeoutDuration, this.timeout_onAnimationFrame.bind(this), async () => {
      this.#timeout = void 0;
      const result = this.dispatchEvent(new CustomEvent("savetimeoutcomplete" /* SaveTimeoutComplete */, { cancelable: true, bubbles: true }));
      if (this.currentDocument == null) {
        return;
      }
      await this.saveDocument(this.currentDocument);
      await this.updateDocument(this.currentDocument);
    });
    this.#timeout.start();
  }
  pauseTimeout() {
    if (this.#timeout != null) {
      this.#timeout.pause();
    }
  }
  resumeTimeout() {
    if (this.#timeout != null) {
      this.#timeout.resume();
    }
  }
  endTimeout() {
    if (this.#timeout != null) {
      this.#timeout.clear();
    }
  }
  timeout_onAnimationFrame(timestamp, timeLeft) {
    let progress = 100 * timeLeft / this.#timeout.duration;
    if (progress % 10 == 0) {
      console.log(progress);
    }
  }
  get saveTimeoutDuration() {
    const durationAttribute = this.getAttribute("duration");
    return durationAttribute != null ? parseInt(durationAttribute) : DEFAULT_DURATION_MILLISECONDS;
  }
  // static observedAttributes = [''];
  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (attributeName == "") {
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME4) == null) {
  customElements.define(COMPONENT_TAG_NAME4, DocsEditorElement);
}
export {
  DocsEditorElement,
  DocsEditorEvent
};
