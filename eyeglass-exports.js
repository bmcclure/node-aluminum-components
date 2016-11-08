module.exports = function(eyeglass, sass) {
    return {
        assets: eyeglass.assets.export('assets')
    };
};
