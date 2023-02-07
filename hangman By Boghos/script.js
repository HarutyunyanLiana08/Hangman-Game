


document.querySelector("#gameover").addEventListener('click',function(){location.reload()});

const hamgWords=['STAFF','RUN','LUCKY','WAVE','OXYGEN'];
console.log(hamgWords);
const randomWord=hamgWords[Math.floor(Math.random()* hamgWords.length)];
console.log(randomWord);
// select showWord ID 
const showWordTag= document.querySelector("#showWord").firstElementChild;
const showWordText= showWordTag.innerText.substring(0,randomWord.length);
showWordTag.innerHTML=showWordText;
let clicked=[];
//---------------------------------------------//

const hanging=document.querySelector('#image').querySelector('img');
console.log(hanging);
const gameOverMessage=document.querySelector('#gameover').querySelector('div').querySelector('p');
console.log(gameOverMessage);
let i=1;
console.log(i);
let result="";
console.log(result);
const keys=document.querySelector('#letters').querySelectorAll('div');
console.log(keys);
function letterhandler(letter){
    if(clicked.indexOf(letter) === -1){
        clicked.push(letter);
    }
}



function replaceWord(){
    const splitedWord=randomWord.split("");
    console.log(splitedWord);
    mapedWord = splitedWord.map(function(item) {
        if(clicked.indexOf(item) >= 0){
            return item;
        }
        return " _ ";
      });
      console.log(mapedWord);
    result=mapedWord.join("");
    showWordTag.innerText=result;
} console.log(result);

keys.forEach(function(item){item.addEventListener('click',function(event){
    item.className='used';
    letterhandler(event.target.id);
console.log(letterhandler);
    if(randomWord.includes(item.innerText)){
        replaceWord();

        if(!showWordTag.innerText.includes("_")){
            hanging.src='./assets/winner.png';
            gameOverMessage.style.display='block';
            keys.forEach(item => item.style.display='none');
        }
    }else if(i <6){
        hanging.src=`assets/hangman${i}.png`;
        i++;
    }else{
        hanging.src='./assets/hangman6.png';
        showWordTag.style.fontSize="25px";
        showWordTag.style.marginTop="40px";
        showWordTag.innerText=`you lose, the word was: "${randomWord}"`;
        gameOverMessage.style.display='block';
        keys.forEach(item => item.style.display='none');
    }
})});