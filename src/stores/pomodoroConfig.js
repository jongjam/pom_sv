import { writable } from 'svelte/store';

const defaultConfig = {
    pomodoro: 30, //will be inputted as hours and minutes and saved as just minutes
    intervals : 4, //number of pomodors in a set
    shortBreakDuration: 5, //rest time between pomodoros
    longBreakDuration: 13, //the longer rest time between sets/intervals # of pomodoros
    sessions: 0 // Study sessions completed
};

export const pomodoroConfig = writable(defaultConfig);