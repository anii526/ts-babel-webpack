import './index.css';

function appendText(text: string = 'Горячая перезагрузка во всей своей КУРСЕЕЕЕЕЕ!!!!!!!!') {
  const root = document.getElementById('root');

  const el = document.createElement('div');
  el.innerText = text;

  if (root) {
    root.appendChild(el);
  }
}

appendText();
