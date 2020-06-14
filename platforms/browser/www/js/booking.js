$(document).ready(function(){

    $('#booking').on('click', function (e) {
  
        e.preventDefault();
        e.stopImmediatePropagation();
        var movid = $("#movid").val();
        var username = $("#username").val();
        var cinema = $("#cinema").val();
        var title = $('#title').val();
        var studio = $("#studio").val();
        var date = $("#datepicker_1").val();
        var jam = $("#jam").val();
        
        var dataString="movieid="+ movid +"&username="+ username +"&cinema="+ cinema +"&movie="+ title +"&studio="+ studio + "&datepicker_1="+ date +"&jam="+ jam;
            $.ajax({
                type: "POST",
                url: "https://192.168.43.115/mserver/php/tambah.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                success: function(data) 
                {  
                    if (data == 'success') {
                        alert('Booking berhasil');
                        window.location.href='home.html'; // website
                        //$.mobile.changePage('home.html', {transition: 'slide'}); // jquery mobile
                    } else if(data == 'error')
                        {alert('Maaf, gagal booking tiket');}               
                },
                error: function(data)
                {
                    alert('Connection Error');
                }
            })          
    });

});