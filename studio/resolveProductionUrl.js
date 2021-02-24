// ./resolveProductionUrl.js
export default function resolveProductionUrl(document) {
    return `https://sanity-eleventy-blog-web-ozibkb1p.netlify.app/${document.slug.current}/?preview=true`
  }