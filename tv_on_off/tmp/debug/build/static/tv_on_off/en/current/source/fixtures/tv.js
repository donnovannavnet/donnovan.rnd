// ==========================================================================
// Project:   TvOnOff.Tv Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TvOnOff */

sc_require('models/tv');

TvOnOff.Tv.FIXTURES = [

    {
        guid: "TV-1",
        name: "Sony XBR 5",
        isOn: false
    }

];
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tv_on_off');