<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col class="mb-12 pt-12" cols="12" xs="12" md="4" sm="8">
        <v-card elevation="20" class="card">
          <v-toolbar dark color="blue darken-3" dense>
            <v-toolbar-title>שליחת SMS</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <img src="../assets/hadassa.jpg" alt />
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="fetchUser">
              <v-row>
                <v-col>
                  <v-text-field
                    @focus="alert=true"
                    label="מספר עובד"
                    type="text"
                    v-model="employeeId"
                    v-mask="'########'"
                  ></v-text-field>
                  <p v-if="alert">
                    <strong>* יש להכניס את מספר העובד של הנמען</strong>
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="text-center">
                  <v-btn
                    dark
                    color="blue darken-2"
                    :loading="isLoading"
                    @click.prevent="fetchUser"
                  >היכנס</v-btn>
                </v-col>
              </v-row>
              <div style="height:60px;">
                <transition
                  appear
                  v-if="responseMessage.status"
                  enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut"
                  mode="out-in"
                >
                  <v-alert type="error">{{responseMessage.message}}</v-alert>
                </transition>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      employeeId: "",
      alert: false,
      max: 8
    };
  },

  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    responseMessage() {
      return this.$store.state.responseMessage;
    }
  },
  methods: {
    fetchUser() {
      this.$store.dispatch("fetchDetails", this.employeeId);
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 20px !important;
}
img {
  padding: 1px;
  border-radius: 40px !important;
  width: 50px;
  height: 100%;
}
</style>