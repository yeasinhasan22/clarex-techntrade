import fs from "fs";

const c = fs.readFileSync("src/components/_generatedHeader.tsx", "utf8");
const i = c.indexOf("clarextechwhite");
console.log(JSON.stringify(c.slice(i, i + 90)));
const matches = c.match(/alt\s*\/|alt\s*>|alt=""/g);
console.log(matches?.slice(0, 15));
