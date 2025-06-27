const motsPendu = ["cafe", "binouze", "cailloux", "rum", "voiture", "moto", "maison"]
let motAdeviner = motsPendu[Math.floor(Math.random() * (motsPendu.length))].toUpperCase()
let choixUser = ""
const underscore = []
let erreur = 0

// Placer les underscores par rapport au nombre de lettres du mot
for (let i = 0; i < motAdeviner.length; i++) {
    underscore.push("_");
}
document.getElementById("lettrePendu").innerText = underscore.join(" ");

// la function pour le jeux
function recupLettres(choixUser) {
    const lettreMot = motAdeviner.split("")

    if (lettreMot.includes(choixUser)) {
        for (i = 0; i < lettreMot.length; i++) {
            // Si lettreMot scan par la boucle = le choix du joueur
            if (lettreMot[i] === choixUser) {
                // Alors underscore scan par la boucle prend la valeur de choix User
                underscore[i] = choixUser
            }
        }
    } else {
        erreur++
        document.getElementById("pendu").innerHTML = `<img src="img/1.PNG" alt=""></img>`
        switch (erreur) {
            case 2:
                document.getElementById("pendu").innerHTML = `<img src="img/2.PNG" alt=""></img>`
                break
            case 3:
                document.getElementById("pendu").innerHTML = `<img src="img/3.PNG" alt=""></img>`
                break
            case 4:
                document.getElementById("pendu").innerHTML = `<img src="img/4.PNG" alt=""></img>`
                break
            case 5:
                document.getElementById("pendu").innerHTML = `<img src="img/5.PNG" alt=""></img>`
                break
            case 6:
                document.getElementById("pendu").innerHTML = `<img src="img/6.PNG" alt=""></img>`
                break
            case 7:
                document.getElementById("pendu").innerHTML = `<img src="img/7.PNG" alt=""></img>`
                break
            case 8:
                document.getElementById("pendu").innerHTML = `<img src="img/8.PNG" alt=""></img>`
                break
            case 9:
                document.getElementById("pendu").innerHTML = `<img src="img/9.PNG" alt=""></img>`
                setTimeout(() => {
                    document.getElementById("pendu").innerHTML = `<img src="img/Game Over GIF.gif" id="refresh" alt=""></img>`
                }, 1000);
                setTimeout(() => {
                    location.reload();
                }, 3000);
                break
        }
    }

    document.getElementById("lettrePendu").innerText = underscore.join(" ");

    if (underscore.join("") === motAdeviner) {
        document.getElementById("pendu").innerHTML = `<img src="img/Happy Lets Go GIF by NHL.gif" width="490" alt="">`
        setTimeout(() => {
            location.reload();
        }, 6500);
    }
}










