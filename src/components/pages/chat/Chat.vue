<template>
  <div class="chat-wrapper" data-aos="fade-dowm">
    <div class="chat-component mx-auto">
      <!-- Top -->
      <b-navbar variant="primary" type="dark" sticky>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/">
              <i class="fa fa-arrow-left text-white"></i>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <span class="text-white">{{contact.name}}</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>

      <!-- Content -->
      <div class="chat-content-view" ref="msgContainer">
        <transition-group name="fade">
          <template v-for="(msg,index) in messages">
            <UserMessage
              v-if="msg.type=='user'"
              :msgtext="msg.txt"
              :key="index"
            />
            <ContactMessage
              v-if="msg.type=='contact'"
              :msgtext="msg.txt"
              :key="index"
            />
          </template>
        </transition-group>
      </div>

      <!-- Message bar -->
      <div class="messagebox-view d-flex justify-content-center align-items-center">
        <b-row style="width:100%;">
          <b-col cols="8">
            <b-form-input
              v-model="message"
              @keydown.enter="sendNewMessage"
              class="shadow-none"
              ref="messageInput"
            ></b-form-input>
          </b-col>
          <b-col cols="4" class="pl-0">
            <b-button
              @click="sendNewMessage"
              variant="primary"
              block
              class="shadow-none"
            >Send</b-button>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>


<script>
import UserMessage from './UserMessage';
import ContactMessage from './ContactMessage';

export default {
  data: function () {
    return {
      messages: [
        {
          type: "contact",
          txt: "salam pesar. khoobi?"
        }
      ],
      message: "",
      contact: {
        name: "MohammadHosein"
      }
    }
  },
  methods: {
    sendNewMessage() {
      if (this.message != '') {
        let newMsg = {
          type: "user",
          txt: this.message
        };

        this.messages.push(newMsg);
        this.message = "";

        this.$refs.messageInput.$el.focus();

        // Answer
        setTimeout(() => {

          let newContactMsg = {
            type: "contact",
            txt: "hmmm"
          };

          if (newMsg.txt.includes("salam") || newMsg.txt.includes("سلام")) {
            newContactMsg.txt = "salam!";
          }
          else {
            let randNO = Math.floor(Math.random() * 10);

            if (randNO % 2 == 0) {
              newContactMsg.txt = "Are";
            } else {
              newContactMsg.txt = "Na baba!";
            }
          }

          this.messages.push(newContactMsg);

        }, 1800);

      }
    },
    scrollToDown() {
      let msgContainer = this.$refs.msgContainer;

      setTimeout(() => {
        msgContainer.scrollTop = msgContainer.clientHeight;
      }, 50);
    }
  },
  watch: {
    messages: function () {
      this.scrollToDown();
    }
  },
  mounted() {
    this.$refs.messageInput.$el.focus();
  },
  components: { UserMessage, ContactMessage }
}
</script>


<style lang="scss" scoped>
$max-width-for-mediaQuery: 50%;

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transform: scale(1);

  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}

.chat-wrapper {
  height: 100vh;

  background-color: rgb(218, 218, 218);

  .chat-component {
    width: $max-width-for-mediaQuery;
    height: 100%;
    // padding-bottom: 50px;

    .chat-content-view {
      background-color: #fff;
      height: calc(100vh - 106px);
      overflow-y: scroll;
    }

    .messagebox-view {
      position: fixed;
      bottom: 0;
      width: $max-width-for-mediaQuery;
      height: 50px;
      background-color: rgb(236, 236, 236);
      padding: 3px 0px 3px 0px;
    }
    .messagebox-view:after {
      content: " ";
      margin-top: 50px;
    }
  }

  @media (max-width: 750px) {
    .chat-component {
      width: 100%;

      .messagebox-view {
        width: 100%;
      }
    }
  }
}
</style>
