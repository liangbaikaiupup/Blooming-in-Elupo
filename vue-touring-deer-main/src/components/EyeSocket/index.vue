<template>
  <div class="container-eye">
    <div class="container-eye_socket" id="container" :style="{ width: width, height: height }">
      <div class="eyeSocket eyeSocketSleeping" id='bigEye'>
        <div id="eyeball"></div>
      </div>
      <div class="filter">
        <div class="eyeSocket" id='eyeFilter'>
        </div>
      </div>
      <!-- Svg滤镜 -->
      <svg width="0">
        <filter id='filter'>
          <feTurbulence baseFrequency="1">
            <animate id="animate1" attributeName="baseFrequency" dur="1s" from="0.5" to="0.55" begin="0s;animate1.end">
            </animate>
            <animate id="animate2" attributeName="baseFrequency" dur="1s" from="0.55" to="0.5" begin="animate2.end">
            </animate>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="50" xChannelSelector="R" yChannelSelector="B" />
        </filter>
      </svg>
    </div>
  </div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts';
import { onMounted, reactive, ref, defineProps, nextTick } from 'vue'
defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  }
})
const state = reactive({
  isSleep: true, //是否处于休眠状态
  leftRotSize: 0,
  ballSize: 0,
  ballColor: 'transparent'
})
// const { leftRotSize } = toRefs(state)
const eyeBody = ref()
const eyeball = ref()
const eyeballChart = ref()
const bigEye = ref()
const eyeFilter = ref()
const rotTimer = ref()
const sleepTimer = ref()

onMounted(() => {
  nextTick(() => {
    eyeBody.value = document.getElementById('container') as HTMLElement
  })

  eyeFilter.value = document.getElementById('eyeFilter') as HTMLElement;
  eyeball.value = document.getElementById('eyeball') as HTMLElement; // 获取eyeball元素
  eyeballChart.value = echarts.init(eyeball.value)
  bigEye.value = document.getElementById('bigEye') as HTMLElement;
  bigEye.value.addEventListener('click', () => {
    if (!state.isSleep) return;
    clickToWeakup();
  })
  bigEye.value.addEventListener('webkitAnimationEnd', () => {
    new Promise<void>(resolve => {
      clearInterval(rotTimer.value);
      rotTimer.value = setInterval(() => {
        draw()
        state.ballSize > 0 && (state.ballSize -= 0.5);
        state.leftRotSize === 360 ? (state.leftRotSize = 0) : (state.leftRotSize += 0.1);
        if (state.ballSize === 0) {
          clearInterval(rotTimer.value);
          resolve();
        }
      }, 10);
    }).then(() => {
      eyeFilter.value.style.opacity = '0'
      eyeFilter.value.className = bigEye.value.className = 'eyeSocket';
      setNormal();
      eyeBody.value.addEventListener('mousemove', focusOnMouse);
      rotTimer.value = setInterval(() => {
        draw()
        state.ballSize <= 12 && (state.ballSize += 0.1);
        state.leftRotSize === 360 ? (state.leftRotSize = 0) : (state.leftRotSize += 0.1);
      }, 10);
    })
  })


})

// 画眼球
function draw() {
  eyeballChart.value.setOption({
    series: [
      {
        type: 'gauge',
        radius: '-20%',
        clockwise: false,
        startAngle: `${0 + state.leftRotSize * 5}`,
        endAngle: `${270 + state.leftRotSize * 5}`,
        splitNumber: 3,
        detail: false,
        axisLine: {
          show: false,
        },
        axisTick: false,
        splitLine: {
          show: true,
          length: state.ballSize,
          lineStyle: {
            shadowBlur: 20,
            shadowColor: state.ballColor,
            shadowOffsetY: '0',
            color: state.ballColor,
            width: 4,
          }
        },
        axisLabel: false
      },
      {
        type: 'gauge',
        radius: '-20%',
        clockwise: false,
        startAngle: `${45 + state.leftRotSize * 5}`,
        endAngle: `${315 + state.leftRotSize * 5}`,
        splitNumber: 3,
        detail: false,
        axisLine: {
          show: false,
        },
        axisTick: false,
        splitLine: {
          show: true,
          length: state.ballSize,
          lineStyle: {
            shadowBlur: 20,
            shadowColor: state.ballColor,
            shadowOffsetY: '0',
            color: state.ballColor,
            width: 4,
          }
        },
        axisLabel: false
      }
    ]
  })

}

// 休眠
function toSleep() {
  state.isSleep = true;
  clearInterval(rotTimer.value);
  rotTimer.value = setInterval(() => {
    draw()
    if (state.ballSize > 0) {
      state.ballSize -= 0.1;
    } else {
      bigEye.value.className = 'eyeSocket eyeSocketSleeping'
    }
    state.leftRotSize === 360 ? (state.leftRotSize = 0) : (state.leftRotSize += 0.1);
  }, 10);
  eyeBody.value.removeEventListener('mousemove', focusOnMouse);
  bigEye.value.style.transform = `rotateY(0deg) rotateX(0deg)`;
  eyeball.value.style.transform = `translate(0px, 0px)`;
}

