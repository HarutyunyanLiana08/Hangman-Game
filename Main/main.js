//Letters
const letters="abcdefghijklmnopqrstuvwxyz";
// const letters="աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքևոֆ";

//Get Array From Letters
let lettersArray=Array.from(letters);
// console.log(lettersArray);
// Select Letters Container
let lettersContainer=document.querySelector(".letters");

//Generate Letters
lettersArray.forEach(letter=>{

  //Crate Span
  let span=document.createElement("span");

  //Crate Letter Text Node
  let theLetter=document.createTextNode(letter)

  //Append The Letter To Span
  span.appendChild(theLetter);

  //Add Class On Span
  span.className='letter-box';

  //Append Span To The Letters Container
  lettersContainer.appendChild(span);
});

//---------------------------------------------
//Object Of Words + Categories
const words={
  programming:["html","css","java","javascript","php","go","mysql","python","fortran","scala"],
  movies:["aa","ab","gdfg","csac","cscszcsfb","bbb"],
  people:["Ani Manukyan","Anna Matinyan","Anna Serobyan","Armen Manukyan","Arsen Enoqyan","Boghos Boghosyan","David Arestakesyan","Dianna Paroyan"],
  countries:["Armenia","Egypt","Syria","USA"]
}

//Get Random Property
let allKeys=Object.keys(words);
// console.log(allKeys);
//Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random()*allKeys.length);
// console.log(randomPropNumber);
// console.log(allKeys[0]);
//Category
let randomPropName = allKeys[randomPropNumber];
// console.log(randomPropName);
// console.log(words["people"]);
//Category Words
let randomPropValue = words[randomPropName];
// console.log(randomPropValue );
//Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random()*randomPropValue.length);
// console.log(randomValueNumber);
// console.log(randomPropValue [1]);
// console.log(randomPropValue[randomValueNumber]);
//The Chosen Word
let randomValueValue = randomPropValue [randomValueNumber];
//Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName; // + ' ' + randomValueValue;

//Seleqt Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");
//Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue);
// console.log(lettersAndSpace);

//Create Spans Depened On Word
lettersAndSpace.forEach(letter => {
  //Create Empty Span
  let emptySpan = document.createElement("span");
  //If Letter Is Space
  if (letter === ' ') {
    //Add Class To The Span
    emptySpan.className = 'with-space';
  }
  //Append Span To The Letters Guess Container
  lettersGuessContainer.appendChild(emptySpan);
});
//------------------------------------------------------
//Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

//Set Wrong Attempt
let wrongAttempts = 0;

//Seleqt The Draw Element
let theDraw = document.querySelector(".hangman-draw");

//Heandle Clicking On Letters
document.addEventListener("click",(e)=>{

  //Set The Chose Status
  let theStatus = false;

  if(e.target.className === 'letter-box'){
    e.target.classList.add("clicked");
    //Get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();
    // console.log(theClickedLetter);
    //The Chosen Word
    let theChosenWord = Array.from(randomValueValue.toLowerCase());
    // console.log(lettersAndSpace); 
    theChosenWord.forEach((wordLetter, WordIndex) => {
     //If The Cliched Letter Equal To One Of The Chosen Word Letter
     if (theClickedLetter == wordLetter){
        //Set Status To Correct
        theStatus = true;
       //Loop On All Guess Spans
        guessSpans.forEach((span, spanIndex) => {
          if (WordIndex === spanIndex){
            span.innerHTML = theClickedLetter;
          }
        });
      } 
                  
    });

    //Outside Loop
    // console.log(theStatus);
    //If Letter Is Wrong
    if (theStatus !== true) {
      //Increase The Wrong Attempts
      wrongAttempts++
      //Add Class Wrong On The Draw Element
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      //Play Fail Sound
      document.getElementById("fail").play();
      
    
      if (wrongAttempts === 8) {
        endGame();
        lettersContainer.classList.add("finished")      
      }
    } else {
              //Play Success Sound
              document.getElementById("success").play();
           }
  }
});

//End Game Function
function endGame() {
  //Creat Popup Div
  let div = document.createElement("div");
  //Create Text
  let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);
  //Append Text To Div
  div.appendChild(divText);
  //Add Class On Div
  div.className = 'popup';
  //Append To The Body
  document.body.appendChild(div);
  
}