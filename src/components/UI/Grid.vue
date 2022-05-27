<template>
  <main>
    <slot></slot>
  </main>
</template>

<style scoped>
main {
  width: 80%;
  margin: 7rem auto;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;

  gap: 5rem 0rem;
}
@media screen and (max-width: 1250px) {
  main {
    grid-template-columns: repeat(2, auto);
  }
}

@media screen and (max-width: 825px) {
  main {
    grid-template-columns: repeat(1, auto);
    justify-content: center;
  }
}
</style>
