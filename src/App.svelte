<script>
	import { onMount } from "svelte";
	import { Router, Route } from "svelte-navigator";
	import Modal from "./components/modal/Modal.svelte";
	import { modal } from "./components/modal/stores.js";
	import { trainingsStore } from "./store/training_store";

	import SideMenu from "./components/Side_menu.svelte";
	import Navbar from "./components/Navbar.svelte";
	import BreadCrumbs from "./components/Breadcrumbs.svelte";
	import Home from "./components/Home.svelte";
	import Treinamentos from "./components/treinamentos/Treinamentos.svelte";
	import Treinamento from "./components/treinamentos/Treinamento.svelte";

	export let url = "";

	onMount(async () => {
		await trainingsStore.getTrainings();
	});

	function createAnnouncement(route, location) {
		history.pushState(location.pathname, "", location.pathname);
	}
</script>

<Router {url} a11y={{ createAnnouncement }}>
	<Modal show={$modal}>
		<SideMenu />
		<Navbar />
		<BreadCrumbs />

		<main class="page-content">
			<Route path="/" component={Home} />
			<Route path="treinamentos/*treinamentosRoute">
				<Route path="/" component={Treinamentos} />
				<Route path=":id" let:params>
					<Treinamento trainingId={params.id} />
				</Route>
			</Route>
			<Route>
				<h3>404</h3>
				<p>Página não encontrada.</p>
			</Route>
		</main>
	</Modal>
</Router>

<style>
	/* CONTENT */
	.page-content {
		position: relative;
		left: var(--page-header-width);
		width: calc(100% - var(--page-header-width));
		height: calc(100vh - var(--page-safe-top));
		padding: 30px;
		margin-top: var(--page-safe-top);
		color: var(--page-content-txtColor);
		background: var(--page-content-bgColor);
		overflow: auto;
	}
</style>
