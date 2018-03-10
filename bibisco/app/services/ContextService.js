/*
 * Copyright (C) 2014-2018 Andrea Feccomandi
 *
 * Licensed under the terms of GNU GPL License;
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY.
 * See the GNU General Public License for more details.
 *
 */

angular.module('bibiscoApp').service('ContextService', function() {
  'use strict';

  var remote = require('electron').remote;
  var appPath = remote.getGlobal('appPath');
  var os = remote.getGlobal('os');
  var path = require('path');
  var lastError;

  return {
    getAppPath: function() {
      return appPath;
    },
    getLastError() {
      return lastError;
    },
    getOs: function() {
      return os;
    },
    getTempDirectoryPath() {
      return path.join(appPath, 'temp');
    },
    setLastError: function(error) {
      lastError = error;
    }
  };
});
