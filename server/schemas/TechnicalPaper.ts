import {defineType, defineField} from 'sanity'

export const TechnicalPaperReviewer = defineType({
  name: 'technical_paper1_reviewer',
  title: 'Technical Paper Reviewer',
  type: 'document',
  fields: [
    defineField({
      name: 'technical_paper1_reviewer',
      title: 'Technical Paper Reviewer',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
