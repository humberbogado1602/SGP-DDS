function showServiceIssue() {

    var ck = document.getElementById("serviceCheck")
    if (ck.checked == true){
        var s = document.getElementById("reclamoButton");
        if (s.style.display == ""){
            s.style.display= "none";    
        } 
    } else {
        var s = document.getElementById("reclamoButton");
        s.style.display = "";
    }
      
}

function buttonConfirm() {
    confirm("Esta Seguro de Continuar?");
 }  