<template>
    <div>
        <div class="back-button"><span><i class="fa fa-angle-double-left"></i></span></div>
        <div class="single-background"></div>

        <section class="single-page">
            <div class="container">
                <!--SECTION TITLE-->
                <div class="section-title">
                    <h4 class="text-uppercase text-center"><img src="images/icons/safe.png" alt="demo">Portfolios</h4>
                </div>
                <!--PORTFOLIO HOLDER-->
                <div class="row" id="primary">
                    <!--PORTFOLIO CONTENT-->
                    <div id="content" class="col-sm-12">
                        <div class="post card">
                            <!--PORTFOLIO IMAGE SLIDER-->
                            <div class="post-image">

                                <!-- SLIDER STRUCTURE -->
                                <div id="clients-slider"
                                    class="swiper-container swiper-container-portfolios">
                                    <div class="swiper-wrapper">
                                        <!-- SLIDE ONE -->
                                        <div class="swiper-slide">
                                            <img class="img-responsive" alt="demo" src="images/portfolio-single/single-1.jpg">
                                        </div>

                                        <!-- SLIDE TWO -->
                                        <div class="swiper-slide">
                                            <img class="img-responsive" alt="demo" src="images/portfolio-single/single-2.jpg">
                                        </div>

                                        <!-- SLIDE THREE -->
                                        <div class="swiper-slide">
                                            <img class="img-responsive" alt="demo" src="images/portfolio-single/single-3.jpg">
                                        </div>
                                    </div>
                                    <!-- ADD PAGINATION -->
                                    <div class="swiper-pagination swiper-pagination-portfolios"></div>
                                </div>

                            </div>

                            <!--PORTFOLIO TITLE AND DETAILS-->
                            <header>
                                <h2>Portfolio title here
                                    <time datetime="2045-08-16">August 16,2045</time>
                                </h2>
                                <hr>
                                <div class="project-detail">
                                    <p><strong>Client :</strong>Company Inc.</p>
                                    <p><strong>Delivered :</strong>28 September, 2015</p>
                                    <p><strong>Link :</strong><a href="#">companysite.com</a>
                                    </p>
                                    <p><strong>Type :</strong>Redesign, Branding, Website</p>
                                </div>
                            </header>
                            <!--BODY-->
                            <div class="post-body">
                                <h3>Project Details</h3>
                                <p>Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing
                                    elit. Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor.
                                    Aenean
                                    lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur.
                                    Curabitur
                                    blandit tempus porttitor.</p>

                                <h3>Feedback</h3>
                                <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis
                                    natoque
                                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac
                                    consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur.
                                </p>
                                <div class="client-info">
                                    <p>Mike Henry</p>
                                    <p>CEO</p>
                                    <p>MicroTech IT</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>