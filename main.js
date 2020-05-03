const pol=document.querySelector("#pol");
const input= document.querySelector("input");
const button= document.querySelector("button");
const answer= document.querySelector("#answer");
const score= document.querySelector("#score");
let flag=true;
let counter=0;
const tab=[]
class Word{
    constructor(plWord, ...angWords){
        this.word= plWord;
        this.angWords=angWords;
        tab.push(this);
        
    }
    
}

const word1= new Word("mieć", "have", "have got", "possess");
const word2= new Word("zakończenie","ending", "completion");
const word3= new Word("pies","dog");



const los=()=>{
    
    input.focus();
    pol.textContent=tab[counter].word;
}

const btn=()=>{
    if(flag===true){
        if(tab[counter].angWords.includes(input.value.toLowerCase())) {
            answer.textContent="Dobrze!!!";
        }
        else{
            tab[counter].angWords.length>1? answer.innerHTML=`Źle!!! Prawidłowe odpowiedzi to: <span>${tab[counter].angWords}</span>`: answer.innerHTML=`Źle!!! Prawidłowa odpowiedź to: <span>${tab[counter].angWords}</span>`;
        }
    counter===tab.length-1? counter=0 : counter++;
    flag=false;
    button.textContent="Następny";
    }
    else{
        button.textContent="Sprawdź";
        input.value="";
        answer.textContent="";
        flag=true;


        los();

    }
}

button.addEventListener("click", btn);
input.addEventListener("keydown",e => {if(e.keyCode===13)btn()});


los();
