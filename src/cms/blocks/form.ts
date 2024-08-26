import { fields } from '@keystatic/core';

export const form = {
  label: 'Form',
  description: 'Form builder',
  schema: fields.object({
    name: fields.text({ label: 'Form Name / ID' }),
    recipients: fields.array(
      fields.object({
        email: fields.text({ label: 'Recipient Email' }),
      }),
      // Labelling options
      {
        label: 'Recipient(s)',
        description: 'Who should receive email notifications for this form',
        itemLabel: props => props.fields.email.value
      }
    ),
    items: fields.array(
      fields.object({
        label: fields.text({ label: 'Field Label' }),
        settings: fields.conditional(
          fields.select({
            label: 'Input Type',
            options: [
              { label: 'text', value: 'text', },
              { label: 'textarea', value: 'textarea' },
              { label: 'email', value: 'email' },
              { label: 'dropdown', value: 'dropdown' },
              { label: 'radio', value: 'radio' },
              { label: 'checkbox', value: 'checkbox' },
            ],
            defaultValue: 'text',
          }),
          {
            text: fields.object({
              required: fields.checkbox({
                label: 'Required',
                description: 'Is this field required'
              })
            }),
            textarea: fields.object({
              required: fields.checkbox({
                label: 'Required',
                description: 'Is this field required'
              })
            }),
            email: fields.object({
              required: fields.checkbox({
                label: 'Required',
                description: 'Is this field required'
              })
            }),
            dropdown: fields.object({
              required: fields.checkbox({
                label: 'Required',
                description: 'Is this field required'
              }),
              options: fields.array(
                fields.object({
                  value: fields.text({ label: 'Option Value' }),
                  label: fields.text({ label: 'Option Label' }),
                }),
                {
                  label: 'Dropdown Options',
                  itemLabel: props => props.fields.value.value
                }
              ),
            }),
            radio: fields.object({
              required: fields.checkbox({
                label: 'Required',
                description: 'Is this field required'
              }),
              options: fields.array(
                fields.object({
                  value: fields.text({ label: 'Option Value' }),
                  label: fields.text({ label: 'Option Label' }),
                }),
                {
                  label: 'Radio Options',
                  itemLabel: props => props.fields.value.value
                }
              ),
            }),
            checkbox: fields.object({
              required: fields.checkbox({
                label: 'Required',
                description: 'Is this field required'
              }),
              options: fields.array(
                fields.object({
                  value: fields.text({ label: 'Option Value' }),
                  label: fields.text({ label: 'Option Label' }),
                }),
                {
                  label: 'Checkbox Options',
                  itemLabel: props => props.fields.value.value
                }
              ),
            }),
          }
        ),
      }),
      {
        label: 'Form Items',
        description: 'Add, remove, and reorder form items.',
        itemLabel: item => item.fields.label.value,
      }
    ),
  }),
};
