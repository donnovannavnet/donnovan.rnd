// ==========================================================================
// Project:   Todolist.MainView
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Todolist */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Todolist.MainView = SC.View.extend(
/** @scope Todolist.MainView.prototype */ {

    render: function(context, firstTime) {
      context.html("Hello World");

//      context = context.begin('div').addClass('user-summary-view');
//      context = context.begin('div').addClass('user-summary-view-name').push(name).end();
//      context = context.begin('div').addClass('user-summary-view-desc').push(description).end();
//      context = context.begin('div').addClass('user-summary-view-age');
//      context = context.begin('div').addClass('user-summary-view-age-value').push(age).end();
//      context = context.begin('div').addClass('user-summary-view-age-capt').push('age').end();
//      context = context.end();
//      context = context.end();

      arguments.callee.base.apply(this,arguments);
    }


});
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('todolist');