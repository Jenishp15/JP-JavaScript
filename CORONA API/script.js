function Fetchdata(){
    fetch("https://api.rootnet.in/covid19-in/stats/latest")
    .then((res)=>res.json())
    .then((data)=>cardList(data.data.regional))
    .catch((err)=>console.log(err))
}
Fetchdata()


function cardList(data){
    let store = data.map((el)=>card(el.loc,el.confirmedCasesIndian,el.confirmedCasesForeign,el.discharged,el.deaths,el.totalConfirmed));

    document.getElementById("container").innerHTML=store.join("")
}

function card(loc,confirmedCasesIndian,confirmedCasesForeign,discharged,deaths,totalConfirmed){
    let item= `
    <div class="item">
        <h3 class="loc">Location : ${loc}</h3>
        <h4 class="confirmedCasesIndian">Confirmed Cases Indian : ${confirmedCasesIndian}</h4>
        <h4 class="confirmedCasesForeign">Confirmed Cases Foreign : ${confirmedCasesForeign}</h4>
        <h4 class="discharged">Discharged : ${discharged}</h4>
        <h4 class="deaths">Deaths : ${deaths}</h4>
        <h3 class="totalConfirmed">Total Confirmed : ${totalConfirmed}</h3>
    </div>`
    return item;
}
