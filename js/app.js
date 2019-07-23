'use strict';
//array
var products = ["bag","banana", "bathroom","boots", "breakfast", "bubblegum", "chair", "cthulht", "dog-duck", "dragon", "pen", "pet-sweep", "scissors", "shark", "tauntaun", "unicorn", "usb", "water-can", "wine-glass"];
var allProducts=[];
var totalClick=[];

//constructors

function Product(name){
    this.name=name;
    this.imageUrl = '../img/'+name+'.jpg';
    this.clicks=0;
    this.views=0;
    allProducts.push(this);
}

function createPorducts(){
    for var (i=0; i<productNames.length;i++){
        new Product(productName[i]);
    }
    console.table(allProducts);
};
function render(){
    function render(){
        var productSection=document.getElementById('products');
        producrsSection.innerHTML='';
        var randomProducts  = [];
        randomProducts.push(randomProduct());
        randomProducts.push(randomProduct());
        var product1 = Math.floor(Math.random)
        var product2 =randomProduct
        while (product1===product2){
            product2=randomProduct();
        }
        var product3 = randomProduct();
            while(product3 === product2 || product3===product1)
            product3=RandomProduct();
    }
};

fuction handleVote(event){
    var productName=event.target.dataset.name;
    for(var i=o;<allProducts.length; i++){
        if (allProducts [i].name === productName){
            allProducts[i].clicks++
            totalClicks++
            console.log('total clicks',totalClicks);
        }
    }
    if (totalClicks === 25){
        var imgs = documnet.getELementsByTagName('img')
        for (var i = 0; i<imgs.length;i++){
            img[i].removeEventListener('click',handleVote);
        }
    }
    console.log(productName);
}
function displayResult(){
    var ul = document.createElement('ul');
    for (var i=0;i<allProducts.length;i++){
        var product=allProducts[i];
        var li = document.createElement('li');
    }
}

createProducts();
render();