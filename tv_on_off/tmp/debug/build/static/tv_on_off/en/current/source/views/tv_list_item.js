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

        var container = SC.$("<div class='tv'>");
        container.append(SC.$("<input class='contentIndex' type='hidden' value='%@'>".fmt(this.get("contentIndex"))));
        container.append(SC.$("<span>").append("%@ (%@)".fmt(content.get("make"), content.get("model"))));

        container.append(SC.$("<button class='on' type='button'>").append("on"));
        container.append(SC.$("<button class='off' type='button'>").append("off"));
        context = context.push(SC.$("<div>").append(container).html());

        arguments.callee.base.apply(this,arguments);
    }
});; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tv_on_off');