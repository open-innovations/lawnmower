import * as esbuild from "esbuild";

const buildOpts = {
  entryPoints: {
    'oi-turf': 'src/oi-turf.mjs'
  },
  outdir: 'dist',
  format: 'iife',
  globalName: 'turf',
  bundle: true,
  minify: true,
  platform: 'browser',
};

esbuild.buildSync(buildOpts);
