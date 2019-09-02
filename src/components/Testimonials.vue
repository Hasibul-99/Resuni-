<template>
    <div class="section-container section interest">
         <v-container class="">
             <div class="section-title text-center mb-10">
                <img src="../assets/images/icons/handshake.png" width="50">
                <span class="section-text-title"> TESTIMONIALS </span>
             </div>

             <v-card class="testimonial-card-slider mx-auto" elevation="24" max-width="950">
                <!-- <v-system-bar lights-out></v-system-bar> -->
                <v-carousel :continuous="false" :cycle="cycle" :show-arrows="false" 
                hide-delimiter-background delimiter-icon="mdi-minus" height="400" >
                    <v-carousel-item>
                        <v-sheet color="#06A763" height="100%" tile>
                            <v-row class="fill-height text-center pa-10" align="center" justify="center">
                                <img class="clint-image mb-6" src="../assets/images/clients/client-1.png" width="120" height="120">
                                <p>I work with John on several web development projects and
                                     I find him to be extremely creative and a technical Front End Developer.
                                      Jone expertise involves building  complex Responsive Design layouts using HTML
                                       5, CSS3, and JavaScript.</p>
                                <cite>Mike, CEO, IT World.</cite>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-sheet color="#06A763" height="100%" tile>
                            <v-row class="fill-height text-center pa-10" align="center" justify="center">
                                <img class="clint-image mb-6" src="../assets/images/clients/client-2.png" width="120" height="120">
                                <p>I work with John on several web development projects and
                                     I find him to be extremely creative and a technical Front End Developer.
                                      Jone expertise involves building  complex Responsive Design layouts using HTML
                                       5, CSS3, and JavaScript.</p>
                                <cite>Mike, CEO, IT World.</cite>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-sheet color="#06A763" height="100%" tile>
                            <v-row class="fill-height text-center pa-10" align="center" justify="center">
                                <img class="clint-image mb-6" src="../assets/images/clients/client-3.png" width="120" height="120">
                                <p>I work with John on several web development projects and
                                     I find him to be extremely creative and a technical Front End Developer.
                                      Jone expertise involves building  complex Responsive Design layouts using HTML
                                       5, CSS3, and JavaScript.</p>
                                <cite>Mike, CEO, IT World.</cite>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
                <!-- <v-list two-line>
                    <v-list-item>
                        <v-list-item-avatar>
                        <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                        <v-list-item-title>John Leider</v-list-item-title>
                        <v-list-item-subtitle>Author</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                        <v-switch
                            v-model="cycle"
                            label="Cycle Slides"
                            inset
                        ></v-switch>
                        </v-list-item-action>
                    </v-list-item>
                </v-list> -->
            </v-card>
            
         </v-container>
    </div>
</template>

<script>
  export default {
    data () {
      return {
          colors: [
          'green',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
        ],
        cycle: true,
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        testimonials: [
          {image: "../assets/images/clients/client-1.png",
           text: " I work with John on several web development projects and I find him to be extremely creative and a technical Front End Developer. Jone expertise involves building  complex Responsive Design layouts using HTML 5, CSS3, and JavaScript.",
           name: "Mike, CEO, IT World."
           },
           {image: "../assets/images/clients/client-2.png",
           text: " I work with John on several web development projects and I find him to be extremely creative and a technical Front End Developer. Jone expertise involves building  complex Responsive Design layouts using HTML 5, CSS3, and JavaScript.",
           name: "Mike, CEO, IT World."
           },
           {image: "../assets/images/clients/client-3.png",
           text: " I work with John on several web development projects and I find him to be extremely creative and a technical Front End Developer. Jone expertise involves building  complex Responsive Design layouts using HTML 5, CSS3, and JavaScript.",
           name: "Mike, CEO, IT World."
           }
        ],
      }
    },
  }
</script>
