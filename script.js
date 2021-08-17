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
        
        const panierText = document.createTextNode(lsArticles);
        panier.appendChild(panierText);
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

