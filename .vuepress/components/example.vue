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
    margin-top: 0;
    pre,
    pre code {
      margin-top: 0;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
}
</style>