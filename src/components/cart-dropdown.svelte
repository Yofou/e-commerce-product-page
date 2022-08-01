<script lang="ts">
	import { items } from "$lib/store";
	import { clickOutside } from "svelte-use-click-outside";
	import { scale } from "svelte/transition"
	import { backInOut } from "svelte/easing"
	import Close from "./close.svelte";

	let isOpen = false
	let closeButton: HTMLButtonElement
	const onClick = () => isOpen = !isOpen
	const onClickOutside = () => isOpen = false

	$: if (isOpen) closeButton?.focus()
</script>

<div class="relative {$$props.class ?? ''}" use:clickOutside={onClickOutside}>
	<button on:click={onClick}>
		<slot />
	</button>

	{#if isOpen}
		<div 
			transition:scale={{ easing: backInOut }} 
			class="absolute bg-[white] shadow-cart-shadow top-[calc(100%+30px)] left-0 rounded-[10px] w-screen -translate-x-1/2 max-w-[360px] grid grid-flow-row auto-rows-max"
		>
			<div class="flex justify-between p-6">
				<h2 class="">Cart</h2>

				<button bind:this={closeButton} on:click={onClickOutside} class="text-grey-900 focus:outline-none focus:text-red transition-colors">
					<Close />
				</button>
			</div>

			<hr class="text-[#E4E9F2]">

			{#if $items.length}
				<p>todo</p>
			{:else}
				<div class="pt-[77px] pb-[85px] grid place-content-center">
					<h3 class="text-grey-900 text-body font-bold">Your cart is empty</h3>
				</div>
			{/if}
		</div>
	{/if}
</div>
