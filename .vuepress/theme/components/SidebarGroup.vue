<template>
  <div
    class="sidebar__group"
    :class="{ first, collapsable }"
  >
    <h4
      class="sidebar__heading"
      :class="{ open }"
      @click="$emit('toggle')"
    >
      <span>{{ item.title }}</span>
      <span
        class="arrow"
        v-if="collapsable"
        :class="open ? 'down' : 'right'">
      </span>
    </h4>

    <DropdownTransition>
      <ul
        ref="items"
        class="sidebar-group__list"
        v-if="open || !collapsable"
      >
        <li v-for="child in item.children" class="sidebar-group__item">
          <SidebarLink :item="child"/>
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue'
import DropdownTransition from './DropdownTransition.vue'

export default {
  name: 'SidebarGroup',
  props: ['item', 'first', 'open', 'collapsable'],
  components: { SidebarLink, DropdownTransition }
}
</script>
<style lang="scss">
@import "../styles/tools/index";

</style>