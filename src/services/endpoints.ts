import axios from 'axios'

const ENDPOINTS = {
  RANDOM_USER: 'https://randomuser.me/api/?results=10',
}

export const getPeople = async () => {
  const { data } = await axios.get(`${ENDPOINTS.RANDOM_USER}`)
  return data.results
}

// export const getOnePeople = async (id: number) => {
//   const response = await axios.get(`${ENDPOINTS.RANDOM_USER}people/${id}`)
//   return response
// }

// export const getOnePlanet = async (id: number) => {
//   const response = await axios.get(`${ENDPOINTS.RANDOM_USER}planets/${id}`)
//   return response
// }

// export const getVehicle = async (id: number) => {
//   const response = await axios.get(`${ENDPOINTS.RANDOM_USER}vehicles/${id}`)
//   return response
// }
