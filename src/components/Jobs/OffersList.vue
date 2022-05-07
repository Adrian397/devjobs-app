<template>
  <main>
    <slot></slot>
  </main>
</template>

<style scoped>
main {
  width: 80%;
  max-width: 80%;
  margin: 7rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem 17.5rem;
}
</style>
