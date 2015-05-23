var fs = require('fs');
require('shelljs/global');
require('./exec-command');

var lines = fs.readFileSync("common-scripts/dependencies", "utf8");

var sedFile = function(regex, value, fileName) {
  if(fs.existsSync(fileName)) {
    sed('-i', regex, value, fileName);
  }
}

lines.split(/\n/).forEach(
  function (line) {
    if(line.trim().length == 0) return;

    var key = line.substring(0, line.indexOf(':')).trim();
    var value = line.substring(line.indexOf(':') + 1).trim();
    key = "\@\@" + key + "_VERSION";

    var regex = new RegExp(key, "g");

    sedFile(regex, value, 'package.json');
    sedFile(regex, value, 'bower.json');
    sedFile(regex, value, 'npm-shrinkwrap.json');
  }
);
