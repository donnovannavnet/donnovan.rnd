// ==========================================================================
// Project:   TvOnOff.tvController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TvOnOff */

/** @class

        (Document Your Controller Here)

 @extends SC.Controller
 */
TvOnOff.tvController = SC.ObjectController.create(
    /** @scope TvOnOff.tvController.prototype */ {
    turnOn: function() {
        var middleView = TvOnOff.mainPage.getPath("mainPane.middleView");
        this.set("isOn", true);

        this.invokeLater(function() {
            var labelView = TvOnOff.mainPage.getPath("mainPane.middleView");
            labelView.set("Value", this.currentState());
            console.log(this.currentState());
        });


        return true;
    },
    turnOff: function() {
        var middleView = TvOnOff.mainPage.getPath("mainPane.middleView");
        this.set("isOn", false);

        this.invokeLater(function() {
            var labelView = TvOnOff.mainPage.getPath("mainPane.middleView");
            labelView.set("Value", this.currentState());
            console.log(this.currentState());
        });

        return true;
    },
    currentState: function() {
        return this.get("isOn") ? "On" : "Off";
    }.property('isOn')

});
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tv_on_off');