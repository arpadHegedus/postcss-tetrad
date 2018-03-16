const plugin = require('./')
const postcss = require('postcss')
function testCode(code, expected, options = {}, plugins = []) {
  return () => {
    if (plugins.length === 0) plugins.push(plugin(options));
    return postcss(plugins)
      .process(code, { from: undefined })
      .then(result => {
        expect(result.css.replace(/[\n]/ig, '')).toEqual(expected);
      })
  }
}

it('can get tetrad', testCode(
  'div { color: tetrad(#34bbed) }',
  'div { color: #c234ed }'
))
it('can get second tetrad', testCode(
  'div { color: tetrad(#34bbed, 2) }',
  'div { color: #ed6634 }'
))
it('can get third tetrad', testCode(
  'div { color: tetrad(#34bbed, 3) }',
  'div { color: #5eed34 }'
))
it('can get uniform tetrad', testCode(
  'div { color: tetrad(#34bbed, uniform) }',
  'div { color: #fa71cc }'
))
it('can get second uniform tetrad', testCode(
  'div { color: tetrad(#34bbed, 2, uniform) }',
  'div { color: #fae271 }'
))
it('can get third uniform tetrad', testCode(
  'div { color: tetrad(#34bbed, 3, uniform) }',
  'div { color: #71fa9e }'
))

