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

  it('#5 should keep inline formatting inside headings', () => {
    assert.equal(
      stripHeadingsCode('# *Italic* and **Bold**'),
      '*Italic* and **Bold**'
    )
  })

  it('#6 should strip trailing hashes correctly', () => {
    assert.equal(stripHeadingsCode('## Title ##'), 'Title')
  })

  it('#7 should handle up to 3 leading spaces before heading', () => {
    assert.equal(stripHeadingsCode('   ### Indented'), 'Indented')
  })

  it('#8 should ignore lines without heading syntax', () => {
    assert.equal(
      stripHeadings('Paragraph\nAnother line'),
      'Paragraph\nAnother line'
    )
  })

  it('#9 should return empty string on empty input', () => {
    assert.equal(stripHeadings(''), '')
    assert.equal(stripHeadingsCode(''), '')
  })

  it('#10 should return empty string on non-string input', () => {
    // @ts-expect-error
    assert.equal(stripHeadings(null), '')
    // @ts-expect-error
    assert.equal(stripHeadingsCode(undefined), '')
  })
})
