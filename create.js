
domainField = document.getElementById("input_domain");
domainField.value = localStorage.domain;
const API_URL_domain = "https://fhdm27kb9i.execute-api.us-west-2.amazonaws.com/default/addDomain"
const API_URL_info = "https://oxjw49ppec.execute-api.us-west-2.amazonaws.com/default/changeInfo"

const createBot = () => {
    console.log("Creating...");
    addDomain();
    addInfo();
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
    // domain = document.getElementById("input_info").value;
    username = localStorage.getItem("username");
    domain = localStorage.getItem("domain");
    info = document.getElementById("input_info").value;
    console.log(domain+": domain")
    console.log(username);
    fetch(API_URL_info+"?info="+info+"&domain="+domain).then(res => res.text()).then(data => {
        text = document.getElementById("sampledata2");
        text.innerHTML = "info {"+info+"} added to {"+domain+"}";
    }).catch(() => {
        text = document.getElementById("sampledata");
        text.innerHTML = "domain ERROR";
})    
}
