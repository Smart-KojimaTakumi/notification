const date_event = [
  {
    time: "09:00",
    event: "学習開始フォーム記入",
    voice: "おはようございます。学習開始フォームを記入してください"
  },

  {
    time: "09:10",
    event: "集中学習開始（45分）",
    voice: "集中学習を開始してください。"
  },
  {
    time: "09:55",
    event: "アウトプットフォーム記入",
    voice: "集中学習を終了してアウトプットフォームを記入してください。"
  },
  {
    time: "10:00",
    event: "ペアになってアウトプット開始",
    voice: "ペアを組んでアウトプットをしてください。"
  },
  {
    time: "11:00",
    event: "休憩（5分）",
    voice: "５分間の休憩をとってください。"
  },

  {
    time: "11:05",
    event: "集中学習開始（45分）",
    voice: "集中学習を開始してください。"
  },
  {
    time: "11:50",
    event: "アウトプットフォーム記入",
    voice: "集中学習を終了してアウトプットフォームを記入してください。"
  },
  {
    time: "11:55",
    event: "ペアになってアウトプット開始",
    voice: "ペアを組んでアウトプットをしてください。"
  },

  {
    time: "12:00",
    event: "昼休憩（1時間）",
    voice: "１時間のお昼休憩をとってください。"
  },

  {
    time: "13:00",
    event: "集中学習開始（45分）",
    voice: "集中学習を開始してください。"
  },
  {
    time: "13:45",
    event: "アウトプットフォーム記入",
    voice: "集中学習を終了してアウトプットフォームを記入してください。"
  },
  {
    time: "13:50",
    event: "ペアになってアウトプット開始",
    voice: "ペアを組んでアウトプットをしてください。"
  },
  {
    time: "13:55",
    event: "休憩（5分）",
    voice: "５分間の休憩をとってください。"
  },

  {
    time: "14:00",
    event: "集中学習開始（45分）",
    voice: "集中学習を開始してください。"
  },
  {
    time: "14:45",
    event: "アウトプットフォーム記入",
    voice: "集中学習を終了してアウトプットフォームを記入してください。"
  },
  {
    time: "14:50",
    event: "ペアになってアウトプット開始",
    voice: "ペアを組んでアウトプットをしてください。"
  },
  {
    time: "14:55",
    event: "休憩（5分）",
    voice: "５分間の休憩をとってください。"
  },

  {
    time: "15:00",
    event: "集中学習開始（45分）",
    voice: "集中学習を開始してください。"
  },
  {
    time: "15:45",
    event: "アウトプットフォーム記入",
    voice: "集中学習を終了してアウトプットフォームを記入してください。"
  },
  {
    time: "15:50",
    event: "ペアになってアウトプット開始",
    voice: "ペアを組んでアウトプットをしてください。"
  },
  {
    time: "15:55",
    event: "休憩（5分）",
    voice: "５分間の休憩をとってください。"
  },

  {
    time: "16:00",
    event: "集中学習開始（45分）",
    voice: "集中学習を開始してください。"
  },
  {
    time: "16:45",
    event: "アウトプットフォーム記入",
    voice: "集中学習を終了してアウトプットフォームを記入してください。"
  },
  {
    time: "16:50",
    event: "ペアになってアウトプット開始",
    voice: "ペアを組んでアウトプットをしてください。"
  },
  {
    time: "16:55",
    event: "休憩（5分）",
    voice: "５分間の休憩をとってください。"
  },

  {
    time: "17:00",
    event: "集中学習開始（45分）",
    voice: "集中学習を開始してください。"
  },
  {
    time: "17:45",
    event: "学習振り返りフォーム記入",
    voice: "集中学習を終了して学習振り返りフォームを記入してください。"
  },
  {
    time: "17:55",
    event: "ペアになってアウトプット開始",
    voice: "ペアを組んでアウトプットをしてください。"
  },

  {
    time: "18:00",
    event: "業務終了",
    voice: ""
  }
];

// 時刻更新処理 メイン関数
function clockUpdater() {
    // 時計の要素を取得
    const currentTimeElement = document.getElementById("current-time");
    let dateList = getDate();
    const eventIndex = getCurrentEventIndex(dateList);
    // 初回更新
    writeCurrentTimeTo(currentTimeElement); // 時刻表示
    addLogsBefore(eventIndex); // 過去ログ
    const status = document.getElementById("current-status" );
    status.textContent = date_event[eventIndex].event; // 現在のステータス
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
      sound(items.voice);
      addLogToList(items.time, items.event);
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
      console.log(getCurrentEventIndex(dateList));
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

// 文字列を数値変換
function parseTimeStr(time) {
  // 文字列をコロンで分割
  const splitedTime = time.split(":");

  // 時間と分を数値に変換
  const hours = parseInt(splitedTime[0]);
  const minutes = parseInt(splitedTime[1]);

  // ひとまとめにする
  const timenumber = hours * 100 + minutes;

  return timenumber;
}

function getCurrentEventIndex(dateList) {
  // 現在時刻をひとまとめにする
  const checkTimeNum = dateList[0] * 100 + dateList[1];

  // 現在のイベントインデックス
  let eventIndex = 0;

  // イベントをチェック
  for (let i = 0; i < date_event.length; i++) {
    const event = date_event[i];
    // イベント時刻
    const eventTimeNum = parseTimeStr(event.time);
    // イベントの時間を過ぎているなら最後のイベントを更新
    if (checkTimeNum >= eventTimeNum) {
      eventIndex = i;
    }else{
      break;
    }
  }

  return eventIndex;
}

function sound(text){
  // 音声出力したい内容をuttrに代入
  const uttr = new SpeechSynthesisUtterance(text);
  // uttrをWebSpeachAPIを用いて発声させる。
  speechSynthesis.speak(uttr);
}

// 2桁フォーマット関数
function toTwoDigits(value) {
    return String(value).padStart(2, "0");
}

// ログをリストに追加する関数
function addLogToList(time, log) {
  const html = buildLogHtml(time,log);

  const logList = document.getElementById("log-list");
  logList.insertAdjacentHTML("afterbegin", html);
}

// 過去ログをすべて追加する関数
function addLogsBefore(index) {
  // イベントをindexまでループ
  for (let i = 0; i < index + 1; i++) {
    const event = date_event[i];
    // 過去ログを追加
    addLogToList(event.time, event.event);
  }
}

function buildLogHtml(time,log){
  return html = `
    <li class="log-list-element">
      <p class="time">${time}</p>
      <p class="event">${log}</p>
    </li>
  `
}

window.addEventListener("load", clockUpdater);



