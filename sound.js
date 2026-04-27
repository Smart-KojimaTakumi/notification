function main(){
  const sound_btn = document.getElementById("sound-btn");

  sound_btn.addEventListener("click",sound);
}

function sound(){
  const uttr = new SpeechSynthesisUtterance("集中学習を終了して、アウトプットフォームを記入してください");
  speechSynthesis.speak(uttr);
}


window.addEventListener('load',main);