<script>
	import Header from './Header.svelte';
	import "../app.css";
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		 <a href="mailto:robot@bbs.media">Contact us</a>
	</footer>
</div>

<style>

</style>
