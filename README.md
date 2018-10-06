# Reactivate
Reactivate is a zero configuration build tool and dev server for popular 
JavaScript frameworks aiming to help jumpstarting projects by reducing
setup code and boilerplate. It is powered by webpack and babel.

*Reactivate is still under development and is going to improve dramarically
over the course of the next weeks.*

## Table of contents

## Features
* Support for ReactJS and VueJS
* Babel 7 used for transpilation
* Hot reloading out of the box
* Easy to configure, starting with zero config

## Installation
Reactivate can be installed either locally or globally using npm.

```
$ npm i -g @hrwg/reactivate
```

## Running your project
By default, reactivate assumes your project to meet the following conditions:

* The applications entrypoint is `src/index.js`
* The main html template is `src/index.html`
* You use ReactJS or plain JavaScript

If your project does not meet those defaults, you will need a config file.

### Development server
To run the development server, execute the following command inside your 
projects root directory.

```
$ reactivate serve
```

### Development build
To run a development build, execute the following command inside your 
projects root directory.

```
$ reactivate build
```

### Production build
To build for production, include the `--production` or `-p` flag.

```
$ reactivate build -p
```

## Configuration
In order to configure reactivate, create a `reactivate.config.js` inside
the root directory of your project. The file exports a JSON config, like
in the example below.

```
// reactivate.config.js

module.exports = {
  entry: 'src/index.js'
};
```

The following parameters can be set inside the config.

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| entry | string |Defines the entry point of the application | src/index.js |
| template | string | Defines the default html template the app is rendered to | src/index.html |
| framework | "react", "vue" | Defines the framework used by the project | "react |

You can provide another config file, by using the `-c` option.

```
$ reactivate serve -c myconfig.js
```

## Planned features
* [ ] Support for style and static asset loading
* [ ] Customize babel plugins
* [ ] Zero config universal rendering
* [ ] Angular support
* [ ] Config eject

## License
MIT

## Contributing
If there are any ideas or optimizations to improve this project,
feel free to submit a pull request including your documented changes.
