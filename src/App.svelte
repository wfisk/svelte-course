<script>
  export let name;
  export let age;

  function incrementAge(){
    age++;
  } 
  function decrementAge(){
    age--;
  } 
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}! Are you {age}?</h1>
<button on:click={incrementAge}>
  Increment Age
</button>


<button on:click={decrementAge}>
    Decrement Age
  </button>
  