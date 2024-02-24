<main>
    <div class="container">
        <slot></slot>
    </div>
</main>

<style>
    .container {
        text-align: center;
        border-radius: 20px;
        background-color: rgba(243, 240, 240);
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        max-width: 800px;
        height: fit-content;
        max-height: fit-content;
        -webkit-box-shadow: 10.5px 9px 12px -2px #5b89fb;
        -moz-box-shadow: 10.5px 9px 12px -2px #5b89fb;
        box-shadow: 10.5px 9px 12px -2px #5b89fb;
    }
</style>