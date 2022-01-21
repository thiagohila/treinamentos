<script>
    import { getContext } from "svelte";
    import { trainingsStore } from "../../store/training_store";

    import Spinner from "../Spinner.svelte";
    import EmptyState from "../Empty_state.svelte";
    import CardTreinamento from "./Card_treinamento.svelte";
    import TreinamentoSalvar from "./Salvar_treinamento.svelte";

    const openModal = getContext("simple-modal").open;

    const openNewTraining = () => openModal(TreinamentoSalvar);
</script>

<section id="treinamentos">
    <div class="header">
        <div class="title">Seus treinamentos</div>
        <div class="btn-primary" on:click={openNewTraining}>
            NOVO TREINAMENTO
        </div>
    </div>
    <div>
        {#if $trainingsStore.isLoading && $trainingsStore.data.length == 0}
            <Spinner />
        {:else}
            {#if $trainingsStore.data.length == 0}
                <EmptyState message={"Nenhum trainamento cadastrado."} />
            {/if}
            {#each $trainingsStore.data as training}
                <CardTreinamento {training} />
            {/each}
        {/if}
    </div>
</section>

<style>
    #treinamentos .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
    }

    #treinamentos .header .title {
        text-transform: uppercase;
    }
</style>
