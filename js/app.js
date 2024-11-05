Vue.component("hb", {
  template:
    '<div class="w-5/6 lg:mx-auto border-b border-gray-900 p-4 mb-12"></div>',
});

var app = new Vue({
  el: "#app",
  computed: {
    email: () =>
      "borda.jpablo" + "@" + ["g", "m", "a", "i", "l"].join("") + ".com",
  },
  data: {
    jobs: [
      {
        year: "2019 - Present",
        title: "Senior Full Stack Developer",
        company: "Mindtrust Labs",
        tech: "LAMP Stack, VueJS, React, NextJS, NodeJS, Gridsome, CraftCMS, HTML5/CSS3, WordPress, Builder.io, ",
        projects:
          "Datto.com - Backupify.com - OaklandPromise.org - ScutiRewards.com - Freshpet.com",
      },
      {
        year: "2016 - 2019",
        title: "Senior Web Developer",
        company: "Bioreference Laboratories",
        tech: "LAMP Stack, AngularJS 1.x, VueJS, Laravel 5.x, React, Wordpress, MySQL, Nodejs",
        projects: "GeneDX.com - MyGeneticsTree.com",
      },
      {
        year: "2014 - 2016",
        title: "Senior Web Developer",
        company: "OkMedia",
        tech: "LAMP Stack, AngularJS 1.x , VueJS, Laravel 5.x, WordPress",
      },
      {
        year: "2013 - 2014",
        title: "Web Developer",
        company: "700now",
        tech: "LAMP Stack, AngularJS 1.x, Wordpress",
      },
      {
        year: "2010 - 2013",
        title: "Jr Web Developer",
        company: "Santex",
        tech: "LAMP Stack, Drupal, Wordpress, JavaScript, Nodejs",
        projects:
          "uFoodz, MyWurld, LaIndustria.pe, PrivacyRights.org, OriginDigital NextGenerationPlayer",
      },
    ],
    skills: [
      "HTML5",
      "CSS3",
      "PHP",
      "JavaScript",
      "Laravel",
      "Nodejs",
      "AngularJS 1.x",
      "Vuejs",
      "NextJS",
      "Bootstrap",
      "TailwindCSS",
      "Bulma",
      "Vuetify",
      "WordPress",
      "Drupal 6",
      "CraftCMS 3",
      "GoogleMapsApi",
      "Facebook Api",
      "Twitter API",
      "MySQL",
      "MongoDB",
      "MsSqL",
      "Builder.io",
      "React",
      "pgSQL",
    ],
    edu: [
      {
        year: "2009 - 2011",
        title: "Web Developer",
        at: "Instituto Superior Santo Domingo",
      },
      {
        year: "2007 - 2008",
        title: "Software Engineering",
        at: "Instituto Universatorio Aeronautico",
      },
      {
        year: "2004 - 2006",
        title: "Electricity-Electronics",
        at: "IPEM 247 Ing. Carlos A. Cassaffousth",
      },
    ],
  },
});
