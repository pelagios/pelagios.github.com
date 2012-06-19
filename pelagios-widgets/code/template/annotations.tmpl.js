define('lib/text!template/annotations.tmpl',[],function () { return '(function() {\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\ntemplates[\'annotations\'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  helpers = helpers || Handlebars.helpers;\n  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;\n\nfunction program1(depth0,data) {\n  \n  var buffer = "", stack1;\n  buffer += "\\r\\n<li><a href=\\"";\n  stack1 = depth0.uri;\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this.uri", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "\\" target=\\"_blank\\">";\n  stack1 = depth0.label;\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this.label", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "</a></li>\\r\\n";\n  return buffer;}\n\n  buffer += "<ul class=\\"annotations\\" id=\\"";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.widgetID);\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "widgetContext.widgetID", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "-annotations-";\n  foundHelper = helpers.subdatasetID;\n  stack1 = foundHelper || depth0.subdatasetID;\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "subdatasetID", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "\\">\\r\\n";\n  foundHelper = helpers.annotation;\n  stack1 = foundHelper || depth0.annotation;\n  stack2 = helpers.each;\n  tmp1 = self.program(1, program1, data);\n  tmp1.hash = {};\n  tmp1.fn = tmp1;\n  tmp1.inverse = self.noop;\n  stack1 = stack2.call(depth0, stack1, tmp1);\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += "\\r\\n</ul>";\n  return buffer;});\n})();';});
