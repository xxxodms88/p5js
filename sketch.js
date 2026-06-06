// 과제 4 — 여기에 본인 과제 4 의 sketch.js 코드를 그대로 붙여넣으세요.
// 아래는 자리표시(placeholder)일 뿐, 제출 전 반드시 교체해야 합니다.
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background('#FAFAFC');
  let t = millis() / 1000;
  noStroke();
  fill(247, 163, 229, 60);
  circle(300 + sin(t) * 60, 200 + cos(t * 1.3) * 40, 180 + sin(t * 2) * 30);
  fill(199, 217, 240, 70);
  circle(300 - sin(t * 1.1) * 60, 200 - cos(t) * 40, 150 + cos(t * 2) * 30);
  fill('#6b6470');
  textSize(20);
  text('과제 4 코드를 여기에 붙여넣으세요', 300, 200);
}
