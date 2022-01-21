<script>
	import { Link } from "svelte-navigator";
</script>

<header class="page-header">
	<nav>
		<!-- <div role="button"
			class="toggle-mob-menu"
			aria-expanded="false"
			aria-label="open menu"
		>
			<img src="/images/burger.svg" alt="Menu" />
		</div> -->
		<ul class="admin-menu">
			<li>
				<Link to="/">
					<img src="/images/bi_house.svg" alt="Início" />
				</Link>
			</li>
			<li>
				<Link to="treinamentos">
					<img src="/images/bi_book.svg" alt="Treinamentos" />
				</Link>
			</li>
		</ul>
	</nav>
</header>

<style>
	/* SIDE MENU */
	.page-header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: auto;
		width: var(--page-header-width);
		color: var(--page-header-txtColor);
		background: var(--page-header-bgColor);
	}

	.page-header nav {
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}

	/* .page-header .toggle-mob-menu {
		margin-top: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.9rem;
	} */

	.page-header .admin-menu {
		display: flex;
		flex-direction: column;
		/* flex-grow: 1; */
		margin-top: 90px;
	}

	.page-header .admin-menu li > :global(*) {
		width: 100%;
		margin-top: 0;
		margin-bottom: 50px;
	}

	.page-header .admin-menu :global(a) {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.9rem;
	}

	/* RESPONSIVE */
	@media screen and (max-width: 767px) {
		.page-header {
			position: static;
			width: 100%;
		}

		.page-header nav {
			flex-direction: row;
		}

		/* .page-header .toggle-mob-menu {
			display: block;
		} */

		.page-header .admin-menu {
			position: absolute;
			left: 98px;
			top: 57px;
			margin-top: 0;
			z-index: 2;
			border-radius: var(--border-radius);
			background: var(--page-header-bgColor);
			visibility: hidden;
			opacity: 0;
			transform: scale(0.95);
			transition: all 0.2s;
		}
	}
</style>
