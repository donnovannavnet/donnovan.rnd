TvOnOff.tvsPage = SC.Page.design({
    tvsPane: SC.MainPane.design({
        childViews: 'toolbarView tvsView'.w(),

        toolbarView: SC.ToolbarView.design({
            layout: { top: 0, left: 0, right: 0, height: 36 },
            anchorLocation: SC.ANCHOR_TOP,
            childViews: "backView labelView".w(),
            backView: SC.ButtonView.design({
                layout: { centerY: 0, height: 24, left: 8, width: 100 },
                title:  "Back",
                action: "goBack"
            }),
            labelView: SC.LabelView.design({
                layout: { centerY: 0, height: 20, left: 116, width: 200 },
                fontWeight: SC.BOLD_WEIGHT,
                value: "Manage your TVs"
            })
        }),
        tvsView : SC.ScrollView.design({
            layout: { top: 36, bottom: 32, left: 0, right: 0 },
            hasHorizontalScroller: NO,
            backgroundColor: 'white',

            contentView: SC.ListView.design({
                contentBinding: 'TvOnOff.tvController',
                selectionBinding: 'TvOnOff.tvController.selection',
                exampleView: TvOnOff.TvListItemView.extend({
                    controller: TvOnOff.tvController
                }),
                rowHeight: 30
            })
        }),
        goBack: function() {
            SC.routes.set('location', 'home');
        }
    })
});