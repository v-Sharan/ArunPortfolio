import {defineType, defineField} from 'sanity'

export const ResearchGuidance = defineType({
  name: 'research_guidance',
  title: 'Research Guidance',
  type: 'document',
  fields: [
    defineField({
      name: 'student_name',
      title: 'Student Name',
      type: 'string',
    }),
    defineField({
      name: 'thesis_topics',
      title: 'Thesis Topics',
      type: 'string',
    }),
    defineField({
      name: 'university',
      title: 'University',
      type: 'string',
    }),
    defineField({
      name: 'degree_awarded',
      title: 'Degree Awarded',
      type: 'string',
    }),
  ],
})
