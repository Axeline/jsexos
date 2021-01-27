"use strict";

// --------------------------------------------Function without argument--------------------------------------------
// export function isoNum() {
//     return 42;
// }

// // --------------------------------------------------- Function with arguments -------------------------------------
// export function myFct ( arg1 , arg2) {
//     return arg1 + arg2;
// }

// // --------------------------------------------------- Messi’s Goal Total -------------------------------------
// export function goalTotal (a,b,c){
//     return a+b+c;
// }
// // --------------------------------------------------- Grasshopper Order of Operations -------------------------------------
// export function GrasshopperOrder(a){
//     return (a+a)*(a+a)*a;
// }
// // --------------------------------------------------- Return the First Element in an Array -------------------------------------
// export function getFirstValue(a){
//     return a[0];
// }

// --------------------------------------------------- Find the Smallest and Biggest Numbers -------------------------------------
// export function minMax(a){
//     var aMin = a[0];
//     var aMax = a[0];  
//     for( var i = 0; i < a.length ;i++){
//         if(aMax<a[i+1]){
//             aMax = a[i+1];
//         }
//         if(aMin>a[i+1]){
//             aMin = a[i+1];
//         }
//     }
//     var tab = [aMin,aMax];
//     return tab;
// }
// --------------------------------------------------- Sort by String Length -------------------------------------
// export function sortByLength(tab){
//     for(var i = 0; i < tab.length; i++){
//         var min = i; 
//         for(var j = i+1; j < tab.length; j++){
//           if(tab[j].length < tab[min].length){
//            min = j; 
//           }
//         }
//         var tmp = tab[i];
//         tab[i] = tab[min];
//         tab[min] = tmp;
//       }
//     return tab ;
// }

// --------------------------------------------------- Filter Strings from Array -------------------------------------
// export function filterArray(){
//     var tab = [1, 2, 3, "a", "b", 4];
//     var result = [];
//     var j = 0;    
//     for(var i = 0; i < tab.length; i++){
//         if(tab[i] <= 0 || tab[i] >= 0){
//             result[j] = tab[i];
//             j++;          
//         }
//     }
//     return result;
    
// }
// --------------------------------------------------- Return Last Item -------------------------------------



// --------------------------------------------------- The Farm Problem -------------------------------------
// export function animals(){
//     var a = 2;
//     var b = 4;
//     var c = 4;
//     return a*2+b*3+c*5;
// }
// --------------------------------------------------- Reverse an Array -------------------------------------


// --------------------------------------------------- Return the Next Number from the Integer Passed -------------------------------------
// export function addition(){
//     var a = 9;
//     var b = a + 1;
//     return b;
// }

// --------------------------------------------------- Boolean to String Conversion -------------------------------------
// export function boolToString(flag){
//     if(flag == true){
//         return "true";
//     }
//     if(flag == false){
//         return "false";
//     }
// }

// --------------------------------------------------- Filter out Strings from an Array -------------------------------------
// export function filterArrayInt(tab){
//     var result = [];
//     var j = 0;    
//     for(var i = 0; i < tab.length; i++){
//         if(typeof(tab[i]) === 'number'){
//             result[j] = tab[i];
//             j++;          
//         }
//     }
//     return result;
// }   
// --------------------------------------------------- Array of Multiples -------------------------------------
// export function arrayOfMultiples(num ,length){
//     var tab = [];
//     var j = 0;
//     for(var i = 1; i < length+1; i++){
//         tab[j] = num * i;
//         j++;
//     }
//     return tab ;
// }

// --------------------------------------------------- Convert Hours and Minutes into Seconds -------------------------------------
// export function convert(hours,minutes){
//     return hours*3600+minutes*60;
// }
// --------------------------------------------------- Return Negative -------------------------------------
// export function returnNegative(a){
//     if(a > 0){
//         return -a;
//     }
//     if(a <= 0){
//         return a;
//     }
// }
// --------------------------------------------------- Simple Loop -------------------------------------
// export function simpleLoop(a){
//     var tab = [];
//     var j = 0;
//     for(var i = 1; i < a+1; i++){
//         tab[j] = i;
//         j++
//     }
//     return tab;
// }

// --------------------------------------------------- Area of a Rectangle -------------------------------------
// export function getArea(a, b){
//     if(a > 0 && b > 0){
//         return a * b;
//     }else{
//         return -1;
//     }
// }
// --------------------------------------------------- Two Makes Ten -------------------------------------
// export function makesTen(a, b){
//     if(a==10||b ==10||a+b == 10){
//         return true;
//     }else{
//         return false;
//     }
// }

// --------------------------------------------------- Add up the Numbers from a Single Number -------------------------------------
// export function addUp(a){
//     var b = 0;
//     for(var i = 1; i < a + 1; i++){
//         b = b + i;
//     }
//     return b;
// }
// --------------------------------------------------- Matchstick Houses -------------------------------------
// export function matchHouses(step){
//     var a = 6;
//     var b = a - 1;
//     if(step === 1){
//         return a;
//     }else if(step>1){
//         return a+b*(step-1);
//     } 
// }