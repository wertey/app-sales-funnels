<template>
  <div class="text-content"
       :style="{ marginTop: topMargin }"
  >
    <h1 class="header"
        v-if="variant === 'header'"
        :style="getStyle()"
    >
      {{ content }}
    </h1>
    <h2 class="subheader"
        v-if="variant === 'subheader'"
    >
      {{ content }}
    </h2>
    <p class="paragraph"
       v-if="variant === 'paragraph'"
       v-html="content"></p>
  </div>
</template>

<script>
export default {
  name: 'TextContent',
  props: {
    variant: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    topMargin: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'black',
    },
  },
  data() {
    return {
      red: {
        color: 'red',
      },
      blue: {
        color: 'blue',
      },
      black: {
        color: 'black',
      },
    };
  },
  methods: {
    getStyle() {
      if (this.theme === 'red') {
        return this.red;
      }
      if (this.theme === 'blue') {
        return this.blue;
      }
      return this.black;
    },
  },
};
</script>

<style scoped lang="scss">
  @import "src/assets/scss/variables";
  .header {
    color: $color-header;
    text-align: center;
  }
  .subheader {
    font-size: 1.5rem;
    color: $color-subheader;
    text-align: center;
  }
  p {
    color: $color-paragraph;
  }
</style>
