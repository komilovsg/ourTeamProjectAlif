### E-Commerce Platform

E-Commerce Platform - system for managing products, orders, and customers across various departments.

## Architecture of the project:

The [Feature Sliced](https://feature-sliced.design/) methodology was taken as the base architecture and was added few rules upon it.

1. Entity : `entities/{entityName}`

   - `index.ts` - public api of entity
   - `types.ts` - entity types
   - `libs.ts` - entity libs
   - `service.ts` - entity service
   - `components` - entity components

2. Feature : `features/{domain-pathname}/{feature-name}`

   - `index.ts` - public api of feature
   - `types.ts` - feature types
   - `libs.ts` - feature libs
   - `service.ts` - feature service
   - `components` - feature components
   - `ui.tsx` - feature ui

3. Widgets : `widgets/{widget-name}`

   - `index.ts` - public api of widget
   - `types.ts` - widget types
   - `libs.ts` - widget libs
   - `service.ts` - widget service
   - `components` - widget components
   - `ui.tsx` - widget ui

   ui.tsx in any layer is a main component ( the name of component's case
   is PascalCase
   ) of this layer.

   ```diff
   export const ComponentName = () => {
     return <div>ComponentName</div>
   }
   ```

4. Configs : this directory contains all configs of the project (prodivers, styles, etc.)

5. Shared : this directory contains all shared components, hooks, types, etc.

### More information:

- [Typescript](https://www.typescriptlang.org/) as a main programming language
- [Next.js](https://nextjs.org/) as a React framework
- [Axios](https://github.com/axios/axios) as a Promise based HTTP client
- [Prettier](https://prettier.io/docs/en/index.html) for formatting code
- [Husky](https://typicode.github.io/husky/#/) git hooks made easy
- [Eslint](https://eslint.org) for linting and formatting staged files
- [CI/CD](https://github.blog/2022-02-02-build-ci-cd-pipeline-github-actions-four-steps) for deployment in prod and dev
- [Github Flow](https://guides.github.com/introduction/flow/) as a git workflow**
