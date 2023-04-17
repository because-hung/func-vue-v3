<template>
  <div>
    <button class="btn tooltip" data-tooltip="按下按鈕即可開始下載">
      下載
    </button>
  </div>
</template>
<style lang="scss" scoped>
// :root {
//   --tooltip-color: #000;
// }

.tooltip {
  position: relative;
}

.tooltip::before {
  /* data-* 對應不同的內容 */
  content: attr(data-tooltip);
  position: absolute;
  /* max-content 寬度自動配合文字長度 */
  width: max-content;
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 0.25rem;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  transform: translateX(-50%);
  /* 隱藏顯示 */
  display: none;
  transform: display 0.5s;
  // visibility: hidden;
  // opacity: 0;
  // transform: opacity .5s, display .5s;
}

.tooltip:hover::before {
  display: block;
  // visibility: visible;
  // opacity: 1;
}

/* 三角形 */
.tooltip::after {
  content: "";
  position: absolute;
  bottom: calc(150% - 10px);
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #000 transparent transparent;
  display: none;
  transform: display 0.5s;
  // visibility: hidden;
  // opacity: 0;
  // transform: opacity .5s, display .5s;
}

.tooltip:hover::after {
  display: block;
  /* visibility: visible; */
  /* opacity: 1; */
}
</style>
