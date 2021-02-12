
/*** 1.0 Arrays */

/*
let arr;
arr = new Array(); // Konstruktor
arr = []; // Literal
arr = [2,6,7,12];
arr = [true,false];
arr = ["Ich","bin","Drazen"];

ausgabe(arr);
ausgabe(arr[0]);
ausgabe(arr[2]);
ausgabe(arr.length);
*/




//"Ich bin Drazen."
//ausgabe(getSentence("Ich","bin","Drazen","Savi")); // Test
function getSentence(word1,word2,word3,word4) {

    let gap = " ";
    let punct = ".";
    let str = word1 + gap + 
              word2 + gap + 
              word3 + gap + 
              word4 + 
              punct;
    return str;
}

// Modul: Ausgabe in Konsole | Test:
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}