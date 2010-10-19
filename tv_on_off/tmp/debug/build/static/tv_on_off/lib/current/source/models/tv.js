// ==========================================================================
// Project:   TvOnOff.Tv
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TvOnOff */

/** @class

        (Document your Model here)

 @extends SC.Record
 @version 0.1
 */
TvOnOff.Tv = SC.Record.extend(
    /** @scope TvOnOff.Tv.prototype */ {

    make: SC.Record.attr(String),
    model: SC.Record.attr(String),
    state: SC.Record.attr(String)
    
});
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tv_on_off');