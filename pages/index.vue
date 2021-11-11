<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline"> Please Fill this Form </v-card-title>
        <v-card-text>
          <v-form
            v-model="valid"
            action="/add"
            method="POST"
            @submit.prevent="add"
          >
            <v-container>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    :counter="10"
                    label="First name"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="lastname"
                    :rules="nameRules"
                    :counter="10"
                    label="Last name"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" type="submit" @click.prevent="add()">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card>
        <v-card-title>Data Sent</v-card-title>
        <v-card-text>
          <v-form>
            <v-textarea :value="xml"> </v-textarea>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    xml: "Client: ",
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    add() {
      const qs = require("qs");

      const xmlBodyStr = `<?xml version="1.0" encoding="UTF-8"?><Employee><Name>${this.firstname}${this.lastname}</Name><Email>${this.email}</Email></Employee>`;

      this.$axios
        .post("add", xmlBodyStr, {
          responseType: "text",
          headers: {
            "Content-Type": "text/xml",
          },
        })
        .then((response) => {
          this.xml = xmlBodyStr;
        })
        .catch((e) => {
          console.log("Error: ", e);
        });
    },
  },
};
</script>
