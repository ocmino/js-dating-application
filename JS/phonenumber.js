function changeTheColorOfButtonDemo() {
    console.log(document.getElementsByClassName("changeColorOfButton")[0].value);
    if (document.getElementsByClassName("changeColorOfButton")[0].value !== "") {
       document.getElementById("buttonDemo").style.background = "#9234E4";
    } else {
       document.getElementById("buttonDemo").style.background = "#D0D5DD";
    }
    
 }