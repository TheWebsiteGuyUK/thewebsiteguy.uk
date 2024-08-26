import { fields } from '@keystatic/core';

export const posts = {
    label: 'Posts',
    description: 'Display a list of posts', 
    schema: fields.object({
      heading: fields.text({ label: 'Heading' }),
      details: fields.text({ label: 'Details', multiline: true }),
      quantity: fields.integer({ 
        label: 'Number of posts',
        description: 'How many posts to display!',
        validation: {
          min: 0,
          max: 6
        }
      })
    },
  ),
};