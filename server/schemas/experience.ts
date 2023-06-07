import {defineType, defineField} from 'sanity'

export const Experience = defineType({
  name: 'professional_experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'college_name',
      title: 'College Name',
      type: 'string',
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
    }),
    defineField({
      name: 'date_of_joining',
      title: 'Date of Joining',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YYYY',
      },
    }),
    defineField({
      name: 'date_of_relieving',
      title: 'Date of Relieving',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YYYY',
      },
    }),
    defineField({
      name: 'experience',
      title: 'experience',
      type: 'array',
      of: [
        {title: 'Year', name: 'year', type: 'number'},
        {title: 'Months', name: 'months', type: 'number'},
        {title: 'Days', name: 'days', type: 'number'},
      ],
    }),
  ],
})
