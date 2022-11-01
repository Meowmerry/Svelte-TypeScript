<script lang="ts">
</script>

<div class="contributors-container">
  <h1 class="contributors-title">Contributors</h1>
  <div class="card-display">
    <div class="card-container-first">
      <div class="card">
        <div class="card-img">
          <img src="images/Mike.jpeg" alt="Mike" />
          <div class="name-title">Michael Grant</div>
          <p class="title-position">Software Engineer</p>
          <div class="link-incon">
            <a href="https://github.com/MichaelCGrant" target="_blank">
              <img src="images/github.gif" alt="Mike" class="icon-github" /></a
            >
            <a
              href="https://www.linkedin.com/in/michaelcolliergrant/"
              target="_blank"
              ><img src="images/inkedin.gif" alt="Mike" class="icon-linkedIn" /></a
            >
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-img">
            <img src="images/Jess.jpeg" alt="Jess" />
            <div class="name-title">Jessica Davila</div>
            <p class="title-position">Software Engineer</p>
            <div class="link-incon">
              <a href="https://github.com/jessdvila" target="_blank">
                <img src="images/github.gif" alt="jess" class="icon-github" /></a
              >
              <a
                href="https://www.linkedin.com/in/jessica-davila-5a8380115/"
                target="_blank"
                ><img src="images/inkedin.gif" alt="jess" class="icon-linkedIn" /></a
              >
            </div>
        </div>
      </div>
      <div class="card">
        <div class="card-img">
          <img src="images/daniel.jpeg" alt="daniel" />
          <div class="name-title">Daniel Aurand</div>
          <p class="title-position">Software Engineer</p>
          <div class="link-incon">
            <a href="https://github.com/daurand" target="_blank">
              <img src="images/github.gif" alt="daniel" class="icon-github" /></a
            >
            <a
              href="https://www.linkedin.com/in/daniel-aurand/"
              target="_blank"
              ><img src="images/inkedin.gif" alt="daniel" class="icon-linkedIn" /></a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="card-container-second">
        <div class="card">
          <div class="card-img">
            <img src="images/peju.jpeg" alt="peju" />
            <div class="name-title">Adepeju Orefejo</div>
            <p class="title-position">Software Engineer</p>
            <div class="link-incon">
              <a href="https://github.com/adepeju4" target="_blank">
                <img src="images/github.gif" alt="peju" class="icon-github" /></a
              >
              <a
                href="https://www.linkedin.com/in/adepeju-orefejo/"
                target="_blank"
                ><img src="images/inkedin.gif" alt="peju" class="icon-linkedIn" /></a
              >
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-img">
            <img src="images/meow.jpeg" alt="Meow" />
            <div class="name-title">Thasanee Puttamadilok</div>
            <p class="title-position">Software Engineer</p>
            <div class="link-incon">
              <a href="https://github.com/Meowmerry" target="_blank">
                <img src="images/github.gif" alt="meow" class="icon-github" /></a
              >
              <a
                href="https://www.linkedin.com/in/thasanee-p-686125243/"
                target="_blank"
                ><img src="images/inkedin.gif" alt="meow" class="icon-linkedIn" /></a
              >
            </div>
          </div>
        </div>
      </div>
  </div>
</div>

<style>
  .contributors-container {
    padding: 2% 5% 5% 5%;
    /* background: #40b3ff; */
    /* background: #ff3e00; */
    /* background: #40b3ff(2,0,36); */
    background: linear-gradient(60deg, rgb(246, 251, 251) 0%, #ff3e00 100%);
    /* background: linear-gradient(60deg, rgb(246, 251, 251) 10%, #40b3ff 100%); */
  }
  .contributors-title {
    text-align: center;
    color: white;
  }
  .card-display {
    display: block;
    padding: 0 20%;
  }
  .card-container-first {
    border-radius: 0.75rem;
    display: grid;
    grid-template-columns: auto auto auto;
  }
  .card-container-second {
    border-radius: 0.75rem;
    display: grid;
    grid-template-columns: auto auto;
    padding: 40px 145px;
  }
  .card {
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
    max-width: 210px;
    margin: auto;
    text-align: center;
    font-family: arial;
    padding-bottom: 10px;
    border-radius: 0.75rem;
    background-color: white;
  }
  .card-img{
    padding-top: 20px;
  }
  .card-img > img {
    width: 60%;
    height: 60%;
    border-radius: 50%;
    padding: 15px;
    color: #ff3e00;
    box-shadow: 8px 1px 5px 2px;
  }
  .name-title {
    color: black;
    font-size: 16px;
    font-family: ui-monospace;
    font-weight: 500;
    padding-top: 10px;
  }
  .title-position{
    font-size: 12px;
    font-family: ui-monospace;
    font-weight: 500;
  }
  a {
    text-decoration: none;
    font-size: 22px;
    color: black;
  }

  .link-incon {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .icon-github{
    width: 35px;
  }
  .icon-linkedIn{
    width: 38px;
  }
  @media only screen and (max-width: 1024px) {
    .card-display{
      padding: 0 10%;
    }
    .card {
    max-width: 160px;
  }
  .card-img > img{
    width: 50%;
    height: 50%;
  }
  .card-container-second{
    padding: 40px 125px;
  }
  .name-title{
    font-size: 14px;
  }
 }
</style>
