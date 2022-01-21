<script>
	import { user } from "../store/user_store";
</script>

<section class="navbar">
	<div class="admin-profile">
		<div>
			<div class="account">{$user.name}</div>
			<div class="position">{$user.role}</div>
		</div>
		<img
			class="avatar"
			src={$user.avatar ? $user.avatar : "/images/default_profile.png"}
			alt="Avatar"
		/>
	</div>
</section>

<style>
	/* NAV */
	.navbar {
		height: var(--page-nav-height);
		color: var(--page-header-txtColor);
		background: var(--page-header-bgColor);
		display: flex;
		align-items: center;
		justify-content: end;
		padding: 0 30px;
		position: fixed;
		width: calc(100% - var(--page-header-width));
		top: 0;
		left: var(--page-header-width);
		z-index: 9999;
	}

	.navbar .admin-profile {
		display: flex;
		justify-content: end;
		align-items: center;
	}

	.navbar .admin-profile .account {
		font-size: 16px;
		text-align: end;
	}

	.navbar .admin-profile .position {
		font-size: 12px;
		text-align: end;
	}

	.navbar .admin-profile .avatar {
		height: 60px;
		width: 60px;
		margin-left: 15px;
		border-radius: 50%;
		background-color: #ffffff;
	}

	/* RESPONSIVE */
	@media screen and (max-width: 767px) {
		.navbar {
			position: absolute;
			left: 131px;
			top: 10px;
			padding: 0;
			grid-column-gap: 5px;
			width: calc(100% - 141px);
			border-radius: var(--border-radius);
			background: transparent;
		}
	}
</style>
