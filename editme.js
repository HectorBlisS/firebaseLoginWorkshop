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
//let auth = firebase.auth()
//let isLogged = false
// EJERCICIO 3
//let db = firebase.firestore()

//EJERCICIO 4
//let uid

//functions
// EJERCICIO 1
/**
function loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
        .then(snap => {
            displayProfile(snap)
            saveData(snap.user)
        }) // EJERCICIO 3 - Data Base
        .catch(e => console.log(e))
}
 */


// EJERCICIO 1
/**
function displayProfile({ user }) {
    console.log(user)
    isLogged = true
    email.innerHTML = user.email
    photoURL.src = user.photoURL
    displayName.innerHTML = user.displayName
    cityInput.value = user.city
    loginCard.remove()
    signupCard.remove()
    container.appendChild(profileCard)
}
*/

//EJERCICIO2
// function checkLogin(user) {
//     if (!user) return
//     uid = user.uid
//     //     //EJERCICIO 4
//     //     db.collection('users').doc(user.uid).get()
//     //         .then(docSnap => {

//     displayProfile({ user: docSnap.data() })

//     //         })

// }

// EJERCICIO 3
/**
function saveData(user) {
    db.collection('users').doc(user.uid).get()
        .then(docSnap => {
            if (docSnap.exists) return console.log("ya existe")
            db.collection('users').doc(user.uid).set({
                displayName: user.displayName,
                uid: user.uid,
                email: user.email,
                photoURL: user.photoURL
            })
        })


}
*/

// EJERCICIO 4 
/**
function updateProfile() {
    // must be object
    // Merge the data, no overwrite
    let value = cityInput.value
    db.collection('users').doc(uid).set({ city: value }, { merge: true })
}
*/


//helpers


//listeners
// EJERCICIO 1
/**
googleButtons.forEach(b => b.addEventListener('click', loginWithGoogle))
*/

//EJERCICIO 2
/**
auth.onAuthStateChanged(checkLogin)
 */

// EJERCICIO 4 
/**
cityInput.addEventListener('keyup', updateProfile)
*/