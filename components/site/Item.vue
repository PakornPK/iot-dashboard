<template>
  <v-list-item-title v-on:click="RemoveSiteFun(name)">Site : {{ name }} </v-list-item-title>
</template>

<script>
export default {
    props:['name'],
    methods:{
      RemoveSiteFun(name){
        
        console.log(name)
      }
    }
}
</script>

<style>
</style>