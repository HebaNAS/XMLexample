<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="font-weight-black d-flex justify-center"
      ><h1>XML Example</h1></v-app-bar
    >
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app class="d-flex justify-center">
      <span>Heba El-Shimy &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      title: "XML Example",
    };
  },
};
</script>
