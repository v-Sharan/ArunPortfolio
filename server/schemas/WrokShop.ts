import {defineType, defineField} from 'sanity'

export const WorkShopAttened = defineType({
  name: 'work_shop_attened',
  title: 'Work Shop Attened',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'description',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
  ],
})
