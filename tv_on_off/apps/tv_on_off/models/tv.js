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

    name: SC.Record.attr(String),
    isOn: SC.Record.attr(Boolean)
});
