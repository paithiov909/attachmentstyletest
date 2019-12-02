<template>
    <div id="wrapper">

        <div id="fb-root"></div>

        <navigation></navigation>

        <div id="top" class="container">
            <div class="jumbotron">
                <h2>愛着スタイル診断テスト</h2>
                <p><a href="https://g.co/kgs/aRxumE" target="_new" rel="noopener">回避性愛着障害～絆が稀薄な人たち～ (光文社新書)</a> をもとに作成した愛着スタイル診断テストです。次の質問に対し、過去数年間のご自分の傾向を思い浮かべながら、もっともあてはまる選択肢を選んでください。</p>
                <p><nuxt-link to="/community">メンタルヘルスで悩んでいるひと、その支援者向けのコミュニティはこちら</nuxt-link></p>
            </div>
        </div>

        <div id="experience" class="background-alt">
            <div id="experience-timeline">
                <div class="vtimeline-point" v-for="(value, key, index) in experience" :key="value.id">
                    <div class="vtimeline-icon">
                        <i class="fa fa-question"></i>
                    </div>
                    <div class="vtimeline-block">
                        <span class="vtimeline-date">{{ value.id }} / 45</span>
                        <div class="vtimeline-content">
                            <h3>{{ value.question }}</h3>
                            <h4 class="hidden">{{ index }}</h4>
                            <hr />
                            <div class="pretty p-default p-fill p-pulse" @click="answered">
                                <input type="radio" :name="'q' + key" :value="1" />
                                <div class="state p-primary">
                                    <label>{{ value.answer1 }}</label>
                                </div>
                            </div>
                            <div class="pretty p-default p-fill p-pulse" @click="answered">
                                <input type="radio" :name="'q' + key" :value="2" />
                                <div class="state p-danger">
                                    <label>{{ value.answer2 }}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End #experience -->

        <div id="contact">
            <div class="container">
                <h4>
                    <a href="#" class="btn btn-rounded-white" role="button" @click.prevent="calcResult">診断する</a>
                </h4>
                <div v-show="validation">
                    <p>回答していない質問があります。すべての質問に回答してください。</p>
                </div>
            </div>
        </div>
        <!-- End #contact -->

        <div id="education">
            <div class="container">
                <h2 class="heading">診断結果</h2>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>点数</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id="antei">
                            <td>A</td>
                            <td>安定型愛着スコア</td>
                            <td>{{ score.scA }}</td>
                        </tr>
                        <tr id="fuan">
                            <td>B</td>
                            <td>不安型愛着スコア</td>
                            <td>{{ score.scB }}</td>
                        </tr>
                        <tr id="kaihi">
                            <td>C</td>
                            <td>回避型愛着スコア</td>
                            <td>{{ score.scC }}</td>
                        </tr>
                        <tr id="mikai">
                            <td>D</td>
                            <td>未解決型愛着スコア</td>
                            <td>{{ score.scD }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="education-block">
                    <p class="pull-right" v-show="!validation">
                        <a href="#" role="button" class="btn btn-rounded" @click.prevent="save"><i class="fa fa-download" aria-hidden="true"></i>&nbsp;診断結果を画像化</a>
                    </p>
                    <h3>判定方法</h3>
                    <span class="education-date"></span>
                    <h4></h4>
                    <p>A、B、C、Dの合計得点は、それぞれ「安定型愛着スコア」、「不安型愛着スコア」、「回避型愛着スコア」、「未解決型愛着スコア」です。</p><br />
                    <p>まず、どのスコアがもっとも高かったかに注目してください。それが、あなたの基本的な愛着スタイルだと考えられます。ことに15点以上の場合には、その傾向が非常に強く、10点以上の場合には強いと判定されます。</p><br />
                    <p>次に、二番目に高いスコアにも注目してください。5点以上ある場合、その傾向も無視しがたい要素となっていると言えます。</p><br />
                    <p>各愛着スタイルの判定基準と特徴は以下をご覧ください。なお、≫の記号は、「非常に大なり」の意味ですが、ここでは、5ポイント以上の差を判定の目安と考えてください。</p>
                </div>
                <div class="education-block">
                    <h3>安定型 愛着スタイル</h3>
                    <span class="education-date"></span>
                    <h4>（安定型スコア ≫ 不安型・回避型スコア）</h4>
                    <p>愛着不安、愛着回避とも低く、もっとも安定したタイプ</p>
                </div>
                <div class="education-block">
                    <h3>安定－回避型 愛着スタイル</h3>
                    <span class="education-date"></span>
                    <h4>（安定型スコア ＞不安型スコア ≧ 5）</h4>
                    <p>愛着回避の傾向がみられるが、全体には安定したタイプ</p>
                </div>
                <div class="education-block">
                    <h3>不安型 愛着スタイル</h3>
                    <span class="education-date"></span>
                    <h4>（不安型スコア ≫ 安定型・回避型スコア）</h4>
                    <p>愛着不安が強く、対人関係に敏感なタイプ</p>
                </div>
                <div class="education-block">
                    <h3>不安－安定型 愛着スタイル</h3>
                    <span class="education-date"></span>
                    <h4>（不安型スコア ≧ 安定型スコア ≧ 5）</h4>
                    <p>愛着不安が強いが、ある程度適応力があるタイプ</p>
                </div>
                <div class="education-block">
                    <h3>回避型 愛着スタイル</h3>
                    <span class="education-date"></span>
                    <h4>（回避型スコア ≫ 安定型・不安型スコア）</h4>
                    <p>愛着回避が強く、親密な関係になりにくいタイプ</p>
                </div>
                <div class="education-block">
                    <h3>回避－安定型 愛着スタイル</h3>
                    <span class="education-date"></span>
                    <h4>（回避型スコア ≧ 安定型スコア ≧ 5）</h4>
                    <p>愛着回避が強いが、ある程度適応力があるタイプ</p>
                </div>
                <div class="education-block">
                    <h3>恐れ・回避型 愛着スタイル</h3>
                    <span class="education-date"></span>
                    <h4>（不安型・回避型スコア ≫ 安定型スコア）</h4>
                    <p>愛着不安、愛着回避とも強く、傷つくことに敏感で、疑り深くなりやすいタイプ</p>
                </div>
                <div class="education-block">
                    <h3>未解決型 愛着スタイル</h3>
                    <span class="education-date"></span>
                    <h4>（未解決型スコア ≧ 5）</h4>
                    <p>親（養育者）との愛着の傷をひきずり、不安定になりやすいタイプで、他のタイプに併存する</p>
                </div>
            </div>
        </div>
        <!-- End #education -->

        <projects :projects="projects"></projects>

        <my-footer></my-footer>

    </div>
</template>

<script>
import { saveAs } from "file-saver"
import questions from "~/plugins/questions.js"

import navigation from "~/components/NavigationHeader.vue"
import projects from "~/components/ProjectsBlock.vue"
import footer from "~/components/Footer.vue"


export default {
    components: {
        "navigation": navigation,
        "projects": projects,
        "my-footer": footer
    },
    data () {
        return {
            validation: true,
            score: {
                scA: 0,
                scB: 0,
                scC: 0,
                scD: 0
            },
            experience: questions.data
        }
    },
    computed: {
        projects () {
            return [
                {
                    img: "https://images-fe.ssl-images-amazon.com/images/I/31PfyK01o%2BL._SL160_.jpg",
                    title: "回避性愛着障害 絆が稀薄な人たち (光文社新書)",
                    info: "岡田 尊司",
                    link: "http://www.amazon.co.jp/exec/obidos/ASIN/4334037755//ref=nosim/"
                },
                {
                    img: "https://images-fe.ssl-images-amazon.com/images/I/51-NlxL7h8L._SL160_.jpg",
                    title: "愛着障害 子ども時代を引きずる人々 (光文社新書)",
                    info: "岡田 尊司",
                    link: "http://www.amazon.co.jp/exec/obidos/ASIN/4334036430//ref=nosim/"
                },
                {
                    img: "https://images-fe.ssl-images-amazon.com/images/I/510NOAWnjKL._SL160_.jpg",
                    title: "生きるのが面倒くさい人 回避性パーソナリティ障害 (朝日新書)",
                    info: "岡田 尊司",
                    link: "http://www.amazon.co.jp/exec/obidos/ASIN/4022736704//ref=nosim/"
                }
            ]
        },
        quickchart () {
            const score = this.score
            return `https://quickchart.io/chart?bkg=white&c=${JSON.stringify({
                type: "doughnut",
                data: {
                    labels: [encodeURIComponent("安定型愛着スコア"), encodeURIComponent("不安型愛着スコア"), encodeURIComponent("回避型愛着スコア"), encodeURIComponent("未解決型愛着スコア")],
                    datasets: [
                        { data: [score.scA, score.scB, score.scC, score.scD] }
                    ]
                }
            })}`
        }
    },
    watch: {
        score (newscore, oldscore) {
            $("tbody > tr").removeClass();
            if (newscore.scA >= 15) { $("#antei").addClass("warning"); } else if (newscore.scA >= 10) { $("#antei").addClass("danger"); }
            if (newscore.scB >= 15) { $("#fuan").addClass("warning"); } else if (newscore.scB >= 10) { $("#fuan").addClass("danger"); }
            if (newscore.scC >= 15) { $("#kaihi").addClass("warning"); } else if (newscore.scC >= 10) { $("#kaihi").addClass("danger"); }
            if (newscore.scD >= 10) { $("#mikai").addClass("warning"); } else if (newscore.scD >= 5) { $("#mikai").addClass("danger"); }
        }
    },
    methods: {
        answered () {
            const app = this;
            $(this.$el).find("#experience-timeline").each(function () {
                let length = $(this).find('input:checked').get().length;
                // console.info(length)
                if (length === 45) {
                    app.validation = false;
                } else {
                    app.validation = true;
                }
            });
        },
        calcResult () {
            const app = this;
            if (!this.validation) {
                $(this.$el).find("#experience-timeline").each(function () {
                    let answers = $(this).find('input:checked').map(function () {
                        return $(this).val()
                    });
                    let score = {
                        scA: 0,
                        scB: 0,
                        scC: 0,
                        scD: 0
                    };
                    $.each(answers, function (index, val) {
                        let answer = _.propertyOf(app.experience[index])(`score${val}`);
                        if(!_.isNull(answer)){
                            $.each(answer.column, function (i, column) {
                                if (column === "scA") {
                                    score.scA = score.scA + answer.point[i];
                                } else if (column === "scB") {
                                    score.scB = score.scB + answer.point[i];
                                } else if (column === "scC") {
                                    score.scC = score.scC + answer.point[i];
                                } else if (column === "scD") {
                                    score.scD = score.scD + answer.point[i];
                                }
                            });
                        }
                    });

                    // console.log(score);
                    app.$gtag("event", "click", {
                        event_category: "calc",
                        event_label: JSON.stringify(score)
                    });

                    app.score = score;
                });
            }
        },
        save () {
            this.$gtag("event", "click", {
                event_category: "save",
                event_label: JSON.stringify(this.score)
            });
            saveAs(this.quickchart, "attachmentstyle.png");
        }
    },
    head () {
        const structuredData = {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://attachmentstyletest.web.fc2.com/",
            "name": "愛着スタイル診断テスト"
        }
        return {
            title: "愛着スタイル診断テスト",
            __dangerouslyDisableSanitizers: ["script"],
            script: [
                {
                    innerHTML: JSON.stringify(structuredData),
                    type: "application/ld+json"
                }
            ]
        }
    }
}
</script>