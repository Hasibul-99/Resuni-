<template>
    <div class="section-container section">
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
                    <v-card
                        :color="item.color"
                        dark
                    >
                        <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
                        <v-card-text class="white text--primary">
                        <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
                        <v-btn
                            :color="item.color"
                            class="mx-0"
                            outlined
                        >
                            Button
                        </v-btn>
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
                {icon: "mdi-school", text: "Home", color: "#06A763"},
                {icon: "mdi-alpha-b", text: "ABOUT", color: "#06A763"},
                {icon: "mdi-alpha-c", text: "EDUCATION", color: "#06A763"},
                {icon: "mdi-alpha-s", text: "SKILLS", color: "#06A763"},
            ]
        }
    },
}
</script>