var assert = require('assert')
var AJV = require('ajv')

var ajv = new AJV()
var validate = ajv.compile(require('./'))

validate([
  {
    blank: ['content', 3],
    label: 'First Party',
    explanation: [
      'The legal name of the first party.'
    ],
    examples: [
      'SomeCo, Inc.'
    ]
  },
  {
    blank: ['content', 5],
    sameAs: ['content', 3]
  }
])

assert.deepEqual(
  validate.errors, null
)
