import { assert, describe, it } from 'vitest'
import { stripHeadings, stripHeadingsCode } from './../src/index.js'

describe('🧪 strip-md-headings tests 🧪', () => {
  it('#1 should return true', () => {
    assert.isEmpty(stripHeadings(''))
  })

  it('#2 should return true', () => {
    assert.isEmpty(stripHeadingsCode(''))
  })

  it('#3 should return empty', () => {
    assert.isEmpty(stripHeadings('## Hello'))
  })

  it('#4 should return Hello', () => {
    assert.equal(stripHeadingsCode('## Hello'), 'Hello')
  })
})
