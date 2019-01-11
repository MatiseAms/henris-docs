<template>
  <div class="sidebar-button" @click="$emit('toggle-sidebar')">
    <span></span>
  </div>
</template>

<

<style lang="scss">

@import "../styles/tools/index";
.sidebar-button{ display: none; width: 3.5rem; height: 3.5rem; position: relative;
  span{
    @include menu(rem(20), rem(2), rem(6),color(Purple));
  }
  @media #{$small-only}{
    display: block; 
  }
}
.sidebar-open{
  .sidebar-button{
    span{
      @include menu-close();
    }
  }
}
 </style>
