<template>
  <div class="sidebar">
		<svg class="sidebar__logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400 200" enable-background="new 0 0 400 200" xml:space="preserve" width="100"><path id="XMLID_11_" d="M309.202,21.653c-33.601,0-63.601,20.398-75.604,49.197c-9.603-8.402-20.398-13.204-33.601-13.204 s-23.999,4.801-32.401,13.204c-13.204-28.8-42.003-49.197-75.604-49.197C45.202,21.653,8,58.847,8,104.451 s37.202,82.798,82.798,82.798s82.806-37.194,82.806-82.798c0-14.404,10.803-25.199,25.199-25.199 c14.404,0,25.199,10.803,25.199,25.199c0,45.604,37.202,82.798,82.798,82.798S392,150.056,392,104.451 S354.806,21.653,309.202,21.653z M90.798,165.652c-33.601,0-61.201-27.599-61.201-61.201s27.599-61.201,61.201-61.201	s61.201,27.599,61.201,61.201S125.6,165.652,90.798,165.652z M309.202,165.652c-33.601,0-61.201-27.599-61.201-61.201 s27.599-61.201,61.201-61.201s61.201,27.599,61.201,61.201S342.803,165.652,309.202,165.652z"></path></svg>

    <NavLinks/>
    <slot name="top"/>
    <ul class="sidebar-links" v-if="items.length">
      <li v-for="(item, i) in items" :key="i">
        <SidebarGroup v-if="item.type === 'group'"
          :item="item"
          :first="i === 0"
          :open="i === openGroupIndex"
          :collapsable="item.collapsable"
          @toggle="toggleGroup(i)"/>
        <SidebarLink v-else :item="item"/>
      </li>
    </ul>
    <slot name="bottom"/>
  </div>
</template>

<script>
import SidebarGroup from './SidebarGroup.vue'
import SidebarLink from './SidebarLink.vue'
import NavLinks from './NavLinks.vue'
import { isActive } from './util'

export default {
  components: { SidebarGroup, SidebarLink, NavLinks },
  props: ['items'],
  data () {
    return {
      openGroupIndex: 0
    }
  },
  created () {
    this.refreshIndex()
  },
  watch: {
    '$route' () {
      this.refreshIndex()
    }
  },
  methods: {
    refreshIndex () {
      const index = resolveOpenGroupIndex(
        this.$route,
        this.items
      )
      if (index > -1) {
        this.openGroupIndex = index
      }
    },
    toggleGroup (index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index
    },
    isActive (page) {
      return isActive(this.$route, page.path)
    }
  }
}

function resolveOpenGroupIndex (route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.type === 'group' && item.children.some(c => isActive(route, c.path))) {
      return i
    }
  }
  return -1
}
</script>

<style lang="scss">
@import './styles/custom-colors';
@import '~henris';
@import './styles/config';

.sidebar{
	ul{
		padding: 0;
		margin: 0;
		list-style-type: none;
	}
	a{
		display: inline-block;
	}
	&__logo{
		width: 20%;
		margin-top: 4rem;
		margin-left: 40%;
	}
	.nav-links{
		display: none;
		border-bottom: 1px solid color(borderColor);
		padding: 0.5rem 0 1rem 0;
		a{
			font-weight: 600;
		}
		.nav-item, .repo-link{
			display: block;
			line-height: 1.25rem;
			font-size: 1.1em;
			padding: 0.5rem 0 0.5rem 1.5rem;
		}
	}
	.sidebar-links{
		padding: 1.5rem 0;
		display: flex;
		flex-direction: column;
	}
}
@media #{$small-only}{
	.sidebar{
		.nav-links{
			display: block;
			.dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after{
				top: calc(1rem - 2px);
			}
		}
		.sidebar-links{
			padding: 1rem 0;
		}
	}
}
</style>
