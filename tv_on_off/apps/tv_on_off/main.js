TvOnOff.main = function main() {

    SC.routes.add(':page', TvOnOff.routes, 'gotoRoute');
    SC.routes.add(':', TvOnOff.routes, 'gotoRoute');

    var tvs = TvOnOff.store.find(TvOnOff.TVS_QUERY);
    TvOnOff.tvController.set("content", tvs);

};

TvOnOff.refreshTvStore = function() {
    var tvs = TvOnOff.store.find(TvOnOff.TVS_QUERY).refresh();
    TvOnOff.tvController.set("content", tvs);
}

function main() {
    TvOnOff.main();
}
