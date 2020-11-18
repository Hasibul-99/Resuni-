<template>
    <div id="js-experiance" class="section-container section">
         <v-container class="">
             <div class="section-title text-center mb-10">
                <img src="../assets/images/icons/layers.png" width="50">
                <span class="section-text-title"> EXPERIENCE </span>
             </div>

            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item
                v-for="(item, i) in items"
                :key="i"
                :color="item.color"
                :icon="item.icon"
                fill-dot
                >
                    <v-card :color="item.color" dark >
                        <v-card-title class="title d-block">
                            {{item.office}} (<small>{{item.address}}</small>)
                            <br>
                            <small>{{item.position}}</small>
                            <br>
                            <small>{{item.workTime}}</small>
                        </v-card-title>
                        <v-card-text class="white text--primary pa-6">
                            <p>{{item.text}}</p>
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
         </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {icon: "4", office: "SSL Wireless", address: "New Eskaton Road, Dhaka", workTime:"Sep 2020 – Present",
                    position: "Associate Software Engineer",
                    text: "Contribute to the development team as a front-end developer. I have developed a BTRC SMS portal on React.js,  SSL chatbot on vanilla JavaScript.", color: "#06A763"},
                {icon: "3", office: "10 Minute School", address: "Mohakhali DOHS, Dhaka", workTime:"Nov 2020 – Sep 2020",
                    position: "Frontend Angular Developer",
                    text: "Contribute developer team as frontend developer, Develop CMS dashboard on Angular 8, develop E-training solution website on Angular 8 and develop 10Minuteschool website and CMS on Angular 9.", color: "#06A763"},
                {icon: "2", office: "Cystem Arts", address: "Adabor, Mohammadpur, Dhaka", workTime:"Feb 2020 - Jul 2020",
                    position: "Full Stack Web Developer (Part time)",
                    text: "Contribute developer team as remote fuklstack web developer.", color: "#06A763"},
                {icon: "1", office: "Regfire Solution LTD", address: "Mirpur DOHS, Dhaka", workTime:"Nov 2017 – Oct 2019",
                    position: "Full Stack Web Developer", 
                    text: "Meteor developer team as a junior developer to develop web applications, React development team as a developer and GraphQL developer team as a developer.", color: "#06A763"},
            ]
        }
    },
}
</script>