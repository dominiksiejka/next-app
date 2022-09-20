const path = require('path')

const stagedNextLint = (filenames) =>
  `next lint --fix --file ${filenames
    .map((filePath) => path.relative(process.cwd(), filePath))
    .join(' --file ')}`

const stagedTestUnit = (filenames) =>
  `yarn test-unit --findRelatedTests ${filenames
    .map((filePath) => path.relative(process.cwd(), filePath))
    .join(' ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [
    stagedNextLint,
    'yarn prettier --write',
    stagedTestUnit,
  ],
  '**/*.css': 'stylelint --fix',
}
