const backgroundImg = document.getElementsByClassName('background-img')[0];
const stages = document.getElementById('stages');
const footer = document.getElementsByTagName('footer')[0];

function resize() {
    backgroundImg.style.height = stages.offsetHeight + footer.offsetHeight + 40 + 'px';
}

resize();

window.onresize = resize;