"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/doc-editor.ts
var doc_editor_exports = {};
__export(doc_editor_exports, {
  DocEditorElement: () => DocEditorElement
});
module.exports = __toCommonJS(doc_editor_exports);

// src/doc-editor.css?raw
var doc_editor_default = `:host\r
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
    }\r
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

// src/doc-editor.html?raw
var doc_editor_default2 = '<div id="viewer">\r\n    <nav id="nav"></nav>\r\n    <path-router id="router" path="/">\r\n        <route-page id="welcome" path="/">\r\n            <div class="container">\r\n                <h2 class="header">Doc Editor</h2>\r\n                <div class="panel">\r\n                    <div class="description">\r\n                        <p>Welcome to the Doc Editor!</p>\r\n                        <p>This web app manages markdown files in a collection that can be exported as application documentation for the web.</p>\r\n                        <p>To get started, create a new doc using the button below, or in the doc navigation menu.</p>\r\n                    </div>\r\n                    <button class="button" type="button">New Document</button>\r\n                </div>\r\n            </div>\r\n        </route-page>\r\n        <route-page id="welcome" path="help">\r\n            <div class="container">\r\n                <h2 class="header">Help</h2>\r\n                <div class="panel documents-panel">\r\n                    <h3 class="header panel-header">Documents</h3>\r\n                    <div class="description">\r\n                        <p>Documents are written in <a href="" target="_blank">Markdown</a>.</p>\r\n                    </div>\r\n                </div>\r\n                <div class="panel exporting-panel">\r\n                    <h3 class="header panel-header">Exporting</h3>\r\n                    <div class="description">\r\n                        <p>Documents can be exported as either a single .json file, to be used by the doc-viewer element, or as a .</p>\r\n                        <ul class="description-list">\r\n                            <li class="description-item">Single <code>.json</code> file.</li>\r\n                            <li class="description-item">A package (<code>.zip</code>) of <code>.html</code> and <code>.css</code> files with no javascript.</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </route-page>\r\n    </path-router>\r\n\r\n    <template id="nav-item">\r\n        <a class="nav-item"></a>\r\n    </template>\r\n</div>\r\n<div id="edit-content" contenteditable="true"></div>';

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

// src/doc-editor.ts
var COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(doc_editor_default);
var COMPONENT_TAG_NAME = "doc-editor";
var DocEditorElement = class extends HTMLElement {
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = doc_editor_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
    this.#boundClickHandler = this.#onClick.bind(this);
  }
  connectedCallback() {
    this.addEventListener("click", this.#boundClickHandler);
    assignClassAndIdToPart(this.shadowRoot);
  }
  disconnectedCallback() {
    this.removeEventListener("click", this.#boundClickHandler);
  }
  #boundClickHandler;
  #onClick(event) {
    const composedPath = event.composedPath();
    console.log(composedPath);
  }
  // static observedAttributes = [''];
  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (attributeName == "") {
    }
  }
};
if (customElements.get(COMPONENT_TAG_NAME) == null) {
  customElements.define(COMPONENT_TAG_NAME, DocEditorElement);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DocEditorElement
});
