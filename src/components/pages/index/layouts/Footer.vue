<template>
  <div class="footer-wrapper">
    <footer>
      <b-container>
        <b-row>
          <b-col md="3">
            <div class="footer-link-container">
              <h2 class="footer-link-title">Links</h2>
              <ul>
                <li>
                  <a class="text-white" href="#">Link 1</a>
                </li>
                <li>
                  <a class="text-white" href="#">Link 2</a>
                </li>
                <li>
                  <a class="text-white" href="#">Link 3</a>
                </li>
                <li>
                  <a class="text-white" href="#">Link 4</a>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col md="3">
            <div class="footer-link-container">
              <h2 class="footer-link-title">Links</h2>
              <ul>
                <li>
                  <a class="text-white" href="#">Link 1</a>
                </li>
                <li>
                  <a class="text-white" href="#">Link 2</a>
                </li>
                <li>
                  <a class="text-white" href="#">Link 3</a>
                </li>
                <li>
                  <a class="text-white" href="#">Link 4</a>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col md="3">
            <div class="footer-link-container">
              <h2 class="footer-link-title">Links</h2>
              <ul>
                <li>
                  <a class="text-white" href="#">Link 1</a>
                </li>
                <li>
                  <a class="text-white" href="#">Link 2</a>
                </li>
                <li>
                  <a class="text-white" href="#">Link 3</a>
                </li>
                <li>
                  <a class="text-white" href="#">Link 4</a>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col md="3">
            <div class="footer-link-container">
              <h2 class="footer-link-title">Links</h2>
              <ul>
                <li>
                  <a class="text-white" href="#">Link 1</a>
                </li>
                <li>
                  <a class="text-white" href="#">Link 2</a>
                </li>
                <li>
                  <a class="text-white" href="#">Link 3</a>
                </li>
                <li>
                  <a class="text-white" href="#">Link 4</a>
                </li>
              </ul>
            </div>
          </b-col>
        </b-row>
        <div class="footer-copyright">&copy; Designed by: Mohammadhosein</div>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  background-color: #525252;
  color: white;
  padding: 10px 5px 10px 5px;

  .footer-link-container {
    .footer-link-title {
      margin-bottom: 25px;
    }

    ul {
      padding: 0px;
    }
    li {
      list-style-type: none;
    }
  }

  .footer-copyright {
    margin: 25px 0 8px 0;
    font-size: small;
    color: rgb(194, 194, 194);
    text-align: center;
  }
}
</style>