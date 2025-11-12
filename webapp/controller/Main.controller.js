sap.ui.define([
    "mvcappdevkbi043/controller/BaseController"
], function(BaseController) {
    "use strict";

    return BaseController.extend("mvcappdevkbi043.controller.Main", {
        onInit: function () {
            var oRootPath = jQuery.sap.getModulePath("mvcappdevkbi043");
            var oModel = new sap.ui.model.json.JSONModel(oRootPath + "/model/flights.json");
            this.getView().setModel(oModel);
        },
        handleListItemPress: function () {
            alert("List item pressed!");
        }
});
});