export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d289b81475fda0187af5863',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio9-studio',
                  apiId: 'c26ecf7b-a472-4341-b640-5d365f3dc834'
                },
                {
                  buildHookId: '5d289b8145b96c08c6e26ffb',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio9',
                  apiId: 'de87e025-5af6-43a5-a554-db8f85194614'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Decodal/sanity-gatsby-portfolio9',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio9.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
