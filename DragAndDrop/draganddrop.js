let y = document.getElementById('div2');

function allowDrop(ev){
  ev.preventDefault();
}

function drag(ev){
  ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev){
  ev.preventDefault();
  let data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
  y.setAttribute('style', 'display:inline-block');
}