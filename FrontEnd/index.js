

// const gallery = document.querySelector(".gallery")  //
// LANCEMENT DE PAGE 
loadCategories()
  .then((categories) => {
    createCategoriesContainer()
    // Une fois les travaux recuperes on appel nos fonctions
    displayCategories(categories) //Transmet categories au displayCategories 

  })
displayAllWorks()




function getValue() {
  // //  // Sélectionner l'élément input et récupérer sa valeur
  // let email = document.getElementById("email").value;
  // Afficher la valeur
  alert("input");
  // déclencher un événement sur le clic de bouton
  email.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton")

  });
}


function selectionner() {
  // //  // Sélectionner l'élément input et récupérer sa valeur
  // let password = document.getElementById("password").value;
  // Afficher la valeur
  alert(input);
  // déclencher un événement sur le clic de bouton
  password.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton")
  });


}

// Ajouter un message error sur le champ email si ce dernier n'est pas bon 
function verifierChamp(email) {
  // if (email.value === "") {
  //   email.classList.add("error")
  // } else {
  //   email.classList.remove("error")
  // }
}
// Ajouter un message error sur le champ password si ce dernier n'est pas bon 
function verifierChamp(password) {
  // if (password.value === "") {
  //   password.classList.add("error")
  // } else {
  //   password.classList.remove("error")
  // }
}





//  Ajouter Bouton Modifier
const isLoggedIn = localStorage.getItem("token") !== null
console.log(isLoggedIn);

if (isLoggedIn) {
  let nouveauButton = document.createElement("button")
  const h2 = document.querySelector("#portfolio h2")
  nouveauButton.textContent = "modifier"
  h2.appendChild(nouveauButton)
  nouveauButton.addEventListener("click", () => {
    const fermetureModale = document.querySelector(".fermetureModale")
    const galerie = document.getElementById('back_galery');
    fermetureModale.open = true
    loadWorks().then((works) => {
      console.log('2')
      works.forEach(projet => {
        const image = document.createElement('img');
        image.src = projet.imageUrl;

        const span = document.createElement("span")
        const trash = document.createElement("i")
        trash.classList.add("fa-solid", "fa-trash-can")
span.appendChild(trash)
fermetureModale.appendChild(span)
        image.style = "width: 76.61px"
        // image.style = "display flex"
        galerie.appendChild(image)
      });
    })
    console.log('1')
  })
}

// Fermer la fenetre modale au click

const fermetureModale = document.querySelector(".fermetureModale ")
fermetureModale.addEventListener("click", () => {
  fermetureModale.style.display = "none"
})

// Fermeture de la page transparente

const modaleGrey = document.querySelector(".modaleGrey ")
modaleGrey.addEventListener("click", () => {
  modaleGrey.style.display = "none"
})
