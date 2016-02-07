export const html = (html) => `<!doctype html>
<html>
  <head>
    <title>react-drops</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="/static/bundle.js"></script>
  </body>
</html>
`
