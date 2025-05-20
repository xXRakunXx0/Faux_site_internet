// Récupérer les produits depuis l'API Fake Store
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  
  .then(data =>{
    data.forEach(element => {
        MaCarte(element)
    });
    console.log(data[0].category);
    
  });

// Fonction qui permet d’ajouter une carte produit à la page
    function MaCarte(product){
            document.getElementById('carteParrant').innerHTML+=`<div class="flex card textCenter" id="carte2">
    <div class="w60">
        <img src="${product.image}" alt="t-shirt" class="image">
    </div>
    <div class="alignCenter w30">
        <h2 class="top20">${product.title}</h2>
        <p class="top50">${product.description}</p>
        <div class="flex top150">
            <p class="marginRight">${product.category}</p>
           <p>${product.price} €</p>
        <a href="" class="btm w60 top5">Ajouter au panier</a> 
        </div>
    </div>
</div>`

    }

    
data.forEach(product => {
    if (product.category == "men's clothing"){
        
    document.getElementById("men").innerHTML+=`
    

       <div class="w60">
        <img src="${product.image}" alt="t-shirt" class="image">
    </div>
    <div class="alignCenter w30">
        <h2 class="top20">${product.title}</h2>
        <p class="top50">${product.description}</p>
        <div class="flex top150">
            <p class="marginRight">${product.category}</p>
           <p>${product.price} €</p>
        <a href="" class="btm w60 top5">Ajouter au panier</a> 
        </div>
    </div>
</div>
    
    
    `
    }
    
});