let form = document.getElementById("form")
let tbody = document.querySelector("tbody")

let arr=  JSON.parse(localStorage.getItem("userdata")) || [];

window.addEventListener("load",()=>{
    Render();
})  

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let todoobj={
        task:document.getElementById("task").value,
        priority:document.getElementById("priority").value
    }
    arr.push(todoobj);
    // console.log(arr);

    localStorage.setItem("userdata",JSON.stringify(arr));
    Render() 
})

function Render(){
    tbody.innerHTML=null;

    arr.forEach((e,i)=>{
        const tr=document.createElement("tr");
        const td1=document.createElement("td");
        const td2=document.createElement("td");
        const td3=document.createElement("td");

        td1.innerText=e.task;
        td2.innerText=e.priority;
        td3.innerText="DELETE";

        td3.addEventListener("click",()=>{
                Delete(i);
        })

        tr.append(td1,td2,td3);
        tbody.append(tr);
    });

}

function Delete(index){
    arr.splice(index,1)
    localStorage.setItem("userdata",JSON.stringify(arr))
    console.log(arr)
    Render()
}