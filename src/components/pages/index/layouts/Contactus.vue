<template>
  <section id="section-contactus" class="contactus-wrapper">
    <b-container>
      <b-row>
        <b-col md="6" class="contactus">
          <h1 class="contactus-header">Contact Us!</h1>
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, quae, eos optio ut dicta nemo dolore dolor labore numquam sit beatae rerum corporis illo voluptas neque explicabo perspiciatis officiis tenetur ducimus ad incidunt veritatis fuga consequuntur architecto perferendis a reiciendis distinctio modi repellendus odit illum quas in fugit tempora sequi culpa mollitia voluptatem minus soluta molestiae laborum commodi maiores officia magnam delectus sint! Soluta, ipsam, incidunt,
            sint nobis dolore sapiente facilis iusto est perferendis dolorum culpa nostrum quos officia excepturi tenetur unde nemo eos architecto optio doloremque a animi molestias odio ab fugiat?
          </p>
        </b-col>
        <b-col
          md="6"
          class="contactform d-flex justify-content-center align-items-center"
        >
          <b-form>
            <b-form-group
              label="Enter your name:"
              label-for="input-name"
              description="please enter your name for us."
            >
              <b-form-input
                id="input-name"
                v-model="nameInput"
                placeholder="enter name ..."
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="Enter your Email:"
              label-for="input-email"
              description="please enter your Email for us."
            >
              <b-form-input
                id="input-email"
                v-model="emailInput"
                placeholder="enter name ..."
              ></b-form-input>
            </b-form-group>
            <b-button class="mt-3" block variant="primary">Send Message</b-button>
          </b-form>
        </b-col>
      </b-row>
      <hr class="section-divider" />
    </b-container>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      nameInput: "",
      emailInput: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.contactus-wrapper {
  .contactform {
    padding: 0px 25px 0px 25px;

    form {
      width: 100%;
    }
  }

  .contactus {
    padding-left: 25px;
  }
}
</style>