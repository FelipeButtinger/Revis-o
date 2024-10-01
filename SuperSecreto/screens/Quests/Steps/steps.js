let sequencia = new Array(3); 
let answer = new Array(3);

document.addEventListener("DOMContentLoaded", function() {
    
game()
   
});

function game() {
    const blue = document.getElementById("fill1");  // Presumo que "fill1" seja o ID do elemento azul
    const red = document.getElementById("fill2");   // Suponha que você tenha elementos de outras cores
    const pink = document.getElementById("fill3");
    const green = document.getElementById("fill4");
    const purple = document.getElementById("fill5");

    // Preencher a array de sequências aleatórias
    for (let i = 0; i < sequencia.length; i++) {
        const numero = Math.floor(Math.random() * 1001);
        if (numero < 200) {
            sequencia[i] = "blue";
        } else if (numero >= 200 && numero < 400) {
            sequencia[i] = "red";
        } else if (numero >= 400 && numero < 600) {
            sequencia[i] = "pink";
        } else if (numero >= 600 && numero < 800) {
            sequencia[i] = "green";
        } else {
            sequencia[i] = "purple";
        }
    }


    let delay = 0; 
    for (let i = 0; i < sequencia.length; i++) {
        setTimeout(function() {
            switch (sequencia[i]) {
                case "blue":
                    blue.style.opacity = 1;
                    setTimeout(function() {
                        blue.style.opacity = 0.5;
                    }, 500); // Muda a opacidade de volta após 0.5 segundos
                    console.log("AZUL");
                    break;
                case "red":
                    red.style.opacity = 1;
                    setTimeout(function() {
                        red.style.opacity = 0.5;
                    }, 500);
                    console.log("VERMELHO");
                    break;
                case "pink":
                    pink.style.opacity = 1;
                    setTimeout(function() {
                        pink.style.opacity = 0.5;
                    }, 500);
                    console.log("ROSA");
                    break;
                case "green":
                    green.style.opacity = 1;
                    setTimeout(function() {
                        green.style.opacity = 0.5;
                    }, 500);
                    console.log("VERDE");
                    break;
                case "purple":
                    purple.style.opacity = 1;
                    setTimeout(function() {
                        purple.style.opacity = 0.5;
                    }, 500);
                    console.log("ROXO");
                    break;
            }
        }, delay);
        delay += 1000; 
    }
}
