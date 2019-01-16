// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/2800-1.png') {
      myImage.setAttribute ('src','images/2800.png');
	} else {
	  myImage.setAttribute ('src','images/2800-1.png');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Hello, ' + myName+ '!!!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hello, ' + storedName+ '!!!';
}

myButton.onclick = function() {
  setUserName();
}