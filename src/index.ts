import './index.css';

function appendText(text: string = 'Hello, world!!!') {
  const root = document.getElementById('root');

  const el = document.createElement('div');
  el.innerText = text;

  if (root) {
    root.appendChild(el);
  }
}

appendText();
