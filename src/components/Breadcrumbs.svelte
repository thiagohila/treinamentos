<script>
	import { Link } from "svelte-navigator";
	import url from "../store/breadcrumbs_store.js";

	$: locations = $url.pathname.split("/").filter((item) => item !== "");

	function capitalize(s) {
		if (typeof s !== "string") return s;
		return s.charAt(0).toUpperCase() + s.slice(1);
	}
</script>

<section class="breadcrumbs">
	<Link to="/">Home</Link>
	{#each locations as location, index}
		<span class="marker">></span>
		<Link to={index == locations.length - 1 ? $url.pathname : location}
			>{capitalize(location)}</Link
		>
	{/each}
</section>

<style>
	/* BREADCRUMBS */
	.breadcrumbs {
		height: var(--page-breadCrumbs-height);
		color: var(--page-breadCrumbs-txtColor);
		background: var(--page-breadCrumbs-bgColor);
		display: flex;
		align-items: center;
		justify-content: start;
		padding: 0 30px;
		position: fixed;
		width: calc(100% - var(--page-header-width));
		top: var(--page-nav-height);
		left: var(--page-header-width);
		z-index: 9999;
	}

	.breadcrumbs .marker {
		margin: 0 16px;
	}

	:global(a) {
		color: var(--page-breadCrumbs-txtColor) !important;
	}
</style>
