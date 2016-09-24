/**
 * Created by BMcClure on 9/23/2016.
 */

module.exports = function(eyeglass, sass) {
    return {
        assets: eyeglass.assets.export('assets')
    };
};
