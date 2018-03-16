# PostCSS Tetrad [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">](https://github.com/postcss/postcss)
[![NPM Version](https://img.shields.io/npm/v/postcss-tetrad.svg)](https://www.npmjs.com/package/postcss-tetrad)
[![Build Status](https://travis-ci.org/arpadHegedus/postcss-tetrad.svg?branch=master)](https://travis-ci.org/arpadHegedus/postcss-tetrad)
[![BGitter Chat](https://img.shields.io/badge/chat-gitter-blue.svg)](https://gitter.im/postcss/postcss)

A [PostCSS](https://github.com/postcss/postcss) plugin to get tetrad of a color


## Installation

```
npm install postcss-tetrad
```

## Examples

### Get tetrad of a color

```css
/* input */
div { color: tetrad(#34bbed) }
div.second { color: tetrad(#34bbed, 2) }
div.third { color: tetrad(#34bbed, 3) }
```
```css
/* output */
div { color: #c234ed }
div.second { color: #ed6634 }
div.third { color: #5eed34 }
```

### Get a uniform tetrad of a color (tetrad that also has the same apparent lightness)

```css
/* input */
div { color: tetrad(#34bbed, uniform) }
div.second { color: tetrad(#34bbed, 2, uniform) }
div.third { color: tetrad(#34bbed, 3, uniform) }
```
```css
/* output */
div { color: #fa71cc }
div.second { color: #fae271 }
div.third { color: #71fa9e }
```

## Options

| Option | Type | Default | Description |
|:---:|:---:|:---:|:---:|
| `uniform` | Boolean | `false` | Whether or not to use the uniform tetrad as the default for the plugin |

## Usage

### [Postcss JS API](https://github.com/postcss/postcss#js-api)

```js
postcss([require('postcss-tetrad')]).process(yourCSS);
```

### [Gulp](https://github.com/gulpjs/gulp)

```js
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tetrad = require('postcss-tetrad');
gulp.task('css', () => {
    gulp.src('path/to/dev/css')
        .pipe(postcss([
            tetrad()
        ]))
        .pipe(gulp.dest('path/to/build/css'));
});
```

## Tests

```
npm test
```

## License
This project is licensed under the [MIT License](./LICENSE).
