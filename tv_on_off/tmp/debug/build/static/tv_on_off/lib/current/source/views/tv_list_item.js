TvOnOff.TvListItemView = SC.View.extend(SC.ContentDisplay, {
    contentDisplayProperties: "make model state".w(),
    displayProperties: 'isSelected'.w(),
    render: function(context, firstTime) {

        var isSelected = this.get('isSelected');
        var content = this.get("content");
        var make = content.get("make");
        var model = content.get("model");
        var state = content.get("state");
        var controller = this.get("controller");
        var view = this.get("parentView");
        x = view.$("<input type='button' value='on'>");
        console.log(x);

        var standard = !isSelected;
        var selected = isSelected;
        var classes = { 'standard': standard, 'selected': selected };

        var container = SC.$("<div>");
        container.append(SC.$("<span>").append("%@ (%@) - %@".fmt(make, model, state)));
        var onButton = $("<input type='button' value='on'>");
        console.log(onButton);

        container.append(onButton)
        container.append(SC.$("<input type='button' value='off'>"))
        context = context.push(container.html());
//
//        context = context.begin().setClass(classes);
//        context = context.begin("p").push("%@ (%@) - %@".fmt(make, model, state)).begin("a").end()
//        context = context.end();

        arguments.callee.base.apply(this,arguments);
    }
});; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tv_on_off');