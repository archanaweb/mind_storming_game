
let cardsArray = [
    {
        'name' : 'HTML5',
        'img' : 'img/html5.png',
    }
    ,
    {
        'name' : 'CSS3',
        'img' : 'img/css3.png',
    }
    ,
    {
        'name' : 'Python',
        'img' : 'img/python.png',
    }
    ,
    {
        'name' : 'react',
        'img' : 'img/react.png',
    }
]



const parentDiv = document.querySelector('#card_section');

// Step 2: Create a function that will copy the cardsArray

const copyArray = cardsArray.concat(cardsArray);

// Step 3: Create a function that will shuffle the cardsArray

let refreshArray = copyArray.sort(() => 0.5 - Math.random());

// Step 4: Create a function that will style selected cards

let clickCount = 0;
let firstCard = "";
let secondCard = "";

// style matched cards

const card_match = () => {
    let selected = document.querySelectorAll('.card_selected');
    selected.forEach(card => {
        card.classList.add('card_match');
    })
}

let resetClick = () => {
    clickCount = 0;
    firstCard = "";
    secondCard = "";
    let selected = document.querySelectorAll('.card_selected');
    selected.forEach(card => {
        card.classList.remove('card_selected');
    })
}


parentDiv.addEventListener('click', (event)=> {
    let curCard = event.target;
    

    if(curCard.id === 'card_section'){ return false;} 

    clickCount++;

    if(clickCount <= 2){

        if(clickCount === 1){
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }else{
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }

        if(firstCard !== "" && secondCard !== ""){
            if(firstCard === secondCard){

                setTimeout( () => {
                    card_match()
                    resetClick()
                }, 1000)
               
            }else{
                setTimeout( () => {
                    resetClick()
                }, 1000)
            }
        }
    } 

  
})






// Step 1: Create a function that will create the cards
for(i=0; i<refreshArray.length; i++){
    const card = document.createElement('div');
card.classList.add('card');
card.dataset.name = refreshArray[i].name;
// card.style.backgroundImage = `url(${refreshArray[i].img})`;
card.style.backgroundSize = 'cover';

const front_card = document.createElement('div');
front_card.classList.add('front_card');

const back_card = document.createElement('div');
back_card.classList.add('back_card');

back_card.style.backgroundImage = `url(${refreshArray[i].img})`;


card.appendChild(front_card);   
card.appendChild(back_card);


parentDiv.appendChild(card);

}

