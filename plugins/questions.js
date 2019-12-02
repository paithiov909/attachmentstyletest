const questions = {
"data": [{
    "id": 1,
    "question": "積極的に新しいことをしたり、新しい場所に出かけたり、新しい人に会ったりする方ですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 1,
        "column": ["scA"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 2,
    "question": "誰とでもすぐに打ち解けたり、くつろげる方ですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 2,
        "column": ["scA"],
        "point": [1]
    },
    "score2": {
        "id": 2,
        "column": ["scC"],
        "point": [2]
    }
    },
    {
    "id": 3,
    "question": "もし困ったことがあっても、どうにかなると楽観的に考える方ですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 3,
        "column": ["scA"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 4,
    "question": "親しい友人や知人のことを心から信頼する方ですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 4,
        "column": ["scA"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 5,
    "question": "人を責めたり、攻撃的になりやすいところがありますか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": null,
    "score2": {
        "id": 5,
        "column": ["scA"],
        "point": [2]
    }
    },
    {
    "id": 6,
    "question": "今まで経験のないことをするとき、不安を感じやすい方ですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": null,
    "score2": {
        "id": 6,
        "column": ["scA"],
        "point": [2]
    }
    },
    {
    "id": 7,
    "question": "あなたの親（養育者）は、あなたに対して冷淡なところがありましたか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 7,
        "column": ["scD"],
        "point": [1]
    },
    "score2": {
        "id": 7,
        "column": ["scA"],
        "point": [2]
    }
    },
    {
    "id": 8,
    "question": "人はいざというとき、裏切ったり、当てにならなかったりするものだと思いますか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": null,
    "score2": {
        "id": 8,
        "column": ["scA"],
        "point": [2]
    }
    },
    {
    "id": 9,
    "question": "あなたの親（養育者）は、あなたを評価してくれるよりも、批判的ですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 9,
        "column": ["scD"],
        "point": [1]
    },
    "score2": {
        "id": 9,
        "column": ["scA"],
        "point": [1]
    }
    },
    {
    "id": 10,
    "question": "子どものころの思い出は、楽しいことの方が多いですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 10,
        "column": ["scA"],
        "point": [1]
    },
    "score2": {
        "id": 10,
        "column": ["scB", "scD"],
        "point": [2, 2]
    }
    },
    {
    "id": 11,
    "question": "あなたの親（養育者）に対して、とても感謝していますか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 11,
        "column": ["scA"],
        "point": [1]
    },
    "score2": {
        "id": 11,
        "column": ["scB", "scD"],
        "point": [2, 2]
    }
    },
    {
    "id": 12,
    "question": "つらいことがあったとき、親や家族のことを思い出すと、気持ちが落ち着きますか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 12,
        "column": ["scA"],
        "point": [1]
    },
    "score2": {
        "id": 12,
        "column": ["scB", "scD"],
        "point": [2, 2]
    }
    },
    {
    "id": 13,
    "question": "そばにいなくなっても、一人の人のことを長く思い続ける方ですか。それとも、次の人をすぐ求めてしまう方ですか。",
    "answer1": "一人の人を思い続ける方だ",
    "answer2": "次の人を求めてしまう方だ",
    "score1": {
        "id": 13,
        "column": ["scA"],
        "point": [1]
    },
    "score2": {
        "id": 13,
        "column": ["scB"],
        "point": [2]
    }
    },
    {
    "id": 14,
    "question": "好き嫌いが激しい方ですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 14,
        "column": ["scB"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 15,
    "question": "とてもいい人だと思っていたのに、幻滅したり、嫌いになったりすることがありますか。",
    "answer1": "よくある",
    "answer2": "あまりない",
    "score1": {
        "id": 15,
        "column": ["scB"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 16,
    "question": "よくイライラしたり、落ち込んだりする方ですか。",
    "answer1": "よくある",
    "answer2": "あまりない",
    "score1": {
        "id": 16,
        "column": ["scB"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 17,
    "question": "自分にはあまり取り柄がないと思うことがありますか。",
    "answer1": "よくある",
    "answer2": "あまりない",
    "score1": {
        "id": 17,
        "column": ["scB"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 18,
    "question": "拒絶されるのではないかと、不安になることがありますか。",
    "answer1": "よくある",
    "answer2": "あまりない",
    "score1": {
        "id": 18,
        "column": ["scB"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 19,
    "question": "良いところより、悪いところの方が気になってしまいますか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 19,
        "column": ["scB"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 20,
    "question": "自分に自信がある方ですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": null,
    "score2": {
        "id": 20,
        "column": ["scB"],
        "point": [2]
    }
    },
    {
    "id": 21,
    "question": "人に頼らずに、決断したり行動したりできる方ですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": null,
    "score2": {
        "id": 21,
        "column": ["scB"],
        "point": [2]
    }
    },
    {
    "id": 22,
    "question": "自分はあまり人から愛されない存在だと思いますか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 22,
        "column": ["scB"],
        "point": [1]
    },
    "score2": {
        "id": 22,
        "column": ["scA"],
        "point": [2]
    }
    },
    {
    "id": 23,
    "question": "何か嫌なことがあると、引きずってしまう方ですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 23,
        "column": ["scB"],
        "point": [1]
    },
    "score2": {
        "id": 23,
        "column": ["scA"],
        "point": [2]
    }
    },
    {
    "id": 24,
    "question": "あなたの親（養育者）から、よく傷つけられるようなことをされましたか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 24,
        "column": ["scB", "scD"],
        "point": [1, 1]
    },
    "score2": {
        "id": 24,
        "column": ["scA"],
        "point": [2]
    }
    },
    {
    "id": 25,
    "question": "あなたの親（養育者）に対して、怒りや恨みを感じることがありますか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 25,
        "column": ["scB", "scD"],
        "point": [1, 1]
    },
    "score2": {
        "id": 25,
        "column": ["scA"],
        "point": [2]
    }
    },
    {
    "id": 26,
    "question": "つらいときに、身近な人に接触を求めるほうですか。それとも、つらいときほど、接触を求めようとしなくなる方ですか。",
    "answer1": "接触を求める",
    "answer2": "接触を求めない",
    "score1": null,
    "score2": {
        "id": 26,
        "column": ["scC"],
        "point": [2]
    }
    },
    {
    "id": 27,
    "question": "親しい対人関係は、あなたにとって重要ですか。",
    "answer1": "とても重要である",
    "answer2": "あまり重要でない",
    "score1": null,
    "score2": {
        "id": 27,
        "column": ["scC"],
        "point": [2]
    }
    },
    {
    "id": 28,
    "question": "いつも冷静でクールな方ですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 28,
        "column": ["scC"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 29,
    "question": "べたべたした付き合いは、苦手ですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 29,
        "column": ["scC"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 30,
    "question": "関わりのあった人と別れても、すぐ忘れる方ですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 30,
        "column": ["scC"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 31,
    "question": "人付き合いより、自分の世界が大切ですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 31,
        "column": ["scC"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 32,
    "question": "自分の力だけが頼りだと思いますか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 32,
        "column": ["scC"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 33,
    "question": "昔のことはあまり懐かしいと思いませんか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 33,
        "column": ["scC"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 34,
    "question": "あまり感情を表情に出さない方ですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 34,
        "column": ["scC"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 35,
    "question": "恋人や配偶者にも、プライバシーは冒されたくないですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 35,
        "column": ["scC"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 36,
    "question": "親しい人と肌が触れ合ったり、抱擁したりするスキンシップをとることを好みますか。それとも、あまり好みませんか。",
    "answer1": "好む方だ",
    "answer2": "あまり好まない",
    "score1": null,
    "score2": {
        "id": 36,
        "column": ["scC"],
        "point": [2]
    }
    },
    {
    "id": 37,
    "question": "幼いころのことをよく覚えている方ですか。それとも、あまり記憶がない方ですか。",
    "answer1": "よく覚えている",
    "answer2": "あまり記憶がない",
    "score1": null,
    "score2": {
        "id": 37,
        "column": ["scC"],
        "point": [2]
    }
    },
    {
    "id": 38,
    "question": "親しい人といるときにも、気を遣ってしまう方ですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 38,
        "column": ["scB"],
        "point": [1]
    },
    "score2": {
        "id": 38,
        "column": ["scA"],
        "point": [2]
    }
    },
    {
    "id": 39,
    "question": "困っているとき、他人は親切に助けてくれるものだと思いますか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 39,
        "column": ["scA"],
        "point": [1]
    },
    "score2": {
        "id": 39,
        "column": ["scC"],
        "point": [2]
    }
    },
    {
    "id": 40,
    "question": "他人の善意に気軽にすがる方ですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 40,
        "column": ["scA"],
        "point": [1]
    },
    "score2": {
        "id": 40,
        "column": ["scC"],
        "point": [2]
    }
    },
    {
    "id": 41,
    "question": "失敗を恐れて、チャレンジを避けてしまうことがありますか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 41,
        "column": ["scC"],
        "point": [1]
    },
    "score2": null
    },
    {
    "id": 42,
    "question": "人と別れるとき、とても悲しく感じたり、動揺する方ですか",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 42,
        "column": ["scB"],
        "point": [1]
    },
    "score2": {
        "id": 42,
        "column": ["scC"],
        "point": [2]
    }
    },
    {
    "id": 43,
    "question": "他人に煩わされず、一人で自由に生きていくのが好きですか。",
    "answer1": "はい",
    "answer2": "いいえ",
    "score1": {
        "id": 43,
        "column": ["scB"],
        "point": [1]
    },
    "score2": {
        "id": 43,
        "column": ["scC"],
        "point": [2]
    }
    },
    {
    "id": 44,
    "question": "あなたにとって、仕事や学業と、恋愛や対人関係のどちらが重要ですか。",
    "answer1": "仕事や学業",
    "answer2": "恋愛や対人関係",
    "score1": {
        "id": 44,
        "column": ["scB"],
        "point": [2]
    },
    "score2": {
        "id": 44,
        "column": ["scC"],
        "point": [1]
    }
    },
    {
    "id": 45,
    "question": "あなたが傷ついたり、落ち込んでいるとき、他の人になぐさめてもらったり、話を聞いてもらうことは、どれくらい大事ですか。",
    "answer1": "とても重要である",
    "answer2": "あまり重要でない",
    "score1": null,
    "score2": {
        "id": 45,
        "column": ["scC"],
        "point": [2]
    }
    }
]
}

module.exports = questions