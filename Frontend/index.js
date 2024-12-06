let input=document.getElementById("input-box");
let chatcontainer=document.getElementsByClassName("chat-container");
let btn=document.getElementById("butn");
// let url="https://chatbot-34a3.onrender.com";
let url="http://localhost:9090";

async function Botres(question){
    try {
        console.log('wait')
        let res=await fetch(`${url}/api/LoginFeedback?query=${question}`);
        console.log(res)
        let data=res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

Botres();

