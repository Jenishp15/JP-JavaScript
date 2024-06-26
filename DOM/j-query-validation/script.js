$("document").ready(()=>{

    $("#signin").submit((e)=>{

        e.preventDefault()

        let name=$("#signin-name").val()
        let email=$("#signin-email").val()
        let password=$("#signin-password").val()
        let isvalid=true

        let obj={
            name:$("#signin-name").val(),
            email:$("#signin-email").val(),
            password:$("#signin-password").val()
            
        }

        if(name==""){
            isvalid=false;
            $("#nameError").text("Name is required")
            $("#nameError").css("color","red")
        }else{
            $("#nameError").text("")
        }
        if(email==""){
            isvalid=false;
            $("#emailError").text("Email is required")
            $("#emailError").css("color","red")
        }else{
            $("#emailError").text("")
        }
        if(password==""){
            isvalid=false;
            $("#passwordError").text("password is required")
            $("#passwordError").css("color","red")
        }else{
            $("#passwordError").text("")
        }

        console.log(name)
        console.log(email)
        console.log(password)

        if(isvalid){
            localStorage.setItem("userdata",JSON.stringify(obj))
            alert("successfully")
        }
        else{
            alert("Check Details🫤")
        }

    })

})