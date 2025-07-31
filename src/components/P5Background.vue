<template>
  <div ref="canvasContainer" class="p5-background"></div>
</template>

<script setup>
import p5 from 'p5';
import { onMounted, onUnmounted, ref, nextTick } from 'vue';


// canvasを描画するdiv要素への参照を作成
const canvasContainer = ref(null);

// p5.jsのインスタンスを保持する変数
let p5Instance = null;

// p5.jsのスケッチ（アニメーションの設計図）
const sketch = (p) => {
  // 円を管理するための配列
  let circles = [];
  // 使用する色のパレット
  const colors = ['#4287F5', '#89CFF0', '#A0D2EB', '#87ceeb']; // 青、ベビーブルー、ライトブルー、カデットブルー

  // 円の設計図（クラス）
  class Circle {
    constructor() {
      // 初期位置は画面内のランダムな場所
      this.x = p.random(p.width);
      this.y = p.random(p.height);
      // 半径は10pxから35pxのランダムな大きさ
      this.r = p.random(10, 35);
      // X方向とY方向の移動速度
      this.vx = p.random(-0.8, 0.8);
      this.vy = p.random(-0.8, 0.8);
      // 色をパレットからランダムに選択
      this.color = p.random(colors);
    }

    // 円の位置を更新する
    update() {
      this.x += this.vx;
      this.y += this.vy;

      // 画面の端に来たら反射する
      if (this.x < this.r || this.x > p.width - this.r) {
        this.vx *= -1;
      }
      if (this.y < this.r || this.y > p.height - this.r) {
        this.vy *= -1;
      }
    }

    // 円を描画する
    display() {
      p.fill(this.color);
      p.noStroke();
      p.ellipse(this.x, this.y, this.r * 2);
    }
  }

  // 初期設定（最初に1回だけ実行）
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasContainer.value);
    // 円を80個生成して配列に入れる
    const numberOfCircles = 25;
    for (let i = 0; i < numberOfCircles; i++) {
      circles.push(new Circle());
    }
  };

  // 描画処理（繰り返し実行）
  p.draw = () => {
    // 背景を白で塗りつぶす
    p.background(255);
    // すべての円の位置を更新して描画する
    for (const circle of circles) {
      circle.update();
      circle.display();
    }
  };

  // ウィンドウサイズが変更されたときにキャンバスサイズを合わせる
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

// コンポーネントがマウントされたらp5のインスタンスを作成
onMounted(async () => {
  await nextTick();
  console.log('canvasContainer:', canvasContainer.value); // nullじゃないか確認
  if (canvasContainer.value) {
    p5Instance = new p5(sketch, canvasContainer.value);
  }
});


// コンポーネントがアンマウントされたらp5のインスタンスを削除
onUnmounted(() => {
  if (p5Instance) {
    p5Instance.remove();
  }
});
</script>

<style scoped>
.p5-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>