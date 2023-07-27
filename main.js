// add func to call api to create account


// const sendChatBtn = document.querySelector(".chat-input span");
// const sendChatBtn = document.getElementById("send-btn")
chatbots_link_local = "http://127.0.0.1:5503/chatbots.html";
chatbots_link = "https://bluekid2457.github.io/ChatbotGeneratorTest/chatbots.html";
localStorage.clear();
console.log(window.location.href);
console.log(window.location.href.substring(0,window.location.href.lastIndexOf('/')+1))
localStorage.setItem("links", window.location.href.substring(0,window.location.href.lastIndexOf('/')+1));
// if (window.location.href.includes("127.0.0.1")){
    
// }
// else{
//     localStorage.setItem("links","http://127.0.0.1:5503/");
//     localStorage.setItem("links",);
// }
const API_URL_create = "https://mcfss60826.execute-api.us-west-2.amazonaws.com/default/CreateAccountChatbotGenerator" //?uname=test4&password=998
const createAccount = () => {
    
    username = document.getElementById("uname");
    username = username.value;
    password = document.getElementById("pass");
    password = password.value;
    
    // console.log(username);
    // document.cookie = "username="+username;
    
//     fetch(API_URL_create+"?uname="+username+"&password="+password).then(res => res.text()).then(data => {
//         text = document.getElementById("Sign-up-button");
//         text.innerHTML = "Account {"+username+"} created";
//     }).catch(() => {
//         text = document.getElementById("Sign-up-button");
//         text.innerHTML = "Account not created";
// })
    fetch(API_URL_create, {
    method: "post",
    // headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    // },
    //make sure to serialize your JSON body
    body: JSON.stringify({
        uname: username,
        password: password
    })
    }).then(data => {
        
                console.log("Account {"+username+"} created");
                text = document.getElementById("Sign-up-button");
                text.value = "Account {"+username+"} created";
                document.getElementById("reg-log").checked = false;
            }).catch(() => {
                text = document.getElementById("Sign-up-button");
                text.innerHTML = "Account not created";
        })
    
}

const API_URL_login = "https://95z6jwzqnh.execute-api.us-west-2.amazonaws.com/default/validatelogin"
const signIn = () => {
    
    username = document.getElementById("L-uname");
    username = username.value;
    password = document.getElementById("L-pass");
    password = password.value;
    error = true;
    domain = "NONE";
    fetch(API_URL_login+"?uname="+username+"&password="+password).then(res => res.text()).then(data => {
        // console.log(typeof(data));
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
        if (localStorage.getItem("domain") == "Wrong password") {
            error = true;
        }
        })
    setTimeout(function(){
        
        if (!error){
            // window.location.href = "http://127.0.0.1:5503/chatbots.html"; //change to actual domain
            console.log(localStorage.getItem("links"))
            window.location.href = localStorage.getItem("links")+"chatbots.html"; //change to actual domain
            // window.location.href = chatbots_link; //change to actual domain
        }
        else{
            alert("Wrong password or account"); //ad other code in here
        }
      }, 5000);
    // console.log("DONE");
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
