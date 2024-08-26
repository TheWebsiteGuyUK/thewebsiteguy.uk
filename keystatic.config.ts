import { config } from '@keystatic/core';
import { posts, pages } from '@cms/collections';
import { navbar } from '@cms/singletons/navbar';
import { branding, seo } from '@cms/singletons';

export default config({
  storage: {
    kind: 'local',
    // kind: 'github',
    // repo: `${import.meta.env.REPO_OWNER}/${import.meta.env.REPO_NAME}`
    
  },
  ui: {
    brand: { name: 'Dashboard' },
    navigation: {
      'Content': ['pages',  'posts',  ],
      'Settings': ['navbar', 'branding', 'seo' ],
    },
    
  },
  collections: {
    posts,
    pages,
  },
  singletons: {
    navbar,
    branding,
    seo
  }
});
