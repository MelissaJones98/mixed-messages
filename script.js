const magicalMessages = ["Abracadabra", "Hocus Pocus", "Open Sesame", "Shazam", "Alakazam", "Accio", "Bibbidi-Bobbidi-Boo"];
const characters = ["witch", "wizard", "conjourer", "fairy", "sorcerer"];
const verbs = ["said", "shouted", "exclaimed", "whispered", "cried", "sang"];

function generateMessage() {
    let c = Math.floor(Math.random() * characters.length);
    let v = Math.floor(Math.random() * verbs.length);
    let m = Math.floor(Math.random() * magicalMessages.length);
    
    console.log(`The ${characters[c]} ${verbs[v]} "${magicalMessages[m]}".`);
}

generateMessage();