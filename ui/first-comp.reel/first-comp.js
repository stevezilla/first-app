/**
 * @module ui/first-comp.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class FirstComp
 * @extends Component
 */
exports.FirstComp = Component.specialize(/** @lends FirstComp# */ {
    constructor: {
        value: function FirstComp() {
            this.super();
        }
    }
});
