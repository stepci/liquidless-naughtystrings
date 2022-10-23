import { renderTemplate } from 'liquidless'
import { naughtystring } from '../src'

const string = renderTemplate('{{ | naughtystring }}', {}, {
  filters: {
    naughtystring
  }
})

console.log(string)
