<script lang="ts">
	import { items, itemIndex } from "$lib/store"
	import { onMount } from "svelte"
	import { tweened } from "svelte/motion"
	import { emblaStore } from "$lib/store"

	let buttons: HTMLButtonElement[] = []
	const cursorWidth = tweened(88, { duration: 150 })
	const scale = tweened(1, { duration: 250 })
	const transitionX = tweened(($cursorWidth + 32) * $itemIndex+1, { duration: 150 }) 
	let timeout: number
	$: transitionX.set(($cursorWidth + 32) * $itemIndex+1).then(
		() => {
			timeout = window.setTimeout(() => {
				$scale = 1
			}, 100)
		}
	)
	
	const onItemSelect = (index: number) => () => {
		if ($itemIndex !== index) $scale = 1.2
		if (timeout) window.clearTimeout(timeout)
		window.setTimeout(() => {
			$itemIndex = index
			$emblaStore?.scrollTo($itemIndex)
			updateCursorWidth()
		}, 250)
	}
	
	const updateCursorWidth = () => {
		const { width } = getComputedStyle(buttons[$itemIndex])
		$cursorWidth = Math.floor(parseFloat(width)) ?? 88
	}

	const onResize = () => {
		requestAnimationFrame(updateCursorWidth)
	}

	onMount(onResize)
</script>

<svelte:window on:resize={onResize} />

<div class="flex relative gap-8 mt-8 {$$props.class}">
	{#each $items as boop, index}
		<button 
			bind:this={buttons[index]} 
			on:click={onItemSelect(index)}
		 	on:focus={onItemSelect(index)}
		 	class="w-[88px] h-[88px] rounded-[10px] overflow-hidden focus:outline-none mb-6" 
		>
			<img 
				class="w-full h-full object-cover pointer-events-none" 
				src={boop.thumbnail} 
				alt={`Select Preview number ${index + 1}.`}
			>
		</button>
	{/each}

	<div 
		style:--width={`${$cursorWidth}px`} 
		style:--translateX={`${$transitionX}px`}
		style:--scale={$scale}
		class="absolute top-0 left-0 bg-[white]/50 w-[var(--width,88px)] scale-[var(--scale,1)] translate-x-[var(--translateX,0px)] shadow-cart-shadow pointer-events-none h-[88px] border-2 border-orange-600 rounded-[10px]" 
	/>
</div>
