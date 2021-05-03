/*function myFunction() {

    var ck = document.getElementById("checkProblem")
    if (ck.checked = true){
        var s = document.getElementById("change");
        (s.style.display == "") ? s.style.display = "none" : s.style.display = "";
    }
      
}*/

function showSolution() {

    var ck = document.getElementById("checkProblem")
    if (ck.checked == true){
        var s = document.getElementById("solution");
        s.style.display = "block";
    } else {
        var s = document.getElementById("solution");
        s.style.display="none";
    }
    
      
}




function buttonAlert() {

    var ck = document.getElementById("checkProblem");
    var confAlert = confirm("Esta Seguro de Continuar?");
    if (ck.checked == false){
        if (confAlert == true){
            alert("Reclamo guardado con Exito, N° Reclamo: 25125426");
        } 
    }
  }

