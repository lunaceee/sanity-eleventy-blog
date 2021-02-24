export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6036d1d08cb60c37507cbf91',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-u68aeeoj',
                  apiId: '225bb0e8-ef5f-4367-8ad5-d69d6d92a4f1'
                },
                {
                  buildHookId: '6036d1d0739b1133af468017',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ozibkb1p',
                  apiId: '681f5f4d-50b0-4bf4-84b1-bf0e75b74a94'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lunaceee/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ozibkb1p.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
