# ReGuilded Addon Tutorial
I use a settings.json in my addons to handle client settings.

### The Download:
- Custom Sounds (id: customSounds) [[Click Here](https://downgit.github.io/#/home?url=https://github.com/ItzNxthaniel/ReGuilded-Addons/tree/main/addons/CustomSounds)]
    - Customize your sounds you hear on Guilded. Just put a source file into the `settings.json`, relating to the sound you want to customize!
- Default Media Volume (id: defaultMediaVolume) [[Click Here](https://downgit.github.io/#/home?url=https://github.com/ItzNxthaniel/ReGuilded-Addons/tree/main/addons/DefaultMediaVolume)]
    - Don't deal with the pesky issue of having to set volume for any video on Guilded now!
    
### The Installation:
Unzip the folder, and follow the steps [here](https://github.com/ReGuilded/ReGuilded-Themes/wiki/User-Settings) to get to User Settings.
Place the unzipped folder into the `addons` directory in your user settings. Then head to the main `settings.json` located at `.reguilded/settings/settings.json`

In there add the correlating id into the addons enabled array. Example:
```json
{
    "themes": {
        "enabled": []
    },
    "addons": {
        "enabled": [
            "customSounds",
            "defaultMediaVolume"
        ]
    }
}
```
**Remember, the *last* line of the array "[ ]" *cannot* have a comma.**

Once you've added the ID to the Enabled Array, feel free to CTRL + R on Guilded, and you're off, with your brand-new addons!