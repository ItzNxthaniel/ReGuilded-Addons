const { join } = require("path");
const { ReGuildedApi } = global;

module.exports = {
    settings: null,

    // DO NOT TOUCH
    defaultSounds: {},
    init() {
        // Init Function
    },

    load() {
        delete require.cache[join(__dirname, "settings.json")]
        this.settings = require("./settings.json");

        for (const sound in this.settings) {
            if (this.settings[sound] !== undefined && typeof this.settings[sound] == "string" && this.settings[sound] !== "") {
                const defaultSound = ReGuildedApi.sounds[sound];
                if (defaultSound !== undefined) {
                    this.defaultSounds[sound] = defaultSound.src;

                    ReGuildedApi.sounds[sound] = new defaultSound.constructor({ ...defaultSound, src: this.settings[sound]});
                    console.log(`Replaced default sound "${sound}" with custom sound "${this.settings[sound]}"`);
                }
            }
        }
    },

    unload() {
        for (const sound in this.defaultSounds) {
            if (this.defaultSounds[sound] !== undefined) {
                const defaultSound = ReGuildedApi.sounds[sound];

                ReGuildedApi.sounds[sound] = new defaultSound.constructor({ ...defaultSound, src: this.defaultSounds[sound]});
                delete this.defaultSounds[sound];

                console.log(`Restored default sound "${sound}"`);
            }
        }

        console.log("Custom Sound addon unload.");
    }
}