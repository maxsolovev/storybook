module.exports = {
  frameworks: [
    'react',
    'vue',
    'angular',
    'html',
    'mithril',
    'marko',
    'svelte',
    'riot',
    'preact',
    'rax',
  ],
  featureGroups: [
    {
      name: 'Essentials',
      features: [
        {
          name: 'Actions',
          unsupported: [],
          path: 'essentials/actions',
        },
        {
          name: 'Backgrounds',
          unsupported: [],
          path: 'essentials/backgrounds',
        },
        {
          name: 'Docs',
          unsupported: [],
          path: 'writing-docs/introduction',
        },
        {
          name: 'Viewport',
          unsupported: [],
          path: 'essentials/viewport',
        },
        {
          name: 'Controls',
          supported: ['react', 'vue', 'rax'],
          path: 'essentials/controls',
        },
      ],
    },
    {
      name: 'Addons',
      features: [
        {
          name: 'a11y',
          unsupported: [],
        },
        {
          name: 'cssresources',
          unsupported: [],
        },
        {
          name: 'design-assets',
          unsupported: [],
        },
        {
          name: 'events',
          unsupported: ['svelte', 'riot'],
        },
        {
          name: 'google-analytics',
          unsupported: [],
        },
        {
          name: 'graphql',
          supported: ['react', 'angular'],
        },
        {
          name: 'jest',
          unsupported: [],
        },
        {
          name: 'knobs',
          unsupported: [],
        },
        {
          name: 'links',
          unsupported: ['marko'],
        },
        {
          name: 'query-params',
          unsupported: [],
        },
        {
          name: 'Storyshots',
          unsupported: ['ember', 'mithril', 'marko'],
          path: 'workflows/unit-testing',
        },
        {
          name: 'storysource',
          unsupported: [],
        },
      ],
    },
    {
      name: 'Docs',
      features: [
        {
          name: 'MDX Stories',
          unsupported: [],
          path: 'api/mdx',
        },
        {
          name: 'CSF Stories',
          unsupported: [],
          path: 'api/csf',
        },
        {
          name: 'storiesOf stories',
          unsupported: [],
          repoPath: 'lib/core/ADVANCED.md',
        },
        {
          name: 'Source',
          unsupported: [],
          path: '?',
        },
        {
          name: 'Notes/Info',
          unsupported: ['html', 'riot'],
          path: '?',
        },
        {
          name: 'Args Table',
          supported: ['react', 'vue', 'angular', 'html', 'ember', 'rax'],
          path: 'writing-docs/doc-blocks#argstable',
        },
        {
          name: 'Description',
          supported: ['react', 'vue', 'angular', 'ember', 'rax'],
          path: 'FIXME',
        },
        {
          name: 'Inline stories',
          supported: ['react', 'vue', 'rax'],
          path: 'FIXME',
        },
      ],
    },
  ],
};