// nodes
//cards
let container = document.querySelector('.container')
let loginCard = document.querySelector('.login-card')
let signupCard = document.querySelector('.signup-card')
let profileCard = document.querySelector('.profile-card')
//inputs
let loginEmailInput = document.querySelector("#login-email-input")
let loginPassInput = document.querySelector("#login-pass-input")

let signupEmailInput = document.querySelector("#signup-email-input")
let signupPassInput = document.querySelector("#signup-pass-input")
let signupPass2Input = document.querySelector("#signup-pass2-input")
//lnks
let signupLink = document.querySelector('.signup-link')
let loginLink = document.querySelector('.login-link')
//errors
let errorNodes = document.querySelectorAll('.error')
//bttons
let buttons = document.querySelectorAll('.login-button')

//main buttons
let loginButton = buttons[0]
let signupButton = buttons[1]
let logoutButton = buttons[2]
let googleButtons = document.querySelectorAll('.google-button')
//let facebookButton


// globals
let showLogin = true

// functions
function toggleCards() {
    showLogin = !showLogin
    if (showLogin) {
        signupCard.remove()
        container.appendChild(loginCard)
    } else {
        loginCard.remove()
        container.appendChild(signupCard)
    }
}

function showError(value) {
    errorNodes.forEach(p => {
        p.innerHTML = value
    })
}

function logOut() {
    profileCard.remove()
    toggleCards()
}





// listeners
signupLink.addEventListener('click', toggleCards)
loginLink.addEventListener('click', toggleCards)
googleButtons.forEach(b => b.addEventListener('click', e => {

}))
logoutButton.addEventListener('click', logOut)

// begining
signupCard.remove()
loginCard.remove()
//profileCard.remove()


















































console.warn("NO LO HAGA COMPA \n NO ROBE MI CODIGO \n ME COSTO MUCHO TRABAJO 😭")