<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-strip-md-headings/main/media/strip-md-headings.png" alt="Strip Markdown Headings package - clean Markdown content by removing heading syntax" width="256" height="256">
  <h1>Strip Markdown Headings</h1>
</div>

<blockquote align="center">
Strip Markdown Headings • Keep Clean Text • Safe Input Handling • Markdown Text Extraction
</blockquote>

<h4 align="center">
  ⛸ Remove Markdown headings h1-h6 safely. Strip all heading syntax or keep clean text. Perfect for parsing, SEO cleanup, and text extraction. 🏹
</h4>

<br>

## 📃 Table of Contents

- [**Features**](#-features)
- [**Usage**](#-usage)
- [**API**](#-api)
- [**Examples**](#️-examples)
- [**Changelog**](#-changelog)
- [**Support**](#-support)
- [**License**](#-license)
- [**Related**](#-related)
- [**Author**](#-author)

<br>

## 🤖 Features

- 🧹 Strips markdown headings h1-h6 completely  
- ✂️ Removes only heading syntax keeps text clean  
- 🧼 Safe input handling always returns string  
- 📚 Ideal for markdown parsing text extraction seo

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/strip-md-headings
```

```bash
yarn add @igorskyflyer/strip-md-headings
```

```bash
npm i @igorskyflyer/strip-md-headings
```

<br>
<br>

## 🤹🏼 API

```ts
function stripHeadings(value: string): string
```

_Strips Markdown headings completely._

`value: string` - the Markdown string to process.

Returns the processed string.

<br>

```ts
function stripHeadingsCode(value: string): string
```

_Strips only the Markdown code while keeping the heading text._

`value: string` - the Markdown string to process.

Returns the processed string.

<br>
<br>

## 🗒️ Examples

`index.ts`
```ts
import { stripHeadings, stripHeadingsCode } from '@igorskyflyer/strip-md-headings'

// 🧹 strip all markdown headings completely
console.log(stripHeadings('# Hello\nWorld'))
// 'World'

// ✂️ keep heading text, remove only syntax
console.log(stripHeadingsCode('## Hello'))
// 'Hello'

// 📚 multiple headings handled
console.log(stripHeadingsCode('# A\n## B\n### C'))
// 'A\nB\nC'

// 🧼 whitespace trimmed
console.log(stripHeadingsCode('   ###   Trimmed   '))
// 'Trimmed'

// 🚫 safe on bad input
// @ts-expect-error
console.log(stripHeadings()) // ''
// @ts-expect-error
console.log(stripHeadingsCode(null)) // ''
```

<br>
<br>

## 📝 Changelog

📑 Read about the latest changes in the [**CHANGELOG**](https://github.com/igorskyflyer/npm-strip-md-headings/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the [**MIT license**](https://github.com/igorskyflyer/npm-strip-md-headings/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[**@igorskyflyer/strip-yaml-front-matter**](https://www.npmjs.com/package/@igorskyflyer/strip-yaml-front-matter)

> _🦓 Strips YAML front matter from a String or a file. 👾_

<br>

[**@igorskyflyer/strip-html-headings**](https://www.npmjs.com/package/@igorskyflyer/strip-html-headings)

> _🍛 Lightweight utility to strip HTML heading tags (h1-h6). Remove headings completely or extract their text content while cleaning up markup. Perfect for transforming HTML, parsing content, or preparing plain text output. 🍤_

<br>

[**@igorskyflyer/common-types**](https://www.npmjs.com/package/@igorskyflyer/common-types)

> _🔦 Provides frequently used types for your TypeScript projects. 🦄_

<br>

[**@igorskyflyer/strip-html**](https://www.npmjs.com/package/@igorskyflyer/strip-html)

> _🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨_

<br>

[**@igorskyflyer/jmap**](https://www.npmjs.com/package/@igorskyflyer/jmap)

> _🕶️ Reads a JSON file into a Map. 🌻_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević ([*@igorskyflyer*](https://github.com/igorskyflyer/))**.
