<script>
    import { onMount } from "svelte";
    import { getContext } from "svelte";
    import { trainingsStore } from "../../store/training_store";

    import Spinner from "../Spinner.svelte";
    import EmptyState from "../Empty_state.svelte";
    import CardTreinamento from "./Card_treinamento.svelte";
    import TreinamentoSalvar from "./Salvar_treinamento.svelte";

    const openModal = getContext("simple-modal").open;

    // let trainings = [];

    onMount(async () => {
        await trainingsStore.getTrainings();
        console.log("trainingsStore", trainingsStore);
        // trainings = [
        //     {
        //         id: 1,
        //         status: 1,
        //         name: "Primeiro treino",
        //         description:
        //             "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        //         workload: "10",
        //         activationDate: "2022-01-01",
        //         deactivationDate: "2022-02-01",
        //     },
        //     {
        //         id: 2,
        //         status: 0,
        //         name: "Segundo treino",
        //         description:
        //             "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        //         workload: "10",
        //         activationDate: "2022-01-01",
        //         deactivationDate: "2022-01-10",
        //     },

        // ];
    });

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
