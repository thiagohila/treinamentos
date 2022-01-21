<script>
    import EmptyState from "../Empty_state.svelte";
    import ItemModulo from "../modulos/Item_modulo.svelte";

    export let trainingId;
    export let modules = [];
</script>

<div id="aulas" class="tab" style="display:none">
    {#if modules.length == 0}
        <EmptyState message={"Nenhum módulo cadastrado."} />
    {/if}
    <div class="content">
        {#each modules as module}
            <ItemModulo {module} />
        {/each}
    </div>
</div>

<style>
</style>
