$(document).ready(function(){

$('#signup').on('click', function (e) {
			
    e.preventDefault();
    e.stopImmediatePropagation();

    var username = $('#username').val();
    var password = $('#password').val();
    var nama = $('#nama').val();
    var phone = $('#phone').val();
    var dataString="username="+ username +"&password="+ password +"&nama="+ nama +"&phone="+ phone;
    $.ajax({
            type: "POST",
            url: "https://192.168.43.115/mserver/php/register.php",
            data: dataString,
            crossDomain: true,
            cache: false,
            success: function(data) 
            {  
                alert('Sign Up Success');
                window.location.href = "index.html";
            },
            error: function(data)
            {
                alert('Sign Up Failed!');
                window.location.href = "#";
            }
    })
    });
});