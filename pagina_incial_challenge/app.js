
function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function encrypt(text) {
    let normalizedText = normalizeString(text);
    return normalizedText.replace(/e/g, "enter")
                          .replace(/i/g, "imes")
                          .replace(/a/g, "ai")
                          .replace(/o/g, "ober")
                          .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

document.getElementById('criptografar').addEventListener('click', function() {
    let inputText = document.getElementById('texto_inserido').value;
    let encryptedText = encrypt(inputText);
    document.getElementById('resultado_texto').textContent = encryptedText;
    document.getElementById('copiar_texto').style.display = 'block';
});

document.getElementById('descriptografar').addEventListener('click', function() {
    let inputText = document.getElementById('texto_inserido').value;
    let decryptedText = decrypt(inputText);
    document.getElementById('resultado_texto').textContent = decryptedText;
    document.getElementById('copiar_texto').style.display = 'block';
});

document.getElementById('copiar_texto').addEventListener('click', function() {
    let resultText = document.getElementById('resultado_texto').textContent;
    navigator.clipboard.writeText(resultText).then(function() {
        alert('Texto copiado para a área de transferência!');
    });
});