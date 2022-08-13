<script>
	import CartDropdown from "$components/cart-dropdown.svelte";
	import Logo from "$components/logo.svelte";
	import NavDrawer from "$sections/nav-drawer.svelte";
	import { isDrawerOpen } from "$lib/store";

	const onOpenDrawer = () => $isDrawerOpen = true
</script>

<nav aria-label="sneakers primary account navigation" class="grid-container gap-4 md:gap-8 grid-cols-[repeat(2,max-content),1fr,max-content] md:grid-cols-[repeat(6,max-content),1fr,max-content] items-center mt-[20px] md:mt-[43px] pb-[28px] px-6 md:pb-[43px] md:border-b border-[#E4E9F2]">
	<button on:click={onOpenDrawer} class="block md:hidden">
		<img src="/hamburger.svg" alt="hamburger">
	</button>

	<a href="/">
		<p class="sr-only">sneakers</p>
		<Logo />
	</a>

	<a class="ml-6" href="/">Collections</a>
	<a href="/">Men </a>
	<a href="/">Women</a>
	<a href="/">About</a>
	<a href="/">Contact</a>

	<CartDropdown class="justify-self-end">
		<img src="/cart.svg" alt="cart">
	</CartDropdown>
	<button>
		<img class="w-[24px] md:w-[50px]" src="/profile.png" alt="profile pic">
	</button>
</nav>

<NavDrawer />

<style>
	nav a:nth-of-type(n+2) {
		@apply hidden md:block font-kumbh text-[15px] leading-[26px] text-grey-900 focus:text-orange-600 focus:font-bold outline-none focus:outline-none transition-all;
	}
</style>
