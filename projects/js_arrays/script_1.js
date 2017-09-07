var number_1 = document.getElementById('number_1'),
    result_1 = document.getElementById('result_1');

number_1.addEventListener("change", function(){
    var init_array=number_1.value.split("");
    result_1.innerHTML = init_array[init_array.length - 2];
});