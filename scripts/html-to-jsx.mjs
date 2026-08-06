import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const LEGACY = path.join(ROOT, "legacy");
const OUT_PAGES = path.join(ROOT, "src", "components", "pages");
const OUT_COMPONENTS = path.join(ROOT, "src", "components");

const PAGE_MAP = [
  { file: "index.html", out: "HomeContent.tsx", name: "HomeContent", route: "/" },
  { file: "about.html", out: "AboutContent.tsx", name: "AboutContent", route: "/about" },
  { file: "contact.html", out: "ContactContent.tsx", name: "ContactContent", route: "/contact" },
  { file: "noc.html", out: "NocContent.tsx", name: "NocContent", route: "/noc" },
  { file: "csec.html", out: "CsecContent.tsx", name: "CsecContent", route: "/csec" },
  { file: "odoo.html", out: "OdooContent.tsx", name: "OdooContent", route: "/odoo" },
  {
    file: "service-details.html",
    out: "ServiceDetailsContent.tsx",
    name: "ServiceDetailsContent",
    route: "/service-details",
  },
  { file: "service2.html", out: "Service2Content.tsx", name: "Service2Content", route: "/service2" },
  { file: "service3.html", out: "Service3Content.tsx", name: "Service3Content", route: "/service3" },
  { file: "service4.html", out: "Service4Content.tsx", name: "Service4Content", route: "/service4" },
  { file: "service5.html", out: "Service5Content.tsx", name: "Service5Content", route: "/service5" },
  { file: "service6.html", out: "Service6Content.tsx", name: "Service6Content", route: "/service6" },
  { file: "service7.html", out: "Service7Content.tsx", name: "Service7Content", route: "/service7" },
  { file: "service8.html", out: "Service8Content.tsx", name: "Service8Content", route: "/service8" },
];

const LINK_MAP = [
  ["index.html", "/"],
  ["about.html", "/about"],
  ["contact.html", "/contact"],
  ["noc.html", "/noc"],
  ["csec.html", "/csec"],
  ["odoo.html", "/odoo"],
  ["service-details.html", "/service-details"],
  ["service2.html", "/service2"],
  ["service3.html", "/service3"],
  ["service4.html", "/service4"],
  ["service5.html", "/service5"],
  ["service6.html", "/service6"],
  ["service7.html", "/service7"],
  ["service8.html", "/service8"],
  ["project-details.html", "/service-details"],
  ["mail.php", "/api/contact"],
];

const ATTR_MAP = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  readonly: "readOnly",
  maxlength: "maxLength",
  minlength: "minLength",
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  colspan: "colSpan",
  rowspan: "rowSpan",
  usemap: "useMap",
  frameborder: "frameBorder",
  allowfullscreen: "allowFullScreen",
  referrerpolicy: "referrerPolicy",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-miterlimit": "strokeMiterlimit",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-opacity": "strokeOpacity",
  "fill-opacity": "fillOpacity",
  "fill-rule": "fillRule",
  "clip-path": "clipPath",
  "clip-rule": "clipRule",
  "font-size": "fontSize",
  "font-family": "fontFamily",
  "font-weight": "fontWeight",
  "text-anchor": "textAnchor",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "xlink:href": "href",
  "xml:space": "xmlSpace",
  autocomplete: "autoComplete",
  autofocus: "autoFocus",
  crossorigin: "crossOrigin",
  datetime: "dateTime",
  enctype: "encType",
  formaction: "formAction",
  formenctype: "formEncType",
  formmethod: "formMethod",
  formnovalidate: "formNoValidate",
  formtarget: "formTarget",
  hreflang: "hrefLang",
  inputmode: "inputMode",
  novalidate: "noValidate",
  srcset: "srcSet",
  spellcheck: "spellCheck",
};

const VOID_TAGS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

