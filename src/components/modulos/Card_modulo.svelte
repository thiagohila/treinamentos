<script>
    import { getContext } from "svelte";

    import StatusPill from "../Status_pill.svelte";
    import ModuloSalvar from "./Salvar_modulo.svelte";

    const openModal = getContext("simple-modal").open;

    export let module = {};

    const editModule = (module) => openModal(ModuloSalvar, { module: module });
</script>

<div class="card">
    <div
        class="image"
        style="background-image: url('/images/default_logo_modulo.png');"
    />
    <div class="content">
        <div class="info">
            <div class="name">{module.name}</div>
            <div class="description">
                {module.description}
            </div>
            <div class="classes">
                Aulas: <span>{module.classes.length}</span>
            </div>
        </div>
        <div class="status">
            <StatusPill status={module.status} />
        </div>
        <div class="actions">
            <div class="edit" on:click={() => editModule(module)}>
                <img src="/images/bi_pencil_square.svg" alt="Editar" />
            </div>
            <div class="remove">
                <img src="/images/bi_trash.svg" alt="Remover" />
            </div>
        </div>
    </div>
</div>

<style>
    .card {
        background: var(--page-content-card);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        overflow: hidden;
        margin-bottom: 30px;
        /* max-width: 400px; */
    }

    .card .image {
        height: 115px;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .card .content {
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 15px 50px 15px 15px;
        position: relative;
    }

    .card .content .info {
        width: 100%;
        padding-right: 20px;
        padding-bottom: 60px;
    }

    .card .content .info .name {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 5px;
    }

    .card .content .info .description {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 5px;
    }

    .card .content .info .classes {
        font-size: 14px;
        font-weight: bold;
    }

    .card .content .info .classes span {
        font-weight: normal;
    }

    .card .content .status {
        width: 140px;
        height: 100%;
        position: relative;
    }

    .card .content .actions {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        position: absolute;
        padding: 15px;
        top: 0;
        right: 0;
        bottom: 0;
    }

    .card .content .actions .edit {
        display: flex;
        cursor: pointer;
    }

    .card .content .actions .remove {
        display: flex;
        cursor: pointer;
    }

    .card .content .actions .action img {
        max-width: 20px;
    }
</style>
