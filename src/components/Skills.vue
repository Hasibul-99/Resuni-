<template>
   <div id="js-skills" class="section-container skills section">
        <v-container class="">
             <div class="section-title text-center mb-10">
                <img src="../assets/images/icons/mixer.png" width="50">
                <span class="section-text-title"> SKILLS </span>
             </div>

             <div class="skills-tab">
                <v-card class="skills-card">
                    <v-container class="pa-10">
                        <v-row class="mb-6 skills-row">
                            <v-col v-for="i in 15" :key="i" class="skills-type" sm="12" md="3" xs="12">
                                <div class="container skills-container">
                                    <div class="avatar">
                                        <a href="#!">
                                            <img src="/img/Javascript-shield.svg"  alt="Skytsunami" />
                                        </a>
                                    </div>
                                </div>
                            </v-col>

                            <v-col class="skills-type" sm="12" md="3" xs="12">
                                
                                <div class="container skills-container">
                                    <div class="avatar">
                                        <a href="#!">
                                            <img src="/img/Javascript-shield.svg"  alt="Skytsunami" />
                                        </a>
                                    </div>
                                </div>
                            </v-col>

                            <v-col class="skills-type" sm="12" md="3" xs="12">
                                <div class="container skills-container">
                                    <div class="avatar">
                                        <a href="#!">
                                            <img src="/img/Javascript-shield.svg"  alt="Skytsunami" />
                                        </a>
                                    </div>
                                </div>
                            </v-col>

                            <v-col class="skills-type" sm="12" md="3" xs="12">
                                <div class="container skills-container">
                                    <div class="avatar">
                                        <a href="#!">
                                            <img src="/img/Javascript-shield.svg"  alt="Skytsunami" />
                                        </a>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>

                </v-card>
             </div>
        </v-container>     
    </div> 
</template>
<script>
export default {
    
}
</script>