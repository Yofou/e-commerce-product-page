<script lang="ts">
	export let value = 1
	$: value = Math.floor(value)

	const isValid = () => value > 1
	const inc = () => value++
	const dec = () => isValid() && value--
	 
	const onBlur = () => value = !isValid() ? 1 : value
</script>

<div class="grid grid-cols-[16px,1fr,16px] h-full focus-within:outline outline-orange-600 outline-1 rounded-[8px] transform">
	<button 
		type="button" 
	 	on:click={dec} 
		class="col-start-1 opacity-50 focus:opacity-100 hover:opacity-100 focus:outline-none z-10 col-end-2 row-start-1 relative row-end-[-1]"
	>
		<span class="sr-only">Decrement</span>
		<span class="w-[12px] h-[3.33px] bg-orange-600 rounded-[.5px] absolute top-1/2 left-full -translate-x-1/2"></span>
	</button>
	<input 
		id="quantity"
		type="number" 
		bind:value 
		on:blur={onBlur} 
		min="1" 
		class="w-full focus:outline-none h-full bg-[#F6F8FD] px-4 col-start-1 text-center col-end-[-1] row-start-1 row-end-[-1]"
	>
	<button 
		type="button" 
		on:click={inc} 
		class="col-start-3 opacity-50 focus:opacity-100 focus:outline-none hover:opacity-100 z-10 col-end-4 relative row-start-1 row-end-[-1]"
	>
		<span class="sr-only">Increment</span>
		<span class="w-[12px] h-[3.33px] bg-orange-600 rounded-[.5px] absolute top-1/2 left-0 -translate-x-1/2"></span>
		<span class="w-[12px] h-[3.33px] bg-orange-600 rounded-[.5px] absolute top-1/2 left-0 -translate-x-1/2 rotate-90"></span>
	</button>
</div>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
