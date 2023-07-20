
domainField = document.getElementById("input_domain");
domainField.value = localStorage.domain;
const API_URL_domain = "https://fhdm27kb9i.execute-api.us-west-2.amazonaws.com/default/addDomain"
const createBot = () => {
    console.log("Creating...");
    addDomain();
}

const addDomain = () => {
    domain = document.getElementById("input_domain").value;
    username = localStorage.getItem("username");
    console.log(domain+": domain")
    console.log(username);
    fetch(API_URL_domain+"?uname="+username+"&domain="+domain).then(res => res.text()).then(data => {
        text = document.getElementById("sampledata");
        text.innerHTML = "domain {"+domain+"} added";
        localStorage.setItem("domain",domain);
    }).catch(() => {
        text = document.getElementById("sampledata");
        text.innerHTML = "domain ERROR";
})    
}

const addInfo = () => {
    domain = document.getElementById("input_info").value;
    username = localStorage.getItem("username");
    console.log(domain+": domain")
    console.log(username);
    fetch(API_URL_domain+"?uname="+username+"&domain="+domain).then(res => res.text()).then(data => {
        text = document.getElementById("sampledata");
        text.innerHTML = "domain {"+domain+"} added";
    }).catch(() => {
        text = document.getElementById("sampledata");
        text.innerHTML = "domain ERROR";
})    
}
