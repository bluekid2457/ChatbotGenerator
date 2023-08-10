

te = document.getElementById("h");
te.innerText = "HELLO"; //change to Name of chatbot

const chatbotTest = () => {

    domain = localStorage.getItem("domain");
    // domain = "test.com"
    message = document.getElementById("chat_input").value
    console.log(domain+": domain")
    // console.log(username);
    fetch("https://d7quvtbtqi.execute-api.us-west-2.amazonaws.com/default/testFunc1?company="+domain +"&uinput="+message).then(res => res.text()).then(data => {
        text = document.getElementById("chat_response");
        text.innerHTML = data;
    }).catch(() => {
        text = document.getElementById("chat_response");
        text.innerHTML = "Error";
})    
}
