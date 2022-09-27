const clientSounds = await ReGuilded.getApiProperty("guilded/app/sounds").default;

if (!clientSounds) console.error("CustomSounds cannot work without clientSounds loaded.")

module.exports = {
    settings: null,

    // DO NOT TOUCH
    defaultSounds: {},
    init() {
        // Init Function
    },

    async load() {
        this.settings = await require("./settings.json");

        for (const sound in this.settings) {
            if (this.settings[sound] !== undefined && typeof this.settings[sound] == "string" && this.settings[sound] !== "") {
                const defaultSound = clientSounds[sound];

                if (defaultSound !== undefined) {
                    this.defaultSounds[sound] = defaultSound.src;

                    clientSounds[sound] = new defaultSound.constructor({ ...defaultSound, src: this.settings[sound]});
                    console.log(`Replaced default sound "${sound}" with custom sound "${this.settings[sound]}"`);
                }
            }
        }
    },

    unload() {
        for (const sound in this.defaultSounds) {
            if (this.defaultSounds[sound] !== undefined) {
                const defaultSound = clientSounds[sound];

                clientSounds[sound] = new defaultSound.constructor({ ...defaultSound, src: this.defaultSounds[sound]});
                delete this.defaultSounds[sound];

                console.log(`Restored default sound "${sound}"`);
            }
        }

        console.log("Custom Sound addon unload.");
    }
}