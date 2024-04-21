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
// let whiteSpace="\n\t Tanzeel\t\n";//n is used for new line and \t is used for whitespace
// console.log(whiteSpace);
// let withoutwhiteSpace = whiteSpace.trim();
// console.log(withoutwhiteSpace);
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
