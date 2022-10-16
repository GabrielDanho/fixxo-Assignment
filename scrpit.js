const checkLength =(element, minLength = 2, message) => {

    if(message === undefined)
        message = `Your ${element.target.id} must contain atleast ${minLength} characters`

    if (element.target.value.length < minLength) {
        document.getElementById(element.target.id).classList.add('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerHTML = message
    } else {
        document.getElementById(element.target.id).classList.remove('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = 
    }
}

const checkEmail = (element, message) => {
    if(message === undefined)
    message = `Your ${element.target.id} must be a valid e-mail adress`

    if (!element.target.value.match)
    document.getElementById(element.target.id).classList.add('error')
    document.getElementById(`${element.target.id}ErrorMessage`).innerHTML = message
} else {
    document.getElementById(element.target.id).classList.remove('error')
    document.getElementById(`${element.target.id}ErrorMessage`).innerText = ""
}



const validate = (e) => {
    switch(e.target.type) {
        case "text":
            checkLength(e)
            break;
        case "email":
            checkEmail(e)
            break;
        case "textarea":
            checkLength(e, 5)
            break;
    }
}