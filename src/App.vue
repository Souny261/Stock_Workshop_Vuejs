<template>
  <v-app> <Header  v-if="$store.state.isLogged" /> <Menu  v-if="$store.state.isLogged" /> <Content  /> </v-app>
</template>
<script>
import Header from "../src/components/core/Header";
import Menu from "../src/components/core/Menu";
import Content from "../src/components/core/Content";
export default {
  components: {
    Header,
    Menu,
    Content,
  },
    mounted() {
    this.$store.dispatch({
      type: "restoreLogin",
    });
  },
};
</script>

<style></style>
