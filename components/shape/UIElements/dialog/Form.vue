<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-list-item link v-bind="attrs" v-on="on" >
        <v-list-item-content>
          <v-list-item-title>
            <v-icon class="mr-5">mdi-book-plus</v-icon>
            Add Device
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Plase Insert Device Name</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-text-field label="device name" v-model="nameF" required></v-text-field>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text v-on:click="addDeviceFunc" > Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      nameF:null,
      countSite: JSON.parse(localStorage.getItem('device')),
    }
  },
  updated() {
    localStorage.setItem('device', JSON.stringify(this.countSite))
  },
  methods:{
    addDeviceFunc() {
      this.dialog = false
      this.countSite.push({
        id: Math.floor(Math.random() * 1000000),
        name: this.nameF,
      })
       this.$emit('updatecountSite', this.countSite)
       this.nameF = null
    },
  },
  props: ['btn-msg', 'btn-icon', 'msg'],
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>