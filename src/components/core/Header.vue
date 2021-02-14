<template>
  <div>
    <v-app-bar app color="green darken-3" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>POS Workshop V {{ version }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <span>
        {{ $store.getters["username"] | capitalize }}
      </span>
      <v-btn icon>
        <v-icon @click="logout">exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    version() {
      return "1.0.0";
    },
  },
  methods: {
    logout() {
      this.$store.dispatch({
        type: "doLogout",
      });
    },
  },
};
</script>

<style></style>
