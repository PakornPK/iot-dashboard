<template>
  <v-list-item-title v-on:click="RemoveSiteFun(name)"
    >{{ fname }}: {{ lname }}
  </v-list-item-title>
</template>

<script>
export default {
  props: ['fname', 'lname'],
  methods: {
    RemoveSiteFun(name) {
      console.log(name)
    },
  },
}
</script>

<style>
</style>