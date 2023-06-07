import {defineType, defineField} from 'sanity'

export const NationalJournal = defineType({
  name: 'national_journal',
  title: 'National Journal',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'description',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
