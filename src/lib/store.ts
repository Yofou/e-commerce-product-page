import { derived, writable } from "svelte/store"
import type { EmbaOptionsActionType } from "svelte-embla"

export const isDrawerOpen = writable(false)
export const cartItem = writable({
	qty: 0,
	price: 125.0
})


export const isCarouselOpen = writable(false)

export const itemIndex = writable(0)
export const items = writable(Array.from({ length: 4 }, (_, index) => {
	const main = `/image-product-${index+1}`
	return {
		main: `${main}.jpg`,
		thumbnail: `${main}-thumbnail.jpg`
	}
}))

export const item = derived(
	[items, itemIndex], 
	([$items, $itemIndex]) => {
		return $items[$itemIndex]
	}
)

export const emblaStore: EmbaOptionsActionType["store"] = writable()
