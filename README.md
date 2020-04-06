# Emoji List
A Comprehensive List of GitHub emoji markup.


### Project Structure

```
EMOJI-LIST
├── dist
│   ├── emoji-list.md         · Emojis List Markdown (for GitHub Gist)
│   └── missing-emojis.json   · Results from comparing emojis.json to another source
│
├── tasks/                    · Grunt tasks which run the NPM Scripts
│   ├── helpers/              · Supporting files for Grunt tasks
│   ├── alphabetize.js        · npm run alphabetize
│   ├── build.js              · npm run build
│   ├── check-api.js          · npm run check-api
│   ├── compare.js            · npm run compare
│   └── validate.js           · npm run validate
│
├── categories.json           · An array of category objects for sorting emojis
├── compare-emojis.json       · An array of emoji names to compare against emojis.json
├── emojis.json               · An array of emoji objects
│
└── gruntfile.js              · Grunt tasks for Emoji List
```


### NPM Scripts
**alphabetize**: sorts _/emojis.json_. Run this after making updates to the file.

**build** - builds _/emojis.json_ into a sorted markdown table: _dist/emoji-list.md_. It also compares the emoji list against [GitHub Emojis API](https://api.github.com/emojis) and outputs the results to _/dist/missing-emojis.json_.

**compare** - compare emojis list against the contents of _/compare-emojis.json_ and outputs the results to _/dist/missing-emojis.json_ and to the console.


### Adding an Emoji
Emojis can be added to emojis.json. Each emoji is represented by an object as such:

```json
  {
    "alias": "handshake",
    "unicode": "🤝",
    "category": "Gesture"
  },
```

`alias` accepts a string value or array of string values, representing names that can be used to create the emoji.

`unicode` is the raw emoji character. This is used for sorting the emojis.

`category` represents a grouping to assign to the emoji. Presently, available groupings can be found in categories.json.

Once you've added emojis, run `npm run alphabetize` to sort the emojis.json file and `npm run build` to generate the new emoji-list. If it builds without errors, create a PR.


### Thank You!

This project was adapted from rxavier’s _[Complete list of github markdown emoji markup](https://gist.github.com/rxaviers/7360908)_, and categorization was partly inspired from [JoyPixels 5](https://www.joypixels.com/emoji)

Contributions breakdown:

* **865** original emojis came from [rxavier’s list](https://gist.github.com/rxaviers/7360908)
* **46** emojis came from user comments on rxavier’s list
* **237** emojis came from [ikatyang’s emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet/)
* **337** emojis came from [GitHub Emojis API](https://api.github.com/emojis)

Additional note-worthy lists include [WebFX’s Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
