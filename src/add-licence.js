/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/*
 * This file is part of KAT, the KWARC Annotation Tool,
 * see https://github.com/KWARC/KAT
 *
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 *
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

var license = '' +
  '/*\n' +
  ' * This file is part of KAT, the KWARC Annotation Tool, \n' +
  ' * see https://github.com/KWARC/KAT\n' +
  ' * \n' +
  ' * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)\n' +
  ' * \n' +
  ' * KAT is free software: you can redistribute it and/or modify\n' +
  ' * it under the terms of the GNU General Public License as published by\n' +
  ' * the Free Software Foundation, either version 3 of the License, or\n' +
  ' * (at your option) any later version.\n' +
  ' * \n' +
  ' * KAT is distributed in the hope that it will be useful,\n' +
  ' * but WITHOUT ANY WARRANTY; without even the implied warranty of\n' +
  ' * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n' +
  ' * GNU General Public License for more details.\n' +
  ' * \n' +
  ' * You should have received a copy of the GNU General Public License\n' +
  ' * along with KAT.  If not, see <http://www.gnu.org/licenses/>\n' +
  ' */\n\n';

var fs = require('fs');

recursiveRead('.', function (path) {
  var ext = path.slice(path.lastIndexOf('.'));
  if (ext != '.js') { return; }

  var content = fs.readFileSync(path).toString();
  if (content.indexOf(license) > -1) { return; }

  fs.writeFileSync(path, license + fs.readFileSync(path).toString());
});

function recursiveRead (path, callback) {
  callback = callback || function () {};

  fs.readdirSync(path).forEach(function (name) {
    var file = path + '/' + name;
    var stat = fs.statSync(file);

    if (stat.isDirectory()) {
      recursiveRead(file, callback);
      return;
    }

    callback(file);
  });
}