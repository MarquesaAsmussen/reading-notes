'use strict'

console.log('hello, world!')

//this is incomplete

//----------------Global Variables----------------//


let clickCounter = 0;
const ulElem = document.getElementById('goat-clicks');
const voteSectionElem = document.getElementById('all-goats');
const leftGoatImgElem = document.getElementById('left_goat_img');
const rightGoatImgElem = document.getElementById('right_goat_img');
const rightGoatH2Elem = document.getElementById('right_goat_h2');
const leftGoatH2Elem = document.getElementById('left_goat_h2');

let leftGoat = null;
let rightGoat = null;


//----------------Constructor------------------//
function Goat(name, imgPath) {
  this.name = name;
  this.imgPath = imgPath;
  this.votes = 0;

  Goat.allGoats.push(this);
}

Goat.allGoats = [];

//--------------Prototype Methods-----------------//
// I will tell the function which img elem and h2 elem I should use
Goat.prototype.renderGoat = function (img, h2) {
  img.src = this.imgPath;
  h2.textContent = this.name;
}

//---------------Standard Global Functions--------------//
function getTwoGoats() {
  // picks 2 goats at random from an array of goats
  let leftIndex = Math.floor(Math.random() * Goat.allGoats.length);
  leftGoat = Goat.allGoats[leftIndex];
  let rightIndex = Math.floor(Math.random() * Goat.allGoats.length);
  rightGoat = Goat.allGoats[rightIndex];
  while (rightGoat === null || rightGoat === leftGoat) {
    rightIndex = Math.floor(Math.random() * Goat.allGoats.length);
    rightGoat = Goat.allGoats[rightIndex];
  }
}

function renderTheGoats() {
  leftGoat.renderGoat(leftGoatImgElem, leftGoatH2Elem);
  rightGoat.renderGoat(rightGoatImgElem, rightGoatH2Elem); 
}

function renderResults() {
  ulElem.textContent =  '';

  for (let goat of Goat.allGoats) {
    let liElem = document.createElement('li');
    liElem.textContent = '${goat.name}: ${goat.votes}';
    ulElem.appendChild(liElem)
  }
}

//----------get to here-----------//

function handleClick(e) {
  // alert(e.target.id);
  let imageClicked = e.target.id;
  if (imageClicked === 'right_goat_image' || imageClicked === 'left_goat_image') {
    clickCounter++;
    if (imageClicked === 'right_goat_image') {
      rightGoat.votes++;
      console.log(rightGoat)
    }
    if (imageClicked === 'left_goat_image') {
      leftGoat.votes++;
      console.log(leftGoat)
    }
    getTwoGoats();
    renderTheGoats();
  }
  if (clickCounter === 10) {
    // alert('show the goat totals')    
    renderResults();
    voteSectionElem.removeEventListener('click', handleClick);
  }
  
}

//---------------------Listener------------------------//
voteSectionElem.addEventListener('click', handleClick)
//-----------------------Call Functions-----------------//

new Goat('Cruising Goat', './images/cruising-goat');
new Goat()

getTwoGoats();
renderTheGoats();