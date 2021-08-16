

let ajout = document.querySelector("#ajout");



function ajout_panier (){
    let numeroArticles = document.querySelector("#numero_articles").value;
    localStorage.setItem("melones", numeroArticles);

    let numeroMelonesPanier = document.querySelector("#numero_melons_panier");
    let numeroArticlesText = document.createTextNode(numeroArticles);
    numeroMelonesPanier.appendChild(numeroArticlesText);
}



ajout.addEventListener('click', ajout_panier);



/*
let ajout = document.querySelector("#ajout");



function ajout_storage (){
    let numeroArticles = document.querySelector("#numero_articles").value;
    
    localStorage.setItem("melones", numeroArticles);

}

let numeroMelonesPanier = document.querySelector("#numero_melons_panier");
let numeroArticlesText = document.createTextNode(numeroArticles);
numeroMelonesPanier.appendChild(numeroArticlesText);


function sum (){
    for (i=)
}

let melonesBefore = storage.getItem(melones);

ajout.addEventListener('click', ajout_panier);
*/