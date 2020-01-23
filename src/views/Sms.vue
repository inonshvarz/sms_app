<template>
  <v-row align="center" justify="center">
    <v-col cols="12" xs="12" md="6" sm="8">
      <v-card elevation="20" style="border-radius: 15px;">
        <v-toolbar dark color="blue darken-3" dense>
          <v-toolbar-title>שליחת SMS</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <img src="../assets/hadassa.jpg" alt />
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-form class="pa-8 ma-auto">
            <v-row>
              <v-col xs="12" md="4" sm="12">
                <v-text-field
                  disabled
                  label="מספר עובד"
                  type="number"
                  v-mask="'########'"
                  :value="details.employeeId"
                ></v-text-field>
              </v-col>
              <v-col xs="12" md="4" sm="6">
                <v-text-field disabled label="שם פרטי" type="text" :value="details.firstName"></v-text-field>
              </v-col>
              <v-col xs="12" md="4" sm="6">
                <v-text-field disabled label="שם משפחה" type="text" :value="details.lastName"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col xs="12" md="4" sm="6">
                <v-text-field disabled label="עיר" type="text" :value="details.city"></v-text-field>
              </v-col>
              <v-col xs="12" md="4" sm="6">
                <v-text-field disabled label="רחוב" type="text" :value="details.city"></v-text-field>
              </v-col>
              <v-col xs="12" md="4" sm="6">
                <v-text-field disabled label="מספר בית" type="text" :value="details.address"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mb-12 pa-5">
              <v-col xs="12" md="4" sm="6" class="mx-auto">
                <v-text-field disabled label="תיאור תפקיד" type="text" :value="details.role"></v-text-field>
              </v-col>
              <v-col xs="12" md="4" sm="6" class="mx-auto">
                <v-text-field disabled label="מחלקה" type="text" :value="details.class"></v-text-field>
              </v-col>
              <v-col xs="12" md="3" sm="6" class="mx-auto">
                <div class="d-flex">
                  <v-text-field
                    label="מספר טלפון"
                    :disabled="!isEditable"
                    v-mask="'###-#######'"
                    type="text"
                    v-model="phoneNumber"
                    @focus="alert =true"
                  ></v-text-field>
                  <v-icon @click="isEditable = !isEditable">mdi-pencil-outline</v-icon>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mx-auto" cols="12" xs="12" md="10" sm="12">
                <v-textarea
                  solo
                  label="תוכן ההודעה"
                  auto-grow
                  counter
                  :rules="rules"
                  v-model="messageText"
                  :maxlength="max"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-center">
                <v-btn @click.prevent="backToHomePage" dark color="red lighten-1" class="mx-3">
                  חזור
                  <v-icon class="pr-2">mdi-arrow-right-circle</v-icon>
                </v-btn>
                <v-btn @click.prevent="sendSms" dark color="blue darken-2" class="mx-3">
                  שלח
                  <v-icon class="pr-2">mdi-checkbox-marked-circle</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
          <div style="height:50px">
            <transition
              v-if="details.responseMessage.status"
              appear
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
              mode="out-in"
            >
              <v-alert :type="details.responseMessage.status">{{details.responseMessage.message}}</v-alert>
            </transition>
          </div>
        </v-card-text>
      </v-card>

      <v-overlay :value="details.isLoading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Sms",
  data() {
    return {
      messageText: "",
      isEditable: false,
      phoneNumber: "",
      rules: [v => v.length <= 255 || "ניתן להזין עד 255 תווים."],
      max: 255,
      alert: false
    };
  },
  created() {
    this.phoneNumber = this.$store.state.phoneNumber;
  },

  computed: {
    details() {
      return this.$store.getters.getDetails;
    }
  },
  methods: {
    sendSms() {
      this.$store.dispatch("sendSms", {
        phoneNumber: this.phoneNumber,
        message: this.messageText
      });
    },
    backToHomePage() {
      this.$router.replace("/");
    }
  }
};
</script>

<style scoped>
img {
  padding: 1px;
  height: 100%;
  border-radius: 25px;
}
</style>