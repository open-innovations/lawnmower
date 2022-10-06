import * as fs from 'fs';
import * as esbuild from "esbuild";
import { minify } from "terser";

const buildOpts = {
  entryPoints: {
    'oi-turf': 'src/oi-turf.mjs'
  },
  outdir: 'dist',
  format: 'iife',
  globalName: 'turf',
  bundle: true,
  minify: false,
  platform: 'browser',
  write: false,
};

const result = esbuild.buildSync(buildOpts);

Promise.all(result.outputFiles.map((out) => {
  const content = new TextDecoder("utf-8").decode(out.contents);

  return minify(content, {
    sourceMap: false,
    compress: {
      booleans_as_integers: false, // Causes issues with turf if true
      // drop_console: true,
      passes: 2,
    },
    format: {
      comments: false,
    }
  }).then(result => ({ path: out.path, ...result }));
})).then(result => {
  return result.forEach(x => fs.writeFileSync(x.path, x.code));
  // console.log(result.code);  // minified output: function add(n,d){return n+d}
  // console.log(result.map);  // source map
});


