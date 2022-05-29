const $html = document.querySelector('#html');
const $css = document.querySelector('#css');
const $js = document.querySelector('#js');

$html.addEventListener('input', () => updateView());
$css.addEventListener('input', () => updateView());
$js.addEventListener('input', () => updateView());

const updateView = () => {
  document.querySelector('#viewer').srcdoc = makeDocument($html.value, $css.value, $js.value);
}

const makeDocument = (html, css, js) => {
  const makeHead = (css) => `<head><style>${css}</style></head>`;
  const makeBody = (html, js) => `<body>${html}<script>${js}</script></body>`;
  return `<!DOCTYPE html><html lang="en">${makeHead(css)}${makeBody(html, js)}</html>`;
}