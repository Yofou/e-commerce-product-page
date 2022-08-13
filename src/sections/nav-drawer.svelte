<script lang="ts">
	import { isDrawerOpen } from "$lib/store";
	import { clickOutside } from "svelte-use-click-outside"
	import { fade, fly } from "svelte/transition"
	import Close from "$components/close.svelte";

	let closeButton: HTMLButtonElement;
	$: if ($isDrawerOpen) {
		closeButton?.focus()
	}

	const FADE_OPTIONS = { duration: 250 }
	const FLY_OPTIONS ={ delay: 100, duration: 350, x: -250, opacity: 1 } 
	const onClose = () => {
		$isDrawerOpen = false
	}
</script>

{#if $isDrawerOpen}
	<aside transition:fade={FADE_OPTIONS} class="fixed top-0 z-20 left-0 w-screen h-screen bg-[black]/75">
		<nav 
			use:clickOutside={onClose} 
			in:fly={FLY_OPTIONS} 
			aria-label="mobile sidebar" 
			class="max-w-[250px] justify-items-start h-full bg-[white] grid grid-flow-row auto-rows-max p-6 gap-5"
		>
			<button class="text-grey-900 focus:text-red focus:outline-none focus:color transition-colors" bind:this={closeButton} on:click={onClose}>
				<Close />
			</button>

			<a class="mt-9" href="/">Collections</a>
			<a href="/">Men</a>
			<a href="/">Women</a>
			<a href="/">About</a>
			<a href="/">Contact</a>
		</nav>
	</aside>
{/if}

<style>
	nav a {
		@apply font-kumbh text-[18px] leading-[26px] text-grey-1200 font-bold focus:text-orange-600 focus:outline-none transition-colors;
	}
</style>
