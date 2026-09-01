import fs from 'fs/promises'
import * as cheerio from 'cheerio'

const baseUrl = 'https://live-thirdplace1754561102.pantheonsite.io'

async function fetchBooklists() {
  const res = await fetch(baseUrl)
  const html = await res.text()

  const $ = cheerio.load(html)

  const carousels = []

  $('.aba-carousel').each((_, el) => {

    const title = $(el)
      .find('.aba-carousel--header-title a')
      .first()
      .text()
      .trim()

    if (!title) return

    const books = []

    $(el)
      .find('article.product-list__wrapper')
      .each((_, bookEl) => {

        const bookTitle =
          $(bookEl).find('img').attr('alt') || ''

        if (!bookTitle) return

        books.push({
          title: bookTitle,
          image: $(bookEl).find('img').attr('src')
        })
      })

    carousels.push({
      title,
      books
    })
  })

  await fs.writeFile(
    './src/data/booklists.json',
    JSON.stringify(carousels, null, 2)
  )

  console.log('Booklists cached')
}

fetchBooklists()