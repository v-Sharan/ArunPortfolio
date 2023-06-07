import {defineType, defineField} from 'sanity'

export const InternationalConference = defineType({
  name: 'international_conference',
  title: 'International Conference',
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
