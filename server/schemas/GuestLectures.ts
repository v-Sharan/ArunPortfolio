import {defineType, defineField} from 'sanity'

export const GuestLectures = defineType({
  name: 'guest_lectures',
  title: 'Guest Lectures',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'description',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})