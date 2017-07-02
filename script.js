function encima() {
    console.log('encima');
    
 document.getElementById("a").style.background = 'white';
}

function no_encima() {
     console.log('no_encima');
 document.getElementById("a").setAttribute('style', 'background-color: darkorchid');
}

document.getElementById("animes").addEventListener("mouseover", encima);
document.getElementById("animes").addEventListener("mouseout", no_encima);