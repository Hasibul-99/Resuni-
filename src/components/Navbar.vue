<template>
    <div>
        <v-toolbar
            dark
            prominent
            src="../assets/images/backgrounds/background.jpg"
            width= 100%;
            height= 370px;
            >

            <div class="flex-grow-1"></div>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" app class="padless menu-wrap1">
            <v-card
                max-height="240"
                class="mx-auto">
                <v-img
                    class="white--text"
                    height="240px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    > </v-img>
                <v-list disabled>
                    
                <v-list-item v-for="(item, i) in items" :key="i" >
                    <v-list-item-icon> <v-icon v-text="item.icon"></v-icon> </v-list-item-icon>
                    <v-list-item-content> <v-list-item-title v-text="item.text"></v-list-item-title> </v-list-item-content>
                </v-list-item>
                </v-list>
                
            </v-card>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    props: ['drawer'],
    data() {
        return {
            items: [
                {icon: "mdi-account", text: "Home"},
                {icon: "mdi-arrow-left-right", text: "ABOUT"},
                {icon: "mdi-layers", text: "EDUCATION"},
                {icon: "mdi-chart-bar", text: "SKILLS"},
                {icon: "mdi-castle ", text: "EXPERIENCE"},
                {icon: "mdi-google-podcast", text: "PORTFOLLIOS"},
                {icon: "mdi-bottle-tonic-outline", text: "INTEREST"},
                {icon: "mdi-arrow-expand-right", text: "TESTIMONIALS"},
                {icon: "mdi-arrow-left-right-bold-outline", text: "PRICING"},
                {icon: "mdi-arrow-left-box", text: "BLOG"},
                {icon: "mdi-arrow-up-bold-circle-outline", text: "CONTACT"},
            ]
        }
    },
    methods: {
    }
};
</script>