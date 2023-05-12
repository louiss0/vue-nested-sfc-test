<script setup lang="ts">
import {  ref } from 'vue'
import z from 'zod';

defineProps({
  msg: {
    type: String,
    required:true,
    validator: (value) =>
      !!z.string()
          .transform((value) => value.replace(/\s/g, ''))
          .pipe(z.string().min(4).max(25)).parse(value)
  }
})

const count = ref(0)
 

</script>


<template>
  <h1> {{ msg }}</h1>
  <Message word="nice" />
  <div class="card">
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <IncrementButton  
    :count="10"
    
    @countEmittedWithIncrementedValue="(value)=>count = value" 
  />
  <input type="text">
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<component name="increment-button" lang="html">
  
<script lang="ts" setup>

  import z from 'zod';

  defineProps({
    count:{
      type: Number,
      required:true,
      validator:(value) => !!z.number().min(0).max(10).parse(value)
        
      }
    })

    defineEmits({
      countEmittedWithIncrementedValue:(value:number) => typeof value === "number", 
    })

  </script>

  <template>
      <button type="button" @click="$emit('countEmittedWithIncrementedValue', count + 1) ">
    Count is

        {{ count }}
      </button>
  </template>

</component>



<component name="message" lang="html">
  
  <script setup lang="ts"> 
  
  const message = "This is a message"

   defineProps({
    word:{
      type:String,
      required:true, 
    }
  })

  </script>

  <template>
    <button>
      {{ message }} {{ word }}
    </button>
  </template>

</component>

