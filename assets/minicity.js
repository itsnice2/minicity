
set_streets()

function set_streets(){

    var v = 6; // + 11
    var h = 56; // 56-66
    var m = 61 // Mittelstück

    // vertikale Straßen setzen
    for(i = 1; i < 12; i++){
        document.getElementById("cell-" + v).innerHTML = "<img src='./buildings/street_vertical.png' class='bulding-map'>";
        v = v + 11;
    }

    // Horizontale Straßen setzen
    for(i = 1; i < 12; i++){
        document.getElementById("cell-" + h).innerHTML = "<img src='./buildings/street_horizontal.png' class='bulding-map'>";
        h = h + 1;
    }

    document.getElementById("cell-" + m).innerHTML = "<label style=\"background-image: url(\"./buildings/street_middle.png\"); width: 50px; height: 50px;\"></label>";
    //<img src='./buildings/street_middle.png' class='bulding-map'>
}