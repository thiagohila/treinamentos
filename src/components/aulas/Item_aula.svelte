<script>
    import { getContext } from "svelte";

    import AulaSalvar from "./Salvar_aula.svelte";

    const openModal = getContext("simple-modal").open;

    const editTrainingClass = (trainingClass) =>
        openModal(AulaSalvar, { trainingClass: trainingClass });

    export let trainingClass;
</script>

<div class="item-class">
    <div class="icon">
        <img src="/images/bi_book_black.svg" alt="Aula" />
    </div>
    <div class="name">{trainingClass.name}</div>
    <div class="actions">
        <div class="action" on:click={() => editTrainingClass(trainingClass)}>
            <img src="/images/bi_pencil_square.svg" alt="Editar" />
        </div>
        <div class="action">
            <img src="/images/bi_trash.svg" alt="Remover" />
        </div>
    </div>
</div>

<style>
    .item-class {
        display: flex;
        align-items: center;
        padding: 12px 26px;
    }

    .item-class:nth-child(odd) {
        background-color: #fdf8f8;
    }

    .item-class:nth-child(even) {
        background-color: #fcfdf8;
    }

    .item-class .icon {
        display: flex;
        width: 20px;
        margin-right: 20px;
        align-items: center;
    }

    .item-class .name {
        width: 100%;
    }

    .item-class .actions {
        width: 60px;
        margin-left: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        bottom: 0;
    }

    .item-class .actions .action {
        display: flex;
        cursor: pointer;
    }

    .item-class .actions .action img {
        max-width: 20px;
    }
</style>
