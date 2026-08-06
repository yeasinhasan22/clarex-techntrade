import fs from "fs";
import path from "path";

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (full.endsWith(".tsx")) {
      let content = fs.readFileSync(full, "utf8");
      const next = content.replace(/(\s)alt(?=(\s|\/|>))/g, '$1alt=""');
      if (next !== content) {
        fs.writeFileSync(full, next);
        console.log("fixed", full);
      }
    }
  }
}

walk("src/components");
