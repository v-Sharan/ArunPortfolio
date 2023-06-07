import {defineType, defineField} from 'sanity'

export const ConsultancyProject = defineType({
  name: 'consultancy_project',
  title: 'Consultancy Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name_of_faculty',
      title: 'Name Of Faculty',
      type: 'array',
      of: [{name: 'faculty', title: 'Faculty', type: 'string'}],
    }),
    defineField({
      name: 'client_organization',
      title: 'Client Organization',
      type: 'string',
    }),
    defineField({
      name: 'title_of_project',
      title: 'Title of Consultancy of Project',
      type: 'string',
    }),
    defineField({
      name: 'amount',
      title: 'Amount',
      type: 'string',
    }),
    defineField({
      name: 'academic_year',
      title: 'Academic Year',
      type: 'string',
    }),
  ],
})
