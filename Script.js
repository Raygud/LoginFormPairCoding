let BodyOverLap = document.getElementById("BodyOverLap")
let PageLoader = document.getElementById("InnerLoad")
let loading = document.getElementById('loading')
let SignUpEmail = document.getElementById("SignUpEmail")
let SignUpPassword = document.getElementById("SignUpPassword")
let SignUpPasswordVeri = document.getElementById("SignUpPasswordVeri")
let LoginEmail = document.getElementById("LoginEmail")
let LoginPassword = document.getElementById("LoginPassword")
const UserStorage = JSON.parse(window.localStorage.getItem("User"))
const PasswordStorage = JSON.parse(window.localStorage.getItem("Password"))
let x_storage = JSON.parse(window.localStorage.getItem("index"))

const User = [
"Admin"
]
const Password = [
"Admin"
]
console.log({User, Password})
console.log({UserStorage, PasswordStorage})

function SignUp(){
    x_storage++
    if (SignUpPassword.value == SignUpPasswordVeri.value){
        User[x_storage] = SignUpEmail.value
        Password[x_storage] = SignUpPassword.value
         window.localStorage.setItem("User", JSON.stringify(User))
        window.localStorage.setItem("Password", JSON.stringify(Password))
        window.localStorage.removeItem("Index")
        window.localStorage.setItem("Index", JSON.stringify(x_storage))
        console.log({User, Password})
console.log({UserStorage, PasswordStorage})
location.reload()

    }
   
}

function Login(){
    for (i = 0; i< User.length; i++) {
        if (User[i] == LoginEmail.value && Password[i] == LoginPassword.value) {

            alert("logged in")
        }
        else{
            alert("You no enter u no kno paswrd")
        }
        
    }
}

PageLoader.style.width = 0 + "%"

function LoadPage(){
    let t = 0
    let i = 0;
    while (i <= 106) {
      task(i);
       i++;
       t++;
       
    }
    function task(i) {
      setTimeout(function() {
      
      
      PageLoader.style.width = i + "%"
console.log(i)
      if ( i >= 5 && i <= 105){
      i = i -5
      loading.innerHTML = i + "%"
    }

    if (i >= 106){
        setTimeout(function(){ BodyOverLap.style.opacity = "0%"}, 550);
        setTimeout(function(){ BodyOverLap.style.display = "none"}, 750);

    }
      }, 100 * t);
    }
    
}
