var number = document.getElementById('number'),
    result = document.getElementById('result');

number.focus();

function NumbToStr(){
    var init_array = number.value.split("").reverse(),
        word_array = [
                        ['','один','два','три','четыре','пять','шесть','семь','восемь','девять'],
                        ['','','двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто'],
                        ['','сто','двести','триста','четыреста','пятьсот','шестьсот','семьсот','восемьсот','девятьсот'],
                        ['','одна','две','три','четыре','пять','шесть','семь','восемь','девять'],
                        ['десять','одиннадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'],

        ],
        period_array = [
                            ['тысяча','тысячи','тысяч',''],
                            ['миллион','миллиона','миллионов',''],
                            ['миллиард','миллиарда','миллиардов',''],
                        ],
        m,
        result_array = Array(init_array.length);

if (init_array.length == 1 && init_array[0] == 0){
    result_array[0]='ноль';
} else {
    for (var i=0; i < init_array.length; i++){
        k = i;
        if(i > 2){
            k = i%3;//позиция в каждой тройке разрядов, счет ведем с конца
            m = Math.floor(i/3);//какая тройка разрядов по счету с конца
        }
        if(init_array[i] == 0){
            p = 2;
        }else if(init_array[i] == 1){
            p = 0;
        } else if (init_array[i]>=2 && init_array[i]<=4){
            p = 1;
        } else if (init_array[i]>=5){
            p = 2;
        }
        if (k==0 && init_array[i+1]==1 ){ k = word_array.length - 1; p = 2;}//второй десяток
        if (k==0 && m==1){ k = word_array.length - 2; }//женский род числителных

        result_array[i] = word_array[k][init_array[i]];

        if (m > 0 && i%3==0  && (init_array.length <= i+3 || init_array[i]!=0 || init_array[i+1]!=0 || init_array[i+2]!=0)){
            result_array[i] += ' ' + period_array[m-1][p];
        }
    }
}
    result.innerHTML = result_array.reverse().join(" ");
};

number.addEventListener("change", function(){
    NumbToStr();
});