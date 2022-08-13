<script lang="ts">
	import ArrowUp from "$components/arrow-up.svelte"
	import { item } from "$lib/store"
	import { isCarouselOpen } from "$lib/store"
	import GalleryControls from "$components/gallery-controls.svelte"
import GalleryCarousel from "$components/gallery-carousel.svelte";
import RippleSpinner from "$components/ripple-spinner.svelte";

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth={innerWidth} />

<section>
	<h2 class="sr-only">Product Gallery</h2>
	{#if innerWidth > 767}
		<button 
			on:click={() => $isCarouselOpen = true}
			class="relative outline outline-2 outline-[white] focus:outline-orange-600 group rounded-[10px] overflow-hidden"
		>
			<img 
				class="w-[445px] h-[445px] rounded-[10px] object-cover" 
				src={$item.main} 
				alt="" 
			/>
			<span class="bg-[white]/50 absolute inset-0 grid grid-cols-2 grid-rows-[max-content,1fr,max-content] p-2 opacity-0 hover:opacity-100 group-focus:opacity-100 text-grey-1200 transition-opacity">
				<ArrowUp class="w-[50px] h-[50px] -rotate-45 antialiased" />
				<ArrowUp class="w-[50px] h-[50px] rotate-45 antialiased justify-self-end" />
				<p class="place-self-center col-span-2 uppercase font-bold font-kumbh text-xl">fullscreen</p>
				<ArrowUp class="w-[50px] h-[50px] -rotate-[135deg] antialiased self-end" />
				<ArrowUp class="w-[50px] h-[50px] rotate-[135deg] antialiased self-end justify-self-end" />
			</span>
		</button>
		<GalleryControls />
		
	{:else if innerWidth < 768}
		<GalleryCarousel />
	{:else}
		<div class="w-full h-full text-orange-600 grid place-content-center">
			<RippleSpinner />
		</div>
	{/if}	
</section>
