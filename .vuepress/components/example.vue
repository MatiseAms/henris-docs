<template>
  <div class="example">
    <slot></slot>
  </div>

</template>

<style lang="scss">
@import "~henris";
.example {
  display: block;
  padding: grid(1);
  background-color: color(Black, 0.05);
  border: 1px solid color(Black, 0.1);
  & + div[class^="language-"] {
    position: absolute;
    // opacity: 0;
    transition: clip-path .3s ease-in-out; 
    clip-path: inset(0 0 100% 0);
    margin-top: 0;
    &:hover {
      opacity: 1;
    }
    pre,
    pre code {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  &:hover + div[class^="language-"] {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
}
</style>