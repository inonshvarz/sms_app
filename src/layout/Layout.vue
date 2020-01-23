<template >
  <v-app class="body">
    <v-container fill-height>
      <v-row>
        <v-col>
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
.body {
  background-color: #fff !important;
}

* {
  font-family: "Montserrat", sans-serif;
}
</style>