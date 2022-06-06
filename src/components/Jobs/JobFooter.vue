<script setup>
const props = defineProps({
  position: String,
});
</script>

<template>
  <footer>
    <div>
      <div class="footer-jobtype">
        <h3>{{ props.position }}</h3>
        <p>So Digital Inc.</p>
      </div>
      <ApplyNowBtn />
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  padding: 1.5rem 0rem;
  background: var(--main-color);
  margin-top: auto;
}

footer > div {
  width: 70rem;
  max-width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-jobtype h3 {
  margin: 0;
  color: var(--text);
}

.footer-jobtype p {
  font-size: 13px;
  color: var(--grey);
}

@media screen and (max-width: 825px) {
  .footer-jobtype {
    display: none;
  }
}
</style>
