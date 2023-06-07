import {defineType, defineField} from 'sanity'

export const Academics = defineType({
  name: 'academic',
  title: 'Academics',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'degree',
      title: 'Degree',
      type: 'string',
    }),
    defineField({
      name: 'specialization',
      title: 'Specialization',
      type: 'string',
    }),
    defineField({
      name: 'year_of_passing',
      title: 'Year of Passing',
      type: 'number',
    }),
    defineField({
      name: 'college_name',
      title: 'College Name',
      type: 'string',
    }),
    defineField({
      name: 'university_name',
      title: 'University Name',
      type: 'string',
    }),
    defineField({
      name: 'grade',
      title: 'Grade/Marks',
      type: 'string',
    }),
    defineField({
      name: 'class_obtained',
      title: 'Class Obtained',
      type: 'string',
    }),
  ],
})
