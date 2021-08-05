module.exports = {
    id: "CustomSounds",
    name: "Custom Sounds",
    settings: require("./settings.json"),

    // DO NOT TOUCH
    defaultSounds: [],
    preinit(reGuilded, addonManager) {
        console.log(this.name, "preinit.");
    },
    init(reGuilded, addonManager, webpackManager) {
        this.settings.customSounds.forEach((sound) => {
            if (sound.id !== "" && sound.src !== "") {
                var defaultSound = webpackManager.sounds.default[sound.id];
                if (defaultSound != undefined) {
                    this.defaultSounds.push({ "id": sound.id, "src": defaultSound.src });
                    webpackManager.sounds.default[sound.id] = new defaultSound.constructor({ ...defaultSound, src: sound.src });
                    console.log(`Replaced default sound "${sound.id}" with custom sound "${sound.src}"`);
                }
            }
        });
    },
    uninit() {
        let webpackManager = global.ReGuilded.webpackManager;
        this.defaultSounds.forEach((sound) => {
            if (sound.id !== "" && sound.src !== "") {
                var defaultSound = webpackManager.sounds.default[sound.id];
                if (defaultSound != undefined) {
                    this.defaultSounds.push({ "id": sound.id, "src": defaultSound.src });
                    webpackManager.sounds.default[sound.id] = new defaultSound.constructor({ ...defaultSound, src: sound.src });
                    console.log(`Restored default sound "${sound.id}".`);
                }
            }
        });
        console.log(this.name, "uninit.");
    }
}