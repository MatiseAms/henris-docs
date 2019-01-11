<template>
  <main>

    <div class="page page--home">
      <header class="home-header">
        <div class="row center">
          <div class="column small-full medium-two-third">
            <div class="row">
              <div class="column small-full">
                <henris-logo color="white"></henris-logo>
                <NavLink
                  class="action-button"
                  :item="actionLink"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div class="page page--content page--home">
      <div class="content default">

        <div
          class="features row small-full medium-third"
          v-if="data.features && data.features.length"
        >
          <div
            class="column"
            v-for="(feature, index) in data.features"
            :key="index"
          >
            <h2>{{ feature.title }}</h2>
            <p>{{ feature.details }}</p>
          </div>
        </div>

      </div>

      <content class="custom" />

      <div
        class="footer page__footer"
        v-if="data.footer"
      >
        <p>{{ data.footer }}</p>
      </div>
    </div>

  </main>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  }
};
</script>

<style lang="scss">
@import "../styles/tools/index";

.page--home {
  .content.default {
    padding: 30px !important;
  }
}
.home-header {
  background-color: color(offWhite);
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .henris-logo {
    width: 110%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .navbar__link {
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 100%;
    background-color: color(Purple);
    color: color(White);
    padding: 0 2rem;
    // border-radius: 1.75rem;
  }
}
.features {
  .column {
    padding: 30px;
  }
}
</style>
