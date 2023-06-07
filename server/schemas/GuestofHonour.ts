import {defineType, defineField} from 'sanity'

export const GuestofHonour = defineType({
  name: 'guest_of_honour',
  title: 'Guest of Honour',
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