<script lang="ts">
	import Button from "$components/button.svelte";
	import NumberInput from "$components/number-input.svelte";
	import { cartItem } from "$lib/store";

	let qty = 1;
	const onSubmit = () => {
		$cartItem.qty = qty
	}
</script>

<div class="px-6 md:p-0">
	<h3 class="text-orange-600 font-kumbh text-[13px] font-bold uppercase tracking-[2px]">Sneaker Company</h3>
	<h2 class="mt-[19px] md:mt-8 text-heading-xl">Fall Limited Edition Sneakers</h2>

	<p class="mt-4 md:mt-8 text-body text-grey-900">
		These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
	</p>

	<dl class="grid grid-cols-[repeat(2,max-content),1fr] grid-rows-1 md:grid-cols-[max-content,max-content] md:grid-rows-[max-content,max-content] gap-y-[10px] gap-x-4 mt-6">
		<dt class="sr-only">Percentage off</dt>
		<dd class="col-start-2 col-end-3 md:row-start-1 md:row-end-2 text-orange-600 self-center px-2 py-1 rounded-[6px] bg-orange-300">50%</dd>

		<dt class="sr-only">New Price</dt>
		<dd class="text-heading-lg col-start-1 col-end-2 row-start-1 row-end-2 md:col-start-auto md:col-end-auto text-grey-1200 font-bold">$125.00</dd>

		<dt class="sr-only">Old Price</dt>
		<dd class="text-body font-bold col-start-3 col-end-4 md:col-start-auto justify-self-end self-center md:justify-self-auto md:self-auto md:col-end-auto text-[#B6BCC8] line-through">$250.00</dd>
	</dl>

	<form class="grid grid-cols-1 grid-rows-[56px,1fr] md:grid-rows-1 md:grid-cols-[157px,1fr] gap-4 mt-6" on:submit|preventDefault={onSubmit}>
		<NumberInput bind:value={qty} />
		<Button class="px-[10px] py-[18px] flex gap-4 mb-[88px] md:mb-0 justify-center font-bold">
			<img src="/cart-white.svg" alt="">
			Add to Cart
		</Button>
	</form>
</div>
