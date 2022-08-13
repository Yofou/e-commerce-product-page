<script lang="ts">
	import { itemIndex, items } from "$lib/store";
	import GalleryCarouselButton from "./gallery-carousel-button.svelte";
	import embla from "svelte-embla"
	import { emblaStore } from "$lib/store"

	const onBackClick = () => {
		if ($itemIndex > 0) $itemIndex--
		$emblaStore?.scrollTo($itemIndex)
	}

	const onNextClick = () => {
		if ($itemIndex < $items.length - 1) $itemIndex++
		$emblaStore?.scrollTo($itemIndex)
	}

	const onSelect = () => {
		if (!$emblaStore) return
		$itemIndex = $emblaStore.selectedScrollSnap()
	}

	const onInit = () => {
		$emblaStore?.scrollTo($itemIndex)
	}
</script>

<div class="relative">
	<div 
	 	class="overflow-hidden w-full md:max-w-[550px] md:rounded-[10px]" 
	 	use:embla={{ store: emblaStore }}
		on:e-select={onSelect}
		on:e-init={onInit}
	>
		<div class="grid grid-flow-col auto-cols-[100%] md:auto-cols-[550px] gap-3 md:gap-5">
			{#each $items as _item}
				<img class="w-full md:max-w-[550px] h-[300px] md:h-[550px] object-cover md:rounded-[10px]" src={_item.main} alt="">
			{/each}
		</div>
	</div>

	<GalleryCarouselButton 
		on:click={onBackClick}
		rotate 
		class="-translate-x-1/2 left-[35px] md:left-0" 
	/>
	<GalleryCarouselButton 
		on:click={onNextClick}
		class="translate-x-1/2 right-[35px] md:right-0"
	/>
</div>
