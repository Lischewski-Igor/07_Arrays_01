
/*** 1.0 Arrays */

/* 1. Array
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

/* 1a. Schleifen (for-schleifen) */
let array = ["Ich","bin","Drazen","Savi"];
//ausgabe(arr);
// i 0,1,2,3 ... n
/*
for (let i = 0; i < 10; i++) {
    ausgabe(i);  
}
*/

// for (let i = 0; i < array.length; i++) {
//     ausgabe(i + ":" + array[i]);  
// }


//*** 02a. Funktionalität mit Array */
// Kritik|Überlegung
// word1,word2, ...... word100 :: Semantisch Ordnung
// arr[0],arr[1] ... arr[n] :: Numerische Ordnung (0,1,2,3 ....n)
//let arr = ["Ich","bin","Drazen","Savi"];
//ausgabe(getSentenceArr(arr)); // Test
function getSentenceArr(arr) {
    let gap = " ";
    let punct = ".";

    let str = arr[0] + gap + 
              arr[1] + gap + 
              arr[2] + gap + 
              arr[3] + 
              punct;

    return str;
}

//*** 01. Funktionalität mit Einzelparametern */
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