function rewriteLinksAndAssets(html) {
  let out = html;
  for (const [from, to] of LINK_MAP) {
    out = out.replaceAll(`href="${from}"`, `href="${to}"`);
    out = out.replaceAll(`href='${from}'`, `href='${to}'`);
    out = out.replaceAll(`action="${from}"`, `action="${to}"`);
  }
  out = out.replace(/(src|href)=("|\')assets\//g, "$1=$2/assets/");
  out = out.replace(/url\((['"]?)assets\//g, "url($1/assets/");
  // Cloudflare email junk → plain mailto
  out = out.replace(
    /href="\/cdn-cgi\/l\/email-protection#[^"]*"/g,
    'href="mailto:info@clarex.co"',
  );
  out = out.replace(
    /<span\s+class="__cf_email__"[^>]*>[\s\S]*?<\/span>/g,
    "info@clarex.co",
  );
  out = out.replace(
    /\[email&#160;protected\]/g,
    "info@clarex.co",
  );
  return out;
}

function convertStyle(value) {
  const declarations = value
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean);
  const obj = {};
  for (const decl of declarations) {
    const idx = decl.indexOf(":");
    if (idx === -1) continue;
    let prop = decl.slice(0, idx).trim();
    const val = decl.slice(idx + 1).trim();
    prop = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    if (prop === "float") prop = "cssFloat";
    obj[prop] = val;
  }
  const inner = Object.entries(obj)
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
    .join(", ");
  return `{{ ${inner} }}`;
}

function convertAttrs(attrString) {
  if (!attrString || !attrString.trim()) return "";

  let result = "";
  const re =
    /([^\s=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match;
  while ((match = re.exec(attrString)) !== null) {
    let name = match[1];
    if (!name || name === "/") continue;
    const rawVal = match[2] ?? match[3] ?? match[4];
    const lower = name.toLowerCase();

    if (lower.startsWith("on") && lower.length > 2) {
      // Drop inline handlers; interactions live in SiteEffects
      continue;
    }

    if (lower === "style" && rawVal != null) {
      result += ` style=${convertStyle(rawVal)}`;
      continue;
    }

    const mapped = ATTR_MAP[lower] || ATTR_MAP[name] || name;
    // data-* and aria-* stay as-is (aria should be camelCase for some)
    let jsxName = mapped;
    if (lower.startsWith("aria-")) {
      jsxName = "aria-" + lower.slice(5);
    } else if (lower.startsWith("data-")) {
      jsxName = lower;
    }

    if (rawVal == null) {
      // boolean attribute
      result += ` ${jsxName}`;
      continue;
    }

    // numeric-looking values for known numeric props can stay as strings — safer
    result += ` ${jsxName}="${rawVal.replace(/"/g, "&quot;")}"`;
  }
  return result;
}

function htmlToJsx(html) {
  let s = rewriteLinksAndAssets(html);

  // Normalize odd breaks
  s = s.replace(/<\/br>/gi, "<br />");
  s = s.replace(/<br\s*>/gi, "<br />");

  // Drop HTML comments entirely (avoids orphaned tags from half-commented markup)
  s = s.replace(/<!--[\s\S]*?-->/g, "");

  // Orphan </a> after commented fancybox opener (legacy HTML quirk)
  s = s.replace(
    /<\/svg>\s*<\/a>\s*(<img[^>]*class\s*=\s*"[^"]*video-img[^"]*")/gi,
    "</svg>$1",
  );

  // Remove script / link / style / noscript blocks from content extracts
  s = s.replace(/<script[\s\S]*?<\/script>/gi, "");
  s = s.replace(/<noscript[\s\S]*?<\/noscript>/gi, "");

  // Convert tags
  s = s.replace(/<\/?([a-zA-Z][\w:-]*)(\s[^>]*)?\s*\/?>/g, (full, tag, attrs = "") => {
    const isClose = full.startsWith("</");
    const selfClosingSlash = /\/\s*>$/.test(full);
    const lower = tag.toLowerCase();

    if (isClose) {
      if (VOID_TAGS.has(lower)) return "";
      return `</${lower === "fragment" ? "" : lower}>`;
    }

    const jsxAttrs = convertAttrs(attrs || "");
    if (VOID_TAGS.has(lower) || selfClosingSlash) {
      return `<${lower}${jsxAttrs} />`;
    }
    return `<${lower}${jsxAttrs}>`;
  });

  // Fix empty alt attributes already handled
  // Escape lone `{` / `}` in text that aren't JSX expressions — rare in this site
  // Convert &nbsp; keep as-is in JSX text (valid)

  return s;
}

function extractBetween(html, startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker, start);
  if (start === -1 || end === -1) return null;
  return html.slice(start, end + endMarker.length);
}

function extractMainContent(html) {
  const headerEnd = html.indexOf("</header>");
  const footerStart = html.indexOf("<footer>");
  if (headerEnd === -1 || footerStart === -1) {
    throw new Error("Could not find header/footer boundaries");
  }
  return html.slice(headerEnd + "</header>".length, footerStart).trim();
}

function extractSidebarAndHeader(html) {
  const bodyClassMatch = html.match(/<body[^>]*>/i);
  const bodyStart = html.indexOf(bodyClassMatch[0]) + bodyClassMatch[0].length;
  const headerEnd = html.indexOf("</header>") + "</header>".length;
  return html.slice(bodyStart, headerEnd).trim();
}

function extractFooter(html) {
  return extractBetween(html, "<footer>", "</footer>");
}

function wrapComponent(name, jsx, extraImports = "") {
  return `/* eslint-disable @next/next/no-img-element */
${extraImports}export default function ${name}() {
  return (
    <>
${indent(jsx, 6)}
    </>
  );
}
`;
}

function indent(text, spaces) {
  const pad = " ".repeat(spaces);
  return text
    .split("\n")
    .map((line) => (line.trim() ? pad + line : line))
    .join("\n");
}

function main() {
  fs.mkdirSync(OUT_PAGES, { recursive: true });
  fs.mkdirSync(OUT_COMPONENTS, { recursive: true });

  const indexHtml = fs.readFileSync(path.join(LEGACY, "index.html"), "utf8");

  // Header (sidebar + header)
  const headerHtml = extractSidebarAndHeader(indexHtml);
  const headerJsx = htmlToJsx(headerHtml);
  // We'll replace Header with a handcrafted Link-aware version; still save raw for reference
  fs.writeFileSync(
    path.join(OUT_COMPONENTS, "_generatedHeader.tsx"),
    wrapComponent("GeneratedHeader", headerJsx),
  );

  const footerHtml = extractFooter(indexHtml);
  const footerJsx = htmlToJsx(footerHtml);
  fs.writeFileSync(
    path.join(OUT_COMPONENTS, "Footer.tsx"),
    wrapComponent("Footer", footerJsx),
  );

  for (const page of PAGE_MAP) {
    const html = fs.readFileSync(path.join(LEGACY, page.file), "utf8");
    const main = extractMainContent(html);
    const jsx = htmlToJsx(main);
    fs.writeFileSync(
      path.join(OUT_PAGES, page.out),
      wrapComponent(page.name, jsx),
    );
    console.log("Wrote", page.out);
  }

  console.log("Done.");
}

main();
