const sentences = [
"Creativity is intelligence having fun.",
"Never trust a computer you can’t throw out a window.",
"Typing is the dance of fingers across a digital stage.",
"Learning to code is like learning to speak to machines.",
"Speed is useful only if you're running in the right direction.",
"A single raindrop can start a ripple across the entire lake.",
"Books are portals to worlds we’ve never seen but somehow know.",
"Breakfast tastes better when shared with someone you love.",
"She found peace in the quiet hum of a sleepy afternoon.",
"The wind whispered secrets through the rustling leaves."
  ]

let startTime, selectedSentence;
let testStarted=false;

function startTest(){
  selectedSentence=sentences[Math.floor(Math.random() * sentences.length)];
  document.getElementById("sentence").textContent=selectedSentence;
  document.getElementById("input").value="";
  document.getElementById("result").textContent="";
  startTime=new Date().getTime();
  testStarted=true;
}

document.querySelector('button').addEventListener('click', startTest);
document.getElementById("input").addEventListener("keydown", (e) => {
  if(!testStarted) return;
  if(e.key ==="Enter"){
    e.preventDefault();
    const typed= document.getElementById("input").value.trim();
    const endTime=new Date().getTime();
    const timeTaken=(endTime-startTime)/1000;
    const wordCount=selectedSentence.split(" ").length;
    const wpm=Math.round((wordCount/timeTaken)*60);

    const typedWords=typed.split(" ");
    const originalWords=selectedSentence.split(" ");
    let correct=0;
      for (let i=0; i< originalWords.length; i++) {
          if(typedWords[i]===originalWords[i]) correct++;
      }

    const accuracy=Math.round((correct/originalWords.length)*100);
    const matchMessage=typed===selectedSentence
      ? "✅ Words match exactly"
      : "⚠️ Words don't exactly match";

    document.getElementById("result").innerHTML =
  `${matchMessage}<br>WPM: ${wpm}, Accuracy: ${accuracy}%`;
    testStarted=false;
  }

});












    



















