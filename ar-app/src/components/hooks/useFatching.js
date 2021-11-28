import { useState } from 'react'

export const useFetching = (callback) => {
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState('')

   const fetching = async (...props) => {
      try {
         setIsLoading(true)
         await callback(...props)
      } catch (e) {
         console.log('error ', e.message);
         setError(e.message)
      } finally {
         setIsLoading(false)
      }
   }

   return [fetching, isLoading, error]
}