<script>
    import { getContext } from "svelte";

    const closeModal = getContext("simple-modal").close;

    export let trainingClass;

    const saveTrainingClass = () => {
        alert("Não implementado");
    };

    const disableTrainingClass = () => {
        alert("Não implementado");
    };

    const helper = () => {
        alert("Não implementado");
    };
</script>

<div id="aula-salvar">
    <div class="header">
        <!-- TODO colocar em componente BTNFECHAR -->
        <div class="close" on:click={closeModal}>
            <img src="/images/bi_x.svg" alt="Fechar" />
        </div>
        <div class="title">{trainingClass ? "Editar aula" : "Nova aula"}</div>
        <div class="help" on:click={helper}>
            <img src="/images/bi_question_circle.svg" alt="Ajuda" />
        </div>
    </div>
    <div class="content">
        <form action="">
            <div class="input">
                <label for="modulo-nome">Nome</label>
                <input
                    type="text"
                    name="modulo-nome"
                    id="modulo-nome"
                    value={trainingClass ? trainingClass.name : ""}
                />
            </div>
            <div class="input">
                <label for="modulo-descricao">Conteúdo</label>
                <textarea
                    name="modulo-descricao"
                    id="modulo-descricao"
                    cols="30"
                    rows="10"
                    value={trainingClass ? trainingClass.content : ""}
                />
            </div>
        </form>
    </div>
    <div class="footer">
        <button class="btn-danger" on:click={disableTrainingClass}
            >DESABILITAR</button
        >
        <button class="btn-secondary" on:click={saveTrainingClass}
            >SALVAR</button
        >
    </div>
</div>

<style>
    #aula-salvar {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 580px;
        height: 100%;
        padding: 30px;
        background-color: #f9f9f9;
        box-shadow: var(--box-shadow);

        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 99999;
    }

    #aula-salvar .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 60px;
    }

    #aula-salvar .header .close,
    #aula-salvar .header .help {
        display: flex;
        cursor: pointer;
    }

    #aula-salvar .header .title {
        font-size: 22px;
        font-weight: 700;
    }

    #aula-salvar .content {
        flex: 2;
    }

    #aula-salvar .content .input {
        width: 100%;
        margin-bottom: 30px;
    }

    #aula-salvar .content .input label {
        font-size: 18px;
        margin-bottom: 5px;
    }

    #aula-salvar .content .input-row .input {
        width: 50%;
    }

    #aula-salvar .content .input input,
    #aula-salvar .content .input textarea {
        width: 100%;
        font-size: 16px;
    }

    #aula-salvar .content .input .image-picker img {
        margin-bottom: 12px;
    }

    #aula-salvar .footer {
        display: flex;
        justify-content: space-between;
    }

    #aula-salvar .footer button {
        width: 200px;
        margin: 0;
    }
</style>
