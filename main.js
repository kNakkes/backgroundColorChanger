const button = document.querySelector('button');
const body = document.getElementById('main');
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

main.style.backgroundColor = 'violet';
button.addEventListener('click', changeBackground);

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length+1);
main.style.backgroundColor = colors[colorIndex];
}