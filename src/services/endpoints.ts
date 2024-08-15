import { People } from '@/types/People'
import axios from 'axios'

const ENDPOINTS = {
  RANDOM_USER: 'https://randomuser.me/api/?results=10',
}

export const getPeople = async (): Promise<People[]> => {
  const { data } = await axios.get(`${ENDPOINTS.RANDOM_USER}`)
  if (!data.results) return []

  return data.results.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (personInfo: any): People => ({
      fullName: `${personInfo.name.first} ${personInfo.name.last}`,
      gender: personInfo.gender,
      location: `${personInfo.location.street.name} ${personInfo.location.street.number}`,
      email: personInfo.email,
      birthdate: new Date(personInfo.dob.date).toLocaleDateString(),
      photoURL: personInfo.picture.medium,
    }),
  )
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
