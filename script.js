let lsArticles = localStorage.getItem("melons"); //LOCALE STORAGE

let ajout = document.querySelector("#ajout"); //bouton ajout au panier

//affichage nombre d'articles
ajout.addEventListener('click', function (e){
    let numeroArticles = document.querySelector("#numero_articles").value; //NUMERO SAISIE
    if (numeroArticles){    //si on a le valeur saisi on peut appeler la fonction
        sumArticles = parseInt(numeroArticles) + Number(lsArticles); //numeroArticle était string
        localStorage.setItem("melons", sumArticles);
        console.log(lsArticles);
    }  
})


// VIDER UN PANIER
let clear = document.querySelector("#clear");

clear.addEventListener('click', function (e){
localStorage.removeItem("melons");
lsArticles = 0;
})


let melonsPanier = document.querySelector("#numero_melons_panier");
let numeroArticlesText = document.createTextNode(lsArticles);
    melonsPanier.appendChild(numeroArticlesText);



