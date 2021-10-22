const { writeFileSync } = require("fs");
const { join } = require("path");

module.exports = {
    id: "defaultMediaVolume",
    name: "Default Media Volume",
    settings: require("./settings.json"),

    // DO NOT TOUCH
    liveDefaultVolume: 0.5,
    mutationObserver: null,

    preinit(reGuilded, addonManager) {
        this.liveDefaultVolume = this.settings.defaultVol;

        this.mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.previousSibling instanceof HTMLVideoElement) {
                    mutation.previousSibling.volume = this.liveDefaultVolume;

                    mutation.previousSibling.addEventListener("volumechange", (event) => {
                        this.liveDefaultVolume = event.target.volume;
                    })
                }
            });
        })
    },

    init(reGuilded, addonManager, webpackManager) {
        this.mutationObserver.observe(document.documentElement, {
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true,
            attributeOldValue: true,
            characterDataOldValue: true
        });
    },

    uninit() {
        this.mutationObserver.disconnect();

        writeFileSync(join(__dirname, "settings.json"), JSON.stringify({ defaultVol: this.liveDefaultVolume}));
    }
}