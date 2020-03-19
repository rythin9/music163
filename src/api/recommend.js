import axios from 'axios'
import {HOST} from '@/common/js/config'

// 获取轮播图
export function getBanner(){
    const url = HOST + '/banner'  //http://localhost:3000/banner
    return axios.get(url)
}

// 获取歌单
export function getRecommendList(){
    const url = HOST + '/personalized'  
    return axios.get(url)
}