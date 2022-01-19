<script>
	export let message = "Nenhum item cadastrado.";
</script>

<section class="emptyState">
	{message}
</section>

<style>
	:global(.emptyState) {
        display: flex;
        justify-content: center;
        font-size: 18px;
        color: var(--colors-gray);
        padding: 16px 0;
    }
</style>
