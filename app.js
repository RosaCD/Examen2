let array = [];
document.getElementById("crear").addEventListener("click", function() {
    let eleccion = document.getElementById("evento").value;
    array.push(eleccion); 
    showDom("lista", array);
    function showDom(evento, arr) {
        document.getElementById(evento).innerHTML = "";
        for (let iniciar = 0; iniciar < arr.length; iniciar++) {
                    document.getElementById(evento).innerHTML += `<div>${arr[iniciar]}</div>`;
                }
            }
});

document.getElementById("eliminar").addEventListener("click", function() {
    array.pop(); 
    showDom("lista", array);
    function showDom(evento, arr) {
        document.getElementById(evento).innerHTML = "";
        for (let iniciar = 0; iniciar < arr.length; iniciar++) {
                    document.getElementById(evento).innerHTML += `<div>${arr[iniciar]}</div>`;
                }
            }
});

// let evento = ["rosa", "lila", "petunia", "margarita", "diente de leon", "crisantemo", "narciso", "hortencias", "girasoles","claveles"]
// showDom("lista", evento);

// function showDom(elementos, arr) {
//     document.getElementById(elementos).innerHTML = "";
    
    
//     for (let iniciar = 0; iniciar < arr.length; iniciar++) {
//         document.getElementById(elementos).innerHTML += `<div>${arr[iniciar]}</div>`
        
//     }
// }
