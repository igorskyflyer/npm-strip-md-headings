// Author: Igor Dimitrijević (@igorskyflyer)

const rxMarkdown: RegExp = /^[ \t]{0,3}#{1,6}[ \t]+.*?(?:[ \t]+#*)?[ \t]*$/gm
const rxMarkdownCode: RegExp =
  /^[ \t]{0,3}#{1,6}[ \t]+(.+?)(?:[ \t]+#*)?[ \t]*$/gm

/**
 * Strips Markdown headings completely.
 * @param {string} value The Markdown string to process.
 * @returns {string} The processed string.
 */
export function stripHeadings(value: string): string {
  if (typeof value !== 'string' || value.length === 0) {
    return ''
  }

  return value.replace(rxMarkdown, '').trim()
}

/**
 * Strips only the Markdown code while keeping the heading text.
 * @param {string} value The Markdown string to process.
 * @returns {string} The processed string.
 */
export function stripHeadingsCode(value: string): string {
  if (typeof value !== 'string' || value.length === 0) {
    return ''
  }

  return value.replace(rxMarkdownCode, '$1').trim()
}
