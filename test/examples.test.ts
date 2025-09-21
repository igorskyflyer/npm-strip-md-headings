// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, it } from 'vitest'
import { stripHeadings, stripHeadingsCode } from './../src/index.js'

describe('🧪 strip-md-headings tests 🧪', () => {
  it('🧹 should strip all markdown headings completely', () => {
    assert.equal(stripHeadings('# Hello\nWorld'), 'World')
  })

  it('✂️ should keep heading text and remove only syntax', () => {
    assert.equal(stripHeadingsCode('## Hello'), 'Hello')
  })

  it('📚 should handle multiple markdown headings', () => {
    assert.equal(stripHeadingsCode('# A\n## B\n### C'), 'A\nB\nC')
  })

  it('🧼 should trim whitespace around headings', () => {
    assert.equal(stripHeadingsCode('   ###   Trimmed   '), 'Trimmed')
  })

  it('🚫 should be safe on bad input', () => {
    // @ts-expect-error
    assert.isEmpty(stripHeadings())
    // @ts-expect-error
    assert.isEmpty(stripHeadingsCode(null))
  })
})
