//音声出力処理 メイン関数
function main(){
  // ボタンの要素を取得
  const sound_btn = document.getElementById("sound-btn");
  // ボタンクリック後sound関数へ
  sound_btn.addEventListener("click",sound);
}

//音声出力処理 音声出力関数
function sound(){
  // 音声出力したい内容をuttrに代入
  const uttr = new SpeechSynthesisUtterance("集中学習を終了して、アウトプットフォームを記入してください");
  // uttrをWebSpeachAPIを用いて発声させる。
  speechSynthesis.speak(uttr);
}


window.addEventListener('load',main);