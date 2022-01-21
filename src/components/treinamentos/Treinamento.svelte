<script>
    import { getContext } from "svelte";
    import { trainingsStore } from "../../store/training_store";

    import Spinner from "../Spinner.svelte";
    import ResumoTreinamento from "./Resumo_treinamento.svelte";
    import Modulos from "../modulos/Modulos.svelte";
    import ModuloSalvar from "../modulos/Salvar_modulo.svelte";
    import Aulas from "../aulas/Aulas.svelte";
    import AulaSalvar from "../aulas/Salvar_aula.svelte";

    const openModal = getContext("simple-modal").open;

    export let trainingId;
    $: training = $trainingsStore.data.find(
            (training) => training.id == trainingId
        );
    let activeTab = "modulos";

    const openNewModule = () => openModal(ModuloSalvar);
    const openNewClass = () => openModal(AulaSalvar);

    function changeTab(e, tab) {
        activeTab = tab;
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(
                " active",
                ""
            );
        }
        document.getElementById(tab).style.display = "block";
        e.currentTarget.className += " active";
    }
</script>

<section id="treinamento">
    <div class="header">
        <div class="tab-btns">
            <button
                class="tablinks active"
                on:click={(event) => changeTab(event, "modulos")}>Módulo</button
            >
            <button
                class="tablinks"
                on:click={(event) => changeTab(event, "aulas")}>Aulas</button
            >
        </div>
        <div class="cta">
            {#if activeTab == "modulos" || training.modules.length == 0}
                <div class="btn-primary" on:click={openNewModule}>
                    NOVO MÓDULO
                </div>
            {:else if activeTab == "aulas"}
                <div class="btn-primary" on:click={openNewClass}>NOVA AULA</div>
            {/if}
        </div>
    </div>
    <div class="content">
        {#if $trainingsStore.isLoading || training == undefined}
            <Spinner />
        {:else}
            <div class="tabs">
                <Modulos trainingId={training.id} modules={training.modules} />
                <Aulas trainingId={training.id} modules={training.modules} />
            </div>
            <div class="description">
                <ResumoTreinamento {training} />
            </div>
        {/if}
    </div>
</section>

<style>
    #treinamento .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
        gap: 30px;
    }

    #treinamento .header .tab-btns {
        text-transform: uppercase;
        flex: 3;
        border-bottom: 3px solid var(--colors-primary);
        display: flex;
        justify-content: start;
        align-items: flex-end;
    }

    #treinamento .header .tab-btns .tablinks {
        width: 200px;
        background-color: #dee2e6;
        padding: 8px 0;
        margin: 0 -1px -1px 0;
        cursor: pointer;
        border-radius: 0;
    }

    #treinamento .header .tab-btns .tablinks.active {
        background-color: var(--colors-primary);
        color: #ffffff;
    }

    #treinamento .header .tab-btns .tablinks:first-child {
        border-top-left-radius: var(--border-radius);
    }

    #treinamento .header .tab-btns .tablinks:last-child {
        border-top-right-radius: var(--border-radius);
    }

    #treinamento .header .cta {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
    }

    #treinamento .content {
        display: grid;
        grid-template-columns: 3fr 1fr;
        gap: 30px;
    }
</style>
