import {defineType, defineField} from 'sanity'

export const GrantReceived = defineType({
  name: 'grant_received',
  title: 'Grant Received',
  type: 'document',
  fields: [
    defineField({
      name: 'title_of_project',
      title: 'Title Of Project',
      type: 'string',
    }),
    defineField({
      name: 'funding_agency',
      title: 'Funding Agency',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'amount',
      title: 'Amount',
      type: 'string',
    }),
  ],
})
