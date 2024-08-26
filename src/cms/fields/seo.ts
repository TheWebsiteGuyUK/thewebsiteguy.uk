import { fields } from "@keystatic/core";

export const seo = fields.object({
    title: fields.text({ label: 'Title' }),
    description: fields.text({ label: 'Description', multiline: true }),
    keywords: fields.text({ label: 'Keywords' }),
    ogTitle: fields.text({ label: 'OG Title' }),
    ogDescription: fields.text({ label: 'OG Description', multiline: true }),
    ogImage: fields.image({ label: 'OG Image' }),
    twitterTitle: fields.text({ label: 'Twitter Title' }),
    twitterDescription: fields.text({ label: 'Twitter Description', multiline: true }),
    twitterImage: fields.image({ label: 'Twitter Image' }),  
    }, {
      label: 'SEO', 
      description: 'SEO information for the content', 
    });
