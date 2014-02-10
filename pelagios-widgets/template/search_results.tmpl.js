define('lib/text!template/search_results.tmpl',[],function () { return '(function() {\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\ntemplates[\'search_results\'] = template({"1":function(depth0,helpers,partials,data) {\n  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression;\n  return " \\n<div id=\\""\n    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.widgetContext)),stack1 == null || stack1 === false ? stack1 : stack1.widgetID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "-search-results-map\\" class=\\"search-map\\">\\n    <p>Geographic Results for: <strong>"\n    + escapeExpression(((helper = helpers.searchString || (depth0 && depth0.searchString)),(typeof helper === functionType ? helper.call(depth0, {"name":"searchString","hash":{},"data":data}) : helper)))\n    + "</strong></p>\\n    <div id=\\""\n    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.widgetContext)),stack1 == null || stack1 === false ? stack1 : stack1.widgetID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "-search-map_canvas\\" style=\\"width:\\n    "\n    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.widgetContext)),stack1 == null || stack1 === false ? stack1 : stack1.mapWidth)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "; height:200px\\"></div>\\n</div>  \\n";\n},"3":function(depth0,helpers,partials,data) {\n  var stack1, functionType="function", escapeExpression=this.escapeExpression;\n  return "\\n<li id=\\""\n    + escapeExpression(((stack1 = (depth0 && depth0.widgetID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "-place-"\n    + escapeExpression(((stack1 = (depth0 && depth0.pleiadesID)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "\\" class=\\"link "\n    + escapeExpression(((stack1 = (depth0 && depth0.feature_type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "\\">"\n    + escapeExpression(((stack1 = (depth0 && depth0.label)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))\n    + "</li>\\n";\n},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {\n  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "";\n  stack1 = helpers[\'if\'].call(depth0, ((stack1 = (depth0 && depth0.widgetContext)),stack1 == null || stack1 === false ? stack1 : stack1.displayMap), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += "\\n<div class=\\"list-results-section\\">\\n<p>List Results for: <strong>"\n    + escapeExpression(((helper = helpers.searchString || (depth0 && depth0.searchString)),(typeof helper === functionType ? helper.call(depth0, {"name":"searchString","hash":{},"data":data}) : helper)))\n    + "</strong>\\n<div class=\\"list-results\\">\\n<ul>\\n";\n  stack1 = helpers.each.call(depth0, (depth0 && depth0.place), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  return buffer + "\\n</ul>\\n</div>\\n</div>";\n},"useData":true});\n})();';});
