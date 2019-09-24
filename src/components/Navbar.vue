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
                    src="../assets/images/profile/top.jpg"
                    > </v-img>
                <v-list inactive>
                    <v-list-item v-for="(item, i) in items" :key="i" class="pointer" @click="papsictionChange(item.text)">
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
                {icon: "mdi-account", text: "HOME"},
                {icon: "mdi-av-timer", text: "ABOUT"},
                {icon: "mdi-school", text: "EDUCATION"},
                {icon: "mdi-chart-gantt", text: "SKILLS"},
                {icon: "mdi-briefcase", text: "EXPERIENCE"},
                // {icon: "mdi-google-podcast", text: "PORTFOLLIOS"},
                {icon: "mdi-heart", text: "INTEREST"},
                {icon: "mdi-account-group", text: "TESTIMONIALS"},
                // {icon: "mdi-arrow-left-right-bold-outline", text: "PRICING"},
                {icon: "mdi-lead-pencil", text: "BLOG"},
                {icon: "mdi-email", text: "CONTACT"},
            ]
        }
    },
    methods: {
        papsictionChange(textType) {
            
            if (textType === "HOME") {
                setMovePosition(0, textType);
            } else if (textType === "ABOUT") {
                let id = document.getElementById("js-about"),
                    position = id.offsetTop;

                setMovePosition(position, textType);
            } else if (textType === "EDUCATION") {
                let id = document.getElementById("js-education"),
                    position = id.offsetTop;

                setMovePosition(position, textType);
            } else if (textType === "SKILLS") {
                let id = document.getElementById("js-skills"),
                    position = id.offsetTop;

                setMovePosition(position, textType);
            } else if (textType === "EXPERIENCE") {
                let id = document.getElementById("js-experiance"),
                    position = id.offsetTop;

                setMovePosition(position, textType);
            } else if (textType === "INTEREST") {
                let id = document.getElementById("js-interest"),
                    position = id.offsetTop;

                setMovePosition(position, textType);
            } else if (textType === "TESTIMONIALS") {
                let id = document.getElementById("js-testimonials"),
                    position = id.offsetTop;

                setMovePosition(position, textType);
            } else if (textType === "BLOG") {
                let id = document.getElementById("js-blog"),
                    position = id.offsetTop;

                setMovePosition(position, textType);
            } else if (textType === "CONTACT") {
                let id = document.getElementById("js-contact"),
                    position = id.offsetTop;

                setMovePosition(position, textType);
            }
        }
    }
};

const setMovePosition = function(position, type) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': position
    });
}
</script>