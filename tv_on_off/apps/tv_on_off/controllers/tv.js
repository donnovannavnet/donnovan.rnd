// ==========================================================================
// Project:   TvOnOff.tvController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TvOnOff */

/** @class

        (Document Your Controller Here)

 @extends SC.Controller
 */
TvOnOff.tvController = SC.ArrayController.create(
    /** @scope TvOnOff.tvController.prototype */ {
    turnOn: function() {
        this.updateState("on");

        return true;
    },

    turnOff: function() {
        this.updateState("off");

        return true;
    },

    updateState: function(state) {
        this.invokeLater(function() {
            this.selection().forEach(function(item) {
                item.set("state", state);
                var url = TvOnOff.tvServiceUrl + "/" + item.get("guid") + "/state";
                SC.Request.putUrl(url, {state: state}).json().send();
            });
        });
    }
});
