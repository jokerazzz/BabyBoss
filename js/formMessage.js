$('#sendMessage').on('click', function() {
    let name = $('#name').val().trim();
    let phone = $('#phone').val().trim();
    let email = $('#email').val().trim();
    let message = $('#message').val().trim();

    if(name == "") {
        $('#name').css('border', '2px solid #ff0000');
        return false;
    } else if(phone == "") {
        $('#phone').css('border', '2px solid #ff0000');
        return false;
    } else if(email == "") {
        $('#email').css('border', '2px solid #ff0000');
        return false;
    } else if(message.length < 10) {
        $('#message').css('border', '2px solid #ff0000');
        return false;
    } 
        $('.error-message').text('Ваше сообщение отправлено!');
    


   $.ajax({
        url: '/busyboard/message.php',
        type: 'POST',
        cache: false,
        data: { 'name': name, 'phone': phone, 'email': email, 'message': message },
        dataType: 'html',
        beforeSend: function() {
            $('#sendMessage').prop("disabled", true);
        },
        success: function(e) {
            $('#sendMessage').prop("disabled", false);
            $('.feedback__inner').trigger('reset');
           
        }
    });

  
});