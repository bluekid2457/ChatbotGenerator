// add func to call api to create account


// const sendChatBtn = document.querySelector(".chat-input span");
// const sendChatBtn = document.getElementById("send-btn")
console.log(window.location.href);
const API_URL_create = "https://mcfss60826.execute-api.us-west-2.amazonaws.com/default/CreateAccountChatbotGenerator" //?uname=test4&password=998
const createAccount = () => {
    localStorage.clear();
    username = document.getElementById("uname");
    username = username.value;
    password = document.getElementById("pass");
    password = password.value;
    
    // console.log(username);
    // document.cookie = "username="+username;
    
    fetch(API_URL_create+"?uname="+username+"&password="+password).then(res => res.text()).then(data => {
        text = document.getElementById("Sign-up-button");
        text.innerHTML = "Account {"+username+"} created";
    }).catch(() => {
        text = document.getElementById("Sign-up-button");
        text.innerHTML = "Account not created";
})
}
const API_URL_login = "https://95z6jwzqnh.execute-api.us-west-2.amazonaws.com/default/validatelogin"
const signIn = () => {
    localStorage.clear();
    username = document.getElementById("L-uname");
    username = username.value;
    password = document.getElementById("L-pass");
    password = password.value;
    error = true;
    // console.log(username);
    // console.log(document.cookie);
    domain = "NONE";
    fetch(API_URL_login+"?uname="+username+"&password="+password).then(res => res.text()).then(data => {
        console.log(typeof(data));
        if (data == '{"message":"Internal Server Error"}'){
            error = true;
            console.log(error);
        }
        else{
            console.log("No error,"+ data);
            error=false;
        }
        domain = data.slice(1,-1);
        console.log(domain)
    }).catch(() => {
        console.log("ERROR sign in issue");
    }).finally(() => {
        localStorage.setItem("domain", domain);
        localStorage.setItem("username",username);
        console.log(localStorage.getItem("domain"));
    })
    setTimeout(function(){
        alert("5 seconds have passed."); //ad other code in here
        if (!error){
            window.location.href = "http://127.0.0.1:5503/chatbots.html"; //change to actual domain
        }
      }, 5000);
    console.log("DONE");
}

function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(fake_cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            }
        }
        return "";
    }
