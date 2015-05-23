require('shelljs/global');
require('./exec-command');

rm('-f', '.git/hooks/pre-commit', '.git/hooks/pre-push', '.git/hooks/commit-msg');
rm('-f', 'npm-shrinkwrap.json');

cp('-f', '.git-hooks/pre-commit', '.git/hooks/pre-commit');
cp('-f', '.git-hooks/pre-push', '.git/hooks/pre-push');
cp('-f', '.git-hooks/commit-msg', '.git/hooks/commit-msg');
cp('-f', 'common-scripts/npm-shrinkwrap.json', 'npm-shrinkwrap.json');

execCmd('node common-scripts/setup-dependencies-json.js');

execCmd('npm install');
execCmd('bower install');
// thota
