import {defineType, defineField} from 'sanity'

export const ListOfPublications = defineType({
  name: 'list_of_publications',
  title: 'List Of Publications',
  type: 'document',
  fields: [
    defineField({
      name: 'international_journal',
      title: 'International Journal',
      type: 'number',
    }),
    defineField({
      name: 'national_journal',
      title: 'National Journal',
      type: 'number',
    }),
    defineField({
      name: 'international_conference',
      title: 'International Conference',
      type: 'number',
    }),
    defineField({
      name: 'national_conference',
      title: 'National Conference',
      type: 'number',
    }),
    defineField({
      name: 'total',
      title: 'Total',
      type: 'number',
    }),
  ],
})
