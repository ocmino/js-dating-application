
var nameInput = document.getElementById('name')
var emailInput = document.getElementById('email')

function validateName(event) {
    nameInput.addEventListener('blur', function(event){
        console.log('name input  blur')
            var nameInputValue = event.target.value
        console.log('value:', nameInputValue)
        
        var nameInputError = document.getElementById('name-error');
        
        if(nameInputValue == '') return;
        
        if(nameInputValue.length < 2) {
            nameInputError.className = 'error';
            nameInputError.innerText = 'Name should be have at least two charachters.'
        }
        
        if(nameInputValue.length > 15) {
            nameInputError.className = 'error';
            nameInputError.innerText = 'Name can only have up to fifteen charachters.'
        }

        if(nameInputValue.length >= 2 && nameInputValue.length <= 15) {
            nameInputError.innerText = 'Great name!'
        }
        
        
        })
}

function validateEmail(event) {
    emailInput.addEventListener('blur', function(event){
        console.log('email input  blur')
            var emailInputValue = event.target.value
        console.log('value:', emailInputValue)
        
        var emailInputError = document.getElementById('email-error');
        
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(emailInputValue == '') return;

        if (emailInputValue.match(validRegex)) {
      
            emailInputError.innerText = 'Thanks!'
      
          return true;
      
        } else {
      
            emailInput.className = 'error';
            emailInputError.innerText = 'Not a valid email.'
      
          return false;
      
        }

        })
}




nameInput.addEventListener('focus',validateName())
emailInput.addEventListener('focus', validateEmail())





