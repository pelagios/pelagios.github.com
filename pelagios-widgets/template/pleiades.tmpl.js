define('lib/text!template/pleiades.tmpl',[],function () { return '(function() {\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\ntemplates[\'pleiades\'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  helpers = helpers || Handlebars.helpers;\n  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;\n\nfunction program1(depth0,data) {\n  \n  var buffer = "", stack1;\n  buffer += "\\r\\n    <p>Some alternative names: ";\n  foundHelper = helpers.altNames;\n  stack1 = foundHelper || depth0.altNames;\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "altNames", { hash: {} }); }\n  buffer += escapeExpression(stack1) + " (the results below are for all alternative names)</p>  \\r\\n    ";\n  return buffer;}\n\nfunction program3(depth0,data) {\n  \n  var buffer = "", stack1;\n  buffer += " \\r\\n    <div id=\\"";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.widgetID);\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "widgetContext.widgetID", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "-map\\">    \\r\\n        <div id=\\"";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.widgetID);\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "widgetContext.widgetID", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "-map_canvas\\" style=\\"width:";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.mapWidth);\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "widgetContext.mapWidth", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "; height:200px\\"></div>\\r\\n    </div>   \\r\\n    ";\n  return buffer;}\n\n  buffer += " <h1 id=\\"";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.widgetID);\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "widgetContext.widgetID", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "-title\\" class=\\"pelagios-title\\">";\n  foundHelper = helpers.title;\n  stack1 = foundHelper || depth0.title;\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "</h1>    \\r\\n<div class=\\"section-content\\" id=\\"";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.widgetID);\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "widgetContext.widgetID", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "-pleiades\\">\\r\\n    <div id=\\"";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.widgetID);\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "widgetContext.widgetID", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "-description\\"><p>";\n  foundHelper = helpers.description;\n  stack1 = foundHelper || depth0.description;\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "description", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "</p>\\r\\n    ";\n  foundHelper = helpers.altNames;\n  stack1 = foundHelper || depth0.altNames;\n  stack2 = helpers[\'if\'];\n  tmp1 = self.program(1, program1, data);\n  tmp1.hash = {};\n  tmp1.fn = tmp1;\n  tmp1.inverse = self.noop;\n  stack1 = stack2.call(depth0, stack1, tmp1);\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += "\\r\\n    ";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.displayMap);\n  stack2 = helpers[\'if\'];\n  tmp1 = self.program(3, program3, data);\n  tmp1.hash = {};\n  tmp1.fn = tmp1;\n  tmp1.inverse = self.noop;\n  stack1 = stack2.call(depth0, stack1, tmp1);\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += "\\r\\n    <p><img src=\\"";\n  foundHelper = helpers.widgetContext;\n  stack1 = foundHelper || depth0.widgetContext;\n  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.baseURL);\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "widgetContext.baseURL", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "images/icons/pleiades.png\\"  class=\\"pleiades-icon\\" />\\r\\n    <a href=\\"http://pleiades.stoa.org/places/";\n  foundHelper = helpers.pleiadesID;\n  stack1 = foundHelper || depth0.pleiadesID;\n  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }\n  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "pleiadesID", { hash: {} }); }\n  buffer += escapeExpression(stack1) + "\\" target=\\"_blank\\">Entry in the Pleiades Gazetteer</a></p>    \\r\\n</div>";\n  return buffer;});\n})();';});
