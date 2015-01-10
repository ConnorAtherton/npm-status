var fs = require('fs');
var hw = require('headway');

var npmPath = getUserHome() + "/.npm"
var excludes = ['_locks', '_git-remotes']

var start = function() {
  var installed = true;

  try {
    var dir = fs.readdirSync(npmPath);
  } catch (e) {
    installed = false;
  }

  // remove excludedfiles
  dir = dir.filter(function(el) {
    if (el.substring(0, 1) !== '.' && excludes.indexOf(el) !== 0) return el;
  });

  var join = installed ? "" : " not";
  var installedString = (installed ? "{green}" : "{red}") + "npm is" + join + " installed.";

  hw.log('{green}Status:{/} ' + installedString);
  hw.log('{yellow}Here are some stats -');
  hw.log('    {_yellow_}{_bold}{black} 1 {/} Number of global packages - ' + dir.length);
}

function getUserHome() {
  return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
}

module.exports = start;
