<template>
  <v-list shaped>
    <v-list-item v-for="n in countSite" :key="n.id" link>
      <v-list-item-content>
        <ShapeUIElementsItemlistsItem fname="Device" :lname="n.name" />
      </v-list-item-content>
    </v-list-item>
    <ShapeUIElementsDialogForm @updatecountSite="updateParent" />
  </v-list>
</template>

<script>
export default {

  methods: {
    updateParent(event){
      console.log(event)
      this.countSite = event
    }
  },
  data() {
    return {
      countSite: JSON.parse(localStorage.getItem('device')),
    }
  },
}
</script>

