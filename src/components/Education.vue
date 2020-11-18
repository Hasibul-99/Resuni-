<template>
    <div id="js-education" class="section-container section">
         <v-container class="">
             <div class="section-title text-center mb-10">
                <img src="../assets/images/icons/book.png" width="50">
                <span class="section-text-title"> EDUCATION </span>
             </div>

            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item
                v-for="(item, i) in items"
                :key="i"
                :color="item.color"
                :icon="item.icon"
                fill-dot
                >
                    <v-card :color="item.color" dark>
                        <v-card-title class="title">{{item.text}}</v-card-title>
                        <v-card-text class="white text--primary pa-5">
                            <h4>{{item.school}} ({{item.section}})</h4>
                            <h4>{{item.department}}</h4>
                            <!-- <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p> -->
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
                {icon: "mdi-alpha-m", text: "Master of Science (M.Sc.)", color: "#06A763", 
                    department: "In Institute of Information Technology", school: "Jahangirnagar University", section: "Sep 2018 - Present"},
                {icon: "mdi-alpha-b", text: "Bachelor of Science (B.Sc.)", color: "#06A763",
                    department: "In Computer Science & Engineering", school: "University of Asia Pacific", section: "Apr 2013 – Apr 2017"},
                {icon: "mdi-alpha-h", text: "Higher Secondary Certificate (HSC)", color: "#06A763",
                    department: "Group: Science", school: "Hamidpur Al Hera Degree College, Jessore", section: "2011 - 2012"},
                {icon: "mdi-alpha-s", text: "Secondary School Certificate (SSC)", color: "#06A763",
                    department: "Group: Science", school: "Rifle’s School, Jessore", section: "2009 – 2010"},
            ]
        }
    },
}
</script>