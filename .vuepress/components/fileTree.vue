<template>
  <div class="file-tree">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.file-tree {
  padding: 1rem;
  border: 1px solid rgba(#a1a193, 0.25);
  font-size: 14px;
  ul {
    padding-left: 0rem;
    li {
      padding: 0;
      margin: 0;
    }
  }
  ul,
  li {
    list-style-type: none;
    margin: 0;
  }
  .dir,
  .file {
    padding-left: 1.5rem;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.25rem;
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  .dir {
    &:before {
      width: 1rem;
      height: 1rem;
      background-image: linear-gradient(to right, #a1a193, #a1a193),
        linear-gradient(to right, #a1a193, #a1a193);
      background-size: 33.33% 20%, 100% 80%;
      background-repeat: no-repeat, no-repeat;
      background-position: top left, bottom left;
      border-radius: 1px 0 3px 3px;
      overflow: hidden;
    }
  }

  .file {
    &[ext]:after {
      content: "." attr(ext);
      opacity: 0.5;
    }
    &:before {
      position: absolute;
      left: 0;
      top: 0.25rem;
      width: 12px;
      height: 1rem;
      border: 1px solid #d098c3;
      border-radius: 2px;
    }
  }
}
</style>