<template>
  <div class="container about-container">
        <div class="heading">
            <h1 class="page-heading text--largest">About</h1>
            <div class="underline"></div>
        </div>

        <!-- Me -->
        <img class="profile-pic" src="/me.jpg" alt="Curly headed man wearing sun glasses standing on Brooklyn Bridge" />

        <!-- Day Job -->
        <div class="content-block">
            <h2 class="page-heading text--large"> The short story </h2>

            <div class="para-container">
                <p>
                    My name is Cormac McCann, I'm a 26 year old web developer from Dublin Ireland. I have
                    over five years of experience developing first class web applications. My main skill set revolves around
                     HTML, CSS and JavaScript. Right now my primary focus is Vue JS.
                </p>
            </div>
        </div>

        <!-- Day Job -->
        <div class="content-block">
            <h2 class="page-heading text--large"> My day job </h2>

            <div class="para-container">
                <p>
                    For the past two years I’ve been a frontend engineer working with Sylon in Dublin,
                    Ireland. My main focus within Sylon is building out an online platform to facilitate corporate innovation,
                    But I also devote some of my time to improving frontend process and managing the internal frontend
                    Communities or Practice (CoP).
                </p>
            </div>
        </div>

        <!-- Spare Time -->
        <div class="content-block">
            <h2 class="page-heading text--large">My spare time</h2>

            <div class="para-container">
                <p>
                  Outside of web development I try to keep myself busy with a bunch of hobbies.
                  I have recently started tinkering with small robotics projects, inspired mainly by youtube channels like Mark Rober, Adam savage etc.
                </p>

                <p>
                  I love music, I play the guitar and collect records! This is kind of a problem as my partner and I have officially reached max record capacity in our tiny apartment.
                </p>

                <p>
                  When I'm feeling really lazy I love nothing more than planting myself on the couch and loading up a good movie or TV show (Currently watching: WandaVision on Disney+).
                </p>

            </div>
        </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'About | Cormac McCann',
      link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-red.png' }
      ]
    };
  },
}
</script>

<style>
.profile-pic {
  height: auto;
  width: 100%;
}
</style>
