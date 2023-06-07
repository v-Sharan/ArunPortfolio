import {defineType, defineField} from 'sanity'

export const NationalConference = defineType({
  name: 'national_conference',
  title: 'National Conference',
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
