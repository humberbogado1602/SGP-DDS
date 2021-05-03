window.sr = ScrollReveal();
        
sr.reveal('.accordion.container', {
  duration: 2000,
  origin: 'bottom'
});

function solicitudEnviada() {
  alert("Solicitud enviada correctamente");
}


function consultaEnviada() {
  alert("Consulta enviada correctamente");
}

function showTechHideAll() {
  var tech = document.getElementById("techButton");

  var post = document.getElementById("postButton");
  var man = document.getElementById("manButton");


  if (tech.expanded == true) {
    post.disabled = false;
    man.disabled = false;
    tech.expanded = false;
  } else {
    post.disabled = true;
    man.disabled = true;
    tech.expanded = true;
  }
}

function showPostHideAll() {

  var post = document.getElementById("postButton");
  
  var tech = document.getElementById("techButton");
  var man = document.getElementById("manButton");


  if (post.expanded == true) {
    tech.disabled = false;
    man.disabled = false;
    post.expanded = false;
  } else {
    tech.disabled = true;
    man.disabled = true;
    post.expanded = true;
  }

}

function showManHideAll() {

  var man = document.getElementById("manButton");
  
  var tech = document.getElementById("techButton");
  var post = document.getElementById("postButton");


  if (man.expanded == true) {
    tech.disabled = false;
    post.disabled = false;
    man.expanded = false;
  } else {
    tech.disabled = true;
    post.disabled = true;
    man.expanded = true;
  }

}