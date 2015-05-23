require('shelljs/global');

var execCmd = function(cmd) {
  if(exec(cmd).code != 0) {
    echo("Command `" + cmd + "` failed. Please check the logs.");
    exit(1);
  }
}

module.exports = execCmd;
global['execCmd'] = execCmd;
