import {defineType, defineField} from 'sanity'

export const InternationalJournal = defineType({
  name: 'international_journal',
  title: 'International Journal',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'description',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
  ],
})
