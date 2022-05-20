const letter = document.querySelectorAll(".letter")

let mistake = 0 ;
let lives = 6 ;
const playerLivesCounter = document.getElementById("live");
playerLivesCounter.textContent = lives ;

let selectedWord  ; 
let checked = [] ;
result = "" ;
const category = ["city","film","sportTeam","animals"];

const selectWord = () => {
    const number = Math.floor(Math.random()*4);
    const number1 =  Math.floor(Math.random()*5);
    
    if(category[number] === "city"){
        const city = ["amesterdam","berlin","monaco","california","tokyo"];
        document.getElementById("category").innerHTML = `this word selected as City category`
        selectedWord=String(city[number1]);
    } else if(category[number]==="film"){
        const film = ["braveheart","her","avatar","oldboy","departed"];
        document.getElementById("category").innerHTML = `this word selected as Film category`
        selectedWord=String(film[number1]);
    } else if(category[number]=== "sportTeam"){
        const sportTeam = ["realmadrid","juventus","ajax","porto","liverpol"];
        document.getElementById("category").innerHTML = `this word selected as Sport Team category`
        selectedWord=String(sportTeam[number1]);
    } else if(category[number]=== "animals"){
        const animals = ["fox","monkey","fish","elephant","zebra"];
        document.getElementById("category").innerHTML = `this word selected as Animal category`
        selectedWord=String(animals[number1]);
    };
};

function setHyph () {
    let splitedWord = selectedWord.split("");
    let mappedWord = splitedWord.map((letters) => checked.indexOf(letters) >= 0 ? letters : "- "); //شاهکار
    result = mappedWord.join("");
    document.getElementById("guess").innerHTML = `${result}`
};

function checkIfWon () {
    if(selectedWord === result){
        document.querySelector(".hang-man-img").src = "./images/winner.png";
        setTimeout(() => location.reload(),2000)
    }
}

function checkIfLost () {
    if(lives === 0){
        alert("oops you lose again?");
        setTimeout(() => location.reload(),2200)
    }
}

function buttonHandler () {
    letter.forEach((item) => {
        item.addEventListener("click" , ()=> {
            item.classList.add("use");
            const getData = item.id.toLowerCase();
            checked.indexOf(getData) === -1 ? checked.push(getData) : null ;
            setHyph();
            if(selectedWord.indexOf(getData) === -1){
                mistake ++ ;
                lives -- ;
                playerLivesCounter.textContent = lives ;
                document.querySelector(".hang-man-img").src = `./images/hangman${mistake}.png`
                checkIfLost();
            } else if (selectedWord.indexOf(getData) >= 0){
                checkIfWon()
            }
        })
    })
}

selectWord();
setHyph();
buttonHandler();