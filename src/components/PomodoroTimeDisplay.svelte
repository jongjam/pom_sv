<script>
    import Container from './Container.svelte';
    import Page from '../routes/pomodoroTimer/+page.svelte';
    import { pomodoroConfig } from '../stores/pomodoroConfig.js'
    import {convertMinutesToSeconds, formatTime} from '../utils/timeUtils.js'
    import { onDestroy } from 'svelte';

    // Timer is in this format with dummy values except for pomodoro. It will always start in pomodoro
    /* const timer = {
        pomodoro: 30, 
        intervals : 4, 
        shortBreakDuration: 5, 
        longBreakDuration: 13, 
        mode : 'pomodoro' 'shortBreak' 'longBreak'
       
    };
    */

    const timer = $pomodoroConfig;
    timer.mode = 'pomodoro';

    let first = true;
    let running = false;
    //let remainingTime = convertMinutesToSeconds($pomodoroConfig.pomodoro);
    let countDownInterval;

    let remainingTime = $pomodoroConfig.pomodoro; // for testing purposes
    let shortBreakDuration = $pomodoroConfig.shortBreakDuration;
    let longBreakDuration = $pomodoroConfig.longBreakDuration;
    let intervals = $pomodoroConfig.intervals;

    let pomodorosCompleted = 0;

    $: displayTime = formatTime(remainingTime); //string

    function handleClick() {
       running = !running; 
       if (running) {
            startTimer(remainingTime, running);
       } else {
            stopTimer();
       }
    }

    // https://freshman.tech/pomodoro-timer/
    function startTimer() {
        countDownInterval = setInterval(function() {
            remainingTime -= 1;
            console.log(`remaining time testing with custom intervals: ${remainingTime}`);
            // problem the mode isn't changing now
            if (remainingTime <= 0) {
                stopTimer();
                switch(timer.mode) {
                    case 'pomodoro' :
                        pomodorosCompleted += 1;
                        console.log(`pc: ${pomodorosCompleted}`);
                        if (pomodorosCompleted % intervals == 0) {
                            timer.mode = 'longBreak'
                            remainingTime = longBreakDuration;
                        } else {
                            timer.mode = 'shortBreak'
                            remainingTime = shortBreakDuration;
                            console.log(`rt: ${remainingTime}`);
                        }
                        break;
                    default :
                        timer.mode= 'pomodoro'
                        remainingTime = timer.pomodoro;
                }
                displayTime = formatTime(remainingTime);
                startTimer();
            } else {
                displayTime = formatTime(remainingTime);
            }
        }, 1000);
    }
     
    // Clears the interval 
    function stopTimer() {
        clearInterval(countDownInterval);
    }
</script>

<main>
    <Container>
        <div class="time-group">
            <span class="capitalize-first">{timer.mode}</span>
            <h1>{displayTime}</h1>
            <p> Interval Number : {pomodorosCompleted + 1}</p>
            <button on:click={handleClick} on:click={() => first = false}>
                {#if first}
                    Start
                {:else if running}
                    Pause
                {:else}
                    Resume
                {/if}
            </button>
        </div>    
    </Container>
</main>

<style>
    .time-group {
        margin: 80px;
    }

    .time-group h1 {
        margin-bottom: 20px;
    }

    .time-group p {
        margin: 15px 0;
    }

    .capitalize-first::first-letter {
        text-transform: uppercase;
    }

</style>
