// initial code 
"use strict"
console.clear() ;

// main code 

let myModal = document.getElementById("myModal") ;
let text = document.getElementById("text") ;

let accessMyModal = new bootstrap.Modal(myModal) ;



text.addEventListener("click" , function(){
	
	accessMyModal.show() ;
	
});

myModal.addEventListener('shown.bs.modal', function () {
  console.log('Modal now visible!');
});