

$(document).ready(function() {
    var username = getUrlVars()["username"];
    alert(username);
    $.getJSON("http://localhost/mserver/php/getdata.php?username="+username, function(result) {
    console.log(result);
    $.each(result, function(i, field) {
    var username     =   field.username;
    var nama     =   field.nama;
    var phone     =   field.phone;
    window.location.href = "booking.html?username="+username;
    });
 });
});
