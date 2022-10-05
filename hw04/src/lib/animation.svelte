<script lang="ts">
    function handleClick() {
        alert("I said hover not click!");
    }
</script>

<div id="css-animation" class="main-section" on:click={handleClick}>
    <div class="heading2">Hover</div>
</div>

<style>
    #css-animation {
        border-radius: 5px;
        width: 120px;
        position: relative;
        background-color: #3931af;
        animation-name: example;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        text-align: center;
        align-items: center;
    }

    #css-animation:hover {
        background-color: red !important;
    }

    @keyframes example {
        0% {
            background-color: #3931af;
            left: 0px;
        }

        50% {
            background-color: #00c6ff;
            left: calc(100% - 210px);
        }

        100% {
            background-color: #3931af;
            left: 0px;
        }
    }
</style>
