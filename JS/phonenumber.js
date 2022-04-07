function changeTheColorOfButtonDemo() {

    if (document.getElementsByClassName("changeColorOfButton")[0].value !== "") {
       document.getElementById("buttonDemo").style.background = "#9234E4";
       document.getElementById("buttonDemo").style.color = "#FFFFFF";
       
   
    } else {
       document.getElementById("buttonDemo").style.background = "#D0D5DD";
       document.getElementById("buttonDemo").style.color = "#64748B";

    }
    
 }