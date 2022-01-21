<script>
    export let smallSpinner;
</script>

<div class="loader" class:small={smallSpinner} />

<style>
    .loader,
    .loader:after {
        border-radius: 50%;
        width: 70px;
        height: 70px;
    }
    .loader {
        margin: 0 auto;
        font-size: 10px;
        position: relative;
        text-indent: -9999em;
        border-top: 4px solid rgba(255, 255, 255, 0.4);
        border-right: 4px solid rgba(255, 255, 255, 0.4);
        border-bottom: 4px solid rgba(255, 255, 255, 0.4);
        border-left: 4px solid #C1C1C1;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation: load8 1.1s infinite linear;
        animation: load8 1.1s infinite linear;
    }
    .loader.small {
        width: 20px;
        height: 20px;
    }
    @-webkit-keyframes load8 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes load8 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
</style>