// 关注鼠标
function focusOnMouse(e: any) {
  // 视口尺寸
  let clientWidth = eyeBody.value.clientWidth;
  let clientHeight = eyeBody.value.clientHeight;
  // 原点，即bigEye中心位置，页面中心
  let origin = [clientWidth / 2, clientHeight / 2];
  // 鼠标坐标
  let mouseCoords = [e.clientX - origin[0], origin[1] - e.clientY];
  let eyeXDeg = mouseCoords[1] / clientHeight * 80;
  let eyeYDeg = mouseCoords[0] / clientWidth * 60;
  bigEye.value.style.transform = `rotateY(${eyeYDeg}deg) rotateX(${eyeXDeg}deg)`;
  eyeball.value.style.transform = `translate(${eyeYDeg / 1.5}px, ${-eyeXDeg / 1.5}px)`;
  // 设置休眠
  if (sleepTimer.value) clearTimeout(sleepTimer.value);
  sleepTimer.value = setTimeout(() => {
    toSleep();
  }, 30000);
}

// 唤醒
function clickToWeakup() {
  state.isSleep = false;
  eyeFilter.value.style.opacity = '1'
  eyeFilter.value.className = bigEye.value.className = 'eyeSocket eyeSocketLooking'
  setAngry();
  clearInterval(rotTimer.value);
  rotTimer.value = setInterval(() => {
    draw();
    state.ballSize <= 50 && (state.ballSize += 1);
    state.leftRotSize === 360 ? (state.leftRotSize = 0) : (state.leftRotSize += 0.5);
  }, 10);
}

// 生气模式
function setAngry() {
  eyeBody.value.style.setProperty('--c-eyeSocket', 'rgb(255,187,255)')
  eyeBody.value.style.setProperty('--c-eyeSocket-outer', 'rgb(238,85,135)')
  eyeBody.value.style.setProperty('--c-eyeSocket-outer-shadow', 'rgb(255, 60, 86)')
  eyeBody.value.style.setProperty('--c-eyeSocket-inner', 'rgb(208,14,74)')
  state.ballColor = 'rgb(208,14,74)';
}

// 常态模式
function setNormal() {
  eyeBody.value.style.setProperty('--c-eyeSocket', 'rgb(41, 104, 217)')
  eyeBody.value.style.setProperty('--c-eyeSocket-outer', '#02ffff')
  eyeBody.value.style.setProperty('--c-eyeSocket-outer-shadow', 'transparent')
  eyeBody.value.style.setProperty('--c-eyeSocket-inner', 'rgb(35, 22, 140)')
  state.ballColor = 'rgb(0,238,255)';
}

</script>
<style lang="scss" scoped>
.container-eye {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container-eye_socket {
  overflow: hidden;
  background-color: #111;
  perspective: 1000px;
  --c-eyeSocket: rgb(41, 104, 217);
  --c-eyeSocket-outer: #02ffff;
  --c-eyeSocket-outer-shadow: transparent;
  --c-eyeSocket-inner: rgb(35, 22, 140);
}

.filter {
  width: 100%;
  height: 100%;
  filter: url('#filter');
}

.eyeSocket,
.filter .eyeSocket {
  position: absolute;
  left: calc(50% - 75px);
  top: calc(50% - 75px);
  width: 150px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 4px solid var(--c-eyeSocket);
  box-shadow: 0px 0px 50px var(--c-eyeSocket-outer-shadow);
  transition: border 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
  z-index: 1;
}

.filter .eyeSocket {
  opacity: 0;
  left: calc(50% - 92px);
  top: calc(50% - 92px);
  transition: all 0.5s ease-in-out;
}

.eyeSocket::before,
.eyeSocket::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
  box-sizing: border-box;
}

.eyeSocket::before {
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  border: 6px solid var(--c-eyeSocket-outer);
}

.eyeSocket::after {
  width: 100%;
  height: 100%;
  border: 4px solid var(--c-eyeSocket-inner);
  box-shadow: inset 0px 0px 30px var(--c-eyeSocket-inner);
}

#eyeball {
  width: 100%;
  height: 100%;
}

.eyeSocketSleeping {
  animation: sleeping 6s infinite;
}

.eyeSocketLooking {
  animation: lookAround 2.5s;
}

@keyframes sleeping {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes lookAround {
  0% {
    transform: translateX(0) rotateY(0);
  }

  10% {
    transform: translateX(0) rotateY(0);
  }

  40% {
    transform: translateX(-70px) rotateY(-30deg);
  }

  80% {
    transform: translateX(70px) rotateY(30deg);
  }

  100% {
    transform: translateX(0) rotateY(0);
  }
}
</style>