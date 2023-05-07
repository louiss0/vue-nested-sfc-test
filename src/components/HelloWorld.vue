<script setup lang="tsx">
import { FunctionalComponent, ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
 


type Events = { alertText(word: string): void; onThis(): string;  }

type ObjectThatRejectsOn<T extends Record<string, unknown>> = Omit<T,`on${string}`>   

type CreateObjectPrefixedWithOnAndCapitalized<T extends Record<string, unknown>> = {
  [K in keyof ObjectThatRejectsOn<T> as `on${Capitalize<K & string>}`]:ObjectThatRejectsOn<T>[K]
}
type ObjectWithOnlyFunctions = Record<string, (...args: Array<any>) => any>; 

type ProperFunctionalComponent< T extends Record<string, unknown>, U extends ObjectWithOnlyFunctions> =
  FunctionalComponent<
    Omit<T, keyof U> & CreateObjectPrefixedWithOnAndCapitalized<U>,
    ObjectThatRejectsOn<U>
  >


const Example: ProperFunctionalComponent<{ text: string;  }, Events> = (props, { emit }) => (
  <button onClick={() => emit("alertText", props.text)} >
    Click to get a text alert 
  </button>
)

Example.props = ['text']

Example.emits = ["alertText"]


</script>


<template>
  <h1>{{ msg }}</h1>
  <Message word="nice" />
  <Example text=""  @alertText=""   />
  <div class="card">
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <IncrementButton  
    :count="count"
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

<component name="increment-button" lang="vue">
  
  <script lang="ts" setup>

    defineProps({
      count:{
        type: Number,
        required:true
      }
    })

    defineEmits({
      countEmittedWithIncrementedValue:(value:number) => typeof value === "number", 
    })

  </script>

  <template>
      <button type="button" @click="$emit('countEmittedWithIncrementedValue', count + 1) ">
      <!-- This will not work  <Text />  -->
       {{ count }}
      </button>
  </template>

</component>

<component name="text" lang="vue" >
  <template>
    Count is
  </template>
</component>


<component name="Message" lang="vue">
  
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

