
var paymentForm = document.getElementById("payment-form"); 
var payButton = document.getElementById("pay-button");

paymentForm.addEventListener("submit", function(event){ 
event.preventDefault();

var name = document.getElementById("name").value;
var cardNumber = document.getElementById("card-number").value;
var cvc = document.getElementById("cvc").value;
var expirationDate = document.getElementById("expiration-date").value;


if(name.trim() === '' || cardNumber.trim() === '' || cvc.trim() === expirationDate.trim()){

alert("Please fill all required fields."); 
return;
}

if(!cardNumber.match(/^\d{13,16}$/)){
alert("Please enter a valid card number."); 
return;
}
// dmth ideja osht qe width i footer osht i vogel ne tjerat nuk doket se ato e can background e bardh e doeket footer okej e ktu background ndryshe doket footer ne specifika 

if(!cvc.match(/^\d{3,4}$/)){
    alert("Please enter a valid cvc."); 
    return;
    }

document.getElementById("success-message").style.display="block";
paymentForm.style.filter ="blur(4px)";
document.getElementById('go-to-models-button').addEventListener('click', function() {

    window.location.href = 'models.html';
  });
paymentForm.reset();

});