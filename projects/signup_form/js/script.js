$(function(){
    var setStatus = function(element, elementClassAdd, infoText){
        var infoBlock = element.siblings('.form_input_info');
        element.removeClass('invalid').removeClass('valid');
        element.addClass(elementClassAdd);
        infoBlock.text(infoText);
    };

    var validateInput = function(element, pattern, message_empty, message_invalid){
        element.on('input keyup',function(){
            if(element.val() != ''){
                if(element.val().search(pattern) == 0){
                    setStatus(element, 'valid', '');
                }else{
                    setStatus(element, 'invalid', message_invalid);
                }
            }else{
                setStatus(element, 'invalid', message_empty);
            }
        });
    };

    var email = $('.email');
    var email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    validateInput(email, email_pattern, 'Email is required', 'Email address should be valid');

    var name = $('.name');
    var name_pattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    validateInput(name, name_pattern, 'Name is required', 'Name is probably incorrect');

    var password = $('.password'),
        password_1 = $('.password_1'),
        password_2 = $('.password_2'),
        password_pattern = '.{6,}';
    validateInput(password_1, password_pattern, 'Password is required', 'Minimum 6 characters');

    var passwordsMatchCheckout =  function(){
        if (password_2.val() != password_1.val()){
            setStatus(password, 'invalid', 'Passwords are not consistent');
        }else{
            setStatus(password, 'valid', '');
        }
    };

    password_1.on('blur',function(){
       if(password_1.hasClass('valid')){
           password_2.attr('disabled',false);
       }
        passwordsMatchCheckout();
    });
    password_1.on('input keydown',function(e){
        if(e.which == 9){
            if(password_1.hasClass('valid')){
                password_2.attr('disabled',false);
            }
        }
        passwordsMatchCheckout();
    });
    password_2.on('input keyup',function(){
        passwordsMatchCheckout();
    });

    $('.form_group_input').on('input keypressed',function(){
        if (email.hasClass('valid') && name.hasClass('valid') && password_2.hasClass('valid')){
            $('.signup_form_submit_btn').attr('disabled',false)
        } else {
            $('.signup_form_submit_btn').attr('disabled',true)
        }
    });

    $("#signup_form").on('submit',function(e){
        e.preventDefault();
        var signup_form_data = $(this).serialize();
        console.log(signup_form_data);
        $.ajax({
            type: 'POST',
            url: 'signup_form_res.php',
            data: signup_form_data,
            success: function(signup_form_data) {
                console.log('result: ' + signup_form_data);
            },
            error:  function(xhr){
                console.log('Возникла ошибка: ' + xhr.status + ': ' + xhr.statusText);
                console.log('xhr: ',xhr);

            },
            complete: function(signup_form_data) {
                console.log('complete: ' + signup_form_data);
                alert('ajax is complete')
            }
        });
    });
});