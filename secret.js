function visHilsen() {

    let navn = document.getElementById("navn").value;

    if (navn.trim() === "") {
        alert("Du må skrive inn navnet ditt først!");
        return;
    }

    document.getElementById("forside").style.display = "none";

    document.getElementById("heiNavn").innerHTML = "Hei " + navn + "!";

    document.getElementById("hilsen").style.display = "block";

}