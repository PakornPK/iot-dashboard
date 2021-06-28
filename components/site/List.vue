<template>
  <v-list shaped>
    <v-list-item v-for="n in countSite" :key="n.id" link>
      <v-list-item-content>
        <ShapeUIElementsItemlistsItem fname="Site" :lname="n.name" />
      </v-list-item-content>
    </v-list-item>
    <v-list-item link @click="addSiteFunc">
      <v-list-item-content>
        <v-list-item-title>
          <v-icon class="mr-5">mdi-book-plus</v-icon>
          Add site
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
const makeid = (length) => {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export default {
  updated() {
    localStorage.setItem('site', JSON.stringify(this.countSite))
  },
  methods: {
    addSiteFunc() {
      this.countSite.push({
        id: Math.floor(Math.random() * 1000000),
        name: makeid(20),
      })
      console.log(this.countSite)
    },
  },
  data() {
    return {
      countSite: JSON.parse(localStorage.getItem('site')),
    }
  },
}
</script>

