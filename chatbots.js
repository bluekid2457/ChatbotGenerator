// basically add a function that checks for that chatbots they alr have from s3 bucket and not jsut from previous page and use that later
text = document.getElementById("existingchatbot");
console.log(localStorage.getItem("domain"));

text.innerHTML = localStorage.getItem("domain");

const navCreate = () => {
    window.location="http://127.0.0.1:5503/create.html"
}