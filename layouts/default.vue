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
      <SiteList />
    </v-navigation-drawer>

    <v-navigation-drawer app clipped right>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" link>
          <v-list-item-content>
            <v-list-item-title>Item {{ n }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!--  -->
    </v-main>

    <v-footer app color="transparent" height="72" inset> </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
}
</script>