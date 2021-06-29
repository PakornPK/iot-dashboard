<template>
  <v-list shaped>
    <v-list-item v-for="n in currentData.devicelist" :key="n.id" link>
      <v-list-item-content>
        <Site fname="Device" :lname="n.name" />
      </v-list-item-content>
    </v-list-item>
    <DeviceForm
      v-if="PropsDevicePermission"
      btnMsg="Device"
      msg="Plese insert device name"
      val="groupsite"
      :siteId="currentData.siteId"
      @updatecountSite="updatecountSite"
    />
  </v-list>
</template>

<script>
export default {
  props: ['PropsDevicePermission', 'currentData'],
  data() {
    return {
    }
  },
  methods:{
    updatecountSite(event){
       this.currentData.devicelist = { ...event.devicelist }
    }
  }
}
</script>