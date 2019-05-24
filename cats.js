'use strict';



console.log('This is my cat');

var catQuestion = prompt('Do you like cats?');
console.log (catQuestion);

if (catQuestion === 'yes') {
document.write('<h3>Welcome to the cat page!</h3>')
} else if (catQuestion === 'no') {
document.write('<h3>Welcome anyway...</h3>')
} else {
    document.write('<h3>Welcome!</h3>') 
}


function catOrder (catNumber, typeOfCat) {
    var newOrder = 'The ' + catNumber + ' ' + typeOfCat + ' ' + kittenCat + ' are on their way to you';
    var yourCatsHtml = '<p>' + newOrder + '</p>';
    return yourCatsHtml;
}


 var catNumber = prompt('How many cats would you like to take home?');
 var typeOfCat = prompt('what type of cat is your favorite?');
 var kittenCat = prompt('Would you want a kittens or older cats?');

 var order = catOrder(catNumber, typeOfCat);

 document.write(order);



var extraQuestion = prompt('would you want to add more cats?');
console.log (extraQuestion);
while (extraQuestion === 'no') {
  extraQuestion = prompt('what about now?');
}

if (extraQuestion === 'yes') {
  extraQuestion = prompt('how many more?');

  var element = document.getElementById('response');

  for (var i = 0; i < extraQuestion; i++) {
    document.write('<img src="http://placekitten.com/200/300">');
    
  }
} 

// this part was completed with a little help from google and a more experienced programmer

// function loaded() {

//   var happyWithOrder = prompt('Are you happy with the order?');
//   if (happyWithOrder === 'yes') {
//     var secondOrder = prompt('how many more cats would you like?');
//     if (secondOrder === 'none'|| secondOrder === '0') {
//       var lastAnswer = document.getElementById("response");
//       lastAnswer.innerText = 'Thank you come again!';
//     } else {
//       var noMore = document.getElementById("response");
//       noMore.innerText = 'Sorry we are out';
//     }
//   } else if (happyWithOrder === 'no') {
//     var cancel = prompt('would you like to cancel the order?');
//     if (cancel === 'yes') {
//       var cancelOrder = document.getElementById("response");
//       cancelOrder.innerText = 'No cats for you';
//     }
//   }
// }

// window.onload = loaded


