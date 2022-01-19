<script>
    import { getContext } from "svelte";
    import { Link } from "svelte-navigator";
    
    import StatusPill from "../Status_pill.svelte";
    import TreinamentoSalvar from "./Salvar_treinamento.svelte";

    const openModal = getContext("simple-modal").open;

    const editTraining = (training) =>
        openModal(TreinamentoSalvar, { training: training });

    export let training;
</script>

<div class="card">
    <Link class="link" to="{training.id.toString()}" />
    <div class="image">
        <img src="/images/default_logo_treinamento.png" alt="Logo Svelte" />
    </div>
    <div class="content">
        <div class="info">
            <div class="name">{training.name}</div>
            <div class="description">
                {training.description}
            </div>
        </div>
        <div class="extra">
            <StatusPill status={training.status} />
            <div class="actions">
                <div class="action" on:click={() => editTraining(training)}>
                    <img src="/images/bi_pencil_square.svg" alt="Editar" />
                </div>
                <div class="action">
                    <img src="/images/bi_trash.svg" alt="Remover" />
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    :global(.link) {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: calc(100% - 160px);
    }

    .card {
        display: flex;
        position: relative;
        height: 100px;
        background: var(--page-content-card);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        overflow: hidden;
        margin-bottom: 30px;
    }

    .card .image {
        width: 170px;
    }

    .card .content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
    }

    .card .content .info {
        width: 100%;
        padding-right: 20px;
    }

    .card .content .info .name {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 4px;
    }

    /* Teste de ellipsis em 2 linhas, porém deve ser feito em js */
    .card .content .info .description {
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .card .content .extra {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
    }

    .card .content .extra .actions {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: flex-end;
        bottom: 0;
    }

    .card .content .extra .actions .action {
        display: flex;
        cursor: pointer;
        align-items: flex-end;
    }

    .card .content .extra .actions .action img {
        max-width: 20px;
    }
</style>
