let form=document.getElementById("signup")

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let isvalid=true;
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let country=document.getElementById("country");
    let phone=document.getElementById("phone");
    let password=document.getElementById("password");

    if(name.value==""){
        isvalid=false
        document.getElementById("nameError").innerText="Name is required";
    }
    else{
        document.getElementById("nameError").innerText=""
    }

    if(email.value==""){
        isvalid=false
        document.getElementById("emailError").innerText="email is required";
    }
    else{
        document.getElementById("emailError").innerText=""
    }

    if(country.value==""){
        isvalid=false
        document.getElementById("countryError").innerText="country is required";
    }
    else{
        document.getElementById("countryError").innerText=""
    }

    if(phone.value==""){
        isvalid=false
        document.getElementById("phoneError").innerText="phone is required";
    }
    else{
        document.getElementById("phoneError").innerText=""
    }

    if(password.value==""){
        isvalid=false
        document.getElementById("passwordError").innerText="password is required";
    }
    else{
        document.getElementById("passwordError").innerText=""
    }

    if(isvalid){
        alert("Login successfuly")

        let obj={
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            country:document.getElementById("country").value,
            phone:document.getElementById("phone").value,
            password:document.getElementById("password").value
        }

        localStorage.setItem("userdata",JSON.stringify(obj))

    }
    else{
        alert("Not signup")
    }
})