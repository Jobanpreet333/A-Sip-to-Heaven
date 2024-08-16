// let btn = document.getElementsByTagName("button")
// btn.addEventListener('click',()=>{
//     window.location.replace("http://127.0.0.1:5500/select.html")
// })
const hello = () => {
    window.location.replace("http://127.0.0.1:5500/select.html")
}

// function dine(){
//     let dines = document.getElementById("dine")
//     dines.style.background = "#563514"
//     dines.style.color = "#f3d7bd"
// }
// function take(){
//     let dines = document.getElementById("take")
//     dines.style.background = "#563514"
//     dines.style.color = "#f3d7bd"
// }

function dine() {
    let dines = document.getElementById("dine")
    let take = document.getElementById("take")
    if (dines.style.background = "#74512D") {
        dines.style.background = "#563514"
        dines.style.color = "#f3d7bd"
        take.style.background = "#AF8F6F"
        take.style.color = "black"
    }
    
}
function take() {
    let dines = document.getElementById("dine")
    let take = document.getElementById("take")
    if (take.style.background = "#74512D") {
        take.style.background = "#563514"
       take.style.color = "#f3d7bd"
        dines.style.background = "#AF8F6F"
        dines.style.color = "black"
    }
    
}

function options(){
    let option = document.getElementById("option")
    let name = prompt("Enter you city?")
    console.log(name);
    if(name ==="Ludhiana" || name ==="Amritsar" || name ==="Kapurthala" || name=== "Jalandhar" || name ==="Patiala" || name ==="ludhiana" ||name ==="amritsar" || name ==="kapurthala" || name ==="jalandhar" || name === "patiala"){
       option.innerHTML = name
    }
    else if(name===""){
           
    }
    else {
        alert("We don't deliver at this location")
        option.innerHTML = "Select your location"
    }
}