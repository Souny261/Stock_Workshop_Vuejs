<template>
  <v-navigation-drawer app permanent>
    <router-link to="/">
      <v-img src="@/assets/logo-banner.png" alt="" width="100%" height="160" />
    </router-link>
    <v-divider class="green darken-3"> </v-divider>
    <v-list shaped>
      <v-list-item-group v-model="selectMenu" mandatory color="green darken-3">
        <v-list-item
          v-for="([icon, text, route], i) in menus"
          :key="i"
          link
          @click="onClickMenu(route)"
        >
          <v-list-item-icon>
            <v-icon> {{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            {{ text }}
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      selectMenu: 0,
      menus: [
        ["dashboard", "Stock", "/stock"],
        ["analytics", "Report", "/report"],

        ["supervised_user_circle", "About", "/about"],
      ],
    };
  },
  methods: {
    onClickMenu(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style></style>
