<script>
    import StatusPill from "../Status_pill.svelte";

    export let training;
</script>

<div class="resumo">
    <div class="image" style="background-image: url('/images/default_logo_modulo.png');">
    </div>
    <div class="content">
        <div class="info">
            <div class="title">
                <div class="name">{training.name}</div>
                <div class="status">
                    <StatusPill status="{training.status}" />
                </div>
            </div>
            <div class="description">
                {training.description}
            </div>
            <div class="duration">
                Duração: <span>{training.workload}</span>
            </div>
        </div>
    </div>
</div>

<style>
    .resumo {
        overflow: hidden;
        margin-bottom: 30px;
    }

    .resumo .image {
        height: 115px;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: var(--border-radius);
    }

    .resumo .content {
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 35px 0;
        position: relative;
    }

    .resumo .content .info {
        width: 100%;
    }

    .resumo .content .info .title{
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding-bottom: 30px;
    }

    .resumo .content .info .title .name {
        font-size: 22px;
        font-weight: 700;
        line-height: 22px;
        padding-right: 20px;
    }

    .resumo .content .info .title .status {
        height: 100%;
        position: relative;
    }

    .resumo .content .info .description {
        font-size: 14px;
        margin-bottom: 5px;
    }

    .resumo .content .info .duration{
        font-size: 14px;
        font-weight: bold;
    }

    .resumo .content .info .duration span{
        font-weight: normal;
    }
</style>
