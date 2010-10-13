// ==========================================================================
// Project:   TvOnOff - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TvOnOff */

// This page describes the main user interface for your application.
TvOnOff.mainPage = SC.Page.design({

    // The main pane is made visible on screen as soon as your app is loaded.
    // Add childViews to this pane for views to display immediately on page
    // load.
    mainPane: SC.MainPane.design({
        childViews: 'toolbarView tvsView'.w(),

        toolbarView: SC.ToolbarView.design({
            layout: { top: 0, left: 0, right: 0, height: 36 },
            anchorLocation: SC.ANCHOR_TOP,
            childViews: "labelView onButton offButton".w(),
            labelView: SC.LabelView.design({
                layout: { centerY: 0, height: 24, left: 8, width: 200 },
                controlSize: SC.LARGE_CONTROL_SIZE,
                fontWeight: SC.BOLD_WEIGHT,
                value: "Turn your TV:"
            }),
            onButton: SC.ButtonView.design({
                layout: { centerY: 0, height: 24, right: 124, width: 100 },
                title:  "On",
                target: "TvOnOff.tvController",
                action: "turnOn"
            }),
            offButton: SC.ButtonView.design({
                layout: { centerY: 0, height: 24, right: 12, width: 100 },
                title:  "Off",
                target: "TvOnOff.tvController",
                action: "turnOff"
            })
        }),
        tvsView : SC.ScrollView.design({
            layout: { top: 36, bottom: 32, left: 0, right: 0 },
            hasHorizontalScroller: NO,
            backgroundColor: 'white',

            contentView: SC.ListView.design({
                contentBinding: 'TvOnOff.tvController.arrangedObjects',
                selectionBinding: 'TvOnOff.tvController.selection'
            })
        })
    })
});
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tv_on_off');