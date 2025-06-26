const motsPendu = ["café", "binouze", "cailloux"]
let motAdeviner = motsPendu[Math.floor(Math.random() * (motsPendu.length + 1))]
console.log(motAdeviner)
let choixUser = 0

function recupLettres(choix) {
    choixUser == choix
    console.log(choixUser)
}

for (i = 0; i > motAdeviner; i++) {
    if (motAdeviner.charAt(i) == choixUser) {
        document.getElementById("lettrePendu").innerHTML = choixUser
    } else if (i == 0) {
        document.getElementById("pendu").innerHTML = `<img src="img/1.PNG" alt=""></img>`
    } else if (i == 1) {
        document.getElementById("pendu").innerHTML = `<img src="img/2.PNG" alt=""></img>`
    } else if (i == 2) {
        document.getElementById("pendu").innerHTML = `<img src="img/3.PNG" alt=""></img>`
    } else if (i == 3) {
        document.getElementById("pendu").innerHTML = `<img src="img/4.PNG" alt=""></img>`
    } else if (i == 4) {
        document.getElementById("pendu").innerHTML = `<img src="img/5.PNG" alt=""></img>`
    } else if (i == 5) {
        document.getElementById("pendu").innerHTML = `<img src="img/6.PNG" alt=""></img>`
    } else if (i == 6) {
        document.getElementById("pendu").innerHTML = `<img src="img/7.PNG" alt=""></img>`
    } else if (i == 7) {
        document.getElementById("pendu").innerHTML = `<img src="img/8.PNG" alt=""></img>`
    } else if (i == 8) {
        document.getElementById("pendu").innerHTML = `<img src="img/9.PNG" alt=""></img>`
    }
}

