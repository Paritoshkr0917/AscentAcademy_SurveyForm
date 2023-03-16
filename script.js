function validate() {

    var mail = document.getElementById("email");
    var regEmail = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if (!regEmail.test(mail.value)) {

        window.alert("Please enter a valid email id");
        mail.focus();
        // return false;
    }
    else {

        document.getElementById("survey-form").submit();
        window.alert("Form Submitted Successful");
    }
}


