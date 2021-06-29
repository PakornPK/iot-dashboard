<template>
  <v-app id="inspire">
    <v-app-bar app clipped-right flat height="72">
      <v-spacer></v-spacer>

      <v-responsive max-width="156">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app width="200">
      <v-sheet color="grey lighten-5" height="128" width="100%"></v-sheet>
      <v-row justify="center" align="center" class="mb-2 mt-1 grey">
        <v-col class="text-center text-h5"> Your workspace </v-col>
      </v-row>
      <SiteList @updateDeviceList="updateDeviceList" />
    </v-navigation-drawer>

    <v-navigation-drawer app clipped right>
      <DeviceList :PropsDevicePermission="PropsDevicePermission" :currentData="currentData" /> 
    </v-navigation-drawer>

    <v-main>
      <!-- //:PropsDevicePermission="" :devicelist="" /> -->
    </v-main>

    <v-footer app color="transparent" height="72" inset> </v-footer>
  </v-app>
</template>

<script>

export default {
  data: () => ({ drawer: null,
  PropsDevicePermission:false,
  currentData:[]
   }),
  methods: {
    updateDeviceList(event){
      this.PropsDevicePermission =  event.PropsDevicePermission
      this.currentData =  event.devicelist
    }
  },
}
</script>