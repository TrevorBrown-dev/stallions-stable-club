import axios from 'axios';

export const calendarApi = axios.create({
    baseURL: 'https://www.googleapis.com/calendar/v3',
    params: {
        key: 'AIzaSyAHwsH4Yvosm9BvxfmOqklmuqmiNO6QuqQ',
    },
});
