// TODO

// Texte en rouge
const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge");
aMettreEnRouge.style.color = "red";

// Clique du bouton en rouge
const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click");
enRougeSuiteAClick.addEventListener("click", function() {
    enRougeSuiteAClick.style.color = "red";
});

// h2 en rouge
const collH2 = document.querySelectorAll("h2");
collH2.forEach((elm)=>{
    elm.addEventListener("click",(evt)=>{
        evt.target.style.color = "red";
    });
});

