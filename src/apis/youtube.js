import axios from 'axios';

const KEY = 'AIzaSyBgU16D8-5RnIL2R_k7TMZVYsLp4wTehL0'

export default axios.create({

    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        type:'video',
        maxResults:10,
        key:KEY,
    }

})