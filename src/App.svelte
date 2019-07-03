<script>
  export let name;
  export let age;
  $: ageSquared = age * age;
  $: console.log( age );

  function incrementAge(){
    age++;
  } 
  function decrementAge(){
    age--;
  } 

  function onNameInput( event ){
    name = event.target.value;
  }
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}! /Are you {ageSquared}?</h1>

<!-- input value={name} on:input={onNameInput} -->
<input bind:value={name} >

<button on:click={incrementAge}>
  Increment Age
</button>


<button on:click={decrementAge}>
    Decrement Age
</button>
  