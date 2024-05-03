"use strict";
// Q2:
// let personName = "Tanzeel"
// console.log("Hello",personName,"would you like to play football");
//Q3:
// let personName="Tanzeel";
// console.log(personName.toLowerCase());
// console.log(personName.toUpperCase());
// console.log(personName.charAt(0).toUpperCase()+ personName.slice(1).toUpperCase());
//Q4:
// console.log("Albert Einstein once siad","word IMPOSSIBLE itself says I AM possible");
//Q5:
// let famousperson="Albert Einstein";
// let message="word IMPOSSIBLE itself says I AM possible";
// console.log(famousperson,message);
//Q6:
// let whiteSpace="\n\t Tanzeel\t\n";
// console.log(whiteSpace);
// let withoutwhiteSpace = whiteSpace.trim();
// console.log(withoutwhiteSpace);
//Q7,Q8:
// console.log(4+4);
// console.log(10-2);
// console.log(2*4);
// console.log(16/2);
//Q9:
// let favouriteNumber=10;
// console.log("my favourite number is", favouriteNumber);
//Q10:
// console.log(whiteSpace);
// let withoutwhiteSpace = whiteSpace.trim();
// console.log(with// let whiteSpace="\n\t Tanzeel\t\n";//n is used for new line and \t is used for whitespaceoutwhiteSpace);
//Q11:
// let friendName =["Taha","Ayan","Ali","Arham"]
// console.log(friendName[0])
// console.log(friendName[1])
// console.log(friendName[2])
// console.log(friendName[3])
//Q12:
// let friendName =["Taha","Ayan","Ali","Arham"]
// let message="You are my best friend"
// console.log("Hello",friendName[0],message)
// console.log("Hello",friendName[1],message)
// console.log("Hello",friendName[2],message)
// console.log("Hello",friendName[3],message)
// Q13:
// let transpotstion = ["Civic","Helux","City","Audietron",];
// transpotstion.map((items) => console.log(`I would like to own ${items}`));
// Q14:
// let guestArr = ["Taha","Ayan","Ali","Arham"];
// guestArr.map((items) => console.log(`Dear ${items} you are invited to the dinner `)); 
// Q15:
// part#1
// let guestArr = ["Taha","Ayan","Ali","Arham"];
// let canNotAttend = "Arham"
// / console.log(canNotAttend + "can not attend the dinner")
//part#2
// let newGuest = "Hadi"
// guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr) 
// part#3
// guestArr.map((items) => console.log(`Dear ${items} you are invited to the dinner `)); 
// Q16:
//part#1
// let guestArr = ["Taha","Ayan","Ali","Arham"];
// let canNotAttend = "Ayan"
// let newGuest = "Arim"
// guestArr[guestArr.indexOf(canNotAttend)] =newGuest;
// console.log(guestArr)
// guestArr.map((items) => 
// console.log (`Dear ${items},I am invited you in big dinner.`)
// );
// part#2 Began
// let guestbeg = "Rafay"
// guestArr.unshift(guestbeg);
// console.log(guestArr)
// part#3 Middle
// let middleGuest ="Muid"
// let middleIndex =guestArr.length/3
// guestArr.splice(middleIndex,0,middleGuest)
// console.log(guestArr)
// part#4 appened
// guestArr.push("Hassan")
// console.log(guestArr)
// Q17:
// part#1
// Initial list of guests
//  let guests = ["Rafay","Taha","Muid","Arham","Hassan"]; 
//informing that only two people can be invinted 
// let message="Due to limited space, only two people can be inivited for dinner."
// console.log(message)
// part#2
// Removing guests until only two names remain 
// while (guests.length > 2) {
// const removedGuest = guests.pop(); //remove the last guest form the list 
// console.log(`Sorry, ${removedGuest}, you're no longer inivited to dinner.`);
// }
// parr#3
// printing invitation to the remaining two guests
//  let guest = ["Rafay","Taha"]
// guests.forEach((guest) => {
// console.log
//  (`Dear ${guest}, you're still invited to dinner. `);
// });
// part#4
// removing the last two names from the list 
// let guestArr = ["Rafay","Taha"]
// guests.pop();
// guests.pop();
// console.log("Final guest list:", guests);
// Q18:
// part#1
// Store the location in an array
// let placeTovisit = ["Pakistan","Saudiarbia","japan","iran","palestine"];
// part#2
// print the array in its orignal order 
//  console.log("Original order:", placeTovisit);
// part#3
// print the array in alphabetical order without modifying the actual list 
// console.log("Aplhabetical order:",[placeTovisit].sort());
// part#4
// show that the array is still in its original order 
// console.log("Resverse alphabetical order after:", [...placeTovisit].sort().reverse());
// part#5
// print the array in reverse alphabetial order without changing the order of the orignal list 
// console.log("Reverse alphabetical order:", [...placeTovisit].sort().reverse());
// part#6
// show that the array is still its original order 
// console.log("Original order after reverse sorting:",placeTovisit);
// part#7
// reverse the order of the list 
// placeTovisit.reverse();
// console.log("Reversed order:", placeTovisit);
// part#8
// Reverse the order of the list again to get back to the orignal order 
// placeTovisit.sort();
// console.log("back to original order:", placeTovisit)
// part#9
// sort the array in reverse alphabetical order
// placeTovisit.sort();
// console.log("Sorted in alphabetical order:", placeTovisit);
// part#10
// sort the array in reverse alphabetical order 
// placeTovisit.sort((a,b) => b.localeCompare(a));
// console.log("Sorted in reverse alphabeticsl order:", placeTovisit);
//Q19:
// let invitation = ["Rafay","Taha"]
// let count_invitations = invitation.length
// console.log(`${count_invitations} people will come to the dinner`)
// Q20:
// let mobiles = ["Iphone","Samsung","Motorola","Oppo","Vivo"]
// console.log("list of mobiles:")
// console.log(mobiles)
// Q21:
// console.log(person)
// Q22:
// const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// console.log(days{7})
// console.log(days[5]);
// Q23:
// Test 1: 
// let car = 'subaru';
// console.log("is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');
// Test 2:
// console.log("is car != 'honda civic'? predict True.");
// console.log(car != 'hondacivic');
// Test 3:
// console.log("is car == 'subaru'? predict False.");
// console.log(car == 'SUBARE');
// Test 4:
// console.log("is car.lenght == 6? predict True.");
// console.log(car.length == 6);
// Test 5:
// console.log("is car.length !=10? predict False.");
// console.log(car.length != 10);
// Test 6: 
// console.log("is 10 > 5 ? predict False.");
// console.log(10 > 45);
// Test 7: 
// console.log("is 3 <= 2 ? predict False.");
// console.log(3 <= 2);
// Test 8: 
// console.log("is 72 <= 83 ? predict False.");
// console.log(72 >= 83);
// Test 9:
// console.log("is car == ''subaru' && car.length == 6? predict False. ");
// console.log(car == 'subaru' && car.length == 6)
// Test 10:
// console.log("is car.lenght == 8? predict Fasle.");
// console.log(car.length == 8);
//  Q24:
// part#1
// let name_1 : string = "Tanzeel"
// let name_2 : string = "muhummad tanzeel"
// let name_3 : string = "muhummad tanzeel khan"
// if (name_1 == name_3){
//     console.log("names are equal")
// } else {
//     console.log("names are not equal")
// }
// if (name_1 !=name_2){
//     console.log("names are equal")
// }
// part#2
// if (name_1 != name_3){
//     console.log("names are equal")
// } 
// // part#3
// let age_1 : number = 16
// let age_2 : number = 20
// if (age_1 == 16) {
//     console.log("eligible for vote")
// }
// if (age_1 != 20) {
//     console.log("eligible for vote in older category")
// }
// part#3
// if (age_1 <= age_2){  //less
//     console.log("younger")
// }
// if (age_2 >= age_1){ //greater
//     console.log("older")  
// }
// part#4
// if(age_1 == 16 || age_2 == 20){
//     console.log("person is eligible for vote")
// }
// if(age_1 == 16 || age_2 == 20){
//     console.log("person is eligible not for vote")
// }
// part#5
// let country = ["Pakistan","Japan","America","Germany"]
// if (!country.includes("pakistan")){
//     console.log("Pakistan is in country list")
// }
// part#6
// if (!country.includes ("america")){
//     console.log('America is not include in an array')
// }
// Q25:
// let alien_colour = "green"
// part#1
// if (alien_colour = "green")
// console.log("you earn 5 points")
//part#2
// let alien_colour = "red"
// if (alien_colour == "red")
// console.log("no output")
// Q26:
// let alien_colour = "green"
// // part#1
// if (alien_colour = "green") {
// console.log("player just earned 5 point for shooting alien")
// }
// //part2
// else {
//     console.log("player just earned 10 points")
// }
// part#3
// let alien_colour = "red"
// if (alien_colour == "green") {
// console.log("player just earned 5 point for shooting alien")
// }
// else {
//     console.log("player just earned 10 points")
// }
// Q27:
let alien_colour = "green";
if (alien_colour == "green") {
    console.log("5 points");
}
if (alien_colour == "")
    yellow;
" {;
console.log("10 points");
