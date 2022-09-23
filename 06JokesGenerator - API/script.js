function Joke_Gen(){
const url = 'https://icanhazdadjoke.com/slack';

let text_joke=''
fetch(url)
.then(Joke =>{
    return (Joke.json())
})
.then( 
    (data)=>{
       text_joke = data.attachments[0].fallback;
       document.getElementById("joke").innerHTML = text_joke;
    }
)
.catch();
    
}
Joke_Gen();
const btn = document.getElementById("jokeBtn");
btn.addEventListener("click",Joke_Gen)