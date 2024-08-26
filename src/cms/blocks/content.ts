import { fields } from '@keystatic/core'

export const content = {
  label: 'Content',
  schema: fields.object({
    heading: fields.text({ label: 'Heading' }),
    subheading: fields.text({ label: 'Subheading' }),
    content: fields.mdx.inline({ label: 'Content' }),
  }),
}
