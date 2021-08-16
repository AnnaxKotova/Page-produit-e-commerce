
let melonsPanier = document.querySelector("#numero_melons_panier");

let lsArticles = localStorage.getItem("melons"); //LOCALE STORAGE


let ajout = document.querySelector("#ajout"); //bouton ajout au panier

ajout.addEventListener('click', function (e){
    let numeroArticles = document.querySelector("#numero_articles").value; //NUMERO SAISIE
    if (numeroArticles){    //si on a le valeur saisi on peut appeler la fonction
        let sumArticles = parseInt(numeroArticles) + Number(lsArticles); //numeroArticle était string
        lsArticles = localStorage.setItem("melons", sumArticles); 
        

    }    
})




// VIDER UN PANIER
let clear = document.querySelector("#clear");

clear.addEventListener('click', function (e){
localStorage.removeItem("melons");
})


let articlesText = document.createTextNode(lsArticles);
melonsPanier.appendChild(articlesText);
// if (lsArticles === null) {
//     melonsPanier.innerHTML = "0"; //sinon on écrira "null"
// }
// else {
// }