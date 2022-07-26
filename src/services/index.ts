import axios from 'axios'
import { API_URLS } from './servicesRoutes'

const token = import.meta.env.VITE_TOKEN

type paramsType = {
  [key: string]: string | undefined
}
const paramsHandler = (route: string, params?: paramsType) => {
  if (params?.token) {
    return params?.query ? `${route}?token=${token}&query=${params.query}` : `${route}?token=${token}`
  }
  return params?.query ? `${route}?query=${params.query}` : route
}

export const generalService = (route: string) => {
  return ({
    get: async (query?: string) => axios.get(paramsHandler(route, { token, query })),
  })
}

export const releasesService = generalService(API_URLS.RELEASES)
