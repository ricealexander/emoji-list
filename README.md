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

**alphabetize**
<br>Alphabetize and Format _emojis.json_ document
<br>Run this after making changes to _emojis.json_.

**build**
<br>Generate Emoji List Markdown File
<br>Builds _emojis.json_ into _emoji-list.md_. Emojis are sorted by category, then by unicode value, then by name.

**check-api**
<br>Compare against [GitHub’s Emojis API](https://api.github.com/emojis).
<br>Results of the comparison are outputted to _missing-emojis.json_.

**compare**
<br>Compare against compare-emojis.json
<br>Populate compare-emojis.json with an array of emoji names and run `compare` to compare this list against emojis.json

**validate**
<br>Check emojis.json for Errors


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

This project was adapted from rxavier’s _[Complete list of github markdown emoji markup](https://gist.github.com/rxaviers/7360908)_ and categorization was inspired from [JoyPixels 5](https://www.joypixels.com/emoji)

Other Emoji Lists:

* [GitHub Emojis API](https://api.github.com/emojis) (OFFICIAL, GitHub Emojis API)
* [Awes0mem4n List](https://awes0mem4n.github.io/emojis-github.html) (GitHub Emojis API)
* [Code-Notes Cheatsheet](https://github.com/swharden/code-notes/blob/master/Csharp/emoji.md)
* [Dellos7 List](https://github-emoji-list.herokuapp.com/) (copy/paste, GitHub Emojis API)
* [Ikatyang Cheatsheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md) (GitHub Emojis API, automatic-updates)
* [RXavier List](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)
* [WebFX’s Cheatsheet](https://www.webfx.com/tools/emoji-cheat-sheet/) (copy/paste)
* [Jzeferino List](https://jzeferino.github.io/AllGithubEmojis/) (copy/paste, GitHub Emojis API, automatic-updates)
