<script setup>
const props = defineProps({
  company: String,
  position: String,
  postedAt: String,
  contract: String,
  location: String,
  description: String,
  reqContent: String,
  reqItems: Array,
  roleContent: String,
  roleItems: Array,
});
</script>

<template>
  <main>
    <div class="main-jobtype">
      <div class="main-jobtype__title">
        <span>{{ props.postedAt }}</span>
        <span class="dot">.</span>
        <span>{{ props.contract }}</span>
        <h2>{{ props.position }}</h2>
        <p class="country">{{ props.location }}</p>
      </div>

      <ApplyNowBtn />
    </div>
    <p>
      {{ props.description }}
    </p>
    <h3>Requirements</h3>
    <p>
      {{ props.reqContent }}
    </p>
    <ul>
      <li v-for="item in props.reqItems">{{ item }}</li>
    </ul>
    <h3>What You Will Do</h3>
    <p>
      {{ props.roleContent }}
    </p>
    <ol>
      <li v-for="item in props.roleItems">{{ item }}</li>
    </ol>
  </main>
</template>

<style scoped>
main {
  width: 70rem;
  max-width: 90%;
  background-color: var(--main-color);
  margin: 7rem auto;
  margin-bottom: 4rem;
  padding: 2rem;
  border-radius: 5px;
}

h2,
h3 {
  color: var(--text);
}

@media screen and (max-width: 825px) {
  main {
    margin: 15.5rem auto;
    margin-bottom: 2.5rem;
  }
}

.main-jobtype {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 825px) {
  .main-jobtype {
    flex-direction: column;
    align-items: flex-start;
  }

  .main-jobtype p {
    margin-bottom: 2rem;
  }
}

.main-jobtype__title h2 {
  margin: 0.3rem 0rem;
}

span {
  font-size: 13px;
  color: var(--light-grey);
  display: inline-block;
}
.dot {
  font-weight: bold;
  font-size: 16px;
  margin: 0 0.4rem;
}

.country {
  color: var(--violet);
  font-weight: bold;
  font-size: 15px;
}

main p:nth-child(2) {
  margin-top: 2rem;
  line-height: 1.9rem;
  color: var(--grey);
}

main p:nth-child(4) {
  line-height: 1.9rem;
  color: var(--grey);
}

main p:nth-child(7) {
  line-height: 1.9rem;
  color: var(--grey);
}

ul {
  margin-top: 1rem;
  line-height: 2rem;
  margin-left: 1rem;
}
ul li {
  padding-left: 1.5rem;
  color: var(--grey);
}
ul li::marker {
  color: var(--violet);
  font-weight: bold;
}

ol {
  margin-top: 1rem;
  line-height: 2rem;
  margin-left: 1rem;
}

ol li {
  padding-left: 1.5rem;
  color: var(--grey);
}

ol li::marker {
  color: var(--violet);
  font-weight: bold;
}

h3 {
  margin: 2rem 0rem;
}
</style>
