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
    turnTvOn: function(idx){
        this.invokeLater(function(){
            console.log(this.objectAt(idx));
        });
    },
    turnTvOff: function(idx){

    },

    turnOn: function() {
        console.log(this.selection());

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
});; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tv_on_off');