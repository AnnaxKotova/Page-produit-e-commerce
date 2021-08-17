let lsArticles = localStorage.getItem("melons"); //LOCALE STORAGE

// pour affichage correct de nombre d'articles
let panier = document.querySelector("#numero_panier");

let ajout = document.querySelector("#ajout"); //bouton ajout au panier
ajout.addEventListener('click', function (e){
    let numeroArticles = document.querySelector("#numero_articles").value; //NUMERO SAISIE
    if (numeroArticles){    //si on a le valeur saisi on peut appeler la fonction
        panier.innerText = " ";

        sumArticles = parseInt(numeroArticles) + Number(lsArticles); //tout était string
        localStorage.setItem("melons", sumArticles);
        lsArticles = localStorage.getItem("melons");
        
        panier.innerText = lsArticles;
    }  
})


// VIDER UN PANIER
let clear = document.querySelector("#clear");
clear.addEventListener('click', function (e){
    localStorage.removeItem("melons");
    lsArticles = localStorage.getItem("melons");
    panier.innerText = "0"; //sinon on va avoir le nombre des articles

})


 //pour le premier affichage de page
if (lsArticles !== null) {  //condition prioritaire, plus de cases
    panier.innerText = " ";
    panier.innerText = lsArticles;
    }
else 
panier.innerText = " ";
panier.innerText = "0";


let monTableau = [];

monTableau['nomProduit'] = "Melon charentais - 1 piece";

monTableau['prixProduit'] = "2 €";

monTableau['description'] = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae cum dolorem praesentium eaque nemo sint sapiente! Ad id quidem optio adipisci error, nesciunt minima accusamus odit, culpa nobis aut?";

monTableau['lienImage'] = "https://cdn.pixabay.com/photo/2015/02/06/18/57/melon-626351_1280.jpg";

// let nomTaProduit = document.getElementById(nomProduit); //nouvelle variable pour element de id
nomProduit.innerText = monTableau['nomProduit'];

// let prixTaProduit = document.getElementById(prixProduit); //nouvelle variable pour element de id
prixProduit.innerText = monTableau['prixProduit'];

description.innerText = monTableau['description'];

let pic = document.querySelector("picture");
let imageProduit = document.createElement("IMG");
imageProduit.src = monTableau['lienImage'];
imageProduit.alt = " ";
pic.appendChild(imageProduit);