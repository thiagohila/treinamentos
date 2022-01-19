<script>
    export let status;
    export let hideEnabled = false;

    function getStatusDescription(status) {
        switch (status) {
            case 0:
                return "desabilitado";
            case 1:
                return "habilitado";
            default:
                return "indefinido";
        }
    }

    function getStatusColor(status) {
        switch (status) {
            case 0:
                return "danger";
            case 1:
                return "secondary";
            default:
                return "gray";
        }
    }
</script>

<div
    class="status {getStatusColor(status)}"
    class:visually-hidden={hideEnabled && status == 1}
>
    {getStatusDescription(status)}
</div>

<style>
    .status {
        border-radius: 15px;
        font-size: 14px;
        text-align: center;
        text-transform: uppercase;
        width: 100%;
        background-color: var(--colors-gray);
        color: #ffffff;
        font-weight: 400;
        padding: 3px 0;
        width: 120px;
    }

    .status.danger {
        background-color: var(--colors-danger);
    }

    .status.secondary {
        background-color: var(--colors-secondary);
    }

    .visually-hidden {
        display: none;
    }
</style>
