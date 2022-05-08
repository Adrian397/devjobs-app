<template>
  <main>
    <div class="main-jobtype">
      <div class="main-jobtype__title">
        <span>1w ago</span>
        <span class="dot">.</span>
        <span>Part Time</span>
        <h2>Senior Software Engineer</h2>
        <p class="country">United Kingdom</p>
      </div>
      <ApplyNowBtn />
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
      hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
      dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet
      viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
      Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et
      vulputate volutpat, eros pede semper est, vitae luctus metus libero eu
      augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id,
      est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
      felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
      dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
      fermentum et, dapibus sed, urna.
    </p>
    <h3>Requirements</h3>
    <p>
      Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a
      ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero
      dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius,
      adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
      pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida
      vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu,
      vulputate vel, nisl.
    </p>
    <ul>
      <li>Morbi interdum mollis sapien. Sed</li>
      <li>
        Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar
        risus
      </li>
      <li>
        Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
        tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
      </li>
      <li>Morbi interdum mollis sapien. Sed</li>
    </ul>
    <h3>What You Will Do</h3>
    <p>
      Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
      luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
      commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
      tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices
      sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
      Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
    </p>
    <ol>
      <li>Morbi interdum mollis sapien. Sed</li>
      <li>
        Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar
        risus
      </li>
      <li>
        Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel,
        tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.
      </li>
      <li>Morbi interdum mollis sapien. Sed</li>
    </ol>
  </main>
</template>

<style scoped>
main {
  width: 70rem;
  max-width: 90%;

  background: white;
  margin: 7rem auto;
  margin-bottom: 4rem;
  padding: 2rem;
  border-radius: 5px;
}

.main-jobtype {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-jobtype__title h2 {
  margin: 0.3rem 0rem;
}

/* .main-jobtype button {
  padding: 0.8rem 1.2rem;
  border: none;
  outline: none;
  color: white;
  background-color: rgb(89, 100, 224);
  border-radius: 5px;
} */

span {
  font-size: 13px;
  color: rgb(157, 174, 194);
  display: inline-block;
}
.dot {
  font-weight: bold;
  font-size: 16px;
  margin: 0 0.4rem;
}

.country {
  color: rgb(89, 100, 224);
  font-weight: bold;
  font-size: 15px;
}

main p:nth-child(2) {
  margin-top: 1rem;
  line-height: 1.9rem;
  color: rgb(110, 128, 152);
}

main p:nth-child(4) {
  line-height: 1.9rem;
  color: rgb(110, 128, 152);
}

main p:nth-child(7) {
  line-height: 1.9rem;
  color: rgb(110, 128, 152);
}
ul {
  margin-top: 1rem;
  line-height: 2rem;
  margin-left: 1rem;
}
ul li {
  padding-left: 1.5rem;
  color: rgb(110, 128, 152);
}
ul li::marker {
  color: rgb(89, 100, 224);
  font-weight: bold;
}

ol {
  margin-top: 1rem;
  line-height: 2rem;
  margin-left: 1rem;
}

ol li {
  padding-left: 1.5rem;
  color: rgb(110, 128, 152);
}

ol li::marker {
  color: rgb(89, 100, 224);
  font-weight: bold;
}

h3 {
  margin: 2rem 0rem;
}
</style>
