<script>
    import { getContext } from "svelte";
    
    const closeModal = getContext("simple-modal").close;

    export let training;
</script>

<div id="treinamento-salvar">
    <div class="header">
        <div class="close" on:click="{closeModal}"><img src="/images/bi_x.svg" alt="Fechar" /></div>
        <div class="title">{training ? 'Editar treinamento' : 'Novo treinamento'}</div>
        <div class="help">
            <img src="/images/bi_question_circle.svg" alt="Ajuda" />
        </div>
    </div>
    <div class="content">
        <form action="">
            <div class="input">
                <div class="image-picker">
                    <img src="/images/bi_camera.svg" alt="Seletor imagem" />
                    Selecione uma imagem
                </div>
            </div>
            <div class="input">
                <label for="treinamento-nome">Nome</label>
                <input
                    type="text"
                    name="treinamento-nome"
                    id="treinamento-nome"
                    value="{training ? training.name : ''}"
                />
            </div>
            <div class="input">
                <label for="treinamento-descricao">Descrição</label>
                <textarea
                    name="treinamento-descricao"
                    id="treinamento-descricao"
                    cols="30"
                    rows="10"
                    value="{training ? training.description : ''}"
                />
            </div>
            <div class="input">
                <label for="treinamento-carga-horaria">Carga horária</label>
                <input
                    type="text"
                    name="treinamento-carga-horaria"
                    id="treinamento-carga-horaria"
                    value="{training ? training.workload : ''}"
                />
            </div>
            <div class="input-row">
                <div class="input">
                    <label for="treinamento-data-ativacao-curso"
                        >Ativação do curso</label
                    >
                    <input
                        type="text"
                        name="treinamento-data-ativacao-curso"
                        id="treinamento-data-ativacao-curso"
                        value="{training ? training.activationDate : ''}"
                    />
                </div>
                <div class="input">
                    <label for="treinamento-data-desativacao-curos"
                        >Desativação do curso</label
                    >
                    <input
                        type="text"
                        name="treinamento-data-desativacao-curos"
                        id="treinamento-data-desativacao-curos"
                        value="{training ? training.deactivationDate : ''}"
                    />
                </div>
            </div>
        </form>
    </div>
    <div class="footer">
        <button class="btn-danger">DESABILITAR</button>
        <button class="btn-secondary">SALVAR</button>
    </div>
</div>

<style>
    #treinamento-salvar {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 580px;
        height: 100%;
        padding: 30px;
        background-color: #f9f9f9;
        box-shadow: var(--box-shadow);
        overflow: auto;

        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 99999;
    }

    #treinamento-salvar .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 60px;
    }

    #treinamento-salvar .header .close,
    #treinamento-salvar .header .help {
        display: flex;
        cursor: pointer;
    }

    #treinamento-salvar .header .title {
        font-size: 22px;
        font-weight: 700;
    }

    #treinamento-salvar .content {
        flex: 2;
    }

    #treinamento-salvar .content .input {
        width: 100%;
        margin-bottom: 30px;
    }

    #treinamento-salvar .content .input label {
        font-size: 18px;
        margin-bottom: 5px;
    }

    #treinamento-salvar .content .input-row {
        display: flex;
        gap: 60px;
    }

    #treinamento-salvar .content .input-row .input {
        width: 50%;
    }

    #treinamento-salvar .content .input input,
    #treinamento-salvar .content .input textarea {
        width: 100%;
        font-size: 16px;
    }

    #treinamento-salvar .content .input .image-picker {
        width: 170px;
        height: 100px;
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23333' stroke-width='3' stroke-dasharray='12%2c 15' stroke-dashoffset='14' stroke-linecap='square'/%3e%3c/svg%3e");
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        margin: 0 auto;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        cursor: pointer;
    }

    #treinamento-salvar .content .input .image-picker img {
        margin-bottom: 12px;
    }

    #treinamento-salvar .footer {
        display: flex;
        justify-content: space-between;
    }

    #treinamento-salvar .footer button {
        width: 200px;
        margin: 0;
    }
</style>
