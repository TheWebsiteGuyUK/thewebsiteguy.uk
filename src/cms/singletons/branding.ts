import { fields, singleton } from '@keystatic/core';

export const branding = singleton({
    label:  'Branding',
    path: "src/content/settings/branding",
    schema:{
        site: fields.object({
           siteName: fields.text({ label: 'Site Name' }),
           logoLight: fields.image({
            label: "Logo Light",
            description: "Logo for light theme",
            directory: "src/assets/images/logo",
            publicPath: "/src/assets/images/logo/",
          }),
          logoDark: fields.image({
            label: "Logo Dark",
            description: "Logo for dark theme",
            directory: "src/assets/images/logo",
            publicPath: "/src/assets/images/logo/",
          }),
          favicon: fields.image({
            label: "Favicon",
            description: "Favicon for the site",
            directory: "public/images",
            publicPath: "/images/",
          }),             
        })
    }
});