let total=0;
let form = document.getElementById('form');
     form.addEventListener('submit', (e)=>{
         e.preventDefault();
         
 })

function calcular(){

    let cuenta= parseFloat(document.getElementById('cuenta').value);
    let propina= parseFloat(document.getElementById('propina').value);
   
    total = cuenta + propina;
    document.getElementById('tot').value = total;
    console.log(total);
    document.getElementById('cuent').value = cuenta;
    document.getElementById('prop').value = propina;
    document.getElementById('total').value = total;
}


 





// cal();
// function cal(){
//     let form;
//     form.addEventListener("button", (e)=>{
//         e.preventDefault();

//         document.write("Su cuenta es:" +cuenta);
//         document.write("Su propina es:" +propina);
//         document.write("El total de su cuenta es:" +total);
//     })
// }

//     resumen();
// }
// function resumen(){
//     resumen.value(`Tu cuenta es:${cuenta},el valor de propina es:${propina} y tu total es:${total}`);
// }


