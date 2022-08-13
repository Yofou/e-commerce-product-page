<script lang="ts">
	import Close from "$components/close.svelte";
	import GalleryControls from "$components/gallery-controls.svelte";
	import GalleryCarousel from "$components/gallery-carousel.svelte";
	import { isCarouselOpen } from "$lib/store";
	import { fade } from "svelte/transition"

	let innerWidth: number = 0 
	let closeButton: HTMLButtonElement
	$: if ($isCarouselOpen && closeButton instanceof HTMLButtonElement) closeButton.focus()

	const onClose = (e: KeyboardEvent) => {
		if (e.key === "Escape") $isCarouselOpen = false
	}

	$: if (innerWidth < 767) $isCarouselOpen = false
</script>

<svelte:window bind:innerWidth={innerWidth} on:keyup={onClose} />

{#if $isCarouselOpen}
	<section 
		transition:fade 
	    class="w-screen h-screen grid place-content-center bg-[black]/50 fixed top-0 left-0"
	>
		<div class="grid grid-flow-row gap-6">
			<button 
			 	bind:this={closeButton} 
			 	class="justify-self-end text-[white] focus:text-orange-600 hover:text-orange-600 transition-colors" 
				on:click={() => $isCarouselOpen = false}
			>
				<Close class="w-5 h-5" />
			</button>
			<GalleryCarousel />
			<GalleryControls class="place-self-center !mt-4" />
		</div>
	</section>
{/if}
