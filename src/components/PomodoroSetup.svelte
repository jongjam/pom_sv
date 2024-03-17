<script>
    import { pomodoroConfig } from '../stores/pomodoroConfig.js'
    import Container from './Container.svelte';
    let pdCompletedCount = 0; //Number of pomodoros fully completed until timer gets to 0
    let pdPartialCompletion = 0; // Will be in minutes. if a pd timer does not hit 0... then this will equal pdDuration - timeRemaining 
</script>

<main>
    <Container>
        <form class="pom_config" on:submit|preventDefault>
                <div class="form_item pd">
                    <p><span>{$pomodoroConfig.pomodoro}</span> minutes</p>
                    <label for="pd Length"> Pomodoro Duration</label>
                    <input bind:value={$pomodoroConfig.pomodoro} type="range" min="0" max="120" step="1" class="pd length"> <!--Can put the up and down increment buttons here if I want-->            
                </div>    
                <div class="form_item int">
                    <p><span>{$pomodoroConfig.intervals}</span></p>
                    <label for="pd-countInSet"> Number of Pomodoro intervals</label>
                    <input bind:value={$pomodoroConfig.intervals} type="range" min="0" max="120" step="1" class="pd pd-countInSet"> <!-- # of Pomodoro -->
                </div>
                <div class="form_item sb">
                    <p><span>{$pomodoroConfig.shortBreakDuration}</span> minutes</p>
                    <label for="pd-shortBreakDuration"> Short rest time between intervals</label>
                    <input bind:value={$pomodoroConfig.shortBreakDuration} type="range" min="0" max="120" step="1" class="pd pd-shortBreakDuration"> <!-- rest between pomodoro-->
                </div>
                <div class="form_item lb">
                    <p><span>{$pomodoroConfig.longBreakDuration}</span> minutes</p>
                    <label for="set-longBreakDuration"> Long rest time after a set of intervals  </label>
                    <input bind:value={$pomodoroConfig.longBreakDuration} type="range" min="0" max="120" step="1" class="pd set-longBreakDuration"> <!-- Long rest in between -->
                </div>
            <button type="submit" on:click>Submit</button>
        </form>
    </Container>
</main>

<style>

    .form_item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 10px 0;
    }

    .form_item label {
        color: rgba(97, 107, 121, 0.9);
        margin: 5px 0;
    }

    .form_item span{
        font-weight: bold;
    }

    .pom_config {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 30px;
    }

    .pom_config button {
        margin-top: 15px;
    }
</style>

