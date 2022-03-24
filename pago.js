function calcular(){
    let cuenta= parseFloat(document.getElementById('cuenta').value);
    let propina= parseFloat(document.getElementById('propina').value);
    let total=0;
    total = cuenta + propina;
    document.getElementById('tot').value ;

    cuenta.value= cuenta;
    propina.value= propina;
    total.value= tot;
    
    
}
let nav = document.getElementById('resumen');
     nav.addEventListener('submit', (e)=>{
         e.preventDefault();
     })





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


