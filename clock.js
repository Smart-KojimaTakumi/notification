// // 時刻更新処理 メイン関数
// function clockUpdater() {
//     // 時計の要素を取得
//     const currentTimeElement = document.getElementById("current-time");
//     // 初回更新
//     writeCurrentTimeTo(currentTimeElement);
//     // 1秒おきに時計を更新
//     setInterval(() => {writeCurrentTimeTo(currentTimeElement)}, 1000);
//     setInterval(() => {checkDateEvent()},1000);
// }

// // 時刻書き込み関数
// function writeCurrentTimeTo(element) {
//     // 現在時刻を取得
//     const currentDate = new Date();
//     // 時間・分・秒を取得
//     const hours = currentDate.getHours();
//     const minutes = currentDate.getMinutes();
//     const seconds = currentDate.getSeconds();
//     // 表示を更新する
//     element.textContent =
//         `${toTwoDigits(hours)}:${toTwoDigits(minutes)}:${toTwoDigits(seconds)}`;
// }

// // 2桁フォーマット関数
// function toTwoDigits(value) {
//     return String(value).padStart(2, "0");
// }

// window.addEventListener("load", clockUpdater);
