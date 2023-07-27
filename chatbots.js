// basically add a function that checks for that chatbots they alr have from s3 bucket and not jsut from previous page and use that later
link_local = "http://127.0.0.1:5503/create2.html"

text = document.getElementById("existingchatbot");
console.log(localStorage.getItem("domain"));
create_link_local = link_local;
create_link = "https://bluekid2457.github.io/ChatbotGeneratorTest/create2.html";
text.innerHTML = localStorage.getItem("domain");

const navCreate = () => {
    window.location=localStorage.getItem("links")+"create2.html";
    // window.location=create_link;
}