<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{on,attrs }">
      <v-list-item link v-bind="attrs" v-on:click="checkState(on)" >
        <v-list-item-content>
          <v-list-item-title>
            <v-icon class="mr-5">mdi-book-plus</v-icon>
            Add {{btnMsg}}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">{{msg}}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-text-field label="name" v-model="nameDialog" required></v-text-field>
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
      nameDialog:null,
      countSite: JSON.parse(localStorage.getItem(this.val)),
    }
  },
  updated() {
    localStorage.setItem(this.val, JSON.stringify(this.countSite))
  },
  methods:{
    checkState(event){
      this.dialog = true
    },
    addDeviceFunc() {
      this.dialog = false
    //   const currentData = this.countSite.filter(data =>{
    //       return (data.siteId==this.siteId)
    //   })
      let index = this.countSite.map((data)=>{ return data.siteId;}).indexOf(this.siteId);
      console.log(index)
      this.countSite[index].devicelist.push({
        id: Math.floor(Math.random() * 1000000),
        name: this.nameDialog
      })
      this.nameDialog = null
      console.log(this.countSite)
      this.$emit('updatecountSite', this.countSite[index])
    },
  },
  props: ['btnMsg', 'btn-icon', 'msg','val','siteId'],
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>