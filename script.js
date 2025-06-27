// Ma liste de mots
const motsPendu = ["cafe", "binouze", "cailloux"]

// Pour Stack mon mot aleatoire en majuscule
let motAdeviner = motsPendu[Math.floor(Math.random() * (motsPendu.length))].toUpperCase()

// Pour stack mon choix de lettre
let choixUser = ""

// pour stack mes emplacement
const underscore = []

let erreur = 0

console.log(motAdeviner)


// Placer les underscores par rapport au nombre de lettres du mot
for (let i = 0; i < motAdeviner.length; i++) {
    underscore.push("_");
}

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
        if (erreur == 2) {
            document.getElementById("pendu").innerHTML = `<img src="img/2.PNG" alt=""></img>`
        } else if (erreur == 3) {
            document.getElementById("pendu").innerHTML = `<img src="img/3.PNG" alt=""></img>`
        } else if (erreur == 4) {
            document.getElementById("pendu").innerHTML = `<img src="img/4.PNG" alt=""></img>`
        } else if (erreur == 5) {
            document.getElementById("pendu").innerHTML = `<img src="img/5.PNG" alt=""></img>`
        } else if (erreur == 6) {
            document.getElementById("pendu").innerHTML = `<img src="img/6.PNG" alt=""></img>`
        } else if (erreur == 7) {
            document.getElementById("pendu").innerHTML = `<img src="img/7.PNG" alt=""></img>`
        } else if (erreur == 8) {
            document.getElementById("pendu").innerHTML = `<img src="img/8.PNG" alt=""></img>`
        } else if (erreur == 9) {
            document.getElementById("pendu").innerHTML = `<img src="img/9.PNG" alt=""></img>`
            setTimeout(() => {
                document.getElementById("pendu").innerHTML = `<img src="img/Game Over GIF.gif" id="refresh" alt=""></img>`
            }, 1500);
            setTimeout(() => {
                // On ajoute le bouton dans le DOM
                document.getElementById("pendu").innerHTML = `<input type="button" value="Rafraichir" id="refresh" />`;

                // Ensuite, on récupère le bouton fraichement créé
                let refresh = document.getElementById("refresh");

                // Et on ajoute le bon event listener
                refresh.addEventListener('click', () => {
                    location.reload();
                });
            }, 2500);
        }
    }
    document.getElementById("lettrePendu").innerText = underscore.join(" ");

    console.log(erreur)
}





















