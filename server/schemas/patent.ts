import {defineType, defineField} from 'sanity'

export const PatentFiling = defineType({
  name: 'patent_filing',
  title: 'Patent Filing',
  type: 'document',
  fields: [
    defineField({
      name: 'title_of_invention',
      title: 'Title of Invention',
      type: 'string',
    }),
    defineField({
      name: 'name_of_inventors',
      title: 'Name Of Inventors',
      type: 'array',
      of: [{name: 'inventor', title: 'Inventor', type: 'string'}],
    }),
    defineField({
      name: 'date_of_filing',
      title: 'Date Of Filing',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YYYY',
      },
    }),
    defineField({
      name: 'patent_number',
      title: 'Patent Number',
      type: 'number',
    }),
    defineField({
      name: 'status_of_patents',
      title: 'Status Of Patents',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
  ],
})
