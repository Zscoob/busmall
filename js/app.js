'use strict';
//array
var productNames = ["bag", "banana", "bathroom", "boots", "breakfast", "bubblegum", "chair", "cthulhu", "dog-duck", "dragon", "pen", "pet-sweep", "scissors", "shark", "tauntaun", "unicorn", "usb", "water-can", "wine-glass"];
var allProducts = [];
var totalClicks = 0;

//constructors

function Product(name) {
    this.name = name;
    this.imageUrl = 'img/' + name + '.jpg';
    this.clicks = 0;
    this.views = 0;
    allProducts.push(this);
}

function createProducts() {
    for (var i = 0; i < productNames.length; i++) {
        new Product(productNames[i]);
    }
    console.table(allProducts);
}

console.log(allProducts);

function randomProduct() {
    return Math.floor(Math.random() * allProducts.length);
}

function render() {
    var productSection = document.getElementById('products');
    productSection.innerHTML = '';

    var randomProducts = [];
    randomProducts.push(randomProduct());
    randomProducts.push(randomProduct());
    while (randomProducts[0] === randomProducts[1]) {
        randomProducts[1] = randomProduct();
    }
    randomProducts.push(randomProduct());
    while (randomProducts[2] === randomProducts[0] || randomProducts[2] === randomProducts[1]) {
        randomProducts[2] = randomProduct();
    }
    console.log(randomProducts);

    for (var i = 0; i < 3; i++) {
        allProducts[randomProducts[i]].views++
        var img = document.createElement('img');
        img.setAttribute('src', allProducts[randomProducts[i]].imageUrl)
        img.setAttribute('data-name', allProducts[randomProducts[i]].name);
        img.addEventListener('click', handleVote);
        productSection.appendChild(img);
    };
}
function handleVote(event) {
    var productName = event.target.dataset.name;
    for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i].name === productName) {
            allProducts[i].clicks++
            totalClicks++
            render();
        }
    }
    if (totalClicks === 25) {
        var imgs = document.getElementsByTagName('img');
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].removeEventListener('click', handleVote);
        }
        displayResults();
    }
    console.table(allProducts);
    console.log('Total Clicks', totalClicks);

}
function displayResults() {
    var results = document.getElementById('results');
    var ul = document.createElement('ul');
    for (var i = 0; i < allProducts.length; i++) {
        var product = allProducts[i];
        var li = document.createElement('li');
        li.textContent = product.name + ' has ' + product.clicks + ' votes.';
        ul.appendChild(li);
    }
    results.appendChild(ul);

    var results = [];
    for (var i = 0; i < allProducts.length; i++) {
        results.push(allProducts[i].clicks);
    }

    var ctx = document.getElementById('chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: productNames,
            datasets: [{
                label: '# of Votes',
                data: results,
                backgroundColor:
                    'rgba(255, 99, 132, 0.2)',
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
}

function checkStorage() {
    if (localStorage['results']) {
        displayResults();
    } else {
        createProducts();
        render();
    }
}

createProducts();
render();