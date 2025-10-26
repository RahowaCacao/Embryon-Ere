let embryons = 0;
let energie = 100;
let niveau = 1;
let recolter= 0;
let argent = 10;



document.getElementById("recolter").onclick = () => {
  argent += 500;
  if (argent = 500){
	log("Bon voilà 500 €, mais n'oublie pas on risque de se faire gauler si tu es trop gourmande")  
	update(argent);
  }
  
  }

document.getElementById("cultiver").onclick = () => {
  if (energie > 0) {
    embryons += niveau;
    energie -= 5;
    update();
  }
  if (embryons = 10) {
embryons = 0;
energie = 0;
niveau = 0;
recolter= 0;
argent = 10;
log("Tu as été trop loin, les services secrets français viennent poser des questions")
	}
	issou.style.display = 'block';
};

document.getElementById("ameliorer").onclick = () => {
  if (embryons >= 10) {
    embryons -= 10;
    niveau++;
    log("Incubateur amélioré !");
    update();
  }
};





document.getElementById("newgame").onclick = () => {
  if(!confirm('(Ba alors on se chie dessus?)')) return;
embryons = 0;
energie = 100;
niveau = 1;
recolter= 0;
argent = 10;
update();
issou.remove();
  log('Nouvelle partie démarrée.');
  render();
}

	
function update() {
  document.getElementById("embryons").innerText = embryons;
  document.getElementById("energie").innerText = energie;
  document.getElementById("argent").innerText = argent;
}

function log(msg) {
  document.getElementById("log").innerHTML += `<p>${msg}</p>`;
}
