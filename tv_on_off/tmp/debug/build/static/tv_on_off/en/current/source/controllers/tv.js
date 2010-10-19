// ==========================================================================
// Project:   TvOnOff.tvController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TvOnOff */

/** @class

        (Document Your Controller Here)

 @extends SC.Controller
 */
TvOnOff.tvController = SC.ArrayController.create({
    turnTvOn: function(idx) {
        this.updateTvState(idx, "on");
    },
    turnTvOff: function(idx) {
        this.updateTvState(idx, "off");
    },

    updateTvState: function(idx, state) {
        var item = this.objectAt(idx);
        this.invokeLater(function() {
            item.set("state", state);
            var url = TvOnOff.tvServiceUrl + "/" + item.get("guid") + "/state";
            SC.Request.putUrl(url, {state: state}).json().send();
        });
    }
});; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tv_on_off');