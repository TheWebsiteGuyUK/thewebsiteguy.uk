import { buttons } from '@cms/fields';
import { fields } from '@keystatic/core';

export const hero = {
    label: 'Hero',
    schema: fields.object({
      heroImage: fields.image({
        label: "Hero Image",
        description: "Hero image",
        directory: "src/assets/images/hero",
        publicPath: "/src/assets/images/hero/",
        validation: { isRequired: false }
      }),
      heroImageAlt: fields.text({ label: 'Hero Image Alt text'}),
      heading: fields.text({ label: 'Heading' }),
      subheading: fields.text({ label: 'Subheading' }),
      intro: fields.text({ label: 'Intro', multiline: true }),
      buttons
    },
  ),
};