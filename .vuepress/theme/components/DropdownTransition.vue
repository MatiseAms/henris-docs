<template>
  <transition
    name="dropdown"
    @enter="setHeight"
    @after-enter="unsetHeight"
    @before-leave="setHeight"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  name: "DropdownTransition",

  methods: {
    setHeight(items) {
      // explicitly set height so that it can be transitioned
      items.style.maxHeight = items.scrollHeight + "px";
    },

    unsetHeight(items) {
      items.style.maxHeight = "";
    }
  }
};
</script>

<style lang="scss">

.dropdown-enter, .dropdown-leave-to{
  max-height: 0 !important;
}
</style>
