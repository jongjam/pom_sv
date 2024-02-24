<script>
    export let count = 0
    console.log(count)
</script>


<main>
    <div class="time-selector"> 
        <button class="arrow plus"on:click={() => {count++}}></button>
        <input type="number" bind:value={count}/>
        <button class="arrow minus"on:click={() => {count--}}></button>
    </div>
</main>

<style>
    .time-selector {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }

    .time-selector input[type="number"]::-webkit-outer-spin-button,
                   input[type="number"]::-webkit-inner-spin-button {
                   -webkit-appearance: none;
    }

    .time-selector input {
        text-align: center;
        height: auto;
        margin: 5px auto;
        width: 23px;
    }

    .arrow {
        height: 4px;
        width: 4px;
        border: solid black;
        border-width: 0 3px 3px 0;
        display: inline-block;
        margin: 5px auto;
        padding: 3px;
    }

    .plus {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
    }
    
    .minus {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    } 
</style>