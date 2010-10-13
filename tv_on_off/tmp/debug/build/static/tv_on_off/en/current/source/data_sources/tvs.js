// ==========================================================================
// Project:   TvOnOff.TvsDataSource
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TvOnOff */
sc_require("models/tv");
TvOnOff.TVS_QUERY = SC.Query.local(TvOnOff.Tv, {
    orderBy: "make,model"
});


/** @class

        (Document Your Data Source Here)

 @extends SC.DataSource
 */
TvOnOff.TvsDataSource = SC.DataSource.extend(
    /** @scope TvOnOff.TvsDataSource.prototype */ {

    // ..........................................................
    // QUERY SUPPORT
    //

    fetch: function(store, query) {

        if (query != TvOnOff.TVS_QUERY) return false;


        var url = TvOnOff.tvServiceUrl;

        SC.Request
                .getUrl(url)
                .header({"Accept": "application/json"})
                .json()
                .notify(this, this.didFetch, store, query)
                .send();

        return true;
    },

    didFetch: function(response, store, query) {
        if (!SC.ok(response)) store.dataSourceDidErrorQuery(query, response);
        else {
            store.loadRecords(TvOnOff.Tv, response.get('body'));
            store.dataSourceDidFetchQuery(query);
        }

    },

    // ..........................................................
    // RECORD SUPPORT
    //

    retrieveRecord: function(store, storeKey) {

        // TODO: Add handlers to retrieve an individual record's contents
        // call store.dataSourceDidComplete(storeKey) when done.

        return NO; // return YES if you handled the storeKey
    },

    createRecord: function(store, storeKey) {

        // TODO: Add handlers to submit new records to the data source.
        // call store.dataSourceDidComplete(storeKey) when done.

        return NO; // return YES if you handled the storeKey
    },

    updateRecord: function(store, storeKey) {

        // TODO: Add handlers to submit modified record to the data source
        // call store.dataSourceDidComplete(storeKey) when done.

        return NO; // return YES if you handled the storeKey
    },

    destroyRecord: function(store, storeKey) {

        // TODO: Add handlers to destroy records on the data source.
        // call store.dataSourceDidDestroy(storeKey) when done

        return NO; // return YES if you handled the storeKey
    }

});
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tv_on_off');