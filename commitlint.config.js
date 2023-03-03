// https://commitlint.js.org/#/reference-rules
// https://yarnpkg.com/package/@commitlint/config-conventional

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat',
      'fix',
      'docs',
      'style',
      'refactor',
      'test',
      'chore',
      'revert'
    ]],
    'subject-full-stop': [
      0, 'never'
    ],
    'subject-case': [
      0, 'never'
    ]
  }
}
