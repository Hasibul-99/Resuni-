<template>
  <div class="profile-card">
    <div class="mx-auto profile-card-body theme--light section">
      <v-container class>
        <v-row class="mb-6">
          <v-col sm="12" md="12" xl="12">
            <v-card class="main-profile-card">
              <v-list-item-content class="align-self-start profile-text-info">
                <div class="info-header white--text">
                  <v-list-item-title class="headline mb-2">HASIBUL HASAN</v-list-item-title>
                  <v-list-item-subtitle>Software Developer</v-list-item-subtitle>
                </div>
                <v-list-item v-for="(item, i) in infos" :key="i" class="profile-infos">
                  <v-list-item-icon class="profile-info-icon">
                    <v-icon class="white--text" v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content class="profile-info-text">
                    <v-list-item-title class="white--text" v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <div class="d-flex social-network-link">
                  <v-list-item v-for="(item, i) in socialNetworkLinks" :key="i">
                    <a href class="social btn-floating" :class="item.className">
                      <v-icon class="white--text social-icon" v-text="item.icon"></v-icon>
                    </a>
                  </v-list-item>
                  <!-- <div class="mx-2" v-for="(item, i) in socialNetworkLinks" :key="i">
                                        <v-btn :class="item.className" fab small dark>
                                            <v-icon v-text="item.icon"></v-icon>
                                        </v-btn>
                  </div>-->
                </div>
              </v-list-item-content>

              <div class="profile-image-right">
                <v-img
                  class="white--text"
                  height="auto"
                  width="400px"
                  src="../assets/images/profile/image.jpg"
                ></v-img>
                <div class="slant"></div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div id="js-about" class="mx-auto theme--light section">
      <v-container class>
        <v-card class="about-details">
          <v-card-text>
            Hello! I’m John Doe. Senior Web Developer with over 13 years of experience
            specializing in front end development. Experienced with all stages of the
            development cycle for dynamic web projects.Having an in-depth knowledge
            including advanced HTML5, CSS, CSS3, SASS, LESS, JSON, XML, Java, JavaScript,
            JQuery, Angular JS. Strong background in management and leadership.
          </v-card-text>
          <v-card-actions>
            <div class="text-center d-flex ml-auto mr-auto">
              <div class="mr-2">
                <v-btn color="warning" dark>DOWNDOAD CV</v-btn>
              </div>
              <div class="mr-2" @click="moveToContact">
                <v-btn color="warning" dark>CONTACT ME</v-btn>
              </div>
            </div>
          </v-card-actions>
        </v-card>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      infos: [
        { icon: "mdi-email", text: "hasibul_uap@outlook.com" },
        // {icon: "mdi-earth", text: "ww.com"},
        { icon: "mdi-skype", text: "tusher_999" },
        { icon: "mdi-phone", text: "+880 1683902204" },
        { icon: "mdi-map-marker", text: "Dhaka, Bangldesh" }
      ],
      socialNetworkLinks: [
        { icon: "mdi-facebook", link: "#", className: "indigo" },
        { icon: "mdi-linkedin", link: "#", className: "blue darken-3" },
        { icon: "mdi-instagram", link: "#", className: "purple lighten-1" },
        // {icon: "mdi-twitter", link: "#", className: "blue"},
        { icon: "mdi-git", link: "#", className: "red darken-1" },
        { icon: "mdi-stack-overflow", link: "#", className: "amber darken-3" }
      ]
    };
  },
  methods: {
    moveToContact() {
      let id = document.getElementById("js-contact"),
        position = id.offsetTop;

      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: position
      });
    }
  }
};
</script>