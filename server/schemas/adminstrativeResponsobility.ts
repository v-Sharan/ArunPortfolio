import {defineType, defineField} from 'sanity'

export const AdminstrativeResponsibility = defineType({
  name: 'adminstrative_responsibility',
  title: 'Adminstrative Responsibility',
  type: 'document',
  fields: [
    defineField({
      name: 'adminstrative_responsibility',
      title: 'Adminstrative Responsibility',
      type: 'array',
      of: [
        {
          name: 'adminstrative_responsibility',
          title: 'Adminstrative Responsibility',
          type: 'string',
        },
      ],
    }),
  ],
})
