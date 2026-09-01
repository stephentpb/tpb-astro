import fs from 'fs/promises'
import * as cheerio from 'cheerio'

const baseUrl = 'https://live-thirdplace1754561102.pantheonsite.io'

async function fetchEvents() {
  const res = await fetch(baseUrl)
  const html = await res.text()

  const $ = cheerio.load(html)

  const events = []

  $('#event-carousel article.eventinstance-carousel').each((_, el) => {

    const linkEl = $(el)
      .find('.event-carousel__image')
      .first()

    const href = linkEl.attr('href')

    const title = $(el)
      .find('.event-carousel__info--title')
      .text()
      .replace(/\s+/g, ' ')
      .trim()

    const date = $(el)
      .find('.event-carousel__date')
      .text()
      .replace(/\s+/g, ' ')
      .trim()

    const image = $(el)
      .find('img')
      .attr('src')

    if (!title) return

    events.push({
      title,
      date,
      url: href
        ? new URL(href, baseUrl).href
        : null,
      image: image
        ? new URL(image, baseUrl).href
        : null
    })
  })

  await fs.writeFile(
    './src/data/events.json',
    JSON.stringify(events, null, 2)
  )

  console.log(`Cached ${events.length} events`)
}

fetchEvents()