define('lib/text!template/widget_container.tmpl',[],function () { return '(function() {\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\ntemplates[\'widget_container\'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  helpers = helpers || Handlebars.helpers;\n  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;\n\nfunction program1(depth0,data) {\n  \n  var buffer = "", stack1;\n  buffer += "\\r\\n        <a href=\\"\\" class=\\"close\\">\\r\\n        <img src=\\"";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.baseURL);\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "widgetContext.baseURL", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "images/icons/close-button.png\\" alt=\\"Close Pelagios information\\" />\\r\\n        </a>    \\r\\n        ";\n  return buffer;}\n\nfunction program3(depth0,data) {\n  \n  var buffer = "", stack1;\n  buffer += "\\r\\n<img id=\\"";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.widgetID);\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "widgetContext.widgetID", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "-icon\\" class=\\"icon\\" src=\\"";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.baseURL);\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "widgetContext.baseURL", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "images/icons/pelagios.png\\" /> \\r\\n";\n  return buffer;}\n\n  buffer += "<div id=\\"";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.widgetID);\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "widgetContext.widgetID", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "-container\\" class=\\"container\\">    \\r\\n    <div class=\\"header\\"> \\r\\n        <img class=\\"logo\\" src=\\"";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.imageDir);\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "widgetContext.imageDir", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "icons/pelagios-logo.png\\" alt=\\"View Pelagios infromation\\"/>    \\r\\n        ";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.overlay);\n  stack2 = helpers[\'if\'];\n  tmp1 = self.program(1, program1, data);\n  tmp1.hash = {};\n  tmp1.fn = tmp1;\n  tmp1.inverse = self.noop;\n  stack1 = stack2.call(depth0, stack1, tmp1);\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += "\\r\\n    </div>    \\r\\n    <div class=\\"content-wrapper\\">\\r\\n        <div id=\\"";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.widgetID);\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "widgetContext.widgetID", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "-content\\">\\r\\n        </div>\\r\\n        <div class=\\"pelagios-footer\\"></div>                           \\r\\n    </div>\\r\\n</div>    \\r\\n";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.overlay);\n  stack2 = helpers[\'if\'];\n  tmp1 = self.program(3, program3, data);\n  tmp1.hash = {};\n  tmp1.fn = tmp1;\n  tmp1.inverse = self.noop;\n  stack1 = stack2.call(depth0, stack1, tmp1);\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += "  ";\n  return buffer;});\n})();';});
