<script>
    import PomodoroSetup from '../../components/PomodoroSetup.svelte'
    import { goto } from '$app/navigation';
 
    function goToTimer() {
        console.log('clicked')
        goto('/pomodoroTimer')
    }

</script>

<PomodoroSetup on:click={goToTimer}/>