const magicalMessages = ["Abracadabra", "Hocus Pocus", "Open Sesame", "Shazam", "Alakazam", "Accio", "Bibbidi-Bobbidi-Boo"];
const characters = ["witch", "wizard", "conjourer", "fairy", "sorcerer"];
const verbs = ["said", "shouted", "exclaimed", "whispered", "cried", "sang"];

function generateMessage() {
    let c = Math.floor(Math.random() * characters.length);
    let v = Math.floor(Math.random() * verbs.length);
    let m = Math.floor(Math.random() * magicalMessages.length);

    let message = `The ${characters[c]} ${verbs[v]} "${magicalMessages[m]}".`;
    console.log(message);
    return message;
}

function displayMessage() {
    let message = generateMessage();
    document.getElementById("message").innerHTML = message;
}

function resetMessage() {
    document.getElementById("message").innerHTML = "Your message will display here";
}

generateMessage();