

const reponse = await fetch("http://localhost:5678/api/works");
const projets = await reponse.json();



function genererProjets(projets){
    for (let i =0 ; i < projets.length; i++) {
        const projet = projets[i];
     
        // Récupération de l'élément du DOM qui accueillera les fiches
        const divGallery = document.querySelector(".gallery");

        // Création d’une balise dédiée au projet
        const figure = document.createElement("figure");
                
        // Création des balises 
        const image = document.createElement("img");
        image.src = projet.imageUrl;
        figure.appendChild(image)

        const figcaption = document.createElement("figcaption");
        figcaption.innerText = projet.title;

        figure.appendChild(figcaption);

        divGallery.appendChild(figure);
        }
}

// premier affichage de la page
genererProjets(projets);

/*je tente une nouvelle version du filtre
// gestion des boutons de filtre

const boutonTous = document.querySelector(".tous");
boutonTous.addEventListener("click", function () {
    const filtreTous = projets.filter(function (projet) {
        return projet.categoryId !== 0;
    });  
    console.log(filtreTous);
    document.querySelector(".gallery").innerHTML = "";
    genererProjets(filtreTous);
});

const boutonObjets = document.querySelector(".objets");
boutonObjets.addEventListener("click", function () {
    const filtreObjets = projets.filter(function (projet) {
        return projet.categoryId === 1;
    });  
    console.log(filtreObjets);
    document.querySelector(".gallery").innerHTML = "";
    genererProjets(filtreObjets);
});

const boutonAppartements = document.querySelector(".appartements");
boutonAppartements.addEventListener("click", function () { 
    const filtreAppartements = projets.filter(function (projet) {
        return projet.categoryId === 2;
    });  
    console.log(filtreAppartements);
    document.querySelector(".gallery").innerHTML = "";
    genererProjets(filtreAppartements);
});

const boutonHotels = document.querySelector(".hotelsrestaurants");
boutonHotels.addEventListener("click", function () {
   
    const filtreHotels = projets.filter(function (projet) {
        return projet.categoryId === 3;
    });  
    console.log(filtreHotels);
    document.querySelector(".gallery").innerHTML = "";
    genererProjets(filtreHotels);
});

*/
//récupération des categories depuis le fichier JSON
const categories = await fetch("http://localhost:5678/api/categories")
const cat= await categories.json();
console.log(cat);

const boutonTous = document.querySelector(".tous");
boutonTous.addEventListener("click", function () {
    const filtreTous = projets.filter(function (projet) {
        return projet.categoryId !== 0;
    });  
    console.log(filtreTous);
    document.querySelector(".gallery").innerHTML = "";
    genererProjets(filtreTous);
});

const boutonObjets = document.querySelector(".objets");
boutonObjets.addEventListener("click", function () {
    const filtreObjets = projets.filter(function (projet) {
        return projet.categoryId === 1;
    });
    console.log(filtreObjets);
    document.querySelector(".gallery").innerHTML = "";
    genererProjets(filtreObjets);
});

const boutonAppartements = document.querySelector(".appartements");
boutonAppartements.addEventListener("click", function () { 
    const filtreAppartements = projets.filter(function (projet) {
        return projet.categoryId === 2;
    });  
    console.log(filtreAppartements);
    document.querySelector(".gallery").innerHTML = "";
    genererProjets(filtreAppartements);
});

const boutonHotels = document.querySelector(".hotelsrestaurants");
boutonHotels.addEventListener("click", function () {
   
    const filtreHotels = projets.filter(function (projet) {
        return projet.categoryId === 3;
    });  
    console.log(filtreHotels);
    document.querySelector(".gallery").innerHTML = "";
    genererProjets(filtreHotels);
});


