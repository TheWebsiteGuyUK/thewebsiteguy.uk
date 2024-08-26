import { collection, fields } from '@keystatic/core';
import { form, hero, posts, content } from '@cms/blocks';

export const pages = collection({
    label: 'Pages',
    slugField: 'title',
    path: 'src/content/pages/*',
    schema: {
      title: fields.slug({ name: { label: 'Title' } }),
      draft: fields.checkbox({
        label: 'Draft',
        description: 'Set this page as draft to prevent it from being published'
      }),
      seo: fields.conditional(
        // See fields.conditional docs for details on the conditional field
        fields.checkbox({ 
          label: 'Custom SEO', 
          description: 'Define custom SEO tags for this page',
          defaultValue: false,
        }),
        {
          // If condition is false, show… no fields!
          false: fields.empty(),
      
          // Otherwise, show some fields
          true: fields.object({
            title: fields.text({ label: 'Title' }),
            description: fields.text({ label: 'Description', multiline: true }),
            keywords: fields.text({ label: 'Keywords' }),
            mage: fields.image({ 
              label: 'SEO Image',
              directory: 'public/images/pages',
              publicPath: '/images/pages/', 
            }),
          }),
        }
      ),
      blocks: fields.blocks(
        {
            heroBlock: hero,
            postsBlock: posts,
            formBlock: form,
            contentBlock: content,
        },
        { 
          label: 'Blocks',
          description: 'The building blocks of the page'
        }
      ),
      
    },
    
  });