import {defineType, defineField} from 'sanity'

export const Course = defineType({
  name: 'course_completed',
  title: 'Course Completed',
  type: 'document',
  fields: [
    defineField({
      name: 'name_of_course',
      title: 'Name of Course',
      type: 'string',
    }),
    defineField({
      name: 'mode',
      title: 'Mode of Coursse',
      type: 'string',
    }),
    defineField({
      name: 'course_portal',
      title: 'Course Portal',
      type: 'string',
    }),
    defineField({
      name: 'marks',
      title: 'Marks',
      type: 'string',
    }),
    defineField({
      name: 'grade',
      title: 'Grade',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
  ],
})
