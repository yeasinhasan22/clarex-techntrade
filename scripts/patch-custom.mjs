import fs from "fs";

const file = "public/assets/js/custom.js";
let c = fs.readFileSync(file, "utf8");
const from =
  "document.querySelector('.sidebar-button').addEventListener('click',()=>document.querySelector('.main-menu').classList.toggle('show-menu'));";
const to =
  "(function(){var b=document.querySelector('.sidebar-button');var m=document.querySelector('.main-menu');if(b&&m){b.addEventListener('click',function(){m.classList.toggle('show-menu');});}})();";
if (c.includes(from)) {
  c = c.replace(from, to);
  fs.writeFileSync(file, c);
  console.log("custom.js guarded");
} else {
  console.log("pattern not found — already patched or changed");
}

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
pkg.name = "clarex-techntrade";
fs.writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");
console.log("package.json updated");
