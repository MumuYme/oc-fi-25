<template>
  <div ref="canvasContainer" class="p5-background"></div>
</template>

<script setup>
import p5 from 'p5';
import { onMounted, onUnmounted, ref, nextTick } from 'vue';

const props = defineProps({
  circleConfig: {
    type: Array,
    default: () => [
      { color: '#dbeafe', count: 5, rMin: 35, rMax: 40 },//100
      { color: '#bfdbfe', count: 10, rMin: 20, rMax: 40 },//200
      { color: '#7dd3fc', count: 10, rMin: 15, rMax: 25 }//300 #7dd3fc
    ]
  }
});

const canvasContainer = ref(null);
let p5Instance = null;

const sketch = (p) => {
  let circles = [];

  class Circle {
    constructor(color, rMin, rMax, index) { // indexを引数に追加
      // 円の初期位置を均等に配置するロジック
      const rows = p.floor(p.sqrt(props.circleConfig.reduce((sum, current) => sum + current.count, 0)));
      const cols = Math.ceil(props.circleConfig.reduce((sum, current) => sum + current.count, 0) / rows);
      const cellWidth = p.width / (cols + 1);
      const cellHeight = p.height / (rows + 1);

      this.x = (index % cols + 1) * cellWidth + p.random(-cellWidth / 4, cellWidth / 4);
      this.y = (p.floor(index / cols) + 1) * cellHeight + p.random(-cellHeight / 4, cellHeight / 4);
      
      this.r = p.random(rMin, rMax);
      this.vx = p.random(-0.5, 0.5);
      this.vy = p.random(-0.5, 0.5);
      this.color = color;
    }

    update() {
      // 速度を少しだけランダムに変化させることで動きに変化をつける
      this.vx += p.random(-0.02, 0.02);
      this.vy += p.random(-0.02, 0.02);
      // 速度が上がりすぎないように制限
      this.vx = p.constrain(this.vx, -0.8, 0.8);
      this.vy = p.constrain(this.vy, -0.8, 0.8);

      this.x += this.vx;
      this.y += this.vy;

      if (this.x < this.r || this.x > p.width - this.r) {
        this.vx *= -1;
      }
      if (this.y < this.r || this.y > p.height - this.r) {
        this.vy *= -1;
      }
    }

    display() {
      // 透明度を少し加える
      p.fill(p.color(this.color, 150)); // 150は透明度
      p.noStroke();
      p.ellipse(this.x, this.y, this.r * 2);
    }
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasContainer.value);
    
    let circleIndex = 0;
    for (const config of props.circleConfig) {
      for (let i = 0; i < config.count; i++) {
        // indexを渡して、均等な初期位置を計算させる
        circles.push(new Circle(config.color, config.rMin, config.rMax, circleIndex));
        circleIndex++;
      }
    }
  };

  p.draw = () => {
    // 背景を塗りつぶすのではなく、半透明の四角形を重ねて残像を出す
    p.background(255, 150);
    for (const circle of circles) {
      circle.update();
      circle.display();
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

onMounted(async () => {
  await nextTick();
  if (canvasContainer.value) {
    p5Instance = new p5(sketch, canvasContainer.value);
  }
});

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