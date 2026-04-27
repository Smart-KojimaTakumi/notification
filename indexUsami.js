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

// index.js メイン関数
function notificationLoop() {
  const currentStatusElement = document.getElementById("current-status");

  let lastEventIndex = 0;
  setInterval(() => {
    // 現在のイベントを取得
    const eventIndex = getCurrentEventIndex();
    console.log(`イベントID: ${eventIndex} 「${date_event[eventIndex].event}」`);

    // イベントに変化があるなら通知する
    if (lastEventIndex !== eventIndex) {
      sound();
      currentStatusElement.textContent = date_event[eventIndex].event;
      lastEventIndex = eventIndex;
    }
  }, 10000);
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

function getCurrentEventIndex() {
  // 現在時刻を取得
  const currentDate = new Date();
  // 時間・分を取得
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  // 現在時刻をひとまとめにする
  const checkTimeNum = hours * 100 + minutes;

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
    }
  }

  return eventIndex;
}

window.addEventListener("load", notificationLoop);
