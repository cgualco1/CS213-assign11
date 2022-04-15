function getTotal() {
    var finalTotal = 0
    if(document.getElementById('option1').checked){
        var price1 = parseFloat(document.getElementById('option1').value);
    }else{
        price1 = 0
    }
    if(document.getElementById('option2').checked){
        var price2 = parseFloat(document.getElementById('option2').value);
    }else {
        price2 = 0
    } 
    if(document.getElementById('option3').checked){
        price3 = parseFloat(document.getElementById('option3').value);
    }else{
        price3 = 0
    } 
    if(document.getElementById('option4').checked){
        price4 = parseFloat(document.getElementById('option4').value);
    }else{
        price4 = 0
    }
    finalTotal = price1 + price2 + price3 + price4
    document.getElementById('total').value = '$' + finalTotal.toFixed(2);
}

function formValidation(){
    var fname = document.forms["myForm"]["first_name"].value;
    var lname = document.forms["myForm"]["last_name"].value;
    var address = document.forms["myForm"]["address"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var card = document.forms["myForm"]["credit_card"].value;
    var cardnumber = "((?:(?:\\d{4}[- ]){3}\\d{4}|\\d{16}))(?![\\d])";
    var expiry = document.forms["myForm"]["exp_date"].value;
    var expdate = "(0[0-9]|10|11|12)/20[2-9][1-9]$"

    if (fname == "" || fname == null) {
        document.forms["myForm"]["first_name"].focus();
        document.forms["myForm"]["first_name"].style.borderColor = "Red";
        document.getElementById("warning1").innerHTML = "Please enter Your First Name";
        document.getElementById("warning1").style.color = "red";
        document.getElementById("warning1").style.fontWeight = "bold";
        return false;
    }else if (lname == "" || lname == null) {
        document.forms["myForm"]["first_name"].style.borderColor = "Green";
        document.getElementById("warning1").innerHTML = "First Name";
        document.getElementById("warning1").style.color = "black";
        document.getElementById("warning1").style.fontWeight = "bold";
        document.forms["myForm"]["last_name"].focus();
        document.forms["myForm"]["last_name"].style.borderColor = "Red";
        document.getElementById("warning2").innerHTML = "Please enter Your Last Name";
        document.getElementById("warning2").style.color = "red";
        document.getElementById("warning2").style.fontWeight = "bold";
        return false;
    }else if (address == "" || address == null) {
        document.forms["myForm"]["last_name"].style.borderColor = "Green";
        document.getElementById("warning2").innerHTML = "Last Name";
        document.getElementById("warning2").style.color = "black";
        document.getElementById("warning2").style.fontWeight = "bold";
        document.forms["myForm"]["address"].focus();
        document.forms["myForm"]["address"].style.borderColor = "Red";
        document.getElementById("warning3").innerHTML = "Please enter Your Address";
        document.getElementById("warning3").style.color = "red";
        document.getElementById("warning3").style.fontWeight = "bold";
        return false;
    }else if (phone == "" || phone == null) {
        document.forms["myForm"]["address"].style.borderColor = "Green";
        document.getElementById("warning3").innerHTML = "Mailing Address";
        document.getElementById("warning3").style.color = "black";
        document.getElementById("warning3").style.fontWeight = "bold";
        document.forms["myForm"]["phone"].focus();
        document.forms["myForm"]["phone"].style.borderColor = "Red";
        document.getElementById("warning4").innerHTML = "Please enter Your Phone Number";
        document.getElementById("warning4").style.color = "red";
        document.getElementById("warning4").style.fontWeight = "bold";
        return false;
    }else if (!phone.match(phoneno)) {
        document.forms["myForm"]["phone"].focus();
        document.getElementById("warning4").innerHTML = "Please enter a Valid Phone Number";
        document.getElementById("warning4").style.color = "red";
        document.getElementById("warning4").style.fontWeight = "bold";
        return false;
    }else if (card == "" || card == null) {
        document.forms["myForm"]["phone"].style.borderColor = "Green";
        document.getElementById("warning4").innerHTML = "Phone Number";
        document.getElementById("warning4").style.color = "black";
        document.getElementById("warning4").style.fontWeight = "bold";
        document.forms["myForm"]["credit_card"].focus();
        document.forms["myForm"]["credit_card"].style.borderColor = "Red";
        document.getElementById("warning5").innerHTML = "Please enter Your Credit Card Number";
        document.getElementById("warning5").style.color = "red";
        document.getElementById("warning5").style.fontWeight = "bold";
        return false;
    }else if (!card.match(cardnumber)){
        document.forms["myForm"]["credit_card"].focus();
        document.getElementById("warning5").innerHTML = "Please enter a Valid Credit Card Number";
        document.getElementById("warning5").style.color = "red";
        document.getElementById("warning5").style.fontWeight = "bold";
        return false;
    }else if (expiry == "" || expiry == null) {
        document.forms["myForm"]["credit_card"].style.borderColor = "Green";
        document.getElementById("warning5").innerHTML = "Credit Card Number";
        document.getElementById("warning5").style.color = "black";
        document.getElementById("warning5").style.fontWeight = "bold";
        document.forms["myForm"]["exp_date"].focus();
        document.forms["myForm"]["exp_date"].style.borderColor = "Red";
        document.getElementById("warning6").innerHTML = "Please enter the Expiry Date";
        document.getElementById("warning6").style.color = "red";
        document.getElementById("warning6").style.fontWeight = "bold";
        return false;
    }else if (!expiry.match(expdate)) {
        document.forms["myForm"]["exp_date"].focus();
        document.getElementById("warning6").innerHTML = "Please enter a Valid Expiry Date";
        document.getElementById("warning6").style.color = "red";
        document.getElementById("warning6").style.fontWeight = "bold";
        return false;
    }else {
        document.forms["myForm"]["exp_date"].style.borderColor = "Green";
        document.getElementById("warning6").innerHTML = "Expiry Date";
        document.getElementById("warning6").style.color = "black";
        document.getElementById("warning6").style.fontWeight = "bold";
    }
}






