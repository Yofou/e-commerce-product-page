<script lang="ts">
	import { cartItem, items } from "$lib/store";
	import { clickOutside } from "svelte-use-click-outside";
	import { scale } from "svelte/transition"
	import { backInOut } from "svelte/easing"
	import Close from "./close.svelte";
	import { fade } from "svelte/transition"

	let isOpen = false
	let closeButton: HTMLButtonElement
	const onClick = () => isOpen = !isOpen
	const onClickOutside = () => isOpen = false

	$: if (isOpen) closeButton?.focus()
	const formater = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD"
	})

	const onKeyUp = (e: KeyboardEvent) => {
		if (e.key !== "Escape") return
		isOpen = false
	}
</script>

<svelte:window on:keyup={onKeyUp} />

<div class="relative {$$props.class ?? ''}" use:clickOutside={onClickOutside}>
	<button on:click={onClick}>
		<slot />
	</button>

	{#if isOpen}
		<div 
			transition:scale={{ easing: backInOut }} 
			class="fixed left-1/2 top-[76px] lg:absolute lg:top-[calc(100%+30px)] lg:left-0 z-20 min-h-[256px] bg-[white] shadow-cart-shadow rounded-[10px] w-screen -translate-x-1/2 max-w-[360px] grid grid-flow-row auto-rows-max"
		>
			<div class="flex justify-between p-6">
				<h2 class="font-kumbh font-bold text-[black]">Cart</h2>

				<button bind:this={closeButton} on:click={onClickOutside} class="text-grey-900 focus:outline-none focus:text-red transition-colors">
					<Close />
				</button>
			</div>

			<hr class="text-[#E4E9F2]">

			<div class="w-full grid grid-cols-1 grid-rows-1 transition-all">
				{#if $cartItem.qty > 0}
					<div transition:fade class="w-full row-start-1 row-end-2 col-start-1 col-end-2">
						<div class="grid grid-cols-[50px,1fr,max-content] grid-flow-col grid-rows-[repeat(2,26px)] gap-x-4 mx-6 my-6">
							<img 
					 			class="w-[50px] h-full object-cover row-span-2 rounded-[4px]"
								src={$items[0].main}
								alt=""
							>
							<h3 class="font-kumbh text-body text-grey-900 truncate">Fall Limited Edition Sneakers</h3>
							<p class="font-kumbh text-body text-grey-900">
								{formater.format($cartItem.price)} x {$cartItem.qty} <span class="text-[black] ml-2 font-bold">{formater.format($cartItem.price * $cartItem.qty)}</span>
							</p>

							<button on:click={() => $cartItem.qty = 0} class="place-self-center row-span-2 focus:outline focus:outline-orange-600 rounded-[4px] p-2">
								<img src="/trash.svg" alt="">
							</button>
						</div>

						<button class="w-[calc(100%-48px)] h-[56px] bg-orange-600 font-kumbh text-[white] font-bold rounded-[10px] focus:outline focus:outline-orange-300 mx-6 mb-8">
							Checkout
						</button>
					</div>
				{:else}
					<div transition:fade class="pt-[77px] pb-[85px] grid place-content-center row-start-1 row-end-2 col-start-1 col-end-2">
						<h3 class="text-grey-900 text-body font-bold">Your cart is empty</h3>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>
