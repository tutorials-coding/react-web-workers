import { useWebworker, useDisposableWebworker } from './useWebworker'
import { getNthFobonacciNumber } from '../helpers/get-nth-fibonacci-number'

export const useFibonacci = () => {
  return useDisposableWebworker(getNthFobonacciNumber)
}
