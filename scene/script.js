function tournerGauche(){
    var boite = document.getElementById("boite");
    var rotation = boite.getAttribute("rotation");
    rotation.y -= 5;
    boite.setAttribute("rotation", rotation.x + " " + rotation.y + " " + rotation.z);
}

function tournerDroite(){
    var boite = document.getElementById("boite");
    var rotation = boite.getAttribute("rotation");
    rotation.y += 10;
    boite.setAttribute("rotation", rotation.x + " " + rotation.y + " " + rotation.z);
}
