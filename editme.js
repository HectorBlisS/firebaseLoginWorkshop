//other file variables and funcs: 
/** 
 googleButtons 
 logoutButton
 toggleCards
 showError
 logOut

 container
 loginCard
 signupCard
 profileCard

 emial, photoURL, displayName
*/

// globals 
// EJERCICIO 1
let auth = firebase.auth()
let isLogged = false

//functions
// EJERCICIO 1
function loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
        .then(displayProfile)
        .catch(e => console.log(e))
}

// EJERCICIO 1
function displayProfile({ user }) {
    isLogged = true
    email.innerHTML = user.email
    photoURL.src = user.photoURL
    displayName.innerHTML = user.displayName
    loginCard.remove()
    signupCard.remove()
    container.appendChild(profileCard)
}

//EJERCICIO2
function checkLogin(user) {
    if (user) {
        displayProfile({ user })
    }
}


//helpers


//listeners
// EJERCICIO 1
googleButtons.forEach(b => b.addEventListener('click', loginWithGoogle))


//EJERCICIO 2
auth.onAuthStateChanged(checkLogin)
// start