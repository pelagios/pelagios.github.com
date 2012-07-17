define('lib/text!template/flickr.tmpl',[],function () { return '(function() {\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\ntemplates[\'flickr\'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  helpers = helpers || Handlebars.helpers;\n  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;\n\nfunction program1(depth0,data) {\n  \n  var buffer = "", stack1;\n  buffer += "\\r\\n<a href=\\"http://www.flickr.com/photos/";\n  stack1 = depth0.owner;\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this.owner", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "/";\n  stack1 = depth0.id;\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this.id", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "\\" target=\\"_blank\\">\\r\\n<img src=\\"http://farm";\n  stack1 = depth0.farm;\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this.farm", { hash: {} }); }\n  buffer += escapeExpression(stack1) + ".staticflickr.com/";\n  stack1 = depth0.server;\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this.server", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "/";\n  stack1 = depth0.id;\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this.id", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "_";\n  stack1 = depth0.secret;\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this.secret", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "_t.jpg\\" alt=\\"";\n  foundHelper = helpers.pthis;\n  stack1 = foundHelper || depth0.pthis;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.title);\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "pthis.title", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "\\" />\\r\\n</a>\\r\\n";\n  return buffer;}\n\nfunction program3(depth0,data) {\n  \n  var buffer = "", stack1;\n  buffer += "\\r\\n<p><a href=\\"http://www.flickr.com/groups/pleiades-places/pool/tags/pleiades%3Adepicts%3D";\n  foundHelper = helpers.pleiadesID;\n  stack1 = foundHelper || depth0.pleiadesID;\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "pleiadesID", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "/\\" target=\\"_blank\\">View all ";\n  foundHelper = helpers.photo;\n  stack1 = foundHelper || depth0.photo;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "photo.length", { hash: {} }); }\n  buffer += escapeExpression(stack1) + " photos on flickr</a></p>\\r\\n";\n  return buffer;}\n\nfunction program5(depth0,data) {\n  \n  var buffer = "", stack1;\n  buffer += "\\r\\n<p><a href=\\"http://www.flickr.com/photos/tags/pleiades%3Adepicts%3D";\n  foundHelper = helpers.pleiadesID;\n  stack1 = foundHelper || depth0.pleiadesID;\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "pleiadesID", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "/\\" target=\\"_blank\\">View all ";\n  foundHelper = helpers.photo;\n  stack1 = foundHelper || depth0.photo;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "photo.length", { hash: {} }); }\n  buffer += escapeExpression(stack1) + " photos on flickr</a></p>\\r\\n";\n  return buffer;}\n\n  foundHelper = helpers.photo;\n  stack1 = foundHelper || depth0.photo;\n  stack2 = helpers.each;\n  tmp1 = self.program(1, program1, data);\n  tmp1.hash = {};\n  tmp1.fn = tmp1;\n  tmp1.inverse = self.noop;\n  stack1 = stack2.call(depth0, stack1, tmp1);\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += "\\r\\n";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.pleiadesFlickrGroupOnly);\n  stack2 = helpers[\'if\'];\n  tmp1 = self.program(3, program3, data);\n  tmp1.hash = {};\n  tmp1.fn = tmp1;\n  tmp1.inverse = self.noop;\n  stack1 = stack2.call(depth0, stack1, tmp1);\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += "\\r\\n";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.pleiadesFlickrGroupOnly);\n  stack2 = helpers.unless;\n  tmp1 = self.program(5, program5, data);\n  tmp1.hash = {};\n  tmp1.fn = tmp1;\n  tmp1.inverse = self.noop;\n  stack1 = stack2.call(depth0, stack1, tmp1);\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += "\\r\\n<p>The flickr photos shown here are those which have been given a <a href=\\"http://www.flickr.com/groups/pleiades-places/discuss/72157628435317307/\\">Pleiades machine tag specifying this place.</a></p>\\r\\n";\n  return buffer;});\n})();';});
