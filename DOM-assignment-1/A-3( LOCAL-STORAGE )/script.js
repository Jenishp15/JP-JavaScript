let form = document.getElementById("signup");
let arr= JSON.parse(localStorage.getItem("userinfo")) || []

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let obj = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        country: document.getElementById("country").value,
        phone: document.getElementById("phone").value,
        password: document.getElementById("password").value
    }
    arr.push(obj)
    console.log(arr)

    // -> **********  SYNTAX  ********** //

    // localStorage.setItem('KEY', 'VALUE'/JSON );
    // localStorage.setItem("userinfo",JSON.stringify(obj))

    // -> **********  SYNTAX END  ********** //

    let userinput = JSON.stringify(arr)
    localStorage.setItem("userinfo", userinput)
})

let signin = document.getElementById("signin")

signin.addEventListener("submit", (e) => {
    e.preventDefault()

    let usersignin = {
        name: document.getElementById("signin-name").value,
        email: document.getElementById("signin-email").value,
        password: document.getElementById("signin-password").value
    }
    console.log(usersignin);
    
    // let inputdata=localStorage.getItem("userinfo")

    let inputeddata = JSON.parse(localStorage.getItem("userinfo"))
    console.log(inputeddata);
    
    if (usersignin.name==userinfo.name && usersignin.email==userinfo.email && usersignin.password==userinfo.password) {
        alert("login Succesfully😊")
    }
    else {
        alert("Not Login 😒")
    }
})

