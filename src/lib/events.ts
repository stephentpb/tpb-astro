// src/lib/events.ts

import * as cheerio from 'cheerio'

export async function getEvents() {
  const res = await fetch(
    'https://live-thirdplace1754561102.pantheonsite.io/'
  )

  const html = await res.text()
  const $ = cheerio.load(html)

  const events = []

  $('.eventinstance-carousel').each((_, el) => {
    const title = $(el)
      .find('.event-carousel__info--title a')
      .text()
      .replace(/\s+/g, ' ')
      .trim()

    const url = $(el)
      .find('.event-carousel__info--title a')
      .attr('href')

    const image = $(el)
      .find('img')
      .attr('src')

    const date = $(el)
      .find('.event-carousel__date')
      .text()
      .replace(/\s+/g, ' ')
      .trim()

    events.push({
      title,
      url: `https://live-thirdplace1754561102.pantheonsite.io${url}`,
      image: image
        ? `https://live-thirdplace1754561102.pantheonsite.io${image}`
        : null,
      date
    })
  })

  return events
}