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
};

function createPorducts(){
    for var (i=0; i<productNames.length;i++){
        new Product(productName[i]);
    }
    console.table(allProducts);
};

function randomProduct(){
    return Math.floor(Math.random() * allProducts.length);
}

function render(){
    var productSelection = document.getElementById('products');
    productsSelection.innerHTML = '';

    var randomProducts = [];
    randomProducts.push(randomProduct());
    randomProducts.push(randomProduct());
    while(randomProducts[0]===randomProducts[1]){
        randomProducts[1] = randomProduct();
    }
    randomProducts.push(randomProduct());
    while(randomProducts[2]===randomProducts[0] || randomPoducts[2] === randomProducts[1]){
        randomProducts[2]=randomProduct();
    }
console.log(randomProducts);

for(var i = 0; i < 3; i++){
    allProducts[randomProducts[i]].views++
    var img = document.createElement('img');
    img.setAttribute('src', allProducts[randomProducts[i]].imageUrl)
    img.setAttribute('data-name', allProducts[randomProducts[i]].name);
    img.addEventListener('click', handleVote);
    productsSection.appendChild(img);
  };
};
function handleVote(event){
    var productName = event.target.dataset.name;
    for(var i = 0; i < allProducts.length; i++){
        if(allProducts[i].name === productName){
            allProducts[i].clicks++
            totalClicks++
            render();
        }
    }
    if(totalClicks === 25){
        var imgs = document.getElementsByTagName('img');
        for(var i = 0; i < imgs.length; i++){
          imgs[i].removeEventListener('click', handleVote);
        }
        displayResults();
    }   
    console.table(allProducts);
    console.log('Total Clicks', totalClicks);

}
function displayResults(){
    var results = document.getElementById('results');
    var ul = document.createElement('ul');
    for(var i = 0; i < allProducts.length; i++){
      var product = allProducts[i];
      var li = document.createElement('li');
      li.textContent = product.name + ' has ' + product.clicks + ' votes.';
      ul.appendChild(li);
    }
    results.appendChild(ul);

createProducts();
render();

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});