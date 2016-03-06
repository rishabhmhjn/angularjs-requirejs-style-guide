# angularjs-requirejs-style-guide

This is a sample project to demonstrate how to use angularjs with requirejs along with [ui-router](https://github.com/angular-ui/ui-router).
Why I made this? I mentioned here in my blog: http://blog.rishabhmhjn.me/post/140561137554/using-angularjs-with-requirejs-grunt-and

*Sample contains some parts of code from the sample available at [ui-router](https://github.com/angular-ui/ui-router).*

## Structure

    .
    ├── Gruntfile.js
    ├── app
    │   ├── app.js      <-- entry point for require.js
    │   ├── index.html
    │   ├── modules     <-- this is where all your top level modules/apps are
    │   │   ├── common  <-- services/providers/models/configs commmon to all other modules
    │   │   │   ├── common.module.js          <-- angular.module('Ex.Common')
    │   │   │   ├── config
    │   │   │   │   ├── config.module.js      <-- angular.module('Ex.Common.Config')
    │   │   │   │   ├── c1.config.js          <<- some config
    │   │   │   │   └── c2.config.js          <<- another config
    │   │   │   ├── directives
    │   │   │   │   ├── directives.module.js  <-- angular.module('Ex.Common.Directives')
    │   │   │   │   └── d1.directive.js       <<- some directive
    │   │   │   ├── filters
    │   │   │   │   ├── filters.module.js     <-- angular.module('Ex.Common.Filters')
    │   │   │   │   └── f1.filter.js          <<- some filter
    │   │   │   └── utils
    │   │   │       ├── utils.module.js       <-- angular.module('Ex.Common.Utils')
    │   │   │       └── utils.factory.js
    │   │   └── app1
    │   │       ├── common
    │   │       │   ├── common.module.js      <-- angular.module('Ex.App1.Common')
    │   │       │   ├── services
    │   │       │   │   ├── services.module.js    <-- angular.module('Ex.App1.Common.Services')
    │   │       │   │   └── s1.service.js         <<- some factory
    |   │       │   └── directives
    │   │       │       ├── directives.module.js  <-- angular.module('Ex.App1.Common.Directives')
    │   │       │       └── d2.directive.js       <<- some directive
    │   │       ├── state1
    │   │       │   ├── state1.controller.js
    │   │       │   ├── state1.tpl.html
    │   │       │   ├── child1
    │   │       │   │   ├── state1.child1.controller.js
    │   │       │   │   └── state1.child1.tpl.html
    │   │       │   └── child2
    │   │       │       ├── state1.child2.controller.js
    │   │       │       └── state1.child2.tpl.html
    │   │       ├── app1.module.js    <-- angular.module('Ex.App1')
    │   │       └── app1.states.js    <-- angular.module('Ex.App1.States')
    │   └── app1.js
    ├── bower.json
    └── package.json

## TODO

- optimize grunt distribution task using r.js

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
