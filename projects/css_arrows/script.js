let min, max, diap,
    range = document.getElementById("range"),
    title = document.getElementById("title"),
    titleText = title.innerText,
    arrow = document.getElementById('arrow');


console.log(range.offsetWidth);
range.offsetWidth = 400;
min = range.getAttribute("min");
min = +min;
max = range.getAttribute("max");
max = +max;

range.addEventListener('change',function(){
    console.log(range.value);
    arrow.style.fontSize = range.value + 'px';
    title.innerHTML = titleText + ':  font-size = ' + range.value + 'px';
});
