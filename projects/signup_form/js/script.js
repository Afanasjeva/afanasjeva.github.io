$(function(){
    var signup_form = new tFormer('signup_form', {
        errorClass: 'invalid', // новый класс для полей, которые не проходят валидацию
        timeout: 666, // валидационный таймаут
        disabledClass: 'signup_form_disabled',
        onerror: function(){  // обработчик ошибок валидации
            console.log('The field with name `' + this.name + '` is not valid');
        },

        fields: { // опции который относятся к конкретным полям
            email: {
                timeout: 500 // таймаут валидации для поля email
            }
        }
    });
});