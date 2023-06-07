import {defineType, defineField} from 'sanity'

export const OrganizingConference = defineType({
  name: 'organizing_conference',
  title: 'Organizing Conference',
  type: 'document',
  fields: [
    defineField({
      name: 'organizing_conference',
      title: 'Organizing Conference',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
