function Fetchdata(){
    fetch("https://reqres.in/api/users?page=2")
    .then(res=>res.json())
    .then(res=>cardList(res.data))
    .catch(err=>console.assert.log(err))
}
Fetchdata()

function cardList(data){
    let store = data.map((el)=> card(el.id,el.email,el.first_name,el.last_name,el.avatar));

    document.getElementById("container").innerHTML=store.join("")
}

function card(id,email,first_name,last_name,avatar){
   return `
        <div class="item">
            <h3 class="id">Id : ${id}</h3>
            <h3 class="email">Email : ${email}</h3>
            <h3 class="first_name">First_name : ${first_name}</h3>
            <h3 class="last_name">First_name : ${last_name}</h3>
            <img src="${avatar}" alt="" height="200px" height="20px">
        </div>`

}