import fs from "fs";

const file = "public/assets/js/preloader.js";
let c = fs.readFileSync(file, "utf8");
c = c.replace(
  /particleground\(document\.getElementById\('particles-foreground'\),/,
  "void function(){var el=document.getElementById('particles-foreground');if(el)particleground(el,",
);
c = c.replace(
  /particleRadius:4,\}\);particleground\(document\.getElementById\('particles-background'\),/,
  "particleRadius:4,});}();void function(){var el=document.getElementById('particles-background');if(el)particleground(el,",
);
c = c.replace(
  /particleRadius:2,\}\);$/,
  "particleRadius:2,});}();",
);
fs.writeFileSync(file, c);
console.log("patched preloader.js");
