import {defineType, defineField} from 'sanity'

export const Awards = defineType({
  name: 'awards',
  title: 'Awards',
  type: 'document',
  fields: [
    defineField({
      name: 'award',
      title: 'Award',
      type: 'array',
      of: [{name: 'award', title: 'Award', type: 'string'}],
    }),
  ],
})
