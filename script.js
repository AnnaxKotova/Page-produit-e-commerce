let lsArticles = localStorage.getItem("melons"); //LOCALE STORAGE



// pour affichage correct de nombre d'articles
let melonsPanier = document.querySelector("#numero_melons_panier");

let ajout = document.querySelector("#ajout"); //bouton ajout au panier
ajout.addEventListener('click', function (e){
    let numeroArticles = document.querySelector("#numero_articles").value; //NUMERO SAISIE
    if (numeroArticles){    //si on a le valeur saisi on peut appeler la fonction
        sumArticles = parseInt(numeroArticles) + Number(lsArticles); //tout était string
        localStorage.setItem("melons", sumArticles);
        lsArticles = localStorage.getItem("melons");
        melonsPanier.innerHTML = lsArticles;
    }  
})


// VIDER UN PANIER
let clear = document.querySelector("#clear");
clear.addEventListener('click', function (e){
    localStorage.removeItem("melons");
    lsArticles = localStorage.getItem("melons");
    melonsPanier.innerHTML = "0";
})

if (lsArticles === null) {
    melonsPanier.innerHTML = "0";
}


//Porquoi ça marche avec innerHTML mais ne marche pas avec appenchilds et tout ça?


