let moins = document.querySelectorAll('.btn-moins');  
let plus = document.querySelectorAll('.btn-plus');
let increment = document.querySelectorAll('.incre');

let addArticle = document.querySelector('#add_button' );


for (let i = 0; i < moins.length; i++) {
	moins[i].addEventListener('click', moinsSubtract)
}
for (let i = 0; i < plus.length; i++) {
	plus[i].addEventListener('click', plusAddict)
}

addArticle.addEventListener('click', addCart);

function moinsSubtract(){
	if(this.nextElementSibling.value > 0){
	this.nextElementSibling.value = parseInt(this.nextElementSibling.value) -1;
	subtotalMoins(this);
	}
}

function plusAddict(){
    this.previousElementSibling.value = parseInt(this.previousElementSibling.value) + 1;
	subtotalPlus(this);
}

function addCart(){
	let nameArticle = document.querySelector('#name_product');
	let priceArticle = document.querySelector('#price_product');
	document.querySelector('#article-cart').innerHTML += '<tr><td class="td-th"><div class="img-article"><div class="image"><img src="images/sac_riz.jpg" alt=""></div><div class="name"><p class="name-article">'+nameArticle.value+'</p> <p class="delete">Suprimer</p></div></div></td><td class="td-th"><div class="price"><div class="btn-moins"> <p class="moins">-</p> </div><input type="number" class="incre" value="1"><div class="btn-plus"> <p class="plus">+</p> </div></div></td><td class="td-th"><div class="price-unitaire"><p>'+priceArticle.value+'</p></div></td><td class="td-th"><div class="sous-total">'+priceArticle.value+'</div></td></tr>';
	addNewArticle();
	totalGeneral();
}

function subtotalPlus(elt){
	let price = parseInt(elt.parentElement.parentElement.nextElementSibling.children[0].innerText);
    let quantity = parseInt(elt.previousElementSibling.value);
    let calcul = price * quantity;
    elt.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].innerText = calcul + ' fr';
	totalGeneral();
}

function subtotalMoins(elt){
	let price = parseInt(elt.parentElement.parentElement.nextElementSibling.children[0].innerText);
    let quantity = parseInt(elt.nextElementSibling.value);
    let calcul = price * quantity;
    elt.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].innerText = calcul + ' fr';
	totalGeneral();
	
}

function addNewArticle(){
	let moins = document.querySelectorAll('.btn-moins');
	let plus = document.querySelectorAll('.btn-plus');

	for (let i = 0; i < moins.length; i++) {
		moins[i].addEventListener('click', moinsSubtract)
	}
	for (let i = 0; i < plus.length; i++) {
		plus[i].addEventListener('click', plusAddict)
	}
}

function totalGeneral(){
	let sousTotal = document.querySelectorAll('.sous-total');
	let sum = 0;
	for(let i=0; i<sousTotal.length; i++){
		sum += parseInt(sousTotal[i].innerText);
	}
	document.querySelector('.total-price').innerText = sum;
}