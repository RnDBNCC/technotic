// https://eslint.org/docs/head/use/configure/configuration-files
// https://github.com/eslint/eslint/issues/13124

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
