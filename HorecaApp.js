var loop = true;
var fris = 0;
var bier = 0;
var wijn = 0;
const prijsf = 1.50;
const prijsb = 2.25;
const prijsw = 3;

function Bestelling(){
   
   var vraag = prompt("Welke bestelling wilt u toevoegen?");
   if(vraag == "fris"){
       fris = prompt("Hoeveel fris wilt u?");
        if(fris == ""){
            alert("Geen fris toegevoegd.");
            fris = 0;
        }else{
            alert(fris + " Fris aan bestelling toegevoegd.");
        }
   }

   if(vraag == "bier"){
        bier = prompt("Hoeveel bier wilt u?");
        if(bier == ""){
            alert("Geen bier toegevoegt");
            bier = 0;
        }else{
            alert(bier + " Bier aan bestelling toegevoegd.");
        }
   }
   
   if(vraag == "wijn"){
        wijn = prompt("Hoeveel wijn wilt u?");
        if(wijn == ""){
            alert("Geen wijn toegevoegd.")
            wijn = 0;
        }else{
            alert(wijn + " Wijn aan bestelling toegevoegd.");
        }
   }
   if(vraag == "stop"){
       loop = false
   }

}    

while(loop){
    Bestelling();
}

var frisprijs = prijsf * fris;
var bierprijs = prijsb * bier;
var wijnprijs = prijsw * wijn;
var totaalprijs = frisprijs + bierprijs + wijnprijs; // Rekent de totaal prijs uit.

document.write("Bestellings lijst. <br>");
document.write("Aantal Fris: " + fris + "<br>")
document.write("Aantal Bier: " + bier + "<br>")
document.write("Aantal Wijn: " + wijn + "<br> <br>")
document.write("Prijs voor Fris: " + frisprijs + " Euro" + "<br>")
document.write("Prijs voor Bier: " + bierprijs + " Euro" + "<br>")
document.write("Prijs voor Wijn: " + wijnprijs + " Euro" + "<br> <br>")
document.write("Totaal prijs: " + totaalprijs + " Euro")