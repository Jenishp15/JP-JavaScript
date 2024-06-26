let signup = document.getElementById("signup");

// let name = document.getElementById("name").value;
// let email = document.getElementById("email").value;
// let country = document.getElementById("country").value;
// let phone = document.getElementById("phone").value;
// let password = document.getElementById("password").value;

signup.addEventListener("submit",(e)=>{
    e.preventDefault()

    let obj = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        country : document.getElementById("country").value,
        phone : document.getElementById("phone").value,
        password :  document.getElementById("password").value
    }
    console.log(obj)
})


//  =================================================


let signin = document.getElementById("signin");

signin.addEventListener("submit",(e)=>{
    e.preventDefault()

    let obj = {
        name : document.getElementById("signin-name").value,
        email : document.getElementById("signin-email").value,
        pass : document.getElementById("signin-password").value
    }
    console.log(obj)
})