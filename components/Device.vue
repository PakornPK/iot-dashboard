<template>
  <v-list-item-title v-on:click="selectState(lname)"
    >{{ fname }}: {{ lname }}
  </v-list-item-title>
</template>

<script>
export default {
  props: ['fname', 'lname'],
  methods: {
    selectState(lname) {
      console.log(lname)
    },
  },
}
</script>

<style>
</style>

