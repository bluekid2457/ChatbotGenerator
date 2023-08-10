
domainField = document.getElementById("input_domain");
domainField.value = localStorage.domain;
console.log(domainField.value.length);
console.log(typeof(localStorage.domain))
if (domainField.value.length == 0){
    domainField.disabled = false;
    domainField.style.visibility = 'visible';
}
else{
    // alert("Empty");
    document.getElementById("sampledata").style.display="none";
    // document.getElementById("sampledata").style.visibility = 'hidden';
    domainField.disabled = true;
    domainField.style.display="none";
    domain_text = document.getElementById("Domain_text");
    domain_text.innerHTML = "Your domain is " + localStorage.domain;
}
const API_URL_domain = "https://fhdm27kb9i.execute-api.us-west-2.amazonaws.com/default/addDomain"
const API_URL_info = "https://oxjw49ppec.execute-api.us-west-2.amazonaws.com/default/changeInfo"

fetch(API_URL_info+"?domain="+localStorage.domain).then(res => res.text()).then(data => {
    in_field = document.getElementById("input_info");
    if (data.slice(1,-1) == '"message":"Internal Server Error"'){
        data = "";
    }
    in_field.value = data.split('"')[1];

}).catch(() => {
    in_field = document.getElementById("input_info");
    in_field.value = "some error";
})    
// infoField = document.getElementById("input_info");
// infoField.value = localStorage.info;

const createBot = () => {
    console.log("Creating...");
    addDomain();
    addInfo();
}

const addDomain = () => {
    // alert("adding");
    domain = document.getElementById("input_domain").value;
    username = localStorage.getItem("username");
    console.log(domain+": domain")
    console.log(username);
    fetch(API_URL_domain+"?uname="+username+"&domain="+domain).then(res => res.text()).then(data => {
        console.log(data);
        if (data.includes("Domain Taken")){
            console.log("domain {"+domain+"} is Taken");
            text = document.getElementById("sampledata");
            text.innerHTML = "domain {"+domain+"} is Taken";
        }
        else{
            text = document.getElementById("sampledata");
            text.innerHTML = "domain {"+domain+"} added";
            localStorage.setItem("domain",domain);
        }
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
    email = document.getElementById("input_email").value;
    info = info.replaceAll("&","%26");
    info = info.replaceAll("=","%3D");
    console.log(domain+": domain");
    console.log("info :" + info);
    fetch(API_URL_info+"?info="+info+"&domain="+domain+"&email="+email).then(res => res.text()).then(data => {
        text = document.getElementById("sampledata3");
        text.innerHTML = "info {"+info+"} added to {"+domain+"}";
    }).catch(() => {
        text = document.getElementById("sampledata");
        text.innerHTML = "domain ERROR";
    })    
    //     fetch(API_URL_info, {
    //     method: "post",
    //     // headers: {
    //     //     'Accept': 'application/json',
    //     //     'Content-Type': 'application/json'
    //     // },
    //     //make sure to serialize your JSON body
    //     body: JSON.stringify({
    //         info: info,
    //         domain: domain
    //     })
    //     }).then(res => res.text()).then(data => {
    //         text = document.getElementById("sampledata3");
    //         text.innerHTML = "info {"+info+"} added to {"+domain+"}";
    //     }).catch(() => {
    //         text = document.getElementById("sampledata");
    //         text.innerHTML = "domain ERROR";
    // })    
//     fetch(API_URL_info+"?info="+info+"&domain="+domain).then(res => res.text()).then(data => {
//         text = document.getElementById("sampledata3");
//         text.innerHTML = "info {"+info+"} added to {"+domain+"}";
//     }).catch(() => {
//         text = document.getElementById("sampledata");
//         text.innerHTML = "domain ERROR";
// })    
}
