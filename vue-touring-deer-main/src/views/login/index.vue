<!--
 * @Author: your name
 * @Date: 2022-03-19 14:10:16
 * @LastEditTime: 2022-08-06 17:31:28
 * @LastEditors: xianglutao 294301492@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \v3-ts-tourdeer\src\views\login\index.vue
-->
<template>
  <div class="container-login">

    <div class="panel-login">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
        <el-form-item prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="" clearable />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" type="password" placeholder="" show-password clearable
            @keyup.enter="submitForm(ruleFormRef)" />
        </el-form-item>
      </el-form>
    </div>

    <!-- 粒子特效 -->
    <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="options" />

  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { ElMessage } from 'element-plus'
import { useUserStore } from "@/store"
import { useRouter } from 'vue-router';

/**
 * https://github.com/matteobruni/tsparticles/tree/main/components/vue3
 * 粒子特效
 */
import { loadFull } from "tsparticles";

const options = reactive({
  "autoPlay": true,
  "background": {
    "color": {
      "value": "#fff"
    },
    "image": "",
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover",
    "opacity": 1
  },
  "backgroundMask": {
    "composite": "destination-out",
    "cover": {
      "color": {
        "value": "#fff"
      },
      "opacity": 1
    },
    "enable": false
  },
  "fullScreen": {
    "enable": true,
    "zIndex": 1
  },
  "detectRetina": true,
  "duration": 0,
  "fpsLimit": 120,
  "interactivity": {
    "detectsOn": "window",
    "events": {
      "onClick": {
        "enable": false,
        "mode": "push"
      },
      "onDiv": {
        "selectors": [],
        "enable": false,
        "mode": [],
        "type": "circle"
      },
      "onHover": {
        "enable": false,
        "mode": "repulse",
        "parallax": {
          "enable": false,
          "force": 60,
          "smooth": 10
        }
      },
      "resize": true
    },
    "modes": {
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 50,
        "speed": 1
      },
      "bounce": {
        "distance": 200
      },
      "bubble": {
        "distance": 400,
        "duration": 2,
        "mix": false,
        "opacity": 0.8,
        "size": 40,
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "selectors": []
        }
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 400,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 50,
        "easing": "ease-out-quad",
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "selectors": []
        }
      },
      "slow": {
        "factor": 3,
        "radius": 200
      },
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      }
    }
  },
  "manualParticles": [],
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  },
  "particles": {
    "bounce": {
      "horizontal": {
        "random": {
          "enable": false,
          "minimumValue": 0.1
        },
        "value": 1
      },
      "vertical": {
        "random": {
          "enable": false,
          "minimumValue": 0.1
        },
        "value": 1
      }
    },
    "collisions": {
      "bounce": {
        "horizontal": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        },
        "vertical": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        }
      },
      "enable": false,
      "mode": "bounce",
      "overlap": {
        "enable": true,
        "retries": 0
      }
    },
    "color": {
      "value": "#000",
      "animation": {
        "h": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "decay": 0,
          "sync": true
        },
        "s": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "decay": 0,
          "sync": true
        },
        "l": {
          "count": 0,
          "enable": false,
          "offset": 0,
          "speed": 1,
          "decay": 0,
          "sync": true
        }
      }
    },
    "destroy": {
      "mode": "none",
      "split": {
        "count": 1,
        "factor": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 3
        },
        "rate": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": {
            "min": 4,
            "max": 9
          }
        },
        "sizeOffset": true
      }
    },
    "gradient": [],
    "groups": {},
    "links": {
      "blink": false,
      "color": {
        "value": "#000"
      },
      "consent": false,
      "distance": 150,
      "enable": true,
      "frequency": 1,
      "opacity": 0.4,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "move": {
      "angle": {
        "offset": 0,
        "value": 90
      },
      "attract": {
        "distance": 200,
        "enable": false,
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "center": {
        "x": 50,
        "y": 50,
        "radius": 0
      },
      "decay": 0,
      "distance": {},
      "direction": "none",
      "drift": 0,
      "enable": true,
      "gravity": {
        "acceleration": 9.81,
        "enable": false,
        "inverse": false,
        "maxSpeed": 50
      },
      "path": {
        "clamp": true,
        "delay": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0
        },
        "enable": false,
        "options": {}
      },
      "outModes": {
        "default": "out",
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "random": false,
      "size": false,
      "speed": 2,
      "spin": {
        "acceleration": 0,
        "enable": false
      },
      "straight": false,
      "trail": {
        "enable": false,
        "length": 10,
        "fillColor": {
          "value": "#000000"
        }
      },
      "vibrate": false,
      "warp": false
    },
    "number": {
      "density": {
        "enable": false,
        "area": 800,
        "factor": 1000
      },
      "limit": 0,
      "value": 0
    },
    "opacity": {
      "random": {
        "enable": false,
        "minimumValue": 0.1
      },
      "value": 0.5,
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "sync": false,
        "destroy": "none",
        "startValue": "random",
        "minimumValue": 0.1
      }
    },
    "reduceDuplicates": false,
    "repulse": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    },
    "rotate": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "path": false
    },
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "options": {},
      "type": "circle"
    },
    "size": {
      "random": {
        "enable": true,
        "minimumValue": 1
      },
      "value": {
        "min": 1,
        "max": 5
      },
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 40,
        "decay": 0,
        "sync": false,
        "destroy": "none",
        "startValue": "random",
        "minimumValue": 0.1
      }
    },
    "stroke": {
      "width": 0
    },
    "zIndex": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "opacityRate": 1,
      "sizeRate": 1,
      "velocityRate": 1
    }
  },
  "pauseOnBlur": true,
  "pauseOnOutsideViewport": true,
  "responsive": [],
  "style": {},
  "themes": [],
  "zLayers": 100,
  //中间球吸引小球变大
  "absorbers": {
    "color": {
      "value": "#fff"
    },
    "draggable": false,
    "opacity": 0,
    "destroy": true,
    "orbits": false,
    "size": {
      "random": {
        "enable": true,
        "minimumValue": 30
      },
      "value": {
        "min": 30,
        "max": 50
      },
      "density": 20,
      "limit": {
        "radius": 100,
        "mass": 0
      }
    },
    "position": {
      "x": 50,
      "y": 50
    }
  },
  "emitters": [
    {
      "autoPlay": true,
      "fill": true,
      "life": {
        "wait": false
      },
      "rate": {
        "quantity": 1,
        "delay": 0.1
      },
      "shape": "square",
      "startCount": 0,
      "direction": "bottom-left",
      "particles": {
        "shape": {
          "type": "circle"
        },
        "color": {
          "value": "random"
        },
        "lineLinked": {
          "enable": false
        },
        "opacity": {
          "value": 0.3
        },
        "rotate": {
          "value": 0,
          "random": true,
          "direction": "counter-clockwise",
          "animation": {
            "enable": true,
            "speed": 15,
            "sync": false
          }
        },
        "size": {
          "value": 10,
          "random": {
            "enable": true,
            "minimumValue": 5
          }
        },
        "move": {
          "speed": 5,
          "random": false,
          "outMode": "bounce"
        }
      },
      "position": {
        "x": 100,
        "y": 0
      }
    }
  ]
})

const particlesInit = async (engine: any) => {
  await loadFull(engine);
}

const particlesLoaded = async (container: any) => {
  console.log("Particles container loaded", container);
}



const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  phone: 'admin',
  password: '123456',
});

const rules = reactive<FormRules>({
  phone: [
    {
      required: false,
      message: '',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: false,
      message: '',
      trigger: 'blur',
    },
  ],
});

const userStore = useUserStore()
const router = useRouter()
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid: boolean, fields: any) => {
    if (valid) {
      // mocLogin login
      userStore.mocLogin(ruleForm).then(() => {
        ElMessage({
          showClose: true,
          message: '登录成功',
          type: 'success',
        })
        router.push({ path: '/' })
      }).catch(()=>{
        ElMessage({
          showClose: true,
          message: '登录失败',
          type: 'error',
        }) 
      })
    } else {
      console.log('error submit!', fields);
    }
  });
};

</script>
<style lang="scss" scoped>
.container-login {
  min-height: 100%;
  width: 100%;
  // background-color: #2d3a4b;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  >.panel-login {
    width: 300px;
    z-index: 9;
  }
}
</style>