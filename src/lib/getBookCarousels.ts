// This file scrapes the content of book carousels from the Indiecommerce homepage using Cheerio.

import * as cheerio from 'cheerio'

const baseUrl =
  'https://live-thirdplace1754561102.pantheonsite.io'

export async function getBookCarousels() {
  const res = await fetch(baseUrl)
  const html = await res.text()
  const $ = cheerio.load(html)

  const carousels = []

const seen = new Set()

$('.aba-carousel').each((_, carouselEl) => {
  const headingEl = $(carouselEl).find('.aba-carousel--header-title a').first()

  const listTitle = headingEl.text().replace(/\s+/g, ' ').trim()
  const listUrl = headingEl.attr('href')

  // 🔥 SKIP EMPTY OR INVALID CAROUSELS
  if (!listTitle) return

  const books = []

  $(carouselEl)
    .find('article.product-list__wrapper')
    .each((_, el) => {
      const title =
        $(el).find('img').attr('alt') ||
        $(el).find('.carousel-item__title').text().trim()

      if (!title) return

      const url = $(el).find('a').first().attr('href')
      const image = $(el).find('img').attr('src')

      books.push({
        title,
        url: url ? new URL(url, baseUrl).href : null,
        image: image || null
      })
    })

  // 🔥 DEDUPE KEY (VERY IMPORTANT)
  const key = listTitle + '|' + books.map(b => b.url).join(',')

  if (seen.has(key)) return
  seen.add(key)

  carousels.push({
    title: listTitle,
    url: listUrl ? new URL(listUrl, baseUrl).href : null,
    books
  })
})

//  console.log('CAROUSELS FOUND:', carousels.length)

  return carousels
}