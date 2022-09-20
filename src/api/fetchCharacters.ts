import { ResponseData } from '../types/responseData.types'

export const fetchCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character')

  const responseData: ResponseData = await response.json()

  return responseData
}
