TvOnOff.homePage = SC.Page.design({
    homePane: SC.MainPane.design({
        childViews: "welcomeView tvsButtonView".w(),

        welcomeView: SC.LabelView.design({
            layout: { top: 20, left: 27, width: 400, height: 20 },
            value: 'Welcome to NavNet! What would you like to do?',
            classNames: ['title1']
        }),
        tvsButtonView: SC.ButtonView.design({
            layout: { top: 70, left: 27, width: 400 },
            title: 'Manage Tvs',
            action: 'manageTvs'
        }),
        manageTvs: function() {
            TvOnOff.refreshTvStore();
            SC.routes.set('location', 'tvs');
        }
    })
});; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tv_on_off');