<template>
  <!-- Pie de Pagina (Footer) -->

  <div>
    <div class="mt-5 d-flex justify-content-center">
      <!--Twitter-->
      <a
        class="btn bg-twitter"
        href="https://twitter.com/dacazabat"
        target="_blank"
      >
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'twitter' }"
          size="2x"
        />
      </a>
      <!-- Facebook -->
      <a
        class="btn bg-facebook"
        href="https://www.facebook.com/DanielCazabat/"
        target="_blank"
      >
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'facebook' }"
          size="2x"
        />
      </a>
      <!-- Instragam -->
      <a
        class="btn bg-instagram"
        href="https://www.instagram.com/daniel_cazabat/"
        target="_blank"
      >
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'instagram' }"
          size="2x"
        />
      </a>
      <!-- LinkedIn -->
      <a
        class="btn bg-linkedin"
        href="https://www.linkedin.com/in/daniel-cazabat-92223114b/"
        target="_blank"
      >
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'linkedin' }"
          size="2x"
        />
      </a>
      <!-- Gmail -->
      <a
        class="btn bg-google"
        href="mailto:dacazabat@gmail.com"
        target="_blank"
      >
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'google' }"
          size="2x"
        />
      </a>
      <!-- GitHub -->
      <a
        class="btn bg-github"
        href="https://github.com/dcazabat"
        target="_blank"
      >
        <font-awesome-icon
          :icon="{ prefix: 'fab', iconName: 'github' }"
          size="2x"
        />
      </a>
    </div>
    <div class="col mt-4 d-flex justify-content-center">
      <div class="row">
        <p class="copy">Daniel Cazabat // Jorge Sardon</p>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <p class="copy">
        <font-awesome-icon
          class="mr-2"
          :icon="{ prefix: 'fas', iconName: 'copyright' }"
          size="1x"
        />
        2021
      </p>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCopyright,
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGoogle,
  faGithub
);

export default {
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style>
a {
  margin-right: 10px;
}
a.bg-facebook {
  background-color: #3b5998;
}
a.bg-linkedin {
  background-color: #2867b2;
}
a.bg-github {
  background-color: #e8eaea;
}
a.bg-instagram {
  background-color: #f56040;
}
a.bg-twitter {
  background-color: #00acee;
}
a.bg-google {
  background-color: #db4437;
}
.copy {
  text-transform: uppercase;
  background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 20px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>