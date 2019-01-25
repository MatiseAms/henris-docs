<template>
  <div :class="[`language-${prismLang}`]">
    <pre
      v-if="!disabled && code"
      :class="[`language-${prismLang}`]"
    ><code
      ref="code"
      v-html="highlightedCode"
    /></pre>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  components: {
    Vnodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    }
  },
  data() {
    return {
      code: true,
      disabled: false
    };
  },
  props: {
    lang: {
      type: String,
      required: true
    },
    source: {
      type: String,
      default: null
    }
  },
  computed: {
    prismLang() {
      return (
        {
          js: "javascript"
        }[this.$props.lang] || this.$props.lang
      );
    },
    highlightedCode() {
      // return Prism.highlight('<div class="kudt"></div>');
      return Prism.highlight(this.$props.source, Prism.languages.javascript, this.prismLang);
    }
  }
};
</script>

<style>
</style>
