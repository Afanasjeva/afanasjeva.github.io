$(function(){
    $("#signup_form").validate({
        rules:{
            name:{
                required: true,
                minlength: 2,
                maxlength: 20
            },
           /* email:{
                required: true,
                email: true
            },*/
            password_1: {
                required: true,
                minlength: 6
            },
            password_2: {
                required: true,
                minlength: 6,
                equalTo: "#password_1"
            }
        },

        messages:{
            name:{
                required: "This field is required",
                minlength: "Name should be longer than 1 character",
                maxlength: "Name should be shorter than 20 character"
            },
            /*email:{
                required: "This field is required",
                email: "E-mail should be valid"
            },*/
            password_1:{
                required: "This field is required",
                minlength: "Password should be at least 6 characters"
            },
            password_2:{
                required: "This field is required",
                minlength: "Password should be at least 6 characters",
                equalTo: "Passwords are not consistent"
            }
        },
        errorClass: "invalid",
        validClass: "valid"
    });

    var email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = $('.email'),
        emailText;

    email.on('blur',function(){
        if(email.val() != ''){
            if(email.val().search(email_pattern) == 0){
                emailText = "";
                $('.signup_form_submit_btn').attr('disabled', false);
                email.removeClass('invalid');
                email.addClass('valid');
            }else{
                emailText = "Email address should be valid";
                $('.signup_form_submit_btn').attr('disabled', true);
                email.removeClass('valid');
                email.addClass('invalid');
                email.insertAfter( $( "label.invalid" ).text(emailText) );
            }
        }else{
            emailText = 'Email is required';
        }
    });
    $("#signup_form").on('submit',function(e){
        e.preventDefault();
        var signup_form_data = $(this).serialize();
        var xhr = new XMLHttpRequest();
        console.log(signup_form_data);
        console.log('xhr: ',xhr);
        $.ajax({
            type: 'POST',
            url: 'signup_form_res.php',
            data: signup_form_data,
            success: function(signup_form_data) {
                console.log('result: ' + signup_form_data);
            },
            error:  function(xhr, str){
                console.log('Возникла ошибка: ' + xhr.status + ': ' + xhr.statusText);
                console.log('xhr: ',xhr);

            },
            complete: function(signup_form_data) {
                console.log('complete: ' + signup_form_data);
            }
        });
    });
});