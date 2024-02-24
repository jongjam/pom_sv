<script>
    import {onDestroy, onMount} from 'svelte';
    import * as timeUtils from '../utils/timeUtils.js'
    
    const currentDate = new Date();
    let clockInterval;

    let userTime = '12:00 AM'; //Ideally the placeholder would still be now time but it'll hold. 
    let userDisplayDate = 'July 5, 2020';
    
    let worldTimeAPIUrls = [
        "https://www.timeapi.io/api/Time/current/zone?timeZone=Australia/Melbourne",
        "https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Tokyo",
        "https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Seoul",
        "https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Hong_Kong",
        "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/London",
        "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Paris",
        "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Berlin",
        "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Moscow",
        "https://www.timeapi.io/api/Time/current/zone?timeZone=America/Los_Angeles",
        "https://www.timeapi.io/api/Time/current/zone?timeZone=America/New_York"
    ]

    // I have retrieved all world times and it is okay now just have to format it
    
    let worldTimes = {
        "Melbourne": '12:00 AM',
        "Tokyo": '12:00 AM',
        "Seoul": '12:00 AM',
        "Hong Kong": '12:00 AM',
        "London": '12:00 AM',
        "Paris":  '12:00 AM',
        "Berlin": '12:00 AM',
        "Moscow": '12:00 AM',
        "Los Angeles": '12:00 AM',
        "New York": '12:00 AM'
    }; //hh mm ss
    
    //every however long intervals switch the things by a certain number of degrees

    onMount(async () => {
        try {
            const responses = await Promise.all(worldTimeAPIUrls.map(url => fetch(url)));
            const data = await Promise.all(responses.map(response => response.json()));
            let i = 0;
            for (let key in worldTimes) {
                worldTimes[key] = timeUtils.getWorldTime(data[i])
                i++;
            }
        } catch (error) {
            console.error('Error detching data:', error);
        }

        clockInterval = setInterval(() => {
            userTime = timeUtils.getUserTime(currentDate); // need a placeholder time because it is undefined at the beginning probably to account for the time it takes to API CALL
            userDisplayDate = timeUtils.getUserDate(currentDate);
        }, 1000);
    });

    let date = new Date();

    /*** Time function ***/
    /**Note: I would have liked for world time and user time to be in a single method but using built in JS to get local time and then
     using world API for world time was a bit easier and I wanted to try out API calls even though I could've just used offsets **/

     // This and userTime and userDate will be in interval I guess I could just make one big interval and have it run these three functions

    onDestroy(() => {
        clearInterval(clockInterval);
    });
</script>

<main>
    <!-- <AnalogClock time={worldTime} name=Seoul-->
    <div class="clock_containers">
        <div class="world-time-container">
            {#each Object.entries(worldTimes) as [city, time]}
                <div class="shared-container world-time-display">
                    <h1>{city}</h1>
                    <p>{time}</p>
                </div>
            {/each}
        </div>
        <div class ="user-time-container">
            <div class="shared-container time-display">
                <h1>{userTime}</h1>
                <p>{userDisplayDate}</p>
                <button on:click> Start Studying </button> 
            </div>
        </div>
    </div>
</main>

<style>
    .clock_containers {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .shared-container {
        text-align: center;
        border-radius: 20px;
        background-color: rgb(234, 234, 234, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 500px;
        height: 300px;
        -webkit-box-shadow: 10.5px 9px 12px -2px #5b89fb;
        -moz-box-shadow: 10.5px 9px 12px -2px #5b89fb;
        box-shadow: 10.5px 9px 12px -2px #5b89fb;
    }
    
    .world-time-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-content: flex-start;
        column-gap: 1em;
        row-gap: 1em;
        margin: 30px;
    }
    
    .world-time-display {
        padding: 10px;
        flex-direction: column;
        /* flex-basis: calc(25% - 5px);  */
        /* margin: 10px; */
        box-sizing: border-box;
        width: 200px;
        height: 150px;
    }
    
    .time-display {
        flex-direction: column;
    }

    .time-display p {
        margin-bottom: 20px;
    }
    
    .user-time-container {
        display: flex;
        justify-content: center;
    }
    
    /* @media (min-width: 640px) {
        .time-display {
            max-width: none;
		}
	}

    @media (min-width: 640px) {
		.tz_form {
			max-width: none;
		}
	} */
</style>