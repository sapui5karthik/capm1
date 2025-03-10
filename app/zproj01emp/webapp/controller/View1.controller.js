sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("zproj01emp.controller.View1", {
        onInit() {
        },
        cicdCheck : function(){
            sap.m.MessageToast.show("CICD CHECKS RUNNING");
        }
    });
});