<template>
  <div class="wrapper">
    <textarea id="story" name="story" style="height: 666px; width: 666px" v-model="json">
    </textarea>
    <div class="result">
      <section>
        <h2>json-parse:</h2>
        <vue-json-pretty :data="jsonParsed"></vue-json-pretty>
      </section>
      <section>
        <h2>json-init:</h2>
        <vue-json-pretty :data="jsonInited"></vue-json-pretty>
      </section>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
import { watch } from '@vue/runtime-core';
import genJsonWithInitValue from './utils'

export default {
  name: 'App',
  components: {
    VueJsonPretty
  },
  setup() {
    const json = ref('')
    const jsonParsed = ref({})
    const jsonInited = ref({})

    watch(json,(val) => {
      try {
        jsonParsed.value = JSON.parse(val)
        console.log(val);
        jsonInited.value = genJsonWithInitValue(val)
        console.log(jsonInited.value);
      } catch(e) {
        // 
        console.log(e);
      }
    })
    return {
      json,
      jsonParsed,
      jsonInited
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
}
.result {
  margin-left: 16px;
  flex: 1;
}
</style>
