<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        ChallengeApp
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-container>
          <b-navbar-nav>
            <b-nav-item
              ><router-link class="link-router" to="/">Home</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-container>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import appLogo from "../../assets/img/appLogo.png";
export default {
  data() {
    return {
      imgLogo: appLogo,
    };
  },
};
</script>

<style>
.link-router {
  text-decoration: none;
}
</style>
