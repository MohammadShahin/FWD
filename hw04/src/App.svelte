<script land="ts">
  // import Counter from "./lib/Counter.svelte";
  import Header from "./lib/header.svelte";
  import Education from "./lib/education.svelte";
  import TechSkills from "./lib/techSkills.svelte";
  import Animation from "./lib/animation.svelte";
  import SolPrice from "./lib/solPrice.svelte";
</script>

<main>
  <div class="container">
    <Header />
    <Education />
    <TechSkills />
    <Animation />
    <SolPrice />
  </div>
</main>

<style>
  .container {
    width: 50vw;
    margin: auto;
    padding: 20px;
    border-radius: 20px;
    background-color: white;
  }
</style>
