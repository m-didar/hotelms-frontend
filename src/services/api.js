import axios from "axios";
import Config from '../config.json'

const { BASE_URL } = Config

const instance = axios.create({
    baseURL: BASE_URL
})

export const getAllHotels = async () => {
    const res = await instance.get(`hotels`)
    return res
}
