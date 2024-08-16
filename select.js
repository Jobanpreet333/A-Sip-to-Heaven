let bill = document.getElementById("bills")
bill.style.display = "none"

function getValue() {
    let checkboxes =
        document.getElementsByName('cb1');
    let result = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result +=parseInt(checkboxes[i].value);
        }
        
    }
    
    document.getElementById("bill").textContent = " Total Bill : "+ "₹" + result + ""
}

function display(){
let bill = document.getElementById("bills")
    bill.style.display="block"
}

