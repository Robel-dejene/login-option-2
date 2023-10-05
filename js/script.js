$("body").html('<div class="login"><div id="result"></div><div id="form-box"><h1>Login Form</h1><form action="#" id="form"><lable>First Name<br><div class="fname-result"></div><input type="text" id="fname" required><br></lable><lable>Last Name<br><div class="lname-result"></div><input type="text" id="lname" required><br></lable><lable>Email<br><div class="email-result"></div><input type="text" id="email" required><br></lable><lable>Password<br><div class="password-result"></div><input type="password" id="password" required><i class="fa fa-eye" aria-hidden="true"></i><br></lable><lable>Confirm Password<br><div class="confirm-result"></div><input type="password" id"confirm" required><br></lable><br><button type="submit" id="submit">Register</button></form></div></div>')

$("#fname").css({
    background: "#95e59b"
})

let form = $("#form")
form.on("submit", log)
function log(e) {
    e.preventDefault()
    let error = []
    let fname = $("#fname")
    let lname = $("#lname")
    let email = $("#email")
    let password = $("#password")
    let confirm = $("#confirm")
    let namevalid = /^[^0-9]*$/
    let re = /\S+@\S+\.\S+/;
    function validateEmail(em) {
        var re = /\S+@\S+\.\S+/;
        return re.test(em);
    }
    function validatePassword(password) {
        let re = /[A-Za-z\d@$!%*?&]{8,10}$/;
        return re.test(password);
    }
    if(!namevalid.test(fname.val())){
        $("#fname").css({
            background: "red"
        })
        $(".fname-result").html("")
        $(".fname-result").html("<p>first name is not valid</p>")
        error.push("first name is not valid")
    }else{
        $(".fname-result").html("")
    }
    if(!namevalid.test(lname.val())){
        $(".lname-result").html("")
        $(".lname-result").html("<p>this is error</p>")
        error.push("last name is not valid")
        lname.addClass("fname-error")
    }else{
        $(".lname-result").html("")
    }
    if(!validateEmail(email.val())){
        $(".email-result").html("")
        $(".email-result").html("<p>this is error</p>")
        error.push("email is not valid")
    }else{
        $(".email-result").html("")
    }
    if(!validatePassword(password.val())){
        $(".password-result").html("")
        $(".password-result").html("<p>password must have <br> <ul> <li>minimum 8 and maximum 10 characters</li><li>at least one uppercase letter and one lowercase letter</li><li>one number and one special character</li></ul></p>")
        error.push("password is not valid")
    }else{
        $(".password-result").html("")
    }
    if(!password.val()== confirm.val()){
        $(".confirm-result").html("")
        $(".confirm-result").html("<p>passwords do not match</p>")
        error.push("passwords do not match")
    }else{
        $(".confirm-result").html("")
    }
    if(error.length>0){

    }else{
        $("#email").val("")
        $("#password").val("")
        $("#confirm").val("")
        form.hide()
        $(".login h1").hide()
        $("#result").html(`<h2>${"Thank you for registering Mr"} ${fname.val()}</h2>`)
        $("#result").css({
            width: "50%",
            border: "1px solid blue",
            background: "#95e59b",
            textAlign: "center",
            marginLeft: "25%",
            marginTop: "15%"
        })
    }
}
$(document).ready(function() {
    $('.fa').click(function(e) {
        e.preventDefault()
        let type = $('#password').attr('type');
        
        if (type == 'password') {
          type = 'text';
         
        } else {
          type = 'password';
          console.log("pass")
        }
    $('#password').attr('type', type);
      $(this).toggleClass('fa-eye fa-eye-slash');
    });
  });


// function validatePassword(password) {
//     var re = /[A-Za-z\d@$!%*?&]{8,10}$/;
//     return re.test(password);
// }
// let pass = "As@123456"
// console.log(!validatePassword(pass))
// var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;