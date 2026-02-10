import { defineType, defineField } from 'sanity';

// Hero block
export const heroBlock = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'text' }),
    defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image' }),
    defineField({ name: 'floatingImage', title: 'Floating Image', type: 'image' }),
  ],
});

// Events block
export const eventsBlock = defineType({
  name: 'events',
  title: 'Events',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string' }),
    defineField({ name: 'eventList', title: 'Event List', type: 'array', of: [{ type: 'reference', to: [{ type: 'event' }] }] }),
    defineField({ name: 'ad', title: 'Ad', type: 'text' }),
  ],
});

// Ad block
export const adBlock = defineType({
  name: 'ad',
  title: 'Ad',
  type: 'object',
  fields: [
    defineField({ name: 'content', title: 'Content', type: 'text' }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
  ],
});
