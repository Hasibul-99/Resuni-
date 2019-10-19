<template>
    <div id="js-contact" class="section-container section interest">
        <v-container>
            <div class="section-title text-center mb-10">
                <img src="../assets/images/icons/envelope.png" width="50">
                <span class="section-text-title"> CONTACT </span>
            </div>
        </v-container>

        <v-container>
            <v-row>
                <v-col class="xs-12 sm-12 md-5 lg-5 xl-5">
                    <v-card>
                        <v-content class="pa-0">
                            <v-form class="pa-10" ref="form">
                                <v-text-field label="Name" v-model="name" :rules="nameInputRules"></v-text-field>
                                <v-text-field label="Subject" v-model="subject" :rules="subjectInputRules"></v-text-field>
                                <v-text-field label="Email" v-model="email" :rules="emailInputRules"></v-text-field>
                                <v-textarea label="Message" v-model="message" :rules="messageInputRules"
                                :auto-grow="autoGrow" :loading="loading"></v-textarea>
                                <v-btn class="success mx-0 mt-3" @click="submit">SEND</v-btn>
                            </v-form>
                        </v-content>
                    </v-card>
                </v-col>
                <v-col class="xs-12 sm-12 md-7 lg-7 xl-7">
                    <div >
                        <GmapMap
                            :center="center"
                            :zoom="15"
                            map-type-id="terrain"
                            class="google-map-style"
                            >
                            <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position"
                                :clickable="true"
                                :draggable="true"
                                @click="center=m.position"
                            />
                        </GmapMap>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
//  style="width: 500px; height: 500px"
<script>
    export default {
        data: () => ({
            autoGrow: true,
            loading: true,
            name: "",
            subject: "",
            email: "",
            message: "",
            nameInputRules: [
                v => v && v.length >= 5 || "Minimum length is 5 characters"
            ],
            subjectInputRules: [
                v => v && v.length >= 10 || "Minimum length is 10 characters"
            ],
            messageInputRules: [
                v => v && v.length >= 20 || "Minimum length is 20 characters"
            ],
            emailInputRules: [
                v => { 
                    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

                    if(v.match(mailformat)) {
                        return true;
                    }else{
                        return "You have entered an invalid email address!";
                    }
                } 
            ],
            center: {lat: 23.7733, lng: 90.3548},
            markers: [
                {
                    position: {lat: 23.7733, lng: 90.3548}
                }
            ]
        }),
        methods: {
            submit () {
                if (this.$refs.form.validate()) {
                     console.log("name1", this.name);
                }
            }
        },
        mounted () {
            // At this point, the child GmapMap has been mounted, but
            // its map has not been initialized.
            // Therefore we need to write mapRef.$mapPromise.then(() => ...)
        
            // this.$refs.mapRef.$mapPromise.then((map) => {
            //     map.panTo({lat: 1.38, lng: 103.80})
            // })
        }
    }
</script>