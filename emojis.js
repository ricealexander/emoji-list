const emojiJSON = [
  {
    alias: 'bowtie',
    unicode: false,
    category: 'People',
  },
  {
    alias: 'neckbeard',
    unicode: false,
    category: 'People',
  },
  {
    alias: 'feelsgood',
    unicode: false,
    category: 'People',
  },
  {
    alias: 'finnadie',
    unicode: false,
    category: 'People',
  },
  {
    alias: 'goberserk',
    unicode: false,
    category: 'People',
  },
  {
    alias: 'godmode',
    unicode: false,
    category: 'People',
  },
  {
    alias: 'hurtrealbad',
    unicode: false,
    category: 'People',
  },
  {
    alias: 'rage1',
    unicode: false,
    category: 'People',
  },
  {
    alias: 'rage2',
    unicode: false,
    category: 'People',
  },
  {
    alias: 'rage3',
    unicode: false,
    category: 'People',
  },
  {
    alias: 'rage4',
    unicode: false,
    category: 'People',
  },
  {
    alias: 'suspect',
    unicode: false,
    category: 'People',
  },
  {
    alias: 'trollface',
    unicode: false,
    category: 'People',
  },
  {
    alias: 'octocat',
    unicode: false,
    category: 'Nature',
  },
  {
    alias: 'shipit',
    unicode: false,
    category: 'Nature',
  },
  {
    alias: 'shipit',
    unicode: false,
    category: 'Symbols',
  },
  {
    alias: 'smile',
    unicode: '😄',
    category: 'People',
  },
  {
    alias: 'laughing',
    unicode: '😆',
    category: 'People',
  },
  {
    alias: 'blush',
    unicode: '😊',
    category: 'People',
  },
  {
    alias: 'smiley',
    unicode: '😃',
    category: 'People',
  },
  {
    alias: 'relaxed',
    unicode: '☺️',
    category: 'People',
  },
  {
    alias: 'smirk',
    unicode: '😏',
    category: 'People',
  },
  {
    alias: 'heart_eyes',
    unicode: '😍',
    category: 'People',
  },
  {
    alias: 'kissing_heart',
    unicode: '😘',
    category: 'People',
  },
  {
    alias: 'kissing_closed_eyes',
    unicode: '😚',
    category: 'People',
  },
  {
    alias: 'flushed',
    unicode: '😳',
    category: 'People',
  },
  {
    alias: 'relieved',
    unicode: '😌',
    category: 'People',
  },
  {
    alias: 'laughing',
    unicode: '😆',
    category: 'People',
  },
  {
    alias: 'grin',
    unicode: '😁',
    category: 'People',
  },
  {
    alias: 'wink',
    unicode: '😉',
    category: 'People',
  },
  {
    alias: 'stuck_out_tongue_winking_eye',
    unicode: '😜',
    category: 'People',
  },
  {
    alias: 'stuck_out_tongue_closed_eyes',
    unicode: '😝',
    category: 'People',
  },
  {
    alias: 'grinning',
    unicode: '😀',
    category: 'People',
  },
  {
    alias: 'kissing',
    unicode: '😗',
    category: 'People',
  },
  {
    alias: 'kissing_smiling_eyes',
    unicode: '😙',
    category: 'People',
  },
  {
    alias: 'stuck_out_tongue',
    unicode: '😛',
    category: 'People',
  },
  {
    alias: 'sleeping',
    unicode: '😴',
    category: 'People',
  },
  {
    alias: 'worried',
    unicode: '😟',
    category: 'People',
  },
  {
    alias: 'frowning',
    unicode: '😦',
    category: 'People',
  },
  {
    alias: 'anguished',
    unicode: '😧',
    category: 'People',
  },
  {
    alias: 'open_mouth',
    unicode: '😮',
    category: 'People',
  },
  {
    alias: 'grimacing',
    unicode: '😬',
    category: 'People',
  },
  {
    alias: 'confused',
    unicode: '😕',
    category: 'People',
  },
  {
    alias: 'hushed',
    unicode: '😯',
    category: 'People',
  },
  {
    alias: 'expressionless',
    unicode: '😑',
    category: 'People',
  },
  {
    alias: 'unamused',
    unicode: '😒',
    category: 'People',
  },
  {
    alias: 'sweat_smile',
    unicode: '😅',
    category: 'People',
  },
  {
    alias: 'sweat',
    unicode: '😓',
    category: 'People',
  },
  {
    alias: 'disappointed_relieved',
    unicode: '😥',
    category: 'People',
  },
  {
    alias: 'weary',
    unicode: '😩',
    category: 'People',
  },
  {
    alias: 'pensive',
    unicode: '😔',
    category: 'People',
  },
  {
    alias: 'disappointed',
    unicode: '😞',
    category: 'People',
  },
  {
    alias: 'confounded',
    unicode: '😖',
    category: 'People',
  },
  {
    alias: 'fearful',
    unicode: '😨',
    category: 'People',
  },
  {
    alias: 'cold_sweat',
    unicode: '😰',
    category: 'People',
  },
  {
    alias: 'persevere',
    unicode: '😣',
    category: 'People',
  },
  {
    alias: 'cry',
    unicode: '😢',
    category: 'People',
  },
  {
    alias: 'sob',
    unicode: '😭',
    category: 'People',
  },
  {
    alias: 'joy',
    unicode: '😂',
    category: 'People',
  },
  {
    alias: 'astonished',
    unicode: '😲',
    category: 'People',
  },
  {
    alias: 'scream',
    unicode: '😱',
    category: 'People',
  },
  {
    alias: 'tired_face',
    unicode: '😫',
    category: 'People',
  },
  {
    alias: 'angry',
    unicode: '😠',
    category: 'People',
  },
  {
    alias: 'rage',
    unicode: '😡',
    category: 'People',
  },
  {
    alias: 'triumph',
    unicode: '😤',
    category: 'People',
  },
  {
    alias: 'sleepy',
    unicode: '😪',
    category: 'People',
  },
  {
    alias: 'yum',
    unicode: '😋',
    category: 'People',
  },
  {
    alias: 'mask',
    unicode: '😷',
    category: 'People',
  },
  {
    alias: 'sunglasses',
    unicode: '😎',
    category: 'People',
  },
  {
    alias: 'dizzy_face',
    unicode: '😵',
    category: 'People',
  },
  {
    alias: 'imp',
    unicode: '👿',
    category: 'People',
  },
  {
    alias: 'smiling_imp',
    unicode: '😈',
    category: 'People',
  },
  {
    alias: 'neutral_face',
    unicode: '😐',
    category: 'People',
  },
  {
    alias: 'no_mouth',
    unicode: '😶',
    category: 'People',
  },
  {
    alias: 'innocent',
    unicode: '😇',
    category: 'People',
  },
  {
    alias: 'alien',
    unicode: '👽',
    category: 'People',
  },
  {
    alias: 'yellow_heart',
    unicode: '💛',
    category: 'People',
  },
  {
    alias: 'blue_heart',
    unicode: '💙',
    category: 'People',
  },
  {
    alias: 'purple_heart',
    unicode: '💜',
    category: 'People',
  },
  {
    alias: 'heart',
    unicode: '❤️',
    category: 'People',
  },
  {
    alias: 'green_heart',
    unicode: '💚',
    category: 'People',
  },
  {
    alias: 'broken_heart',
    unicode: '💔',
    category: 'People',
  },
  {
    alias: 'heartbeat',
    unicode: '💓',
    category: 'People',
  },
  {
    alias: 'heartpulse',
    unicode: '💗',
    category: 'People',
  },
  {
    alias: 'two_hearts',
    unicode: '💕',
    category: 'People',
  },
  {
    alias: 'revolving_hearts',
    unicode: '💞',
    category: 'People',
  },
  {
    alias: 'cupid',
    unicode: '💘',
    category: 'People',
  },
  {
    alias: 'sparkling_heart',
    unicode: '💖',
    category: 'People',
  },
  {
    alias: 'sparkles',
    unicode: '✨',
    category: 'People',
  },
  {
    alias: 'star',
    unicode: '⭐️',
    category: 'People',
  },
  {
    alias: 'star2',
    unicode: '🌟',
    category: 'People',
  },
  {
    alias: 'dizzy',
    unicode: '💫',
    category: 'People',
  },
  {
    alias: 'boom',
    unicode: '💥',
    category: 'People',
  },
  {
    alias: 'boom',
    unicode: '💥',
    category: 'People',
  },
  {
    alias: 'anger',
    unicode: '💢',
    category: 'People',
  },
  {
    alias: 'exclamation',
    unicode: '❗️',
    category: 'People',
  },
  {
    alias: 'question',
    unicode: '❓',
    category: 'People',
  },
  {
    alias: 'grey_exclamation',
    unicode: '❕',
    category: 'People',
  },
  {
    alias: 'grey_question',
    unicode: '❔',
    category: 'People',
  },
  {
    alias: 'zzz',
    unicode: '💤',
    category: 'People',
  },
  {
    alias: 'dash',
    unicode: '💨',
    category: 'People',
  },
  {
    alias: 'sweat_drops',
    unicode: '💦',
    category: 'People',
  },
  {
    alias: 'notes',
    unicode: '🎶',
    category: 'People',
  },
  {
    alias: 'musical_note',
    unicode: '🎵',
    category: 'People',
  },
  {
    alias: 'fire',
    unicode: '🔥',
    category: 'People',
  },
  {
    alias: 'hankey',
    unicode: '💩',
    category: 'People',
  },
  {
    alias: 'hankey',
    unicode: '💩',
    category: 'People',
  },
  {
    alias: 'hankey',
    unicode: '💩',
    category: 'People',
  },
  {
    alias: '+1',
    unicode: '👍',
    category: 'People',
  },
  {
    alias: '+1',
    unicode: '👍',
    category: 'People',
  },
  {
    alias: '-1',
    unicode: '👎',
    category: 'People',
  },
  {
    alias: '-1',
    unicode: '👎',
    category: 'People',
  },
  {
    alias: 'ok_hand',
    unicode: '👌',
    category: 'People',
  },
  {
    alias: 'fist_oncoming',
    unicode: '👊',
    category: 'People',
  },
  {
    alias: 'fist_oncoming',
    unicode: '👊',
    category: 'People',
  },
  {
    alias: 'fist_raised',
    unicode: '✊',
    category: 'People',
  },
  {
    alias: 'v',
    unicode: '✌️',
    category: 'People',
  },
  {
    alias: 'wave',
    unicode: '👋',
    category: 'People',
  },
  {
    alias: 'hand',
    unicode: '✋',
    category: 'People',
  },
  {
    alias: 'hand',
    unicode: '✋',
    category: 'People',
  },
  {
    alias: 'open_hands',
    unicode: '👐',
    category: 'People',
  },
  {
    alias: 'point_up',
    unicode: '☝️',
    category: 'People',
  },
  {
    alias: 'point_down',
    unicode: '👇',
    category: 'People',
  },
  {
    alias: 'point_left',
    unicode: '👈',
    category: 'People',
  },
  {
    alias: 'point_right',
    unicode: '👉',
    category: 'People',
  },
  {
    alias: 'raised_hands',
    unicode: '🙌',
    category: 'People',
  },
  {
    alias: 'pray',
    unicode: '🙏',
    category: 'People',
  },
  {
    alias: 'point_up_2',
    unicode: '👆',
    category: 'People',
  },
  {
    alias: 'clap',
    unicode: '👏',
    category: 'People',
  },
  {
    alias: 'muscle',
    unicode: '💪',
    category: 'People',
  },
  {
    alias: 'metal',
    unicode: '🤘',
    category: 'People',
  },
  {
    alias: 'middle_finger',
    unicode: '🖕',
    category: 'People',
  },
  {
    alias: 'walking_man',
    unicode: '🚶',
    category: 'People',
  },
  {
    alias: 'running_man',
    unicode: '🏃',
    category: 'People',
  },
  {
    alias: 'running_man',
    unicode: '🏃',
    category: 'People',
  },
  {
    alias: 'couple',
    unicode: '👫',
    category: 'People',
  },
  {
    alias: 'family_man_woman_boy',
    unicode: '👪',
    category: 'People',
  },
  {
    alias: 'two_men_holding_hands',
    unicode: '👬',
    category: 'People',
  },
  {
    alias: 'two_women_holding_hands',
    unicode: '👭',
    category: 'People',
  },
  {
    alias: 'dancer',
    unicode: '💃',
    category: 'People',
  },
  {
    alias: 'dancing_women',
    unicode: '👯',
    category: 'People',
  },
  {
    alias: 'ok_woman',
    unicode: '🙆',
    category: 'People',
  },
  {
    alias: 'no_good_woman',
    unicode: '🙅',
    category: 'People',
  },
  {
    alias: 'tipping_hand_woman',
    unicode: '💁',
    category: 'People',
  },
  {
    alias: 'raising_hand_woman',
    unicode: '🙋',
    category: 'People',
  },
  {
    alias: 'bride_with_veil',
    unicode: '👰',
    category: 'People',
  },
  {
    alias: 'pouting_woman',
    unicode: '🙎',
    category: 'People',
  },
  {
    alias: 'frowning_woman',
    unicode: '🙍',
    category: 'People',
  },
  {
    alias: 'bowing_man',
    unicode: '🙇',
    category: 'People',
  },
  {
    alias: 'couple_with_heart_woman_man',
    unicode: '💑',
    category: 'People',
  },
  {
    alias: 'massage_woman',
    unicode: '💆',
    category: 'People',
  },
  {
    alias: 'haircut_woman',
    unicode: '💇',
    category: 'People',
  },
  {
    alias: 'nail_care',
    unicode: '💅',
    category: 'People',
  },
  {
    alias: 'boy',
    unicode: '👦',
    category: 'People',
  },
  {
    alias: 'girl',
    unicode: '👧',
    category: 'People',
  },
  {
    alias: 'woman',
    unicode: '👩',
    category: 'People',
  },
  {
    alias: 'man',
    unicode: '👨',
    category: 'People',
  },
  {
    alias: 'baby',
    unicode: '👶',
    category: 'People',
  },
  {
    alias: 'older_woman',
    unicode: '👵',
    category: 'People',
  },
  {
    alias: 'older_man',
    unicode: '👴',
    category: 'People',
  },
  {
    alias: 'blonde_man',
    unicode: '👱',
    category: 'People',
  },
  {
    alias: 'man_with_gua_pi_mao',
    unicode: '👲',
    category: 'People',
  },
  {
    alias: 'man_with_turban',
    unicode: '👳',
    category: 'People',
  },
  {
    alias: 'construction_worker_man',
    unicode: '👷',
    category: 'People',
  },
  {
    alias: 'policeman',
    unicode: '👮',
    category: 'People',
  },
  {
    alias: 'angel',
    unicode: '👼',
    category: 'People',
  },
  {
    alias: 'princess',
    unicode: '👸',
    category: 'People',
  },
  {
    alias: 'smiley_cat',
    unicode: '😺',
    category: 'People',
  },
  {
    alias: 'smile_cat',
    unicode: '😸',
    category: 'People',
  },
  {
    alias: 'heart_eyes_cat',
    unicode: '😻',
    category: 'People',
  },
  {
    alias: 'kissing_cat',
    unicode: '😽',
    category: 'People',
  },
  {
    alias: 'smirk_cat',
    unicode: '😼',
    category: 'People',
  },
  {
    alias: 'scream_cat',
    unicode: '🙀',
    category: 'People',
  },
  {
    alias: 'crying_cat_face',
    unicode: '😿',
    category: 'People',
  },
  {
    alias: 'joy_cat',
    unicode: '😹',
    category: 'People',
  },
  {
    alias: 'pouting_cat',
    unicode: '😾',
    category: 'People',
  },
  {
    alias: 'japanese_ogre',
    unicode: '👹',
    category: 'People',
  },
  {
    alias: 'japanese_goblin',
    unicode: '👺',
    category: 'People',
  },
  {
    alias: 'see_no_evil',
    unicode: '🙈',
    category: 'People',
  },
  {
    alias: 'hear_no_evil',
    unicode: '🙉',
    category: 'People',
  },
  {
    alias: 'speak_no_evil',
    unicode: '🙊',
    category: 'People',
  },
  {
    alias: 'guardsman',
    unicode: '💂',
    category: 'People',
  },
  {
    alias: 'skull',
    unicode: '💀',
    category: 'People',
  },
  {
    alias: 'feet',
    unicode: '🐾',
    category: 'People',
  },
  {
    alias: 'lips',
    unicode: '👄',
    category: 'People',
  },
  {
    alias: 'kiss',
    unicode: '💋',
    category: 'People',
  },
  {
    alias: 'droplet',
    unicode: '💧',
    category: 'People',
  },
  {
    alias: 'ear',
    unicode: '👂',
    category: 'People',
  },
  {
    alias: 'eyes',
    unicode: '👀',
    category: 'People',
  },
  {
    alias: 'nose',
    unicode: '👃',
    category: 'People',
  },
  {
    alias: 'tongue',
    unicode: '👅',
    category: 'People',
  },
  {
    alias: 'love_letter',
    unicode: '💌',
    category: 'People',
  },
  {
    alias: 'bust_in_silhouette',
    unicode: '👤',
    category: 'People',
  },
  {
    alias: 'busts_in_silhouette',
    unicode: '👥',
    category: 'People',
  },
  {
    alias: 'speech_balloon',
    unicode: '💬',
    category: 'People',
  },
  {
    alias: 'thought_balloon',
    unicode: '💭',
    category: 'People',
  },
  {
    alias: 'sunny',
    unicode: '☀️',
    category: 'Nature',
  },
  {
    alias: 'umbrella',
    unicode: '☔️',
    category: 'Nature',
  },
  {
    alias: 'cloud',
    unicode: '☁️',
    category: 'Nature',
  },
  {
    alias: 'snowflake',
    unicode: '❄️',
    category: 'Nature',
  },
  {
    alias: 'snowman',
    unicode: '⛄️',
    category: 'Nature',
  },
  {
    alias: 'zap',
    unicode: '⚡️',
    category: 'Nature',
  },
  {
    alias: 'cyclone',
    unicode: '🌀',
    category: 'Nature',
  },
  {
    alias: 'foggy',
    unicode: '🌁',
    category: 'Nature',
  },
  {
    alias: 'ocean',
    unicode: '🌊',
    category: 'Nature',
  },
  {
    alias: 'cat',
    unicode: '🐱',
    category: 'Nature',
  },
  {
    alias: 'dog',
    unicode: '🐶',
    category: 'Nature',
  },
  {
    alias: 'mouse',
    unicode: '🐭',
    category: 'Nature',
  },
  {
    alias: 'hamster',
    unicode: '🐹',
    category: 'Nature',
  },
  {
    alias: 'rabbit',
    unicode: '🐰',
    category: 'Nature',
  },
  {
    alias: 'wolf',
    unicode: '🐺',
    category: 'Nature',
  },
  {
    alias: 'frog',
    unicode: '🐸',
    category: 'Nature',
  },
  {
    alias: 'tiger',
    unicode: '🐯',
    category: 'Nature',
  },
  {
    alias: 'koala',
    unicode: '🐨',
    category: 'Nature',
  },
  {
    alias: 'bear',
    unicode: '🐻',
    category: 'Nature',
  },
  {
    alias: 'pig',
    unicode: '🐷',
    category: 'Nature',
  },
  {
    alias: 'pig_nose',
    unicode: '🐽',
    category: 'Nature',
  },
  {
    alias: 'cow',
    unicode: '🐮',
    category: 'Nature',
  },
  {
    alias: 'boar',
    unicode: '🐗',
    category: 'Nature',
  },
  {
    alias: 'monkey_face',
    unicode: '🐵',
    category: 'Nature',
  },
  {
    alias: 'monkey',
    unicode: '🐒',
    category: 'Nature',
  },
  {
    alias: 'horse',
    unicode: '🐴',
    category: 'Nature',
  },
  {
    alias: 'racehorse',
    unicode: '🐎',
    category: 'Nature',
  },
  {
    alias: 'camel',
    unicode: '🐫',
    category: 'Nature',
  },
  {
    alias: 'sheep',
    unicode: '🐑',
    category: 'Nature',
  },
  {
    alias: 'elephant',
    unicode: '🐘',
    category: 'Nature',
  },
  {
    alias: 'panda_face',
    unicode: '🐼',
    category: 'Nature',
  },
  {
    alias: 'snake',
    unicode: '🐍',
    category: 'Nature',
  },
  {
    alias: 'bird',
    unicode: '🐦',
    category: 'Nature',
  },
  {
    alias: 'baby_chick',
    unicode: '🐤',
    category: 'Nature',
  },
  {
    alias: 'hatched_chick',
    unicode: '🐥',
    category: 'Nature',
  },
  {
    alias: 'hatching_chick',
    unicode: '🐣',
    category: 'Nature',
  },
  {
    alias: 'chicken',
    unicode: '🐔',
    category: 'Nature',
  },
  {
    alias: 'penguin',
    unicode: '🐧',
    category: 'Nature',
  },
  {
    alias: 'turtle',
    unicode: '🐢',
    category: 'Nature',
  },
  {
    alias: 'bug',
    unicode: '🐛',
    category: 'Nature',
  },
  {
    alias: 'bee',
    unicode: '🐝',
    category: 'Nature',
  },
  {
    alias: 'ant',
    unicode: '🐜',
    category: 'Nature',
  },
  {
    alias: 'beetle',
    unicode: '🐞',
    category: 'Nature',
  },
  {
    alias: 'snail',
    unicode: '🐌',
    category: 'Nature',
  },
  {
    alias: 'octopus',
    unicode: '🐙',
    category: 'Nature',
  },
  {
    alias: 'tropical_fish',
    unicode: '🐠',
    category: 'Nature',
  },
  {
    alias: 'fish',
    unicode: '🐟',
    category: 'Nature',
  },
  {
    alias: 'whale',
    unicode: '🐳',
    category: 'Nature',
  },
  {
    alias: 'whale2',
    unicode: '🐋',
    category: 'Nature',
  },
  {
    alias: 'dolphin',
    unicode: '🐬',
    category: 'Nature',
  },
  {
    alias: 'cow2',
    unicode: '🐄',
    category: 'Nature',
  },
  {
    alias: 'ram',
    unicode: '🐏',
    category: 'Nature',
  },
  {
    alias: 'rat',
    unicode: '🐀',
    category: 'Nature',
  },
  {
    alias: 'water_buffalo',
    unicode: '🐃',
    category: 'Nature',
  },
  {
    alias: 'tiger2',
    unicode: '🐅',
    category: 'Nature',
  },
  {
    alias: 'rabbit2',
    unicode: '🐇',
    category: 'Nature',
  },
  {
    alias: 'dragon',
    unicode: '🐉',
    category: 'Nature',
  },
  {
    alias: 'goat',
    unicode: '🐐',
    category: 'Nature',
  },
  {
    alias: 'rooster',
    unicode: '🐓',
    category: 'Nature',
  },
  {
    alias: 'dog2',
    unicode: '🐕',
    category: 'Nature',
  },
  {
    alias: 'pig2',
    unicode: '🐖',
    category: 'Nature',
  },
  {
    alias: 'mouse2',
    unicode: '🐁',
    category: 'Nature',
  },
  {
    alias: 'ox',
    unicode: '🐂',
    category: 'Nature',
  },
  {
    alias: 'dragon_face',
    unicode: '🐲',
    category: 'Nature',
  },
  {
    alias: 'blowfish',
    unicode: '🐡',
    category: 'Nature',
  },
  {
    alias: 'crocodile',
    unicode: '🐊',
    category: 'Nature',
  },
  {
    alias: 'dromedary_camel',
    unicode: '🐪',
    category: 'Nature',
  },
  {
    alias: 'leopard',
    unicode: '🐆',
    category: 'Nature',
  },
  {
    alias: 'cat2',
    unicode: '🐈',
    category: 'Nature',
  },
  {
    alias: 'poodle',
    unicode: '🐩',
    category: 'Nature',
  },
  {
    alias: 'feet',
    unicode: '🐾',
    category: 'Nature',
  },
  {
    alias: 'bouquet',
    unicode: '💐',
    category: 'Nature',
  },
  {
    alias: 'cherry_blossom',
    unicode: '🌸',
    category: 'Nature',
  },
  {
    alias: 'tulip',
    unicode: '🌷',
    category: 'Nature',
  },
  {
    alias: 'four_leaf_clover',
    unicode: '🍀',
    category: 'Nature',
  },
  {
    alias: 'rose',
    unicode: '🌹',
    category: 'Nature',
  },
  {
    alias: 'sunflower',
    unicode: '🌻',
    category: 'Nature',
  },
  {
    alias: 'hibiscus',
    unicode: '🌺',
    category: 'Nature',
  },
  {
    alias: 'maple_leaf',
    unicode: '🍁',
    category: 'Nature',
  },
  {
    alias: 'leaves',
    unicode: '🍃',
    category: 'Nature',
  },
  {
    alias: 'fallen_leaf',
    unicode: '🍂',
    category: 'Nature',
  },
  {
    alias: 'herb',
    unicode: '🌿',
    category: 'Nature',
  },
  {
    alias: 'mushroom',
    unicode: '🍄',
    category: 'Nature',
  },
  {
    alias: 'cactus',
    unicode: '🌵',
    category: 'Nature',
  },
  {
    alias: 'palm_tree',
    unicode: '🌴',
    category: 'Nature',
  },
  {
    alias: 'evergreen_tree',
    unicode: '🌲',
    category: 'Nature',
  },
  {
    alias: 'deciduous_tree',
    unicode: '🌳',
    category: 'Nature',
  },
  {
    alias: 'chestnut',
    unicode: '🌰',
    category: 'Nature',
  },
  {
    alias: 'seedling',
    unicode: '🌱',
    category: 'Nature',
  },
  {
    alias: 'blossom',
    unicode: '🌼',
    category: 'Nature',
  },
  {
    alias: 'ear_of_rice',
    unicode: '🌾',
    category: 'Nature',
  },
  {
    alias: 'shell',
    unicode: '🐚',
    category: 'Nature',
  },
  {
    alias: 'globe_with_meridians',
    unicode: '🌐',
    category: 'Nature',
  },
  {
    alias: 'sun_with_face',
    unicode: '🌞',
    category: 'Nature',
  },
  {
    alias: 'full_moon_with_face',
    unicode: '🌝',
    category: 'Nature',
  },
  {
    alias: 'new_moon_with_face',
    unicode: '🌚',
    category: 'Nature',
  },
  {
    alias: 'new_moon',
    unicode: '🌑',
    category: 'Nature',
  },
  {
    alias: 'waxing_crescent_moon',
    unicode: '🌒',
    category: 'Nature',
  },
  {
    alias: 'first_quarter_moon',
    unicode: '🌓',
    category: 'Nature',
  },
  {
    alias: 'moon',
    unicode: '🌔',
    category: 'Nature',
  },
  {
    alias: 'full_moon',
    unicode: '🌕',
    category: 'Nature',
  },
  {
    alias: 'waning_gibbous_moon',
    unicode: '🌖',
    category: 'Nature',
  },
  {
    alias: 'last_quarter_moon',
    unicode: '🌗',
    category: 'Nature',
  },
  {
    alias: 'waning_crescent_moon',
    unicode: '🌘',
    category: 'Nature',
  },
  {
    alias: 'last_quarter_moon_with_face',
    unicode: '🌜',
    category: 'Nature',
  },
  {
    alias: 'first_quarter_moon_with_face',
    unicode: '🌛',
    category: 'Nature',
  },
  {
    alias: 'moon',
    unicode: '🌔',
    category: 'Nature',
  },
  {
    alias: 'earth_africa',
    unicode: '🌍',
    category: 'Nature',
  },
  {
    alias: 'earth_americas',
    unicode: '🌎',
    category: 'Nature',
  },
  {
    alias: 'earth_asia',
    unicode: '🌏',
    category: 'Nature',
  },
  {
    alias: 'volcano',
    unicode: '🌋',
    category: 'Nature',
  },
  {
    alias: 'milky_way',
    unicode: '🌌',
    category: 'Nature',
  },
  {
    alias: 'partly_sunny',
    unicode: '⛅️',
    category: 'Nature',
  },
  {
    alias: 'bamboo',
    unicode: '🎍',
    category: 'Objects',
  },
  {
    alias: 'gift_heart',
    unicode: '💝',
    category: 'Objects',
  },
  {
    alias: 'dolls',
    unicode: '🎎',
    category: 'Objects',
  },
  {
    alias: 'school_satchel',
    unicode: '🎒',
    category: 'Objects',
  },
  {
    alias: 'mortar_board',
    unicode: '🎓',
    category: 'Objects',
  },
  {
    alias: 'flags',
    unicode: '🎏',
    category: 'Objects',
  },
  {
    alias: 'fireworks',
    unicode: '🎆',
    category: 'Objects',
  },
  {
    alias: 'sparkler',
    unicode: '🎇',
    category: 'Objects',
  },
  {
    alias: 'wind_chime',
    unicode: '🎐',
    category: 'Objects',
  },
  {
    alias: 'rice_scene',
    unicode: '🎑',
    category: 'Objects',
  },
  {
    alias: 'jack_o_lantern',
    unicode: '🎃',
    category: 'Objects',
  },
  {
    alias: 'ghost',
    unicode: '👻',
    category: 'Objects',
  },
  {
    alias: 'santa',
    unicode: '🎅',
    category: 'Objects',
  },
  {
    alias: 'christmas_tree',
    unicode: '🎄',
    category: 'Objects',
  },
  {
    alias: 'gift',
    unicode: '🎁',
    category: 'Objects',
  },
  {
    alias: 'bell',
    unicode: '🔔',
    category: 'Objects',
  },
  {
    alias: 'no_bell',
    unicode: '🔕',
    category: 'Objects',
  },
  {
    alias: 'tanabata_tree',
    unicode: '🎋',
    category: 'Objects',
  },
  {
    alias: 'tada',
    unicode: '🎉',
    category: 'Objects',
  },
  {
    alias: 'confetti_ball',
    unicode: '🎊',
    category: 'Objects',
  },
  {
    alias: 'balloon',
    unicode: '🎈',
    category: 'Objects',
  },
  {
    alias: 'crystal_ball',
    unicode: '🔮',
    category: 'Objects',
  },
  {
    alias: 'cd',
    unicode: '💿',
    category: 'Objects',
  },
  {
    alias: 'dvd',
    unicode: '📀',
    category: 'Objects',
  },
  {
    alias: 'floppy_disk',
    unicode: '💾',
    category: 'Objects',
  },
  {
    alias: 'camera',
    unicode: '📷',
    category: 'Objects',
  },
  {
    alias: 'video_camera',
    unicode: '📹',
    category: 'Objects',
  },
  {
    alias: 'movie_camera',
    unicode: '🎥',
    category: 'Objects',
  },
  {
    alias: 'computer',
    unicode: '💻',
    category: 'Objects',
  },
  {
    alias: 'tv',
    unicode: '📺',
    category: 'Objects',
  },
  {
    alias: 'iphone',
    unicode: '📱',
    category: 'Objects',
  },
  {
    alias: 'phone',
    unicode: '☎️',
    category: 'Objects',
  },
  {
    alias: 'phone',
    unicode: '☎️',
    category: 'Objects',
  },
  {
    alias: 'telephone_receiver',
    unicode: '📞',
    category: 'Objects',
  },
  {
    alias: 'pager',
    unicode: '📟',
    category: 'Objects',
  },
  {
    alias: 'fax',
    unicode: '📠',
    category: 'Objects',
  },
  {
    alias: 'minidisc',
    unicode: '💽',
    category: 'Objects',
  },
  {
    alias: 'vhs',
    unicode: '📼',
    category: 'Objects',
  },
  {
    alias: 'sound',
    unicode: '🔉',
    category: 'Objects',
  },
  {
    alias: 'speaker',
    unicode: '🔈',
    category: 'Objects',
  },
  {
    alias: 'mute',
    unicode: '🔇',
    category: 'Objects',
  },
  {
    alias: 'loudspeaker',
    unicode: '📢',
    category: 'Objects',
  },
  {
    alias: 'mega',
    unicode: '📣',
    category: 'Objects',
  },
  {
    alias: 'hourglass',
    unicode: '⌛️',
    category: 'Objects',
  },
  {
    alias: 'hourglass_flowing_sand',
    unicode: '⏳',
    category: 'Objects',
  },
  {
    alias: 'alarm_clock',
    unicode: '⏰',
    category: 'Objects',
  },
  {
    alias: 'watch',
    unicode: '⌚️',
    category: 'Objects',
  },
  {
    alias: 'radio',
    unicode: '📻',
    category: 'Objects',
  },
  {
    alias: 'satellite',
    unicode: '📡',
    category: 'Objects',
  },
  {
    alias: 'loop',
    unicode: '➿',
    category: 'Objects',
  },
  {
    alias: 'mag',
    unicode: '🔍',
    category: 'Objects',
  },
  {
    alias: 'mag_right',
    unicode: '🔎',
    category: 'Objects',
  },
  {
    alias: 'unlock',
    unicode: '🔓',
    category: 'Objects',
  },
  {
    alias: 'lock',
    unicode: '🔒',
    category: 'Objects',
  },
  {
    alias: 'lock_with_ink_pen',
    unicode: '🔏',
    category: 'Objects',
  },
  {
    alias: 'closed_lock_with_key',
    unicode: '🔐',
    category: 'Objects',
  },
  {
    alias: 'key',
    unicode: '🔑',
    category: 'Objects',
  },
  {
    alias: 'bulb',
    unicode: '💡',
    category: 'Objects',
  },
  {
    alias: 'flashlight',
    unicode: '🔦',
    category: 'Objects',
  },
  {
    alias: 'high_brightness',
    unicode: '🔆',
    category: 'Objects',
  },
  {
    alias: 'low_brightness',
    unicode: '🔅',
    category: 'Objects',
  },
  {
    alias: 'electric_plug',
    unicode: '🔌',
    category: 'Objects',
  },
  {
    alias: 'battery',
    unicode: '🔋',
    category: 'Objects',
  },
  {
    alias: 'calling',
    unicode: '📲',
    category: 'Objects',
  },
  {
    alias: 'email',
    unicode: '✉️',
    category: 'Objects',
  },
  {
    alias: 'mailbox',
    unicode: '📫',
    category: 'Objects',
  },
  {
    alias: 'postbox',
    unicode: '📮',
    category: 'Objects',
  },
  {
    alias: 'bath',
    unicode: '🛀',
    category: 'Objects',
  },
  {
    alias: 'bathtub',
    unicode: '🛁',
    category: 'Objects',
  },
  {
    alias: 'shower',
    unicode: '🚿',
    category: 'Objects',
  },
  {
    alias: 'toilet',
    unicode: '🚽',
    category: 'Objects',
  },
  {
    alias: 'wrench',
    unicode: '🔧',
    category: 'Objects',
  },
  {
    alias: 'nut_and_bolt',
    unicode: '🔩',
    category: 'Objects',
  },
  {
    alias: 'hammer',
    unicode: '🔨',
    category: 'Objects',
  },
  {
    alias: 'seat',
    unicode: '💺',
    category: 'Objects',
  },
  {
    alias: 'moneybag',
    unicode: '💰',
    category: 'Objects',
  },
  {
    alias: 'yen',
    unicode: '💴',
    category: 'Objects',
  },
  {
    alias: 'dollar',
    unicode: '💵',
    category: 'Objects',
  },
  {
    alias: 'pound',
    unicode: '💷',
    category: 'Objects',
  },
  {
    alias: 'euro',
    unicode: '💶',
    category: 'Objects',
  },
  {
    alias: 'credit_card',
    unicode: '💳',
    category: 'Objects',
  },
  {
    alias: 'money_with_wings',
    unicode: '💸',
    category: 'Objects',
  },
  {
    alias: 'e-mail',
    unicode: '📧',
    category: 'Objects',
  },
  {
    alias: 'inbox_tray',
    unicode: '📥',
    category: 'Objects',
  },
  {
    alias: 'outbox_tray',
    unicode: '📤',
    category: 'Objects',
  },
  {
    alias: 'email',
    unicode: '✉️',
    category: 'Objects',
  },
  {
    alias: 'incoming_envelope',
    unicode: '📨',
    category: 'Objects',
  },
  {
    alias: 'postal_horn',
    unicode: '📯',
    category: 'Objects',
  },
  {
    alias: 'mailbox_closed',
    unicode: '📪',
    category: 'Objects',
  },
  {
    alias: 'mailbox_with_mail',
    unicode: '📬',
    category: 'Objects',
  },
  {
    alias: 'mailbox_with_no_mail',
    unicode: '📭',
    category: 'Objects',
  },
  {
    alias: 'door',
    unicode: '🚪',
    category: 'Objects',
  },
  {
    alias: 'smoking',
    unicode: '🚬',
    category: 'Objects',
  },
  {
    alias: 'bomb',
    unicode: '💣',
    category: 'Objects',
  },
  {
    alias: 'gun',
    unicode: '🔫',
    category: 'Objects',
  },
  {
    alias: 'hocho',
    unicode: '🔪',
    category: 'Objects',
  },
  {
    alias: 'pill',
    unicode: '💊',
    category: 'Objects',
  },
  {
    alias: 'syringe',
    unicode: '💉',
    category: 'Objects',
  },
  {
    alias: 'page_facing_up',
    unicode: '📄',
    category: 'Objects',
  },
  {
    alias: 'page_with_curl',
    unicode: '📃',
    category: 'Objects',
  },
  {
    alias: 'bookmark_tabs',
    unicode: '📑',
    category: 'Objects',
  },
  {
    alias: 'bar_chart',
    unicode: '📊',
    category: 'Objects',
  },
  {
    alias: 'chart_with_upwards_trend',
    unicode: '📈',
    category: 'Objects',
  },
  {
    alias: 'chart_with_downwards_trend',
    unicode: '📉',
    category: 'Objects',
  },
  {
    alias: 'scroll',
    unicode: '📜',
    category: 'Objects',
  },
  {
    alias: 'clipboard',
    unicode: '📋',
    category: 'Objects',
  },
  {
    alias: 'calendar',
    unicode: '📆',
    category: 'Objects',
  },
  {
    alias: 'date',
    unicode: '📅',
    category: 'Objects',
  },
  {
    alias: 'card_index',
    unicode: '📇',
    category: 'Objects',
  },
  {
    alias: 'file_folder',
    unicode: '📁',
    category: 'Objects',
  },
  {
    alias: 'open_file_folder',
    unicode: '📂',
    category: 'Objects',
  },
  {
    alias: 'scissors',
    unicode: '✂️',
    category: 'Objects',
  },
  {
    alias: 'pushpin',
    unicode: '📌',
    category: 'Objects',
  },
  {
    alias: 'paperclip',
    unicode: '📎',
    category: 'Objects',
  },
  {
    alias: 'black_nib',
    unicode: '✒️',
    category: 'Objects',
  },
  {
    alias: 'pencil2',
    unicode: '✏️',
    category: 'Objects',
  },
  {
    alias: 'straight_ruler',
    unicode: '📏',
    category: 'Objects',
  },
  {
    alias: 'triangular_ruler',
    unicode: '📐',
    category: 'Objects',
  },
  {
    alias: 'closed_book',
    unicode: '📕',
    category: 'Objects',
  },
  {
    alias: 'green_book',
    unicode: '📗',
    category: 'Objects',
  },
  {
    alias: 'blue_book',
    unicode: '📘',
    category: 'Objects',
  },
  {
    alias: 'orange_book',
    unicode: '📙',
    category: 'Objects',
  },
  {
    alias: 'notebook',
    unicode: '📓',
    category: 'Objects',
  },
  {
    alias: 'notebook_with_decorative_cover',
    unicode: '📔',
    category: 'Objects',
  },
  {
    alias: 'ledger',
    unicode: '📒',
    category: 'Objects',
  },
  {
    alias: 'books',
    unicode: '📚',
    category: 'Objects',
  },
  {
    alias: 'bookmark',
    unicode: '🔖',
    category: 'Objects',
  },
  {
    alias: 'name_badge',
    unicode: '📛',
    category: 'Objects',
  },
  {
    alias: 'microscope',
    unicode: '🔬',
    category: 'Objects',
  },
  {
    alias: 'telescope',
    unicode: '🔭',
    category: 'Objects',
  },
  {
    alias: 'newspaper',
    unicode: '📰',
    category: 'Objects',
  },
  {
    alias: 'football',
    unicode: '🏈',
    category: 'Objects',
  },
  {
    alias: 'basketball',
    unicode: '🏀',
    category: 'Objects',
  },
  {
    alias: 'soccer',
    unicode: '⚽️',
    category: 'Objects',
  },
  {
    alias: 'baseball',
    unicode: '⚾️',
    category: 'Objects',
  },
  {
    alias: 'tennis',
    unicode: '🎾',
    category: 'Objects',
  },
  {
    alias: '8ball',
    unicode: '🎱',
    category: 'Objects',
  },
  {
    alias: 'rugby_football',
    unicode: '🏉',
    category: 'Objects',
  },
  {
    alias: 'bowling',
    unicode: '🎳',
    category: 'Objects',
  },
  {
    alias: 'golf',
    unicode: '⛳️',
    category: 'Objects',
  },
  {
    alias: 'mountain_biking_man',
    unicode: '🚵',
    category: 'Objects',
  },
  {
    alias: 'biking_man',
    unicode: '🚴',
    category: 'Objects',
  },
  {
    alias: 'horse_racing',
    unicode: '🏇',
    category: 'Objects',
  },
  {
    alias: 'snowboarder',
    unicode: '🏂',
    category: 'Objects',
  },
  {
    alias: 'swimming_man',
    unicode: '🏊',
    category: 'Objects',
  },
  {
    alias: 'surfing_man',
    unicode: '🏄',
    category: 'Objects',
  },
  {
    alias: 'ski',
    unicode: '🎿',
    category: 'Objects',
  },
  {
    alias: 'spades',
    unicode: '♠️',
    category: 'Objects',
  },
  {
    alias: 'hearts',
    unicode: '♥️',
    category: 'Objects',
  },
  {
    alias: 'clubs',
    unicode: '♣️',
    category: 'Objects',
  },
  {
    alias: 'diamonds',
    unicode: '♦️',
    category: 'Objects',
  },
  {
    alias: 'gem',
    unicode: '💎',
    category: 'Objects',
  },
  {
    alias: 'ring',
    unicode: '💍',
    category: 'Objects',
  },
  {
    alias: 'trophy',
    unicode: '🏆',
    category: 'Objects',
  },
  {
    alias: 'musical_score',
    unicode: '🎼',
    category: 'Objects',
  },
  {
    alias: 'musical_keyboard',
    unicode: '🎹',
    category: 'Objects',
  },
  {
    alias: 'violin',
    unicode: '🎻',
    category: 'Objects',
  },
  {
    alias: 'space_invader',
    unicode: '👾',
    category: 'Objects',
  },
  {
    alias: 'video_game',
    unicode: '🎮',
    category: 'Objects',
  },
  {
    alias: 'black_joker',
    unicode: '🃏',
    category: 'Objects',
  },
  {
    alias: 'flower_playing_cards',
    unicode: '🎴',
    category: 'Objects',
  },
  {
    alias: 'game_die',
    unicode: '🎲',
    category: 'Objects',
  },
  {
    alias: 'dart',
    unicode: '🎯',
    category: 'Objects',
  },
  {
    alias: 'mahjong',
    unicode: '🀄️',
    category: 'Objects',
  },
  {
    alias: 'clapper',
    unicode: '🎬',
    category: 'Objects',
  },
  {
    alias: 'memo',
    unicode: '📝',
    category: 'Objects',
  },
  {
    alias: 'memo',
    unicode: '📝',
    category: 'Objects',
  },
  {
    alias: 'book',
    unicode: '📖',
    category: 'Objects',
  },
  {
    alias: 'art',
    unicode: '🎨',
    category: 'Objects',
  },
  {
    alias: 'microphone',
    unicode: '🎤',
    category: 'Objects',
  },
  {
    alias: 'headphones',
    unicode: '🎧',
    category: 'Objects',
  },
  {
    alias: 'trumpet',
    unicode: '🎺',
    category: 'Objects',
  },
  {
    alias: 'saxophone',
    unicode: '🎷',
    category: 'Objects',
  },
  {
    alias: 'guitar',
    unicode: '🎸',
    category: 'Objects',
  },
  {
    alias: 'mans_shoe',
    unicode: '👞',
    category: 'Objects',
  },
  {
    alias: 'sandal',
    unicode: '👡',
    category: 'Objects',
  },
  {
    alias: 'high_heel',
    unicode: '👠',
    category: 'Objects',
  },
  {
    alias: 'lipstick',
    unicode: '💄',
    category: 'Objects',
  },
  {
    alias: 'boot',
    unicode: '👢',
    category: 'Objects',
  },
  {
    alias: 'shirt',
    unicode: '👕',
    category: 'Objects',
  },
  {
    alias: 'shirt',
    unicode: '👕',
    category: 'Objects',
  },
  {
    alias: 'necktie',
    unicode: '👔',
    category: 'Objects',
  },
  {
    alias: 'womans_clothes',
    unicode: '👚',
    category: 'Objects',
  },
  {
    alias: 'dress',
    unicode: '👗',
    category: 'Objects',
  },
  {
    alias: 'running_shirt_with_sash',
    unicode: '🎽',
    category: 'Objects',
  },
  {
    alias: 'jeans',
    unicode: '👖',
    category: 'Objects',
  },
  {
    alias: 'kimono',
    unicode: '👘',
    category: 'Objects',
  },
  {
    alias: 'bikini',
    unicode: '👙',
    category: 'Objects',
  },
  {
    alias: 'ribbon',
    unicode: '🎀',
    category: 'Objects',
  },
  {
    alias: 'tophat',
    unicode: '🎩',
    category: 'Objects',
  },
  {
    alias: 'crown',
    unicode: '👑',
    category: 'Objects',
  },
  {
    alias: 'womans_hat',
    unicode: '👒',
    category: 'Objects',
  },
  {
    alias: 'mans_shoe',
    unicode: '👞',
    category: 'Objects',
  },
  {
    alias: 'closed_umbrella',
    unicode: '🌂',
    category: 'Objects',
  },
  {
    alias: 'briefcase',
    unicode: '💼',
    category: 'Objects',
  },
  {
    alias: 'handbag',
    unicode: '👜',
    category: 'Objects',
  },
  {
    alias: 'pouch',
    unicode: '👝',
    category: 'Objects',
  },
  {
    alias: 'purse',
    unicode: '👛',
    category: 'Objects',
  },
  {
    alias: 'eyeglasses',
    unicode: '👓',
    category: 'Objects',
  },
  {
    alias: 'fishing_pole_and_fish',
    unicode: '🎣',
    category: 'Objects',
  },
  {
    alias: 'coffee',
    unicode: '☕️',
    category: 'Objects',
  },
  {
    alias: 'tea',
    unicode: '🍵',
    category: 'Objects',
  },
  {
    alias: 'sake',
    unicode: '🍶',
    category: 'Objects',
  },
  {
    alias: 'baby_bottle',
    unicode: '🍼',
    category: 'Objects',
  },
  {
    alias: 'beer',
    unicode: '🍺',
    category: 'Objects',
  },
  {
    alias: 'beers',
    unicode: '🍻',
    category: 'Objects',
  },
  {
    alias: 'cocktail',
    unicode: '🍸',
    category: 'Objects',
  },
  {
    alias: 'tropical_drink',
    unicode: '🍹',
    category: 'Objects',
  },
  {
    alias: 'wine_glass',
    unicode: '🍷',
    category: 'Objects',
  },
  {
    alias: 'fork_and_knife',
    unicode: '🍴',
    category: 'Objects',
  },
  {
    alias: 'pizza',
    unicode: '🍕',
    category: 'Objects',
  },
  {
    alias: 'hamburger',
    unicode: '🍔',
    category: 'Objects',
  },
  {
    alias: 'fries',
    unicode: '🍟',
    category: 'Objects',
  },
  {
    alias: 'poultry_leg',
    unicode: '🍗',
    category: 'Objects',
  },
  {
    alias: 'meat_on_bone',
    unicode: '🍖',
    category: 'Objects',
  },
  {
    alias: 'spaghetti',
    unicode: '🍝',
    category: 'Objects',
  },
  {
    alias: 'curry',
    unicode: '🍛',
    category: 'Objects',
  },
  {
    alias: 'fried_shrimp',
    unicode: '🍤',
    category: 'Objects',
  },
  {
    alias: 'bento',
    unicode: '🍱',
    category: 'Objects',
  },
  {
    alias: 'sushi',
    unicode: '🍣',
    category: 'Objects',
  },
  {
    alias: 'fish_cake',
    unicode: '🍥',
    category: 'Objects',
  },
  {
    alias: 'rice_ball',
    unicode: '🍙',
    category: 'Objects',
  },
  {
    alias: 'rice_cracker',
    unicode: '🍘',
    category: 'Objects',
  },
  {
    alias: 'rice',
    unicode: '🍚',
    category: 'Objects',
  },
  {
    alias: 'ramen',
    unicode: '🍜',
    category: 'Objects',
  },
  {
    alias: 'stew',
    unicode: '🍲',
    category: 'Objects',
  },
  {
    alias: 'oden',
    unicode: '🍢',
    category: 'Objects',
  },
  {
    alias: 'dango',
    unicode: '🍡',
    category: 'Objects',
  },
  {
    alias: 'egg',
    unicode: '🥚',
    category: 'Objects',
  },
  {
    alias: 'bread',
    unicode: '🍞',
    category: 'Objects',
  },
  {
    alias: 'doughnut',
    unicode: '🍩',
    category: 'Objects',
  },
  {
    alias: 'custard',
    unicode: '🍮',
    category: 'Objects',
  },
  {
    alias: 'icecream',
    unicode: '🍦',
    category: 'Objects',
  },
  {
    alias: 'ice_cream',
    unicode: '🍨',
    category: 'Objects',
  },
  {
    alias: 'shaved_ice',
    unicode: '🍧',
    category: 'Objects',
  },
  {
    alias: 'birthday',
    unicode: '🎂',
    category: 'Objects',
  },
  {
    alias: 'cake',
    unicode: '🍰',
    category: 'Objects',
  },
  {
    alias: 'cookie',
    unicode: '🍪',
    category: 'Objects',
  },
  {
    alias: 'chocolate_bar',
    unicode: '🍫',
    category: 'Objects',
  },
  {
    alias: 'candy',
    unicode: '🍬',
    category: 'Objects',
  },
  {
    alias: 'lollipop',
    unicode: '🍭',
    category: 'Objects',
  },
  {
    alias: 'honey_pot',
    unicode: '🍯',
    category: 'Objects',
  },
  {
    alias: 'apple',
    unicode: '🍎',
    category: 'Objects',
  },
  {
    alias: 'green_apple',
    unicode: '🍏',
    category: 'Objects',
  },
  {
    alias: 'tangerine',
    unicode: '🍊',
    category: 'Objects',
  },
  {
    alias: 'lemon',
    unicode: '🍋',
    category: 'Objects',
  },
  {
    alias: 'cherries',
    unicode: '🍒',
    category: 'Objects',
  },
  {
    alias: 'grapes',
    unicode: '🍇',
    category: 'Objects',
  },
  {
    alias: 'watermelon',
    unicode: '🍉',
    category: 'Objects',
  },
  {
    alias: 'strawberry',
    unicode: '🍓',
    category: 'Objects',
  },
  {
    alias: 'peach',
    unicode: '🍑',
    category: 'Objects',
  },
  {
    alias: 'melon',
    unicode: '🍈',
    category: 'Objects',
  },
  {
    alias: 'banana',
    unicode: '🍌',
    category: 'Objects',
  },
  {
    alias: 'pear',
    unicode: '🍐',
    category: 'Objects',
  },
  {
    alias: 'pineapple',
    unicode: '🍍',
    category: 'Objects',
  },
  {
    alias: 'sweet_potato',
    unicode: '🍠',
    category: 'Objects',
  },
  {
    alias: 'eggplant',
    unicode: '🍆',
    category: 'Objects',
  },
  {
    alias: 'tomato',
    unicode: '🍅',
    category: 'Objects',
  },
  {
    alias: 'corn',
    unicode: '🌽',
    category: 'Objects',
  },
  {
    alias: 'house',
    unicode: '🏠',
    category: 'Places',
  },
  {
    alias: 'house_with_garden',
    unicode: '🏡',
    category: 'Places',
  },
  {
    alias: 'school',
    unicode: '🏫',
    category: 'Places',
  },
  {
    alias: 'office',
    unicode: '🏢',
    category: 'Places',
  },
  {
    alias: 'post_office',
    unicode: '🏣',
    category: 'Places',
  },
  {
    alias: 'hospital',
    unicode: '🏥',
    category: 'Places',
  },
  {
    alias: 'bank',
    unicode: '🏦',
    category: 'Places',
  },
  {
    alias: 'convenience_store',
    unicode: '🏪',
    category: 'Places',
  },
  {
    alias: 'love_hotel',
    unicode: '🏩',
    category: 'Places',
  },
  {
    alias: 'hotel',
    unicode: '🏨',
    category: 'Places',
  },
  {
    alias: 'wedding',
    unicode: '💒',
    category: 'Places',
  },
  {
    alias: 'church',
    unicode: '⛪️',
    category: 'Places',
  },
  {
    alias: 'department_store',
    unicode: '🏬',
    category: 'Places',
  },
  {
    alias: 'european_post_office',
    unicode: '🏤',
    category: 'Places',
  },
  {
    alias: 'city_sunrise',
    unicode: '🌇',
    category: 'Places',
  },
  {
    alias: 'city_sunset',
    unicode: '🌆',
    category: 'Places',
  },
  {
    alias: 'japanese_castle',
    unicode: '🏯',
    category: 'Places',
  },
  {
    alias: 'european_castle',
    unicode: '🏰',
    category: 'Places',
  },
  {
    alias: 'tent',
    unicode: '⛺️',
    category: 'Places',
  },
  {
    alias: 'factory',
    unicode: '🏭',
    category: 'Places',
  },
  {
    alias: 'tokyo_tower',
    unicode: '🗼',
    category: 'Places',
  },
  {
    alias: 'japan',
    unicode: '🗾',
    category: 'Places',
  },
  {
    alias: 'mount_fuji',
    unicode: '🗻',
    category: 'Places',
  },
  {
    alias: 'sunrise_over_mountains',
    unicode: '🌄',
    category: 'Places',
  },
  {
    alias: 'sunrise',
    unicode: '🌅',
    category: 'Places',
  },
  {
    alias: 'stars',
    unicode: '🌠',
    category: 'Places',
  },
  {
    alias: 'statue_of_liberty',
    unicode: '🗽',
    category: 'Places',
  },
  {
    alias: 'bridge_at_night',
    unicode: '🌉',
    category: 'Places',
  },
  {
    alias: 'carousel_horse',
    unicode: '🎠',
    category: 'Places',
  },
  {
    alias: 'rainbow',
    unicode: '🌈',
    category: 'Places',
  },
  {
    alias: 'ferris_wheel',
    unicode: '🎡',
    category: 'Places',
  },
  {
    alias: 'fountain',
    unicode: '⛲️',
    category: 'Places',
  },
  {
    alias: 'roller_coaster',
    unicode: '🎢',
    category: 'Places',
  },
  {
    alias: 'ship',
    unicode: '🚢',
    category: 'Places',
  },
  {
    alias: 'speedboat',
    unicode: '🚤',
    category: 'Places',
  },
  {
    alias: 'boat',
    unicode: '⛵️',
    category: 'Places',
  },
  {
    alias: 'boat',
    unicode: '⛵️',
    category: 'Places',
  },
  {
    alias: 'rowing_man',
    unicode: '🚣',
    category: 'Places',
  },
  {
    alias: 'anchor',
    unicode: '⚓️',
    category: 'Places',
  },
  {
    alias: 'rocket',
    unicode: '🚀',
    category: 'Places',
  },
  {
    alias: 'airplane',
    unicode: '✈️',
    category: 'Places',
  },
  {
    alias: 'helicopter',
    unicode: '🚁',
    category: 'Places',
  },
  {
    alias: 'steam_locomotive',
    unicode: '🚂',
    category: 'Places',
  },
  {
    alias: 'tram',
    unicode: '🚊',
    category: 'Places',
  },
  {
    alias: 'mountain_railway',
    unicode: '🚞',
    category: 'Places',
  },
  {
    alias: 'bike',
    unicode: '🚲',
    category: 'Places',
  },
  {
    alias: 'aerial_tramway',
    unicode: '🚡',
    category: 'Places',
  },
  {
    alias: 'suspension_railway',
    unicode: '🚟',
    category: 'Places',
  },
  {
    alias: 'mountain_cableway',
    unicode: '🚠',
    category: 'Places',
  },
  {
    alias: 'tractor',
    unicode: '🚜',
    category: 'Places',
  },
  {
    alias: 'blue_car',
    unicode: '🚙',
    category: 'Places',
  },
  {
    alias: 'oncoming_automobile',
    unicode: '🚘',
    category: 'Places',
  },
  {
    alias: 'car',
    unicode: '🚗',
    category: 'Places',
  },
  {
    alias: 'car',
    unicode: '🚗',
    category: 'Places',
  },
  {
    alias: 'taxi',
    unicode: '🚕',
    category: 'Places',
  },
  {
    alias: 'oncoming_taxi',
    unicode: '🚖',
    category: 'Places',
  },
  {
    alias: 'articulated_lorry',
    unicode: '🚛',
    category: 'Places',
  },
  {
    alias: 'bus',
    unicode: '🚌',
    category: 'Places',
  },
  {
    alias: 'oncoming_bus',
    unicode: '🚍',
    category: 'Places',
  },
  {
    alias: 'rotating_light',
    unicode: '🚨',
    category: 'Places',
  },
  {
    alias: 'police_car',
    unicode: '🚓',
    category: 'Places',
  },
  {
    alias: 'oncoming_police_car',
    unicode: '🚔',
    category: 'Places',
  },
  {
    alias: 'fire_engine',
    unicode: '🚒',
    category: 'Places',
  },
  {
    alias: 'ambulance',
    unicode: '🚑',
    category: 'Places',
  },
  {
    alias: 'minibus',
    unicode: '🚐',
    category: 'Places',
  },
  {
    alias: 'truck',
    unicode: '🚚',
    category: 'Places',
  },
  {
    alias: 'train',
    unicode: '🚋',
    category: 'Places',
  },
  {
    alias: 'station',
    unicode: '🚉',
    category: 'Places',
  },
  {
    alias: 'train2',
    unicode: '🚆',
    category: 'Places',
  },
  {
    alias: 'bullettrain_front',
    unicode: '🚅',
    category: 'Places',
  },
  {
    alias: 'bullettrain_side',
    unicode: '🚄',
    category: 'Places',
  },
  {
    alias: 'light_rail',
    unicode: '🚈',
    category: 'Places',
  },
  {
    alias: 'monorail',
    unicode: '🚝',
    category: 'Places',
  },
  {
    alias: 'railway_car',
    unicode: '🚃',
    category: 'Places',
  },
  {
    alias: 'trolleybus',
    unicode: '🚎',
    category: 'Places',
  },
  {
    alias: 'ticket',
    unicode: '🎫',
    category: 'Places',
  },
  {
    alias: 'fuelpump',
    unicode: '⛽️',
    category: 'Places',
  },
  {
    alias: 'vertical_traffic_light',
    unicode: '🚦',
    category: 'Places',
  },
  {
    alias: 'traffic_light',
    unicode: '🚥',
    category: 'Places',
  },
  {
    alias: 'warning',
    unicode: '⚠️',
    category: 'Places',
  },
  {
    alias: 'construction',
    unicode: '🚧',
    category: 'Places',
  },
  {
    alias: 'beginner',
    unicode: '🔰',
    category: 'Places',
  },
  {
    alias: 'atm',
    unicode: '🏧',
    category: 'Places',
  },
  {
    alias: 'slot_machine',
    unicode: '🎰',
    category: 'Places',
  },
  {
    alias: 'busstop',
    unicode: '🚏',
    category: 'Places',
  },
  {
    alias: 'barber',
    unicode: '💈',
    category: 'Places',
  },
  {
    alias: 'hotsprings',
    unicode: '♨️',
    category: 'Places',
  },
  {
    alias: 'checkered_flag',
    unicode: '🏁',
    category: 'Places',
  },
  {
    alias: 'crossed_flags',
    unicode: '🎌',
    category: 'Places',
  },
  {
    alias: 'izakaya_lantern',
    unicode: '🏮',
    category: 'Places',
  },
  {
    alias: 'moyai',
    unicode: '🗿',
    category: 'Places',
  },
  {
    alias: 'circus_tent',
    unicode: '🎪',
    category: 'Places',
  },
  {
    alias: 'performing_arts',
    unicode: '🎭',
    category: 'Places',
  },
  {
    alias: 'round_pushpin',
    unicode: '📍',
    category: 'Places',
  },
  {
    alias: 'triangular_flag_on_post',
    unicode: '🚩',
    category: 'Places',
  },
  {
    alias: 'jp',
    unicode: '🇯🇵',
    category: 'Places',
  },
  {
    alias: 'kr',
    unicode: '🇰🇷',
    category: 'Places',
  },
  {
    alias: 'cn',
    unicode: '🇨🇳',
    category: 'Places',
  },
  {
    alias: 'us',
    unicode: '🇺🇸',
    category: 'Places',
  },
  {
    alias: 'fr',
    unicode: '🇫🇷',
    category: 'Places',
  },
  {
    alias: 'es',
    unicode: '🇪🇸',
    category: 'Places',
  },
  {
    alias: 'it',
    unicode: '🇮🇹',
    category: 'Places',
  },
  {
    alias: 'ru',
    unicode: '🇷🇺',
    category: 'Places',
  },
  {
    alias: 'gb',
    unicode: '🇬🇧',
    category: 'Places',
  },
  {
    alias: 'gb',
    unicode: '🇬🇧',
    category: 'Places',
  },
  {
    alias: 'de',
    unicode: '🇩🇪',
    category: 'Places',
  },
  {
    alias: 'one',
    unicode: '1️⃣',
    category: 'Symbols',
  },
  {
    alias: 'two',
    unicode: '2️⃣',
    category: 'Symbols',
  },
  {
    alias: 'three',
    unicode: '3️⃣',
    category: 'Symbols',
  },
  {
    alias: 'four',
    unicode: '4️⃣',
    category: 'Symbols',
  },
  {
    alias: 'five',
    unicode: '5️⃣',
    category: 'Symbols',
  },
  {
    alias: 'six',
    unicode: '6️⃣',
    category: 'Symbols',
  },
  {
    alias: 'seven',
    unicode: '7️⃣',
    category: 'Symbols',
  },
  {
    alias: 'eight',
    unicode: '8️⃣',
    category: 'Symbols',
  },
  {
    alias: 'nine',
    unicode: '9️⃣',
    category: 'Symbols',
  },
  {
    alias: 'keycap_ten',
    unicode: '🔟',
    category: 'Symbols',
  },
  {
    alias: '1234',
    unicode: '🔢',
    category: 'Symbols',
  },
  {
    alias: 'zero',
    unicode: '0️⃣',
    category: 'Symbols',
  },
  {
    alias: 'hash',
    unicode: '#️⃣',
    category: 'Symbols',
  },
  {
    alias: 'symbols',
    unicode: '🔣',
    category: 'Symbols',
  },
  {
    alias: 'arrow_backward',
    unicode: '◀️',
    category: 'Symbols',
  },
  {
    alias: 'arrow_down',
    unicode: '⬇️',
    category: 'Symbols',
  },
  {
    alias: 'arrow_forward',
    unicode: '▶️',
    category: 'Symbols',
  },
  {
    alias: 'arrow_left',
    unicode: '⬅️',
    category: 'Symbols',
  },
  {
    alias: 'capital_abcd',
    unicode: '🔠',
    category: 'Symbols',
  },
  {
    alias: 'abcd',
    unicode: '🔡',
    category: 'Symbols',
  },
  {
    alias: 'abc',
    unicode: '🔤',
    category: 'Symbols',
  },
  {
    alias: 'arrow_lower_left',
    unicode: '↙️',
    category: 'Symbols',
  },
  {
    alias: 'arrow_lower_right',
    unicode: '↘️',
    category: 'Symbols',
  },
  {
    alias: 'arrow_right',
    unicode: '➡️',
    category: 'Symbols',
  },
  {
    alias: 'arrow_up',
    unicode: '⬆️',
    category: 'Symbols',
  },
  {
    alias: 'arrow_upper_left',
    unicode: '↖️',
    category: 'Symbols',
  },
  {
    alias: 'arrow_upper_right',
    unicode: '↗️',
    category: 'Symbols',
  },
  {
    alias: 'arrow_double_down',
    unicode: '⏬',
    category: 'Symbols',
  },
  {
    alias: 'arrow_double_up',
    unicode: '⏫',
    category: 'Symbols',
  },
  {
    alias: 'arrow_down_small',
    unicode: '🔽',
    category: 'Symbols',
  },
  {
    alias: 'arrow_heading_down',
    unicode: '⤵️',
    category: 'Symbols',
  },
  {
    alias: 'arrow_heading_up',
    unicode: '⤴️',
    category: 'Symbols',
  },
  {
    alias: 'leftwards_arrow_with_hook',
    unicode: '↩️',
    category: 'Symbols',
  },
  {
    alias: 'arrow_right_hook',
    unicode: '↪️',
    category: 'Symbols',
  },
  {
    alias: 'left_right_arrow',
    unicode: '↔️',
    category: 'Symbols',
  },
  {
    alias: 'arrow_up_down',
    unicode: '↕️',
    category: 'Symbols',
  },
  {
    alias: 'arrow_up_small',
    unicode: '🔼',
    category: 'Symbols',
  },
  {
    alias: 'arrows_clockwise',
    unicode: '🔃',
    category: 'Symbols',
  },
  {
    alias: 'arrows_counterclockwise',
    unicode: '🔄',
    category: 'Symbols',
  },
  {
    alias: 'rewind',
    unicode: '⏪',
    category: 'Symbols',
  },
  {
    alias: 'fast_forward',
    unicode: '⏩',
    category: 'Symbols',
  },
  {
    alias: 'information_source',
    unicode: 'ℹ️',
    category: 'Symbols',
  },
  {
    alias: 'ok',
    unicode: '🆗',
    category: 'Symbols',
  },
  {
    alias: 'twisted_rightwards_arrows',
    unicode: '🔀',
    category: 'Symbols',
  },
  {
    alias: 'repeat',
    unicode: '🔁',
    category: 'Symbols',
  },
  {
    alias: 'repeat_one',
    unicode: '🔂',
    category: 'Symbols',
  },
  {
    alias: 'new',
    unicode: '🆕',
    category: 'Symbols',
  },
  {
    alias: 'top',
    unicode: '🔝',
    category: 'Symbols',
  },
  {
    alias: 'up',
    unicode: '🆙',
    category: 'Symbols',
  },
  {
    alias: 'cool',
    unicode: '🆒',
    category: 'Symbols',
  },
  {
    alias: 'free',
    unicode: '🆓',
    category: 'Symbols',
  },
  {
    alias: 'ng',
    unicode: '🆖',
    category: 'Symbols',
  },
  {
    alias: 'cinema',
    unicode: '🎦',
    category: 'Symbols',
  },
  {
    alias: 'koko',
    unicode: '🈁',
    category: 'Symbols',
  },
  {
    alias: 'signal_strength',
    unicode: '📶',
    category: 'Symbols',
  },
  {
    alias: 'u5272',
    unicode: '🈹',
    category: 'Symbols',
  },
  {
    alias: 'u5408',
    unicode: '🈴',
    category: 'Symbols',
  },
  {
    alias: 'u55b6',
    unicode: '🈺',
    category: 'Symbols',
  },
  {
    alias: 'u6307',
    unicode: '🈯️',
    category: 'Symbols',
  },
  {
    alias: 'u6708',
    unicode: '🈷️',
    category: 'Symbols',
  },
  {
    alias: 'u6709',
    unicode: '🈶',
    category: 'Symbols',
  },
  {
    alias: 'u6e80',
    unicode: '🈵',
    category: 'Symbols',
  },
  {
    alias: 'u7121',
    unicode: '🈚️',
    category: 'Symbols',
  },
  {
    alias: 'u7533',
    unicode: '🈸',
    category: 'Symbols',
  },
  {
    alias: 'u7a7a',
    unicode: '🈳',
    category: 'Symbols',
  },
  {
    alias: 'u7981',
    unicode: '🈲',
    category: 'Symbols',
  },
  {
    alias: 'sa',
    unicode: '🈂️',
    category: 'Symbols',
  },
  {
    alias: 'restroom',
    unicode: '🚻',
    category: 'Symbols',
  },
  {
    alias: 'mens',
    unicode: '🚹',
    category: 'Symbols',
  },
  {
    alias: 'womens',
    unicode: '🚺',
    category: 'Symbols',
  },
  {
    alias: 'baby_symbol',
    unicode: '🚼',
    category: 'Symbols',
  },
  {
    alias: 'no_smoking',
    unicode: '🚭',
    category: 'Symbols',
  },
  {
    alias: 'parking',
    unicode: '🅿️',
    category: 'Symbols',
  },
  {
    alias: 'wheelchair',
    unicode: '♿️',
    category: 'Symbols',
  },
  {
    alias: 'metro',
    unicode: '🚇',
    category: 'Symbols',
  },
  {
    alias: 'baggage_claim',
    unicode: '🛄',
    category: 'Symbols',
  },
  {
    alias: 'accept',
    unicode: '🉑',
    category: 'Symbols',
  },
  {
    alias: 'wc',
    unicode: '🚾',
    category: 'Symbols',
  },
  {
    alias: 'potable_water',
    unicode: '🚰',
    category: 'Symbols',
  },
  {
    alias: 'put_litter_in_its_place',
    unicode: '🚮',
    category: 'Symbols',
  },
  {
    alias: 'secret',
    unicode: '㊙️',
    category: 'Symbols',
  },
  {
    alias: 'congratulations',
    unicode: '㊗️',
    category: 'Symbols',
  },
  {
    alias: 'm',
    unicode: 'Ⓜ️',
    category: 'Symbols',
  },
  {
    alias: 'passport_control',
    unicode: '🛂',
    category: 'Symbols',
  },
  {
    alias: 'left_luggage',
    unicode: '🛅',
    category: 'Symbols',
  },
  {
    alias: 'customs',
    unicode: '🛃',
    category: 'Symbols',
  },
  {
    alias: 'ideograph_advantage',
    unicode: '🉐',
    category: 'Symbols',
  },
  {
    alias: 'cl',
    unicode: '🆑',
    category: 'Symbols',
  },
  {
    alias: 'sos',
    unicode: '🆘',
    category: 'Symbols',
  },
  {
    alias: 'id',
    unicode: '🆔',
    category: 'Symbols',
  },
  {
    alias: 'no_entry_sign',
    unicode: '🚫',
    category: 'Symbols',
  },
  {
    alias: 'underage',
    unicode: '🔞',
    category: 'Symbols',
  },
  {
    alias: 'no_mobile_phones',
    unicode: '📵',
    category: 'Symbols',
  },
  {
    alias: 'do_not_litter',
    unicode: '🚯',
    category: 'Symbols',
  },
  {
    alias: 'non-potable_water',
    unicode: '🚱',
    category: 'Symbols',
  },
  {
    alias: 'no_bicycles',
    unicode: '🚳',
    category: 'Symbols',
  },
  {
    alias: 'no_pedestrians',
    unicode: '🚷',
    category: 'Symbols',
  },
  {
    alias: 'children_crossing',
    unicode: '🚸',
    category: 'Symbols',
  },
  {
    alias: 'no_entry',
    unicode: '⛔️',
    category: 'Symbols',
  },
  {
    alias: 'eight_spoked_asterisk',
    unicode: '✳️',
    category: 'Symbols',
  },
  {
    alias: 'eight_pointed_black_star',
    unicode: '✴️',
    category: 'Symbols',
  },
  {
    alias: 'heart_decoration',
    unicode: '💟',
    category: 'Symbols',
  },
  {
    alias: 'vs',
    unicode: '🆚',
    category: 'Symbols',
  },
  {
    alias: 'vibration_mode',
    unicode: '📳',
    category: 'Symbols',
  },
  {
    alias: 'mobile_phone_off',
    unicode: '📴',
    category: 'Symbols',
  },
  {
    alias: 'chart',
    unicode: '💹',
    category: 'Symbols',
  },
  {
    alias: 'currency_exchange',
    unicode: '💱',
    category: 'Symbols',
  },
  {
    alias: 'aries',
    unicode: '♈️',
    category: 'Symbols',
  },
  {
    alias: 'taurus',
    unicode: '♉️',
    category: 'Symbols',
  },
  {
    alias: 'gemini',
    unicode: '♊️',
    category: 'Symbols',
  },
  {
    alias: 'cancer',
    unicode: '♋️',
    category: 'Symbols',
  },
  {
    alias: 'leo',
    unicode: '♌️',
    category: 'Symbols',
  },
  {
    alias: 'virgo',
    unicode: '♍️',
    category: 'Symbols',
  },
  {
    alias: 'libra',
    unicode: '♎️',
    category: 'Symbols',
  },
  {
    alias: 'scorpius',
    unicode: '♏️',
    category: 'Symbols',
  },
  {
    alias: 'sagittarius',
    unicode: '♐️',
    category: 'Symbols',
  },
  {
    alias: 'capricorn',
    unicode: '♑️',
    category: 'Symbols',
  },
  {
    alias: 'aquarius',
    unicode: '♒️',
    category: 'Symbols',
  },
  {
    alias: 'pisces',
    unicode: '♓️',
    category: 'Symbols',
  },
  {
    alias: 'ophiuchus',
    unicode: '⛎',
    category: 'Symbols',
  },
  {
    alias: 'six_pointed_star',
    unicode: '🔯',
    category: 'Symbols',
  },
  {
    alias: 'negative_squared_cross_mark',
    unicode: '❎',
    category: 'Symbols',
  },
  {
    alias: 'a',
    unicode: '🅰️',
    category: 'Symbols',
  },
  {
    alias: 'b',
    unicode: '🅱️',
    category: 'Symbols',
  },
  {
    alias: 'ab',
    unicode: '🆎',
    category: 'Symbols',
  },
  {
    alias: 'o2',
    unicode: '🅾️',
    category: 'Symbols',
  },
  {
    alias: 'diamond_shape_with_a_dot_inside',
    unicode: '💠',
    category: 'Symbols',
  },
  {
    alias: 'recycle',
    unicode: '♻️',
    category: 'Symbols',
  },
  {
    alias: 'end',
    unicode: '🔚',
    category: 'Symbols',
  },
  {
    alias: 'on',
    unicode: '🔛',
    category: 'Symbols',
  },
  {
    alias: 'soon',
    unicode: '🔜',
    category: 'Symbols',
  },
  {
    alias: 'clock1',
    unicode: '🕐',
    category: 'Symbols',
  },
  {
    alias: 'clock130',
    unicode: '🕜',
    category: 'Symbols',
  },
  {
    alias: 'clock10',
    unicode: '🕙',
    category: 'Symbols',
  },
  {
    alias: 'clock1030',
    unicode: '🕥',
    category: 'Symbols',
  },
  {
    alias: 'clock11',
    unicode: '🕚',
    category: 'Symbols',
  },
  {
    alias: 'clock1130',
    unicode: '🕦',
    category: 'Symbols',
  },
  {
    alias: 'clock12',
    unicode: '🕛',
    category: 'Symbols',
  },
  {
    alias: 'clock1230',
    unicode: '🕧',
    category: 'Symbols',
  },
  {
    alias: 'clock2',
    unicode: '🕑',
    category: 'Symbols',
  },
  {
    alias: 'clock230',
    unicode: '🕝',
    category: 'Symbols',
  },
  {
    alias: 'clock3',
    unicode: '🕒',
    category: 'Symbols',
  },
  {
    alias: 'clock330',
    unicode: '🕞',
    category: 'Symbols',
  },
  {
    alias: 'clock4',
    unicode: '🕓',
    category: 'Symbols',
  },
  {
    alias: 'clock430',
    unicode: '🕟',
    category: 'Symbols',
  },
  {
    alias: 'clock5',
    unicode: '🕔',
    category: 'Symbols',
  },
  {
    alias: 'clock530',
    unicode: '🕠',
    category: 'Symbols',
  },
  {
    alias: 'clock6',
    unicode: '🕕',
    category: 'Symbols',
  },
  {
    alias: 'clock630',
    unicode: '🕡',
    category: 'Symbols',
  },
  {
    alias: 'clock7',
    unicode: '🕖',
    category: 'Symbols',
  },
  {
    alias: 'clock730',
    unicode: '🕢',
    category: 'Symbols',
  },
  {
    alias: 'clock8',
    unicode: '🕗',
    category: 'Symbols',
  },
  {
    alias: 'clock830',
    unicode: '🕣',
    category: 'Symbols',
  },
  {
    alias: 'clock9',
    unicode: '🕘',
    category: 'Symbols',
  },
  {
    alias: 'clock930',
    unicode: '🕤',
    category: 'Symbols',
  },
  {
    alias: 'heavy_dollar_sign',
    unicode: '💲',
    category: 'Symbols',
  },
  {
    alias: 'copyright',
    unicode: '©️',
    category: 'Symbols',
  },
  {
    alias: 'registered',
    unicode: '®️',
    category: 'Symbols',
  },
  {
    alias: 'tm',
    unicode: '™️',
    category: 'Symbols',
  },
  {
    alias: 'x',
    unicode: '❌',
    category: 'Symbols',
  },
  {
    alias: 'exclamation',
    unicode: '❗️',
    category: 'Symbols',
  },
  {
    alias: 'bangbang',
    unicode: '‼️',
    category: 'Symbols',
  },
  {
    alias: 'interrobang',
    unicode: '⁉️',
    category: 'Symbols',
  },
  {
    alias: 'o',
    unicode: '⭕️',
    category: 'Symbols',
  },
  {
    alias: 'heavy_multiplication_x',
    unicode: '✖️',
    category: 'Symbols',
  },
  {
    alias: 'heavy_plus_sign',
    unicode: '➕',
    category: 'Symbols',
  },
  {
    alias: 'heavy_minus_sign',
    unicode: '➖',
    category: 'Symbols',
  },
  {
    alias: 'heavy_division_sign',
    unicode: '➗',
    category: 'Symbols',
  },
  {
    alias: 'white_flower',
    unicode: '💮',
    category: 'Symbols',
  },
  {
    alias: '100',
    unicode: '💯',
    category: 'Symbols',
  },
  {
    alias: 'heavy_check_mark',
    unicode: '✔️',
    category: 'Symbols',
  },
  {
    alias: 'ballot_box_with_check',
    unicode: '☑️',
    category: 'Symbols',
  },
  {
    alias: 'radio_button',
    unicode: '🔘',
    category: 'Symbols',
  },
  {
    alias: 'link',
    unicode: '🔗',
    category: 'Symbols',
  },
  {
    alias: 'curly_loop',
    unicode: '➰',
    category: 'Symbols',
  },
  {
    alias: 'wavy_dash',
    unicode: '〰️',
    category: 'Symbols',
  },
  {
    alias: 'part_alternation_mark',
    unicode: '〽️',
    category: 'Symbols',
  },
  {
    alias: 'trident',
    unicode: '🔱',
    category: 'Symbols',
  },
  {
    alias: 'white_check_mark',
    unicode: '✅',
    category: 'Symbols',
  },
  {
    alias: 'black_square_button',
    unicode: '🔲',
    category: 'Symbols',
  },
  {
    alias: 'white_square_button',
    unicode: '🔳',
    category: 'Symbols',
  },
  {
    alias: 'black_circle',
    unicode: '⚫️',
    category: 'Symbols',
  },
  {
    alias: 'white_circle',
    unicode: '⚪️',
    category: 'Symbols',
  },
  {
    alias: 'red_circle',
    unicode: '🔴',
    category: 'Symbols',
  },
  {
    alias: 'large_blue_circle',
    unicode: '🔵',
    category: 'Symbols',
  },
  {
    alias: 'large_blue_diamond',
    unicode: '🔷',
    category: 'Symbols',
  },
  {
    alias: 'large_orange_diamond',
    unicode: '🔶',
    category: 'Symbols',
  },
  {
    alias: 'small_blue_diamond',
    unicode: '🔹',
    category: 'Symbols',
  },
  {
    alias: 'small_orange_diamond',
    unicode: '🔸',
    category: 'Symbols',
  },
  {
    alias: 'small_red_triangle',
    unicode: '🔺',
    category: 'Symbols',
  },
  {
    alias: 'small_red_triangle_down',
    unicode: '🔻',
    category: 'Symbols',
  },
]
