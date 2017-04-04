
$(document).ready(function (){

	$("#openNav").click(function(){
		openNav();
	});

	$("#closeNav").click(function(){
		closeNav();
	});

	$("#categories").click(function(){
		openCategories();
	});

	$(".view").click(function(){
		loadPage();
	});

});

// NAVBAR
var openNav = function() {
    document.getElementById("mySidenav").style.width = "70%";
    // document.getElementById("flipkart-navbar").style.width = "50%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

var closeNav = function () {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
}

var cont = true;
var openCategories = function() {
	if(cont){
    	$('#listCategories').removeClass().addClass('display');
    	cont = false;
    } else {
    	$('#listCategories').removeClass().addClass('oculto');
    	cont = true;
    }
}

var loadPage = function() {
	$("#contenedor").load('view/product.html');
}