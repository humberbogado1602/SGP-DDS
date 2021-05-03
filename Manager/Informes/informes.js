function showModelo() {

    var check = document.getElementById("ModeloToggler")
    var input = document.getElementById("ModeloInput");
    if (check.checked){
        input.disabled=false;    
        
    } else {
        input.disabled=true;
    }
      
}

function showCodigo() {

    var check = document.getElementById("CodigoToggler")
    var input = document.getElementById("CodigoInput");
    if (check.checked){
        input.disabled=false; 
    } else {
        input.disabled=true;
    }
      
}

/*
function showCodigo() {

    var check = document.getElementById("CodigoToggler")
    if (check.checked){
        var input = document.getElementById("CodigoInput");
        if (input.style.display == "none"){
            input.style.display= "";    
        } 
    } else {
        var input = document.getElementById("CodigoInput");
        input.style.display = "none";
    }
      
}
*/