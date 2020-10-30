var loop = true;
var fris = 0;
var bier = 0;
var wijn = 0;
var bitterbalacht = 0;
var bitterbalzestien = 0;
const prijsf = 1.50;
const prijsb = 2.25;
const prijsw = 3;
const prijss = 3;
const prijsss = 6;

function Bestelling(){
   
   var vraag = prompt("Welke bestelling wilt u toevoegen?");

    if(vraag == ""){
        alert("Dat begreep ik niet. Probeer het opnieuw.");
    }

    if(vraag == "snack"){
       var vraag2 = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?");
       if(vraag2 == "8"){
           bitterbalacht = prompt("Hoeveel schalen van 8 bitterballen wilt u?");
           alert(bitterbalacht + " schaal(en) toegevoegd aan bestelling.");
       }
       if(vraag2 == "16"){
           bitterbalzestien = prompt("Hoeveel schalen van 16 bitterballen wilt u?");
           alert(bitterbalzestien + " Schaal(en) toegevoegd aan bestelling.");
       }
    }

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
var bitterbalprijsacht = prijss * bitterbalacht;
var bitterbalprijszestien = prijsss * bitterbalzestien;
var bitterbalprijs = bitterbalprijsacht + bitterbalprijszestien;
var totaalprijs = frisprijs + bierprijs + wijnprijs + bitterbalprijs; // Rekent de totaal prijs uit.

document.write("Bestellings lijst. <br><br>");
document.write("Drank <br>");

document.write("Aantal Fris: " + fris + "<br>");
document.write("Aantal Bier: " + bier + "<br>");
document.write("Aantal Wijn: " + wijn + "<br> <br>");

document.write("Prijs voor Fris: " + frisprijs + " Euro" + "<br>");
document.write("Prijs voor Bier: " + bierprijs + " Euro" + "<br>");
document.write("Prijs voor Wijn: " + wijnprijs + " Euro" + "<br> <br>");

document.write("Snacks <br>")
document.write("Aantal bitterbal schalen van acht: " + bitterbalacht + "<br>");
document.write("Aantal bitterbal schalen van zestien: " + bitterbalzestien + "<br><br>");

document.write("Prijs voor bitterballen (schaal van acht): " + bitterbalprijsacht + " Euro <br>");
document.write("Prijs voor bitterballen (schaal van zestien: " + bitterbalprijszestien + " Euro <br><br>")
document.write("Totaal prijs: " + totaalprijs + " Euro");