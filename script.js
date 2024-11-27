function criptareCesar(text,cheie) {
    //initializam un rezultat gol
    var rezultat = "";
    //pracurgem fiecare litera din text
    for (let i = 0; i < text.length; i++) {
        //extragem fiecare litera 
        let litera = text[i];

        //verificam daca este litera
        if (litera.match(/[a-z]/)) {
            let codAscii = text.charCodeAt(i);
            litera = String.fromCharCode(((codAscii - 97 + cheie) %26) + 97);
            rezultat += litera;

        }
        else if (litera.match(/[A-Z]/)) {
            let codAscii = text.charCodeAt(i);
            litera = String.fromCharCode(((codAscii - 65 + cheie) %26) + 65);
            rezultat += litera;

        }
    }
    return rezultat;

}





function cripteaza() {
    //citeste textul din input
    const text = document.getElementById("text-input").value;


    //citeste cheia din input-ul celalalt
    const cheie = parseInt(document.getElementById("cheie-criptare").value);
    if (isNaN(cheie)) {
        alert("NU este o cheie valida");
        document.getElementById("rezultat").innerText = "NU este o cheie valida";
        return;

    }
    
    //afisarea mesajului criptat
    const rezultat = criptareCesar (text, cheie);
    document.getElementById("rezultat").innerText = rezultat;
}