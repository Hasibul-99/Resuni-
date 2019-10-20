<template>
  <v-col class="xs-12 md-6 sm-12 lg-6 xl-6 blog-item">
    <v-hover v-slot:default="{ hover }">
      <v-card class="blog-item-card mx-auto">
        <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/cards/kitchen.png">
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out java darken-2 v-card--reveal display-3 white--text"
              style="height: 100%;"
            >09.09.2018</div>
          </v-expand-transition>
        </v-img>
        <v-card-text class="pt-6" style="position: relative;">
          <v-btn absolute color="java" class="white--text" fab large right top>
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
          <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
          <h3 class="display-1 font-weight-light java--text mb-2">QW cooking utensils</h3>
          <div class="font-weight-light title mb-2">
            Our Vintage kitchen utensils delight any chef.
            <br />Made of bamboo by hand
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  props: ["blogId"],
  data() {
      console.log("blog.id", this.blogId);
    return {
      
    };
  }
};
</script>