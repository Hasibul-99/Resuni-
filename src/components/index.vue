<template>
  <div class="main-body">
    <v-app-bar-nav-icon
      @click="showSidebar"
      v-if="!drawer"
      app
      class="menu-wrap"
    ></v-app-bar-nav-icon>
    <v-icon
      @click="showSidebar"
      v-else
      class="menu-wrap"
      :class="{ 'open-drawer-button': drawer }"
      >mdi-close</v-icon
    >

    <Navbar :drawer="drawer"></Navbar>
    <Home :home="info.home"></Home>
    <ProfileCard :home="info.home"></ProfileCard>
    <Experience></Experience>
    <Skills></Skills>
    <Education></Education>
    <Interest></Interest>
    <Testimonial></Testimonial>
    <Blog></Blog>
    <Contact></Contact>
  </div>
</template>

<script>
import Home from "./Home";
import ProfileCard from "./Profile-card";
import Navbar from "./Navbar";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Interest from "./Interest";
import Testimonial from "./Testimonials";
import Blog from "./Blog";
import Contact from "./Contact";

import { getData } from "../scripts/api-service.js";

export default {
  data() {
    return {
      drawer: false,
      info: null
    };
  },
  components: {
    Home,
    ProfileCard,
    Navbar,
    Education,
    Skills,
    Experience,
    Interest,
    Testimonial,
    Blog,
    Contact,
  },
  methods: {
    showSidebar() {
      this.drawer = !this.drawer;
    },

    async getInfo() {
      let res = await getData();
        
      if (res) {
        let masterData = res.data;
        this.info = masterData;
      }
    },
  },
  mounted() {
    this.getInfo();
  }
};
</script>
