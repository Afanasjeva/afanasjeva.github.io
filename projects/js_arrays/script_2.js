var number_2 = document.getElementById('number_2'),
    result_2 = document.getElementById('result_2');

number_2.addEventListener('change',function(){
    result_2.innerHTML = number_2.value.split('').reverse().join('');
});