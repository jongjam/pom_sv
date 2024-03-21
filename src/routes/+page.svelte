<script>
    import { goto } from '$app/navigation';
    import Time from '/home/delicious_yangpa/workspace/sk_clock/src/components/Time.svelte'
    import PomodoroSetup from '../components/PomodoroSetup.svelte' // even if it is not used I want to indicate that it is part of our project here
    import TimeIncrementer from '../components/TimeIncrementer.svelte';
    //Put the time button or put something here to indicate that clicking on start studying in Time goes to the Pomodoro
    
    function goToPomodoro() { // send this on click signal to the main page
        console.log('clicked2')
        goto('/pomodoroSetup')
    }
</script>

<main>
    <Time on:click={goToPomodoro}/>
</main>
