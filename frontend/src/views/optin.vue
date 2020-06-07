<template>
  <div class="optin container">
    <b-row>
      <b-col>
        <TextContent
          variant="header"
          content="Here’s Your Attention Getting Headline"
          topMargin="50px"
          :theme="'red'"
        />
        <TextContent
          variant="subheader"
          content="This is your sub-headline to increase credibility or curiosity"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <img src="../assets/images/headphones.jpg" alt="">
      </b-col>
      <b-col>
        <TextContent
          variant="paragraph"
          content="Here’s where you write your compelling message,
           keep your sentences and paragraphs short."
        />
        <OptinForm
          submitText="Free Download!"
          submitColor="warning"
          @submit="handleSubmit"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <CountdownTimer endDate="October 3, 2020" />
        <TextContent
          variant="subheader"
          content="This is offer will soon expire"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TextContent from '../components/TextContent.vue';
import OptinForm from '../components/OptinForm.vue';
import CountdownTimer from '../components/Countdowntimer.vue';
import emailApi from '../api/emailApi';

export default {
  name: 'optin',
  components: {
    TextContent,
    OptinForm,
    CountdownTimer,
  },
  methods: {
    handleSubmit(email) {
      console.log('email', email);
      emailApi.sendEmail(email);
      this.$router.push('/thanks');
    },
  },
};
</script>

<style scoped lang="scss">

</style>
