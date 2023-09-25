// 랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 go 라는 버튼을 누름
// 만약 유저가 랜덤번호를 맞추면, 맟췄습니다.
// 랜덤번호가  < 유저번호 DOWN
// 랜덤번호가  > 유저번호 up
// Reset 버튼을 누르면 게임 리셋
// 5번의 기회를 다쓰면 게임이 끝난다( 추측불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회는 깢지 않는다.
// 유저가 이미 입력한  숫자를 또  입력하면 알려준다. 기회는 깢지 않는다.

let computerNum = 0;
let playButton = document.getElementById('play-button')
let userInput  = document.getElementById('user-input')
let resultArea = document.getElementById("result-area")
let resetBtn = document.getElementById("reset-button")
let chances = 5
let gameOver = false;
let tryCount = document.getElementById('try-count')
tryCount.textContent = `남은기회 : ${chances}`
let userInputs = []

playButton.addEventListener("click",play)
resetBtn.addEventListener("click",reset)

function pickRandomNum() {
  computerNum = Math.floor(Math.random()*100)+1
  console.log("정답:",computerNum)
}

function play(){
  let userValue = userInput.value
  if(userValue<1 || userValue >100){
    resultArea.textContent ="1과 100 사이 숫자를 입력해 주세요"
    return
  }
  if(userInputs.includes(userValue)){
    resultArea.textContent ="이미 입력한 숫자입니다."
    return
  }
  userInputs.push(userValue)
  console.log("userInputs[]:",userInputs)
  chances--;
  console.log("chances:",chances)
  tryCount.textContent = `남은기회 : ${chances}`
  if(userValue < computerNum){
    resultArea.textContent = "UP!!"
  } else if(userValue > computerNum){
    resultArea.textContent = "DOWN!!"
  } else {
    resultArea.textContent = "맞췄습니다."
    gameOver= true
  }
  if(chances < 1){
    gameOver = true
  }
  if(gameOver== true){
    playButton.disabled = true 
  }
}

function reset(){
  // user input창 clear
  userInput.value = ""
  userInputs =[]
  console.log("userInputs[]:",userInputs)
  resultArea.textContent = "결과가 나온다."
  chances = 5
  console.log("chances:",chances)
  tryCount.textContent = `시도횟수 : ${chances}`
  playButton.disabled = false
  gameOver = false
  // 새로운 번호 생성
  pickRandomNum()  
}

pickRandomNum()



