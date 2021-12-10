import axios from "axios";
import Config from '../config.json'

const { BASE_URL } = Config

const instance = axios.create({
    baseURL: BASE_URL
})

/*BILL API*/
export const getAllBills = async () =>{
    const res = await instance.get(`bills/`)
    return res.data
}

export const getBillById = async (bill_id) =>{
    const res = await instance.get(`bills/${bill_id}`)
    return res.data
}

export const getBillByRes_Id = async (res_id) =>{
    const res = await instance.get(`bills/res_id/${res_id}`)
    return res.data
}

export const getBillByGuest_Id = async (guest_id) =>{
    const res = await instance.get(`bills/guest_id/${guest_id}/`)
    return res.data
}

export const getBillByGuest_IdAndRes_id = async (guest_id, res_id) =>{
    const res = await instance.get(`bills/guest_id/${guest_id}/res_id/${res_id}`)
    return res.data
}

/*EMPLOYEE API*/
export const getAllEmployees = async () =>{
    const res = await instance.get(`employees/`)
    return res.data
}

export const getAllEmployeeByEmail = async (email) =>{
    const res = await instance.get(`employees/email/${email}`)
    return res.data
}

export const getAllEmployeesByRole = async (role) =>{
    const res = await instance.get(`employees/role/${role}`)
    return res.data
}

/*GUEST API*/
export const getAllGuests = async () =>{
    const res = await instance.get(`guests/`)
    return res.data
}

export const getGuestByEmail = async (email) => {
    const res = await instance.get(`guests/email/${email}/`)
    return res.data
}

/*HOTEL API*/
export const getAllHotels = async () => {
    const res = await instance.get(`hotels`)
    return res.data
}

export const getHotelById = async (hotel_id) => {
    const res = await instance.get(`hotels/${hotel_id}`)
    return res.data
}

export const getHotelsByCiyt = async (city) => {
    const res = await instance.get(`hotels/city/${city}`)
    return res.data
}

export const getAvailableHotels = async (destination, r_type, check_in, check_out) => {
    const res = await instance.get(`hotels?destination=${destination}&r_type=${r_type}&check_in=${check_in}&check_out=${check_out}`)
    return res.data
}

/*RESERVATION API*/
export const getAllReservations = async () => {
    const res = await instance.get(`reservations`)
    return res.data
}

export const getAllReservationById = async (res_id) => {
    const res = await instance.get(`reservations/res_id/${res_id}`)
    return res.data
}

export const getAllReservationByHotelId = async (hotel_id) => {
    const res = await instance.get(`reservations/hotel_id/${hotel_id}`)
    return res.data
}

export const getAllReservationByGuest_Id = async (guest_id) => {
    const res = await instance.get(`reservations/guest_id/${guest_id}`)
    return res.data
}

/* ROOM API */
export const getAllRooms= async () => {
    const res = await instance.get(`rooms`)
    return res.data
}

export const getRoomsByHotel_Id = async (hotel_id) => {
    const res = await instance.get(`rooms/hotel/${hotel_id}`)
    return res.data
}

export const getRoomsByR_type = async (r_type) => {
    const res = await instance.get(`rooms/room_type/${r_type}`)
    return res.data
}

export const getRoomByHotel_IdAndR_type = async (hotel_id, r_type) => {
    const res = await instance.get(`rooms/hotel/${hotel_id}/type/${r_type}`)
    return res.data
}

export const getRoomByHotel_IdAndR_number = async (hotel_id, r_number) => {
    const res = await instance.get(`rooms/hotel/${hotel_id}/room_number/${r_number}`)
    return res.data
}

export const getAvailableRooms = async (hotel_id, r_type, check_in, check_out) => {
    const res = await instance.get(`rooms/hotel/${hotel_id}/${r_type}/available?check_in=${check_in}&check_out=${check_out}`)
    return res.data
}

/*ROOM TYPE API*/
export const getAllRoomTypes= async () => {
    const res = await instance.get(`room_types`)
    return res.data
}

export const getRoomTypesByHotel_id= async (hotel_id) => {
    const res = await instance.get(`room_types/hotel/${hotel_id}`)
    return res.data
}

export const getRoomTypesByHotel_idAndR_type= async (hotel_id, r_type) => {
    const res = await instance.get(`room_types/hotel/${hotel_id}/type/${r_type}`)
    return res.data
}

/*SCHEDULE API*/
export const getAllSchedules= async () => {
    const res = await instance.get(`schedules`)
    return res.data
}

export const getSchedulesByEmployee_id= async (employee_id) => {
    const res = await instance.get(`schedules/employee/${employee_id}`)
    return res.data
}

export const getSchedulesByHotel_idAndR_number= async (hotel_id, r_number) => {
    const res = await instance.get(`schedules/hotel_id/${hotel_id}/room_number/${r_number}`)
    return res.data
}

/*SERVICE API*/
export const getAllServices= async () => {
    const res = await instance.get(`services`)
    return res.data
}

export const getServicesByHotel_id= async (hotel_id) => {
    const res = await instance.get(`services/hotel/${hotel_id}`)
    return res.data
}

export const getServicesByHotel_idAndService_type= async (hotel_id, service_type) => {
    const res = await instance.get(`services/hotel/${hotel_id}/service/${service_type}`)
    return res.data
}

/*TELEPHONE API*/
export const getAllTelephones= async () => {
    const res = await instance.get(`telephones`)
    return res.data
}

export const getTelephonesByHotel_id= async (hotel_id) => {
    const res = await instance.get(`telephones/hotel/${hotel_id}`)
    return res.data
}

/*USERS API*/
export const getAllUsers= async () => {
    const res = await instance.get(`users`)
    return res.data
}

export const refreshToken= async () => {
    const res = await instance.get(`users/token/refresh`)
    return res.data
}
