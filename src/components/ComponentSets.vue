
<template></template>


<component name="text-one" lang="vue" export>

    <script lang="ts" setup>
        defineProps({
            word:{
                type:String,
                required:true,
                validator(value:string) {
                    
                   const stringHasThisIsTextOne = 
                   "This is text one"
                    .toLowerCase()
                    .includes(value.toLowerCase())
                
                   if(stringHasThisIsTextOne) {

                    throw new Error(`This string ${value} is already in the template`)

                   }

                   return true
                }
            }
        })
    </script>

    <template>
        This is text one
    </template>

</component>


<component name="text-two" lang="vue" export>

    <template>
        This is text two.
    </template>

</component>