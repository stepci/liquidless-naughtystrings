import { FilterFunction } from 'liquidless/dist/filters'
import naughtystrings from './naughtystrings.json'

export const naughtystring: FilterFunction = (value, args, variable) => {
  return naughtystrings[Math.floor(Math.random() * naughtystrings.length)]
}
