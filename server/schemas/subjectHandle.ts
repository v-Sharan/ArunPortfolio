import {defineType, defineField} from 'sanity'

export const subjectHandled = defineType({
  name: 'subject_handled',
  title: 'Subject Handled',
  type: 'document',
  fields: [
    defineField({
      name: 'ug_subject',
      title: 'UG Subject',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'pg_subject',
      title: 'PG Subject',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
