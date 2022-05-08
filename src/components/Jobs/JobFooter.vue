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
  background: white;
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
}

.footer-jobtype p {
  font-size: 13px;
  color: rgb(110, 128, 152);
}
</style>
