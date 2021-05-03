window.sr = ScrollReveal();

sr.reveal('.navbar', {
  duration: 2000,
  origin: 'bottom'
});

sr.reveal('.header-content-left', {
  duration: 2000,
  origin: 'top',
  distance: '300px'
});

sr.reveal('.header-content-right', {
  duration: 2000,
  origin: 'right',
  distance: '300px'
});

sr.reveal('.header-content-bottom', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('.header-btn', {
  duration: 2000,
  delay: 1000,
  origin: 'bottom'
});

sr.reveal('#testimonial div', {
  duration: 2000,
  origin: 'left',
  distance: '300px',
  viewFactor: 0.2
});

function showServiceIssue() {

  var ck = document.getElementById("serviceCheck")
  if (ck.checked == true) {
    var s = document.getElementById("reclamoButton");
    if (s.style.display == "") {
      s.style.display = "none";
    }
  } else {
    var s = document.getElementById("reclamoButton");
    s.style.display = "";
  }

}

/*
function showTechHidePost() {
  var post = document.getElementById("postButton");

  var techColl = document.getElementById("collapseTech");
  var postColl = document.getElementById("collapseEmp");

  if (techColl.getAttribute('class') == 'collapse'){

    if (postColl.getAttribute('class') == "collapse show") { 
      post.click();
    }  

  }
}
*/

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