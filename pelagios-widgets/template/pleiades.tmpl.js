define('lib/text!template/pleiades.tmpl',[],function () { return '(function() {\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\ntemplates[\'pleiades\'] = template({"1":function(depth0,helpers,partials,data) {\n  var helper, functionType="function", escapeExpression=this.escapeExpression;\n  return "\\n    <p>Some alternative names: "\n    + escapeExpression(((helper = helpers.altNames || (depth0 && depth0.altNames)),(typeof helper === functionType ? helper.call(depth0, {"name":"altNames","hash":{},"data":data}) : helper)))\n    + " (the results below are for all alternative names)</p>  \\n    ";\n},"3":function(depth0,helpers,partials,data) {\n  var stack1, functionType="function", escapeExpression=this.escapeExpression;\n  return " \\n    <div id=\\""\n    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.widgetContext)),stack1 == null || stack1 === false ? stack1 : stack1.widgetID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "-map\\">    \\n        <div id=\\""\n    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.widgetContext)),stack1 == null || stack1 === false ? stack1 : stack1.widgetID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "-map_canvas\\" style=\\"width:"\n    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.widgetContext)),stack1 == null || stack1 === false ? stack1 : stack1.mapWidth)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "; height:200px\\"></div>\\n    </div>   \\n    ";\n},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {\n  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = " <h1 id=\\""\n    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.widgetContext)),stack1 == null || stack1 === false ? stack1 : stack1.widgetID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "-title\\" class=\\"pelagios-title\\">"\n    + escapeExpression(((helper = helpers.title || (depth0 && depth0.title)),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))\n    + "</h1>    \\n<div class=\\"section-content\\" id=\\""\n    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.widgetContext)),stack1 == null || stack1 === false ? stack1 : stack1.widgetID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "-pleiades\\">\\n    <div id=\\""\n    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.widgetContext)),stack1 == null || stack1 === false ? stack1 : stack1.widgetID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "-description\\"><p>"\n    + escapeExpression(((helper = helpers.description || (depth0 && depth0.description)),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))\n    + "</p>\\n    ";\n  stack1 = helpers[\'if\'].call(depth0, (depth0 && depth0.altNames), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += "\\n    ";\n  stack1 = helpers[\'if\'].call(depth0, ((stack1 = (depth0 && depth0.widgetContext)),stack1 == null || stack1 === false ? stack1 : stack1.displayMap), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  return buffer + "\\n    <p><img src=\\""\n    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.widgetContext)),stack1 == null || stack1 === false ? stack1 : stack1.baseURL)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "images/icons/pleiades.png\\"  class=\\"pleiades-icon\\" />\\n    <a href=\\"http://pleiades.stoa.org/places/"\n    + escapeExpression(((helper = helpers.pleiadesID || (depth0 && depth0.pleiadesID)),(typeof helper === functionType ? helper.call(depth0, {"name":"pleiadesID","hash":{},"data":data}) : helper)))\n    + "\\" target=\\"_blank\\">Entry in the Pleiades Gazetteer</a></p>    \\n</div>";\n},"useData":true});\n})();';});
