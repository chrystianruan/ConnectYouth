<template>
  <footer>
    <p>Connect Youth &copy; 2023</p>
    <div class="socialMedias">
      
      <i class="fa-brands fa-instagram" id="instagram"></i>
      <i class="fa-brands fa-facebook" id="facebook"></i>
      <i class="fa-brands fa-twitter" id="twitter"></i>
      <i class="fa-brands fa-youtube" id="youtube"></i>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'MyFooter',

  }
</script>

<style scoped>
  footer {
    width: 100%;
    height: 10em;
    background-color: #292929;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }

  footer p {
    font-size: 1em;
  }

  .socialMedias {
    display: flex;
    gap: .5em;
    font-size: 1.2em;

  }

  .socialMedias i {
    cursor: pointer;
  }

  .socialMedias i:hover {
    scale: 1.125;
  }

  #instagram:hover {
    background: linear-gradient(165deg, #405DE6, #5B51D8, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45,#FFDC80);
    background-clip: initial;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
  }

  #facebook:hover {
    color: #4267B2;
  }
  #twitter:hover {
    color: #1DA1F2;
  }

  #youtube:hover {
    color: #FF0000;
  }

</style>