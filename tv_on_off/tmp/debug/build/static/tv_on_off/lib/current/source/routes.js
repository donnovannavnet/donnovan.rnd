TvOnOff.routes = SC.Object.create({
    currentPagePane: null,
    gotoRoute: function(routeParams) {
        var page = routeParams.page;
        if(page == undefined || page == "")
            page = "home";

        if (this.currentPagePane != null) {
            this.currentPagePane.remove();
        }

        var pagePanePath = page + 'Page.' + page + "Pane";
        var pagePane = TvOnOff.getPath(pagePanePath);
        pagePane.append();

        this.currentPagePane = pagePane;
    }
});; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tv_on_off');