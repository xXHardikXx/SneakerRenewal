let form = document.getElementById("form");

function validateName(name){
    return(
        name.length >=4 && name.length<=20
    )
}

function validatePhone(phone){
    return(
        phone.length >=12 && phone.length<=9
    )
}

let emailErrorMessage = ["Email must contain @", "Email must contain '.'"]
function validateEmail(email){
    let split = email.split("@")
    if(split.length == 1){
        return 0
    }

    let checkDot = split[split.length-1]
    let checkDoSplit = checkDot.split(".")
    if(checkDoSplit.length ==1){
        return 1
    }
    return -1;

}

function validateCountry(){
    if(country.selectedIndex == 0){
        return -1
    }
    return true;
}

function formSubmit(){
    let name = document.getElementById("name");
    if(!validateName(name.value)){
        showError("Name length must be in range 4-20")
        return
    }
     let email = document.getElementById("email")
     let checkEmail = validateEmail(email.value)
     if(checkEmail != -1){
        showError(emailErrorMessage[checkEmail])
        return
     }

     let countries = document.getElementById("country")
     if(!validateCountry(countries)){
        showError("Please select a country")
        return
     }
     let country = countries.options[countries.selectedIndex].value

    let phone = document.getElementById("phoneNumber")
    if(!validatePhone(phone.value)){
        showError("Phone Number Invalid")
        return
    }
    clearError();
}

let error = document.getElementById("error");
function showError(message){
    
    error.style.display = "block"
    error.innerHTML = message
}

function clearError(){
error.style.display = "none"
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    formSubmit();
})
