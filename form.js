function form(){
    var Name = document.getElementById(name).value
    var Email = document.getElementById(email).value
    var Zipcode = document.getElementById(zcode).value
    var Phone = document.getElementById(phone).value


    var Namerex=/^[a-zA-Z\-]+$/;
    var emailrex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var zipcoderex=/^\[10000-90000]/;
    var phonerex=/^\d{10}$/;

    
}