<script>
    import { onMount } from "svelte";

    import EmptyState from "../Empty_state.svelte";
    import CardModulo from "./Card_modulo.svelte";

    export let trainingId;
    export let modules = [];
</script>

<div id="modulos" class="tab">
    {#if modules.length == 0}
        <EmptyState message={"Nenhum módulo cadastrado."} />
    {/if}
    <div class="cards">
        {#each modules as module}
            <CardModulo {module} />
        {/each}
    </div>
</div>

<style>
    #modulos .cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }

    /* RESPONSIVE */
    @media screen and (max-width: 992px) {
        #modulos .cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 767px) {
        #modulos .cards {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
