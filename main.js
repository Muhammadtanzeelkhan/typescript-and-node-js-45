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
// let alien_colour = "green"
// if (alien_colour == "green") {
//     console.log("5 points")
// } else if (alien_colour == "yellow") {
//     console.log("10 points")
//  } else{
//         console.log("15 points")
//     }
//Q28:
//  ..............2,4,13,20,65
// let age : number = 18
// if(age < 2){
// console.log("you are a baby")
// } else if (age < 4) {
// console.log("you are a toddler")
// } else if (age < 13){
//   console.log("yoy area kid")
// } else if (age < 20){
// console.log("you are teenager")
// } else if( age < 65) {
// console.log("you are adult")
// } else{
// console.log("you are older")
// }
//question:29    ......... you really like banana
// let favourite_fruits : string  [] = ["kivi","orange","apple","strawberry","mango"] 

// if (favourite_fruits.includes("kivi")) {
//     console.log("kivi")
// }

// if (favourite_fruits.includes("peach")) {
//     console.log("you really like banana")
// }    

// if (favourite_fruits.includes("orange")) {
//     console.log("orange")
// }

// if (favourite_fruits.includes("berry")) {
//     console.log("you really like banana")
// }

// if (favourite_fruits.includes("apple")) {
//     console.log("apple")
// }

//question:30
// let userNames : string [] = ["Admin","Faisal","Hamzah","Asharib","Mehak"]

//  userNames.forEach(username => {
    // if (username === "Admin") {
        // console.log("Hello",username," would you like to see a status report?")
    // } else {
        // console.log("Hello",username, "thank you for logging in again.");
    // }
    // })

    //question:31
   // let userNames : string [] = ["Admin","Faisal","Hamzah","Asharib","Mehak"];
// 
    //  if(userNames.length === 0){
        // console.log("we need to find some users"); 

    // }else{
        // userNames = [];
        // console.log("all users has been removed" , userNames.length);

    //   } 

    //question:32
// let currentUsers : string [] =  ["Admin","Samreen","Maheen","Samiya","Aamir"];
// let newUsers : string [] = ["Admin","Samreen","Sana","Beenish","Samiya"];

// for (let new_users of newUsers) {
  //  const lowercase_new_users = new_users.toLowerCase();
//
    // if(currentUsers.map(user => user.toLowerCase()).includes(lowercase_new_users)){
        // console.log(`the username ${new_users}is not available`);
// 
//    }else{
    // console.log(`the username ${new_users} is available`);
    // }
// }
// question:33........ordinal ending
// let number : number [] =[1,2,3,4,5,6,7,8,9]
// 
// for(let  i =0 ;i < number.length;i++) {
    // const numbers = number[i];
    // let ordinalEnding :string;
// 
// if(numbers === 1) {
    // ordinalEnding ="st";
    // 
// }else if (numbers === 2) {
    // ordinalEnding ="nd";
// 
// }else if(numbers === 3) {
    //    ordinalEnding = "rd";
// }else{
    // ordinalEnding ="th";

    // console.log(`${numbers}${ordinalEnding}`)
// }

//question:34
// let pizzas : string[]= ["Pepperoni","Italian","BBQ chicken"];

// for(let i =0 ; i<pizzas.length;i++) {

    // console.log(`I like ${pizzas[i]} pizza`);
// }
// console.log("I really love pizza!");

//question:35
// let animal :string[]= ["lion","rabbit","cow"];

// for(let i = 0 ;i<animal.length ;i++){
//     console.log(`A ${animal[i]} would make a great pet`);
// }
// console.log("Any of these animals would make a great pet!");

//quesiton:36

// function makeShirt(size: string, text: string):void{
    // console.log(`/n you order a ${size} shirt that says ${text}`)
// } 
// makeShirt(`large`,'"i love typescript"');
// makeShirt(`medium`,'"i need a big shirt"');


