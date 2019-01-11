<template>
  <div class="sidebar">
    <slot name="top" />
    <ul
      class="sidebar__list sidebar-links"
      v-if="items.length"
    >
      <li
        class="sidebar__item"
        v-for="(item, i) in items"
        :key="i"
      >
        <SidebarGroup
          v-if="item.type === 'group'"
          :item="item"
          :first="i === 0"
          :open="i === openGroupIndex"
          :collapsable="item.collapsable || item.collapsible"
          @toggle="toggleGroup(i)"
        />
        <SidebarLink
          v-else
          :item="item"
        />
      </li>
    </ul>

    <NavLinks />
    <slot name="bottom" />
  </div>
</template>

<script>
import SidebarGroup from "./SidebarGroup.vue";
import SidebarLink from "./SidebarLink.vue";
import NavLinks from "./NavLinks.vue";
import { isActive } from "../util";

export default {
  components: { SidebarGroup, SidebarLink, NavLinks },

  props: ["items"],

  data() {
    return {
      openGroupIndex: 0
    };
  },

  created() {
    this.refreshIndex();
  },

  watch: {
    $route() {
      this.refreshIndex();
    }
  },

  methods: {
    refreshIndex() {
      const index = resolveOpenGroupIndex(this.$route, this.items);
      if (index > -1) {
        this.openGroupIndex = index;
      }
    },

    toggleGroup(index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index;
    },

    isActive(page) {
      return isActive(this.$route, page.regularPath);
    }
  }
};

function resolveOpenGroupIndex(route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (
      item.type === "group" &&
      item.children.some(c => isActive(route, c.path))
    ) {
      return i;
    }
  }
  return -1;
}
</script>
<style lang="scss">
@import "../styles/tools/index";
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: color(White);
  border-right: 1px solid color(offWhite);

  font-size: 1rem;
  width: 20rem;
  position: fixed;
  z-index: 10;
  margin: 0;
  top: $navbarHeight;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  overflow-y: auto;
  @media #{$medium-only} {
    width: 15rem;
  }
  @media #{$small-only} {
    width: 100vw;
    clip-path: inset(0 100% 0 0%);
    transition: clip-path 0.3s ease-in-out;
  }
  .sidebar-open & {
    clip-path: inset(0 0 0 0%);
  }

  &__list {
    width: 100%;
    padding: 2rem 0;
    display: block;
  }
  &__sub-list {
    display: block;
    // padding: 1rem;
    .sidebar__item {
      & + .sidebar__item {
        margin-top: 0rem;
      }
    }
    .sidebar__link {
      font-size: 14px;
      padding-left: 2.5rem;
    }
  }
  &__item {
    display: block;
    color: white;
    & + .sidebar__item {
      margin-top: 1rem;
    }
  }
  &__link {
    color: color(Dark);
    display: block;
    padding: 0.5rem 2rem;
    &.active {
      color: color(Blue);
    }
  }
  &__heading {
    font-weight: 500;
    color: color(Blue);

    padding: 0.5rem 2rem;
    & + .sidebar-group__list {
      width: 100%;
      margin-top: 1rem;
    }
  }
  &-group {
    &__list {
      & + .sidebar__heading {
        margin-top: 1rem;
      }
    }
    &__item {
      display: block;
      // padding: 0.5rem 1rem;
    }
  }

  .navbar {
    &__list {
      align-self: flex-end;
      white-space: pre-wrap;
      background-color: color(White);
      display: block;
      // padding: 1rem;
      width: 100%;
      transition: max-height 0.3s;
    }
    &__item {
      margin: 0;
      padding: 0;
      // color: color(Purple);
      display: block;
    }
    &__link {
      line-height: 1;
      display: block;
      padding: 0.5rem 2rem;
    }
  }
}
</style>