
import { backGallery } from "./modal.js";


/**
 * Get picture on form
 * @returns 
 */
export function choosPicture() {

    // variable
    let input = document.querySelector("#pictureChoose");
    let imageSrc = document.querySelector("#pictureView");
    let buttonLabel = document.querySelector(".addPicture__btn");
    const imgSizeMax = 4000000 * 1;
    let imgSelect = input.files[0];
    let imgSize = input.files[0].size;

    // Condition
    if (imgSize > imgSizeMax) {
        console.log("La photo est trop volumineuse");
        return;
    } else {
        console.log("La photo est acceptée");
        imageSrc.src = URL.createObjectURL(imgSelect);
        buttonLabel.style = "display:none;";
        imageSrc.classList.add("addPicture__logo--full");
    };

};



/**
 * remove picture with fetch
 * @param {event} e 
 * @returns 
 */
export async function removePicture(e) {
    e.preventDefault();

    const pictureToDelete = e.target.parentElement.parentElement;

    const idDelete = e.target.getAttribute("data-id");

    // control if id isnumber

    const url = 'http://localhost:5678/api/works/' + idDelete;
    const token = localStorage.getItem("SESSION");

    // Connect to API
    const cnx = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const r = cnx.status;
    const data = await cnx.json();

    // Controls connection
    if (r === 401) {
        console.log("Vous n'êtes pas autorisé(e)");
        return;
    };
    if (r === 500) {
        console.log("le projet n'existe pas !");
        return;
    };

    // Connection OK => Next
    if (cnx.ok && r === 200) {
        console.log("Projet supprimé !");
    };


    pictureToDelete.remove();

};


/**
 * Add picture with fetch
 */
export async function addPicture(event) {
    event.preventDefault();

    const myForm = document.querySelector("#pictureForm");
    const myImage = document.querySelector("#pictureChoose");

    const formData = new FormData(myForm);
    const url = 'http://localhost:5678/api/works/';
    const token = localStorage.getItem("SESSION");

    // Connect to API
    const cnx = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const r = cnx.status;

    const resultat = await cnx.json();

    // MEttre une deconnection si erreur 401 !!!!!


    console.log(resultat);


    backGallery();

    addNewProjet(myImage);

};


/**
 * 
 * @param {*} srcImage 
 */
export function addNewProjet(srcImage) {
    // Je crée les balises suivant ma fonction c'est plus facile d'intégrer des para comme des class !
    const figureElement = createElement("figure");
    const linkTrash = createElement("a", {
        "href": "#",
        "class": "js_trashClick"
    });
    const iconTrash = createElement("i", {
        "class": "fa-solid fa-trash-can trash--position"
    })
    const imgElement = createElement("img", {
        "src": srcImage,
        "alt": "image sur : " + srcImage.name
    });
    const linkElement = createElement("a", {
        "href": "#"
    },
        "Editer"
    );
    // Je declare la balise parent Ref!
    const contenerWorks = document.querySelector(".modal__gallery");
    // Je les inbrique et affiche
    contenerWorks.appendChild(figureElement);
    figureElement.appendChild(linkTrash);
    linkTrash.appendChild(iconTrash);
    // linkTrash.appendChild(iconArrows);
    figureElement.appendChild(imgElement);
    figureElement.appendChild(linkElement);
};