// //quesiton:37
// function makeShirt(size: string = "large", text: string ="I love typescript"): void {
//     console.log(`you have order a ${size}, shirt that says ${text}`)
// }

// makeShirt();
//  makeShirt('medium')

// different message
//  makeShirt(`small`,`I need a big shirt to wear`)

//question:38
// function describe_city(city: string, country: string =`Pakistan`):void{
        // console.log(`${city} is in ${country} `)
// }

// describe_city(`Karachi`) //default sentence
// describe_city(`Farance`,`Europe`)
// describe_city(`Lahore`,`Punjab`)

//question:39
// function citycountry(city:string,country: string): string {
//     return`${city}, ${country}`
// }

// let c1 = citycountry(`Lahore` ,`Pakistan`)
// let c2 = citycountry(`Tokyo` ,`Japan`)
// let c3 = citycountry(`Paris`,`France`)

// console.log(c1) 
// console.log(c2)
// console.log(c3)

//question: 40

// function makeAlbum (artist:string, title:string):{artist :string , title :string} {
//     const dictionaries = {
//             artist: artist.charAt(0).toUpperCase() + artist.slice(1),
//             title: title.charAt(0).toUpperCase() + title.slice(1)
//     };
//     return dictionaries;
// } 
    
// let album = makeAlbum("salar" ,"light")
// console.log(album)

//  album = makeAlbum("rais" ,"red wave")
// console.log(album)

 //album = makeAlbum("ammar" ,"seenbreez")
//console.log(album)

//question:41
// let magician : string[] =['Harry Potter','Hermione Granger','Ron weasley','Albus Dumbledore'];

// function show_magicians(magicians:string[]){
// 
    // magicians.forEach(element => {
        // console.log(element);
    // });
// }
// show_magicians(magician);

// quesion:42

// let magician : string[] =['Harry Potter','Hermione Granger','Ron weasley','Albus Dumbledore'];

// function make_great (magicianArry:string[] ){

//     for(let i=0; i<magicianArry.length;i++){

//          magician[i] = 'the Great '+magicianArry[i]
//     }
// }
// function show_magicians(magicians:string[]){

//     magicians.forEach(element => {

//         console.log(element);
//     });
// }

// make_great(magician);

// show_magicians(magician);

 //question:43

// let magician : string[] =['Harry Potter','Hermione Granger','Ron weasley','Albus Dumbledore'];

// function copyArry(arr:string[]){
    //  return [...arr]

// }

// function make_great (magicianArry:string[] ){

    // for(let i=0; i<magicianArry.length;i++){

        //  magicianArry[i] = 'the Great '+ magicianArry[i]
    // }
// }
// function show_magicians(magicians:string[]){

    // magicians.forEach(element => {

        // console.log(element);
    // });
// }
// const copyMagicianArry = copyArry(magician)

// make_great(copyMagicianArry);

// console.log('\n\nThis is my original array:');
// show_magicians(magician);

// console.log('\n\nThis is my modified copy of the array');
// show_magicians(copyMagicianArry);

//question:44

// function makeSandwich (item: string[]){
    // console.log('Making your sandwich with:');

    // item.forEach(element => console.log("- " + element) );
    // console.log('Enjoy your Sandwich ! ');
    // }

    // makeSandwich(['Ham','Cheese','lettuce']);
    // makeSandwich(['Turkey','Bacon']);
    // makeSandwich(['Peanut butter','Jelly']);

    //question:45
    // function storeCarInfo(manufacturer: string, modelName:string, ...extraOption: { [key : string ]:any } [] ) : object {

        // const carInfo ={
            // manufacturer,
            // modelName,
            // ...Object.assign({}, ...extraOption)
        // }

        // return carInfo;
    // };


    //  let answer = storeCarInfo('Honda','Civic', {color:'black'},{features: ['Navigation', 'Power window']})

    // console.log(answer);

            //    COMPLETE 45 ASSIGNMENTS    

            // !!!!!!!  THANK  !!!!!!!!