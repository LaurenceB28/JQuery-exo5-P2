

$(document).ready(function(){
    //Lorsque la souris entre dans le div...
    $("#colored").mouseenter(function(){
        //...On ajoute une couleur de fond au div
        $("#text").css("color", "#ff568c");
    });

    //Lorsque la souris ressort du div...
    $("#colored").mouseleave(function(){
        //...On remet un fond blanc
        $("#text").css("color", "black");
    });
});












// $(function(){
//     $('#text').mouseover(function(){  // Quand le curseur est sur l'image (class img), cela déclanche un agrandissement
//             // $('img').height(700);    // ( x ) valeur x en px
//             $(this).color("");        // 'this' cible chaque img indépendamment
//         });
//     $('.img').mouseout(function(){   // Quand le curseur est sur l'image, cela déclanche un rétrécissement
//             $('img').height(500);
//         });
// });