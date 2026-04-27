const date_event = [
  { time: "09:00", event: "学習開始フォーム記入" },

  { time: "09:10", event: "集中学習開始（45分）" },
  { time: "09:55", event: "アウトプットフォーム記入" },
  { time: "10:00", event: "ペアになってアウトプット開始" },
  { time: "11:00", event: "休憩（5分）" },

  { time: "11:05", event: "集中学習開始（45分）" },
  { time: "11:50", event: "アウトプットフォーム記入" },
  { time: "11:55", event: "ペアになってアウトプット開始" },

  { time: "12:00", event: "昼休憩（1時間）" },

  { time: "13:00", event: "集中学習開始（45分）" },
  { time: "13:45", event: "アウトプットフォーム記入" },
  { time: "13:50", event: "ペアになってアウトプット開始" },
  { time: "13:55", event: "休憩（5分）" },

  { time: "14:00", event: "集中学習開始（45分）" },
  { time: "14:45", event: "アウトプットフォーム記入" },
  { time: "14:50", event: "ペアになってアウトプット開始" },
  { time: "14:55", event: "休憩（5分）" },

  { time: "15:00", event: "集中学習開始（45分）" },
  { time: "15:45", event: "アウトプットフォーム記入" },
  { time: "15:50", event: "ペアになってアウトプット開始" },
  { time: "15:55", event: "休憩（5分）" },

  { time: "16:00", event: "集中学習開始（45分）" },
  { time: "16:45", event: "アウトプットフォーム記入" },
  { time: "16:50", event: "ペアになってアウトプット開始" },
  { time: "16:55", event: "休憩（5分）" },

  { time: "17:00", event: "集中学習開始（45分）" },
  { time: "17:45", event: "学習振り返りフォーム記入" },
  { time: "17:55", event: "ペアになってアウトプット開始" },

  { time: "18:00", event: "業務終了" }
];

// 時刻更新処理 メイン関数
function clockUpdater() {
    // 時計の要素を取得
    const currentTimeElement = document.getElementById("current-time");
    // 初回更新
    writeCurrentTimeTo(currentTimeElement);
    // 1秒おきに時計を更新
    setInterval(() => {writeCurrentTimeTo(currentTimeElement)}, 1000)
}

// イベント確認関数
function checkDateEvent(dateList){
  const status = document.getElementById("current-status");
  // date_eventリストの回数分ループ
  date_event.forEach(items => {
    if(items.time == toTwoDigits(dateList[0]) + ":" + toTwoDigits(dateList[1])){
      console.log("時間を見つけました。");
      console.log("ここでしゃべります");
      status.textContent = items.event;
    }else{
      console.log("時間を見つけられませんでした。");
    }
  });  
}

// 時刻書き込み関数
function writeCurrentTimeTo(element) {
    // 現在時刻取得関数
    let dateList = getDate();
    // 表示を更新する
    // dateListは0:時、1:分、2:秒
    element.textContent =
        `${toTwoDigits(dateList[0])}:${toTwoDigits(dateList[1])}:${toTwoDigits(dateList[2])}`;
    // 秒数が00、かつ、分数が5で割り切れるとき
    if(toTwoDigits(dateList[2]) == "00" && dateList[1] % 5 == 0){
      // 現在時刻を引数にしてイベント確認関数へ
      checkDateEvent(dateList);
    }
}

// 現在時刻取得関数
function getDate(){
    // 現在時刻を取得
    const currentDate = new Date();
    // 時間・分・秒を取得
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    return [hours,minutes,seconds];
}

// 2桁フォーマット関数
function toTwoDigits(value) {
    return String(value).padStart(2, "0");
}

window.addEventListener("load", clockUpdater);



