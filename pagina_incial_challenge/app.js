// Remove acentos do texto inserido pelo usuario: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
// Normalize(NFD); Como mostra o link acima é uma normalização unicode, onde o o "replace(/[\u0300-\u036f]/g, "")" entra como o método que substitui determinadas partes de uma string por outro valor. /g é uma flag global que aplica a substituição a todos os caracteres divergentes da string
function normalizeString(str){
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}
//Dados de criptografia. Aqui tambem fazemos o uso do .replace mas agora por letras especificas as quais sao definidas dentro do código
function criptografar(text){
    let normalizeText = normalizeString(text);
    return normalizeText.replace(/e/g, "enter")
                        .replace(/i/g, "imes")
                        .replace(/a/g, "ai")
                        .replace(/o/g, "ober")
                        .replace(/u/g, "ufat");
}
function descriptografar(text){
    return text.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}
// Manipulação de DOM permite que manipulemos o HTML por dentro do JS com o uso dos métodos como o getElementById. 
//O método addEventListenner associa um evento que no caso é o "Click" a uma função que sera executada
document.getElementById('criptografar').addEventListener('click', function(){
//document representa todo o conteudo principal da pasta de HTML e o getElementById busca por um elemento dentro do HTML com um ID especifico o .value traz para dentro do JS o valor informado no textaarea do HTML
    let inserirTexto = document.getElementById('texto_inserido').value;
    let criptografarTexto = criptografar(inserirTexto);
//.textContent é uma propriedade que define o conteudo de texto do elemento HTML 
    document.getElementById('resultado_texto').textContent = criptografarTexto;
//.style permite acessar e modificar o código css, neste caso mudando o display para block fazendo o ficar visivel
    document.getElementById('copiar_texto').style.display = 'block';
});
// segue a mesma lógica da explicação acima
document.getElementById('descriptografar').addEventListener('click', function(){
    let inserirTexto = document.getElementById('texto_inserido').value;
    let descriptografarTexto = descriptografar(inserirTexto);
    document.getElementById('resultado_texto').textContent= descriptografarTexto;
    document.getElementById('copiar_texto').style.display = 'block';
});

document.getElementById('copiar_texto').addEventListener('click', function(){
    let resultadoTexto = document.getElementById('resultado_texto').textContent;
//navigator. é um objeto global do JS que fornece ubformações sobre o navegador do usuario e permite realizar diferentes operações, podendo ser usado em diversas operações como;detecta o tipo de dispositivo,detecar idioma, etc...
//cliboard, basicamente exerce a ffunção de copiar e colar juntamente com o método writeText, mas vale dizque que, navigator.clipboard.writeText funcionam juntos, segue o link:https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard
//.writeText cria uma promise, que abre janela para executar um código adicional apos éla, que vem a ser o then.
//.then: método que faz o uso da promise, ele especifica o que acontece  depois que uma operação assincrona é conluida com sucesso.
//tudo Citado anterirormente se trata de uma operação assincrona, ou seja, é uma operação que aocntece de forma idependente, sem seguir o fluxo padrão do código que é linha a linha, ai que entra o método .then.

    navigator.clipboard.writeText(resultadoTexto).then(function(){
        alert ('Texto copiado para a área de transferencia')
    })
});