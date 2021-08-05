module.exports = {
    id: "ExampleAddon",     // Must Equal Folder Name.
    name: "Example Addon",  // Formatted Display Name.

    preinit(reGuilded, addonManager) {
        console.log('Example Preinit.', reGuilded, addonManager);
    },

    init(reGuilded, addonManager, webpackManager) {
        console.log('Example Init.', reGuilded, addonManager, webpackManager);
    },

    uninit() {
        console.log('Example Uninit.');
    }
}