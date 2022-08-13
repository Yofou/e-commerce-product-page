<script>
	import ProductGallery from "./product-gallery.svelte";
	import ProductInformation from "./product-information.svelte";
</script>

<h1 class="sr-only">E-commerce product page</h1>
<main class="w-full max-w-[1015px] grid grid-rows-[300px,1fr] grid-cols-1 md:grid-cols-[repeat(2,minmax(0,445px))] md:grid-rows-1 h-[500px] gap-6 md:gap-[125px] place-self-center md:mt-[112px]">
	<ProductGallery />
	<ProductInformation />
</main>
