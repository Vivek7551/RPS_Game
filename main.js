let player_input=document.querySelectorAll(".player-input");
let choices=document.querySelector(".choices"); 
let line=document.querySelector(".triangle");
let c_score = localStorage.getItem("dataComp");
let p_score = localStorage.getItem("dataPlayer");
let computer_input,res;
let playerChoice;

function ComputerChoice(){
    let mapp=Math.floor(Math.random()*3);
    switch(mapp){
        case 0: return "scissors";
                break;
        case 1: return "rock";
                break;
        case 2: return "paper";
                break;
    }
}

function game(player_input,comp_input){
    switch(player_input){
        case "rock":{
            switch(comp_input){
                case "rock": return "tie";
                            break;
                case "paper":
                            return "you loose";
                            break;
                case "scissors":
                            return "you won";
                            break;
            }
            break;
        }

        case "paper":{
            switch(comp_input){
                case "rock":
                            return "you won";
                            break;
                case "paper": return "tie";
                            break;
                case "scissors": 
                            return "you loose";
                            break;
            }
            break;
        }

        case "scissors":{
            switch(comp_input){
                case "rock":
                            return "you loose";
                            break;
                case "paper":
                            return "you won";
                            break;
                case "scissors": return "tie";
                            break;
            }
            break;
        }

    }
}

function UpdateScores(){
    let comp_score=document.querySelector('.comp_score');
    let player_score=document.querySelector('.player_score');
    comp_score.textContent=c_score;
    player_score.textContent=p_score;
    if(p_score>c_score){
        document.querySelector(".next").style.display="flex";
    }
    else{
        document.querySelector(".next").style.display="none";
    }
}

player_input.forEach(element => {
    element.addEventListener('click',()=>{
        choices.style.display="none";
        line.style.display="none";
        playerChoice=element.id;
        computer_input=ComputerChoice();
        console.log(computer_input);
        res=game(playerChoice,computer_input);
        switch(res){
            case "you won":
                p_score++;
                localStorage.setItem("dataPlayer", p_score);
                break;
            case "you loose":
                c_score++;
                localStorage.setItem("dataComp", c_score);
                break;
        }
        UpdateScores();
        UpdateResult(res);
    })
});

const result=document.querySelector('.result');

function UpdateResult(res){
    result.style.display="flex";

    switch(res){
        case "you won":
            result.innerHTML = `
            <div class="circle_1">
                <div class="circle_2">
                    <div class="circle_3">
                    <div class="player_choice">
                    <p>Your Pick</p>
                    <button  id="${playerChoice}_selected" class="won_button">
                        <img src="${playerChoice}.png" alt="${playerChoice}">
                    </button>
                </div>
                    </div>
                </div>
            </div>
            
            <div class="result_details">
                <p>${res}</p>
                <button class="play_again">REPLAY</button>
            </div>
            <div class="computer_choice">
                <p>Computer Picked</p>
                <button  id="${computer_input}_selected" class="">
                    <img src="${computer_input}.png" alt="${computer_input}">
                </button>
            </div>
        `;

        break;

        case "you loose":
            result.innerHTML = `
            <div class="player_choice">
                <p>You've Picked</p>
                <button  id="${playerChoice}_selected" class="">
                    <img src="${playerChoice}.png" alt="${playerChoice}">
                </button>
            </div>
            <div class="result_details">
                <p>${res}</p>
                <button class="play_again">REPLAY</button>
            </div>
            <div class="circle_1">
                <div class="circle_2">
                    <div class="circle_3">
                    <div class="computer_choice">
                    <p>Computer Picked</p>
                    <button  id="${computer_input}_selected" class="won_button">
                        <img src="${computer_input}.png" alt="${computer_input}">
                    </button>
                </div>
                    </div>
                </div>
            </div>
            
        `
        break;

        case "tie":
            result.innerHTML = `
            <div class="player_choice">
                <p>You've Picked</p>
                <button  id="${playerChoice}_selected" class="">
                    <img src="${playerChoice}.png" alt="${playerChoice}">
                </button>
            </div>
            <div class="result_details">
                <p>${res}</p>
                <button class="play_again">REPLAY</button>
            </div>
            <div class="computer_choice">
                <p>Computer Picked</p>
                <button  id="${computer_input}_selected" class="">
                    <img src="${computer_input}.png" alt="${computer_input}">
                </button>
            </div>
        `
        break;
    }

    // result.innerHTML = `
    //         <div class="player_choice">
    //             <p>You've Picked</p>
    //             <button  id="${playerChoice}_selected" class="">
    //                 <img src="${playerChoice}.png" alt="${playerChoice}">
    //             </button>
    //         </div>
    //         <div class="result_details">
    //             <p>${res}</p>
    //             <button class="play_again">REPLAY</button>
    //         </div>
    //         <div class="computer_choice">
    //             <p>Computer Picked</p>
    //             <button  id="${computer_input}_selected" class="">
    //                 <img src="${computer_input}.png" alt="${computer_input}">
    //             </button>
    //         </div>
    //     `;
    
    
}



document.addEventListener("click",(e)=>{
    if(e.target.classList.value=="play_again"){
        result.style.display="none";
        choices.style.display="flex";
        line.style.display="flex";
    };
})

let text=document.querySelector('.rules-text');
let close=document.querySelector('.close');

text.style.display="none";
close.style.display="none";

function Rules(){
    let rules=document.querySelector('.rules-button');
    
    rules.addEventListener('click',()=>{
        text.style.display="flex";
        close.style.display="flex";
    })
}

function CloseWindow(){
    
    close.addEventListener('click',()=>{
        text.style.display="none";
        close.style.display="none";
    })
}

document.addEventListener("click",(e)=>{
    if(e.target.classList.value=="next"){
        result.style.display="none";
        choices.style.display="none";
        line.style.display="none";
        document.querySelector(".upper-box").style.display="none";
        document.querySelector(".next").style.display="none";
        hurray();
    };
})

function hurray(){
    let hurray_page=document.querySelector(".hurray_page");
    hurray_page.innerHTML=`

        <div class="trophy-container">
            <div class="trophy">
                <img src="Vector.png">
            </div>

            <div class="text">
                <p class="p1">HURRAYY!!</p>
                <p class="p2"> YOU WON THE GAME</p>
            </div>

            <button class="play_game">PLAY AGAIN</button>
            <div class="stars">
                <img src="Star 1.png" id="star1">
                <img src="Star 2.png" id="star2">
                <img src="Star 3.png" id="star3">
                <img src="Star 5.png" id="star5">
                <img src="Star 6.png" id="star6">
                <img src="Star 7.png" id="star7">
                <img src="Star 9.png" id="star9">
            </div>
        </div>
        

    `
}

document.addEventListener("click",(e)=>{
    if(e.target.classList.value=="play_game"){
        choices.style.display="flex";
        line.style.display="flex";
        document.querySelector(".upper-box").style.display="flex";
        document.querySelector(".trophy-container").style.display="none";
    };
})

Rules();
CloseWindow();
UpdateScores();