
<template></template>

<component name="text-one" lang="vue" export>

    <script lang="ts" setup>
        defineProps({
            word:{
                type:String,
                required:true,

            }
        })
    </script>

    <template>
        This is text one with {{ word }}
    </template>

</component>


<component name="text-two" lang="vue" export>

    <script lang="ts" setup>
        defineProps({
            word:{
                type:String,
                required: false
            }
        })
    </script>

    <template>
        This is text two. {{ word }}
    </template>

</component>
