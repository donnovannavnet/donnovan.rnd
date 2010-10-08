// ==========================================================================
// Project:   Todolist - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Todolist */

// This page describes the main user interface for your application.
Todolist.mainPage = SC.Page.design({

    // The main pane is made visible on screen as soon as your app is loaded.
    // Add childViews to this pane for views to display immediately on page
    // load.
    mainPane: SC.MainPane.design({
        childViews: 'mainView'.w(),

        mainView: Todolist.MainView = SC.View.extend(
            /** @scope Todolist.MainView.prototype */ {

            render: function(context) {
                var container = $("<div>");
                var top = $("<div class='top'>")
                var middle = $("<div class='middle'>")
                var bottom = $("<div class='bottom'>")

                container.append(top);
                container.append(middle.append($("<div class='who'>")));
                container.append(bottom);

                var data = {"who": "Donnovan Lewis"};
                var directive = {
                  ".": "who"
                };

                middle.find(".who").render(data, directive);
                context.push(container.html());
            }
        })
    })
});
