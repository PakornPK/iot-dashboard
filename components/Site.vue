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
      const currentFilter = (JSON.parse(localStorage.getItem('groupsite'))).filter(data => {return (data.siteName == lname)})
      this.$emit('updateDeviceList',{
        "PropsDevicePermission" : true,
        "devicelist" : currentFilter[0]
      })
    },
  },
}
</script>

<style>
</style>

