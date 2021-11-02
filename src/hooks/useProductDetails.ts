import useSWR, { Fetcher } from 'swr';
import fetch from 'node-fetch';
// @ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json())

function useProductDetails() {
    const { data, error } = useSWR('https://fakestoreapi.com/products/1', fetcher)

    return {
      product: data,
      isLoading: !error && !data,
      isError: error
    }
  }

export default useProductDetails;