$('#sendPhone').on('click', function() {
    let phone = $('.phon').val();
    let modalSuccess = $('.modal-content--success')
    let modalError = $('.modal-content--error')
    let modalMain = $('.modal-content')

    if(phone == '') {
        $('.text-error').text('Введите номер телефона'),
        $('.phon').css('border', '2px solid #ff0000');
        return false;
    } else if(phone !== '') {
        modalMain.css('display','none'),
        modalSuccess.css('display', 'flex');
        
        return false;
    }
    


   $.ajax({
        url: '/busyboard/mail.php',
        type: 'POST',
        cache: false,
        data: { 'phone': phone },
        dataType: 'html',
        beforeSend: function() {
            $('#sendPhone').prop("disabled", true);
        },
        success: function(e) {
            $('#sendPhone').prop("disabled", false);
            $('.modal-content').trigger('reset');
           
        }
    });

  
});