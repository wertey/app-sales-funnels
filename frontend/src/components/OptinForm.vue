<template>
<div class="optin-form">
  <form @submit.prevent="onSubmit">
    <b-form-group>
      <b-form-input
        type="email"
        v-model="email"
        size="lg"
        required
        placeholder="Enter email"
      />
    </b-form-group>
    <b-button type="submit" :variant="submitColor" size="lg" block>
      {{ submitText }}
    </b-button>
  </form>
</div>
</template>

<script>
export default {
  name: 'optin-form',
  props: {
    submitText: {
      type: String,
      default: '',
    },
    submitColor: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      email: '',
    };
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.email);
    },
  },
};
</script>

<style scoped>
  .btn {
    font-weight: bold;
    font-size: 1.5rem;
  }
</style>
