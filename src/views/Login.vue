<template>
  <div>
    <v-container>
      <v-row class="justify-center " align="center">
        <v-card style="width: 400px;">
          <v-img
            class="white--text align-end"
            src="@/assets/login.jpeg"
            height="200"
          >
            <v-card-text class="font-weight-black display-2">
              Login
            </v-card-text>
          </v-img>
          <v-card-text>
            <v-form @submit.prevent="submit">
              <!-- username -->
              <v-text-field
                name="username"
                label="Username"
                id="username"
                v-model="acount.username"
                :rules="usernameRule" 
              />
              <!-- Password -->
              <v-text-field
                name="password"
                label="Password"
                id="password"
                :append-icon="isShowPassword ? 'visibility' : 'visibility_off'"
                :type="isShowPassword ? 'text' : 'password'"
                @click:append="isShowPassword = !isShowPassword"
                counter
                v-model="acount.password"
                :rules="passwordRule"
              />

              <v-row class="justify-space-between px-3 py-5">
                <v-btn
                  outlined
                  color="indigo"
                  @click.prevent="$router.push('/register')"
                >
                  Register
                </v-btn>
                <v-btn outlined color="success" type="submit">
                  Login
                </v-btn>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      isShowPassword: false,
      acount: {
        username: "",
        password: "",
      },
      usernameRule: [(v1) => !!v1 || "Username is emty"], //varidate data
      passwordRule: [(v1) => !!v1 || "Password is emty"],
    };
  },

  methods: {
    submit() {
      this.$router.push("/stock");
      this.$store.dispatch({
        type: "doLogin", // ຊື່ Method ຢູ່ທີ່ vuex
        username: this.acount.username, // ສົ່ງຄ່າໃຫ້ VueX
        password: this.acount.password, // ສົ່ງຄ່າໃຫ້ VueX
      });
    },
  },
};
</script>

<style></style>
