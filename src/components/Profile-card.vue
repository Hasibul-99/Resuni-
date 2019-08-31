<template>
    <div class="profile-card">
        <div class="mx-auto profile-card-body theme--light"
        >
        <v-container class="">
            <v-row class="mb-6">
                <v-col sm="12" md=12 xl="12">
                    <v-card class="main-profile-card">
                        <v-list-item-content class="align-self-start profile-text-info">
                            <div class="info-header">
                                <v-list-item-title class="headline mb-2" >HASIBUL HASAN</v-list-item-title>
                                <v-list-item-subtitle >Software Developer</v-list-item-subtitle>
                            </div>
                            <v-list-item v-for="(item, i) in infos" :key="i" >
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-content>
                    
                        <div class="profile-image-right">
                            <v-img class="white--text"
                                height="auto"
                                width="400px"
                                src="../assets/images/profile/profile.png"
                                > </v-img>
                            <div class="slant"></div>
                        </div>

                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            infos: [
                {icon: "mdi-email", text: 'hasibul_uap@outlook.com'},
                {icon: "mdi-earth", text: 'ww.com'},
                {icon: "mdi-skype", text: 'tusher_999'},
                {icon: "mdi-phone", text: '01683902204'},
                {icon: "mdi-map-marker", text: 'Dhaka, Bangldesh'},
            ]
        }
    },
}
</script>