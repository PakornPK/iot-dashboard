<template>
  <v-list shaped>
    <v-list-item v-for="n in countSite" :key="n.siteId" link>
      <v-list-item-content>
        <Site fname="Site" :lname="n.siteName"  @updateDeviceList="updateDeviceList" />
      </v-list-item-content>
    </v-list-item>
    <SiteForm
      btnMsg="Site"
      msg="Plese insert site name"
      val="groupsite"
      @updateParent="updateParent"
    />
  </v-list>
</template>


<script>
export default {
  methods: {
    updateParent(event) {
      this.countSite = event
    },
    updateDeviceList(event){
      this.$emit('updateDeviceList',event)
    }
  },
  data() {
    return {
      countSite: JSON.parse(localStorage.getItem('groupsite')),
    }
  },
}
</script>