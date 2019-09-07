<template>
    <div id="js-blog" class="section-container section interest">
         <v-container class="">
             <div class="section-title text-center mb-10">
                <img src="../assets/images/icons/post-it.png" width="50">
                <span class="section-text-title"> BLOG </span>
             </div>
            <v-card class="blog-card">
                <v-container class="blog-content">
                    <v-row class=" blog odd">
                        <v-col class="xs-12 md-6 sm-12 lg-6 xl-6 image pa-0">
                            <img alt="blog-image float-left" width="450" src="../assets/images/blog/blog-2.png">
                            <div class="image-overlay text-right wow slideInLeft">
                                <div class="comments">
                                    <i class="fa fa-user"></i> John Doe
                                    <i class="fa fa-clock-o"></i>
                                    <time datetime="2045-08-16">August 7, 2020</time>
                                    <i class="fa fa-comments"></i> 168
                                </div>
                            </div>
                        </v-col>
                        <v-col class="xs-12 md-6 sm-12 lg-6 xl-6 content-blog pa-10">
                            <ol class="breadcrumb">
                                <li><a href="#">Frontend</a></li>/
                                <li><a href="#">Design</a></li>/
                                <li class="active">Material</li>
                            </ol>
                            <h3>Material Design</h3>
                            <p>
                                Web design encompasses many different skills and disciplines in the production
                                of websites.Web design include web graphic design, interface design etc.
                            </p>
                            <a class="forward" href="single-blog.html">Read More</a>
                        </v-col>
                    </v-row>
                </v-container>
                <v-container class="blog-content text-right">
                    <v-row class="blog odd">
                        <v-col class="xs-12 md-6 sm-12 lg-6 xl-6 content-blog pa-10">
                            <ol class="breadcrumb">
                                <li><a href="#">Frontend</a></li>/
                                <li><a href="#">Design</a></li>/
                                <li class="active">Material</li>
                            </ol>
                            <h3>Material Design</h3>
                            <p>
                                Web design encompasses many different skills and disciplines in the production
                                of websites.Web design include web graphic design, interface design etc.
                            </p>
                            <a class="forward" href="single-blog.html">Read More</a>
                        </v-col>

                        <v-col class="xs-12 md-6 sm-12 lg-6 xl-6 image pa-0">
                            <img alt="blog-image float-left" width="450" src="../assets/images/blog/blog-2.png">
                            <div class="image-overlay text-right">
                                <div class="comments">
                                    <i class="fa fa-user"></i> John Doe
                                    <i class="fa fa-clock-o"></i>
                                    <time datetime="2045-08-16">August 7, 2020</time>
                                    <i class="fa fa-comments"></i> 168
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container> 
            </v-card>
         </v-container>
    </div>

</template>
<script>
export default {
    
}
</script>