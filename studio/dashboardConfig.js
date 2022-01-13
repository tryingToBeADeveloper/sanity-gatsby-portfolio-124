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
                  buildHookId: '61e0899fcbbee6008dc6dca5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-124-studio',
                  apiId: 'e7408f88-e394-4b4a-81f4-be4e9c004041'
                },
                {
                  buildHookId: '61e0899f0a091c0093be7d02',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-124',
                  apiId: 'a5181fbe-6e62-4852-bc1d-318d8d449aae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tryingToBeADeveloper/sanity-gatsby-portfolio-124',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-124.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
