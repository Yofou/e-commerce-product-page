<script lang="ts">
	export let rotate = false
	
	let clientWidth: number = 0
</script>

<svelte:window bind:innerWidth={clientWidth} />

<button 
	on:click
	class="absolute top-1/2 {$$props.class} -translate-y-1/2 origin-center w-[40px] h-[40px] md:w-[56px] md:h-[56px] rounded-full bg-[white] grid place-content-center"
	tabindex="{clientWidth < 768 ? 0 : -1}"
>
	<img class="{rotate ? 'rotate-180' : ''}" src="/Path-2.svg" alt="">
</button>
