TvOnOff.TvListItemView = SC.View.extend(SC.ContentDisplay, {
    contentDisplayProperties: "make model state".w(),
    displayProperties: 'isSelected'.w(),
    mouseDown: function(e) {
        return YES;
    },
    mouseUp: function(e) {
        var target = e.target;
        var $target = SC.$(target);
        var contentIndex = $target.parent().find(".contentIndex").val();
        
        if ($target.hasClass("on"))
            this.get("controller").turnTvOn(contentIndex);
        else if ($target.hasClass("off"))
            this.get("controller").turnTvOff(contentIndex);
    },
    render: function(context, firstTime) {

        var isSelected = this.get('isSelected');
        var idx = this.get("contentIndex");
        var content = this.get("content");

        var container = SC.$("<div>");
        container.append(SC.$("<input class='contentIndex' type='hidden' value='%@'>".fmt(this.get("contentIndex"))));
        container.append(SC.$("<span>").append("%@ (%@) - %@".fmt(content.get("make"), content.get("model"), content.get("state"))));

        container.append(SC.$("<input class='on' type='button' value='on'>"))
        container.append(SC.$("<input class='off' type='button' value='off'>"))
        context = context.push(container.html());

        arguments.callee.base.apply(this,arguments);
    }
});; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tv_on_off');