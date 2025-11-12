const { createContext } = require("react");

sap.ui.define([
    "sap/ui/core/UIComponent",
    "mvcappdevkbi043/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("mvcappdevkbi043.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        },
        createContext: function() {
            var oViewData = {
                component: this
            }; 
            return sap.ui.view({
                viewName: "mvcappdevkbi043.view.App",
                type: sap.ui.core.mvc.ViewType.XML,
                viewData: oViewData
            });
        }
    });
});
