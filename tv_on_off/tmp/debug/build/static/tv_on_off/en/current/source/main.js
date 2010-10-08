// ==========================================================================
// Project:   TvOnOff
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TvOnOff */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
TvOnOff.main = function main() {

    // Step 1: Instantiate Your Views
    // The default code here will make the mainPane for your application visible
    // on screen.  If you app gets any level of complexity, you will probably
    // create multiple pages and panes.
    TvOnOff.getPath('mainPage.mainPane').append();

    // Step 2. Set the content property on your primary controller.
    // This will make your app come alive!

    var query = SC.Query.local(TvOnOff.Tv);
    var tvs = TvOnOff.store.find(query);
    TvOnOff.tvController.set("content", tvs.objectAt(0));

};

function main() {
    TvOnOff.main();
}
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tv_on_off');