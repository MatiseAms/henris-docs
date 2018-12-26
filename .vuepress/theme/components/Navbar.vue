<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <router-link
      :to="$localePath"
      class="navbar__logo"
    >
      <henris-logo color="black"></henris-logo>
      <span class="navbar__logo-text">
        {{ $siteTitle }}
      </span>
    </router-link>

    <div
      class="navbar__links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >
      <!-- <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"
      /> -->
      <NavLinks class="navbar__links can-hide" />
    </div>
    <SearchBox
      class="navbar__search"
      v-if="$site.themeConfig.search !== false"
    />
  </header>
</template>

<script>
import SidebarButton from "./SidebarButton.vue";
import AlgoliaSearchBox from "@AlgoliaSearchBox";
import SearchBox from "./SearchBox";
import NavLinks from "./NavLinks.vue";

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },

  data() {
    return {
      linksWrapMaxWidth: null
    };
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
    const NAVBAR_VERTICAL_PADDING =
      parseInt(css(this.$el, "paddingLeft")) +
      parseInt(css(this.$el, "paddingRight"));
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null;
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth -
          NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
      }
    };
    handleLinksWrapWidth();
    window.addEventListener("resize", handleLinksWrapWidth, false);
  },

  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      );
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    }
  }
};

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="scss">
@import "../styles/tools/index";

.navbar {
  background-color: color(White);
  color: color(Dark);


border-bottom: 1px solid color(offWhite);
  display: flex;
  justify-content: space-between;

  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: $navbarHeight;
  box-sizing: border-box;

  &__logo {
    background-color: color(White);
    width: 20rem;
    @media #{$medium-only} {
      width: 15rem;
    }
    @media #{$small-only} {
      display: none;
    }
    overflow: hidden;
    &-text {
      opacity: 0;
    }
    padding: 0 2rem;
    position: relative;
    svg {
      // opacity: 0.25;
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      width: 50%;
    }
  }
  &__links{
    @media #{$small-only}{display: none; }
  }
  &__item {
    & + .navbar__item {
      margin-left: 1rem;
    }
  }
  &__link {
   line-height: 3.5rem;
    &.router-link-active {
      color: color(Blue);
    }
  }
  &__list {
    white-space: nowrap;
    display: flex;
  }
  &__search{
    display: flex;
    align-items: center;padding: 0 1rem;
  }
}
</style>
