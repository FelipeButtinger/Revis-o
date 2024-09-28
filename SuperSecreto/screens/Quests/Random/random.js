let texts = ["Olá", "Você passará por um teste", "Baseado em sorte", "Será sorteado um número", "entre 1 e 1000", "você terá 4 tentativas", "cada erro te dará uma dica", "boa sorte!", "Comece!"];
let index = 0;

document.addEventListener("DOMContentLoaded", function() {
    const gamePlan = document.getElementById("gameArea");
    gamePlan.style.display = 'none';
    const paragrafo = document.getElementById("changeComputer");
    const button2 = document.getElementById("btnSkip")

    function handleClick() {
        alert("Me dei ao trabalho pra tu pulaaar");
        let lastContent = texts[texts.length-1]
        button2.style.display="none"
        texts = [lastContent]
    }
    
    button2.addEventListener("click", handleClick);

    function write() {
        let currentText = texts[index].split(""); 
        let textChange = "";
        let i = 0;

        function typeWriter() {
            if (i < currentText.length) {
                textChange += currentText[i]; 
                paragrafo.textContent = textChange; 
                i++;
                setTimeout(typeWriter, 100); 
            } else {
                setTimeout(backSpace, 1000); 
            }
        }

        function backSpace() {
            if (textChange.length > 0) {
                textChange = textChange.slice(0, -1); 
                paragrafo.textContent = textChange; 
                setTimeout(backSpace, 100); 
            } else {
                index++; 
                if (index < texts.length) {
                    setTimeout(write, 500); 
                } else {
                    button2.style.display="none"
                    game(); 
                }
            }
        }

        typeWriter(); 
    }

    write(); // Inicia o ciclo de escrita
  
});

function game(){
    const gamePlan = document.getElementById("gameArea");
    gamePlan.style.display = 'block'; 

    const numero = Math.floor(Math.random() * 1001);
    console.log(numero)
    let chances = 0
   const button = document.getElementById("btnKick");
    const dica1 = document.getElementById("clue1")
    const dica2 = document.getElementById("clue2")
    const dica3 = document.getElementById("clue3")

function handleClick() {
let chute = document.getElementById("input").value;

let fill = ""
 if(chute>1000 || chute<0){
    console.log("Insira um chute entre 0 e 1000")
 }else {
    chances = chances +1
    if(chute>numero){//chute alto
        fill = "Menor que "+chute
    }else if(chute<numero){//chute baixo
        fill = "Maior que "+chute
    }else{//igual
        return
    }

    switch(chances){
        case 1:
            dica1.textContent = fill
            break
        case 2:
            dica2.textContent = fill
            break
        case 3:
            dica3.textContent = fill
            break
        default:
            alert("HAHAHA PERDEU")
            window.location.href = "../../GetKey/getKey.html"; 

    }

}

}
button.addEventListener("click", handleClick);
}
