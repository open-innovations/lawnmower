# lawnmower

> Trimming turf

This repo creates a streamlined version of the
[Turf.js](https://turfjs.org/) library, containing only the
required exports.

To add to the list of available functions, simply edit the 
list of exports in the [`src/oi-turf.mjs`](src/oi-turf.mjs).

Once committed and pushed to the server, a GitHub action will
create a new version of the file which will be availale in
[`dist/oi-turf.js`](dist/oi-turf.js).

The build uses [`esbuild`](https://esbuild.github.io/), bundler
executed via the [`build.mjs`](build.mjs) script.
