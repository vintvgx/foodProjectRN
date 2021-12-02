import axios from 'axios';

export default axios.create({


    baseURL: 'https://api.yelp.com/v3/businesses',

    headers: {
        Authorization: 'Bearer iccmRN10QNBuB_-7bNJwPvngHVexs11jv6XXf4txSiQwL3iUzOSEFd9_PiarFsOc-qTY1kyEwAbM3WuYlD530b6rtNjpmSPFKkQjeVUKnrSrle2pyK31CDenHZ-fYXYx'
    }
});