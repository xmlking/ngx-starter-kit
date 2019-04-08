const brotli = require("brotli");
const fs = require("fs");

const brotliSettings = {
  extension: "br",
  skipLarger: true,
  mode: 1, // 0 = generic, 1 = text, 2 = font (WOFF2)
  quality: 10, // 0 - 11,
  lgwin: 12, // default
};

fs.readdirSync("dist/apps/webapp/").forEach(file => {
  if (file.endsWith(".js") || file.endsWith(".css") || file.endsWith(".html")) {
    const result = brotli.compress(fs.readFileSync("dist/apps/webapp/" + file), brotliSettings);
    fs.writeFileSync("dist/" + file + ".br", result);
  }
});

// {
//   "name": "my-ng-cli-app",
//   "scripts": {
//   "build-prod": "ng build --prod && node compress.js"
// },
// }
