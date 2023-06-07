import {defineType, defineField} from 'sanity'

export const RecognizedSupervisor = defineType({
  name: 'recognized_supervisor',
  title: 'Recognized Supervisor',
  type: 'document',
  fields: [
    defineField({
      name: 'recognized_supervisor',
      title: 'Recognized Supervisor',
      type: 'array',
      of: [
        {
          name: 'recognized_supervisor',
          title: 'Recognized Supervisor',
          type: 'string',
        },
      ],
    }),
  ],
})
