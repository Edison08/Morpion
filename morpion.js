var caseCliquee;
var numeroJoueur = 1;

$("#morpion").click(function(event){
    caseCliquee = event.target;
    jeu(caseCliquee);
    victoire();
})

recommencer=function(){
    window.location.reload();
}
$("#restart").click(recommencer);


jeu=function(caseCliquee){
    if ((numeroJoueur==1) && !($(caseCliquee).hasClass("joueur1")) && !($(caseCliquee).hasClass("joueur2"))) {
        $(caseCliquee).addClass("joueur1");
        numeroJoueur=2;
	} else if ((numeroJoueur==2) && !($(caseCliquee).hasClass("joueur1")) && !($(caseCliquee).hasClass("joueur2"))) {
		$(caseCliquee).addClass("joueur2");
        numeroJoueur=1;
    }
    console.log(numeroJoueur);
}

var victoire;
victoire=function(){
    if(($("#id1").hasClass("joueur1")) && ($("#id2").hasClass("joueur1")) && ($("#id3").hasClass("joueur1")) 
    || ($("#id4").hasClass("joueur1")) && ($("#id5").hasClass("joueur1")) && ($("#id6").hasClass("joueur1"))
    || ($("#id7").hasClass("joueur1")) && ($("#id8").hasClass("joueur1")) && ($("#id9").hasClass("joueur1"))
    || ($("#id1").hasClass("joueur1")) && ($("#id5").hasClass("joueur1")) && ($("#id9").hasClass("joueur1"))
    || ($("#id3").hasClass("joueur1")) && ($("#id5").hasClass("joueur1")) && ($("#id7").hasClass("joueur1"))
    || ($("#id1").hasClass("joueur1")) && ($("#id4").hasClass("joueur1")) && ($("#id7").hasClass("joueur1"))
    || ($("#id5").hasClass("joueur1")) && ($("#id5").hasClass("joueur1")) && ($("#id8").hasClass("joueur1"))
    || ($("#id3").hasClass("joueur1")) && ($("#id6").hasClass("joueur1")) && ($("#id9").hasClass("joueur1")))
    {
        $("#win").html("LE JOUEUR 1 A GAGNÉ, BIEN JOUÉ CHAMPION! <br><br>");
        victoire = 1;
    } 
    else if(($("#id1").hasClass("joueur2")) && ($("#id2").hasClass("joueur2")) && ($("#id3").hasClass("joueur2")) 
    || ($("#id4").hasClass("joueur2")) && ($("#id5").hasClass("joueur2")) && ($("#id6").hasClass("joueur2"))
    || ($("#id7").hasClass("joueur2")) && ($("#id8").hasClass("joueur2")) && ($("#id9").hasClass("joueur2"))
    || ($("#id1").hasClass("joueur2")) && ($("#id5").hasClass("joueur2")) && ($("#id9").hasClass("joueur2"))
    || ($("#id3").hasClass("joueur2")) && ($("#id5").hasClass("joueur2")) && ($("#id7").hasClass("joueur2"))
    || ($("#id1").hasClass("joueur2")) && ($("#id4").hasClass("joueur2")) && ($("#id7").hasClass("joueur2"))
    || ($("#id5").hasClass("joueur2")) && ($("#id5").hasClass("joueur2")) && ($("#id8").hasClass("joueur2"))
    || ($("#id3").hasClass("joueur2")) && ($("#id6").hasClass("joueur2")) && ($("#id9").hasClass("joueur2")))
    {
        $("#win").html("LE JOUEUR 2 A GAGNÉ, BIEN JOUÉ CHAMPION! <br><br>");
        victoire = 2;
    }
}

//test
egalite=function(victoire){
    if(!victoire == 1 && !victoire == 2){
        $("#win").html("MATCH NUL, VOUS ETES NUL! <br><br>");
    }
}