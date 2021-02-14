<template>
  <div>
    <v-container>
      <v-row>
        <v-col lg="3" md="6" sm="12" cols="12">
          <StockCard
            title="TOTAL"
            subtitle="1.800"
            avatar_bg="green dark"
            avatar_ic="mdi-cart-outline"
          /> </v-col
        ><v-col lg="3" md="6" sm="12" cols="12">
          <StockCard
            title="SOLD-OUT"
            subtitle="12"
            avatar_bg="#f39c12"
            avatar_ic="mdi-flask-empty-outline"
          /> </v-col
        ><v-col lg="3" md="6" sm="12" cols="12">
          <StockCard
            title="RETURN"
            subtitle="2"
            avatar_bg="#dd4b39"
            avatar_ic="mdi-keyboard-return"
          /> </v-col
        ><v-col lg="3" md="6" sm="12" cols="12">
          <StockCard
            title="DISCOUNT"
            subtitle="20"
            avatar_bg="#00c0ef"
            avatar_ic="mdi-gift-outline"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import StockCard from "../components/card/StockCard";
export default {
  name: "Stock",
  components: { StockCard },
};
</script>

<style></style>
