"use strict";
define( [ "module", "vwf/model" ], function( module, model ) {

    // vwf/model/scenejs.js is a placeholder for a 3-D scene manager.

    return model.load( module, {

        // == Module Definition ====================================================================

        // This is a placeholder for connecting to the SceneJS WebGL scene manager.

        // -- initialize ---------------------------------------------------------------------------

        initialize: function() {
        },

        // == Model API ============================================================================

        // -- creatingNode -------------------------------------------------------------------------

        creatingNode: function( nodeID, childID, childExtendsID, childImplementsIDs,
            childSource, childType, childName, callback /* ( ready ) */ ) {
        },

        // -- deletingNode -------------------------------------------------------------------------

        //deletingNode: function( nodeID ) {
        //},

        // -- settingProperty ----------------------------------------------------------------------

        //settingProperty: function( nodeID, propertyName, propertyValue ) {
        //},

        // -- gettingProperty ----------------------------------------------------------------------

        //gettingProperty: function( nodeID, propertyName, propertyValue ) {
        //},

    } );

} );
