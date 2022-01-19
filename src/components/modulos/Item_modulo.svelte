<script>
    import EmptyState from "../Empty_state.svelte";
    import StatusPill from "../Status_pill.svelte";
    import ItemAula from "../aulas/Item_aula.svelte";

    export let module = {};

    function toggleAccordion(e) {
        let target = e.currentTarget;
        target.classList.toggle("active");
        var panel = target.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
</script>

<button class="accordion active" on:click={(event) => toggleAccordion(event)}>
    <div class="name">{module.name}</div>
    <div class="status">
        <StatusPill status={module.status} hideEnabled={true} />
    </div></button
>
<div class="panel">
    {#if module.classes.length == 0}
        <EmptyState message={"Nenhuma aula cadastrada."} />
    {/if}
    {#each module.classes as trainingClass}
        <ItemAula {trainingClass} />
    {/each}
</div>

<style>
    .accordion {
        background-color: #f5f9f9;
        cursor: pointer;
        padding: 13px 20px;
        width: 100%;
        border: none;
        text-align: start;
        outline: none;
        font-size: 16px;
        font-weight: 700;
        transition: 0.4s;
        margin: 0;
        border-radius: var(--border-radius);
    }

    .accordion:hover {
        background-color: #eef2f2;
    }

    .accordion:after {
        content: "\002B";
        color: #777;
        font-weight: bold;
        float: right;
        margin-left: 5px;
    }

    /* Achar melhor solução para as classes futuras */
    :global(.accordion.active) {
        border-bottom-left-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
    }

    /* Achar melhor solução para as classes futuras */
    :global(.accordion.active:after) {
        content: "\2212" !important;
    }

    .accordion .name,
    .accordion .status {
        display: inline-flex;
    }

    .accordion .name {
        margin-right: 20px;
    }

    .panel {
        background-color: white;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
        margin-bottom: 10px;
    }
</style>
