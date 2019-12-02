<template>
    <div id="wrapper">

        <div id="fb-root"></div>

        <div id="top" class="container">
            <div class="panel">
                <div class="panel-body">
                    <h2>Lobiでコミュニケーションとか無理くないですか</h2>
                    <p class="text-muted">メンタルヘルスで悩んでいるひと、その支援者向けのコミュニティです。メンヘラやひきこもりなどについて、医療人類学・医療社会学・障害学などの観点から勉強しながら、情報をキュレーションしていきます。管理者にコンタクトを取りたい場合にはDoorkeeperのコミュニティページにある問い合わせフォームからおこなってください。</p>
                    <p><nuxt-link to="/">愛着スタイル診断はこちらから</nuxt-link></p>
                    <h3>リンク</h3>
                    <ul>
                        <li><a href="https://lobi.co/invite/thvtaw" target="new" @click="link('Lobi')">Lobi</a></li>
                        <li><a href="https://menhera.jp/community/online/60" target="new" @click="link('menhera')">メンヘラ.jp</a></li>
                        <li><a href="https://communication-incapable.doorkeeper.jp/" target="new" @click="link('Doorkeeper')">Doorkeeper</a></li>
                    </ul>
                    <h3>キュレーションされた情報の利用</h3>
                    <p class="text-muted">収集したWeb上の記事などを<a href="https://b.hatena.ne.jp/paithiov909/bookmark" @click="link('hatena')">はてなブックマーク</a>を通じてRSSフィードとして配信しています。</p>
                    <h4>Feedlyでフォロー</h4>
                    <a href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fb.hatena.ne.jp%2Fpaithiov909%2Fbookmark.rss" target="blank" rel="noopener noreferrer" @click="link('feedly')"><img id="feedlyFollow" src="http://s3.feedly.com/img/follows/feedly-follow-rectangle-flat-big_2x.png" alt="follow us in feedly" width="131" height="56"></a>
                    <h4>情報の提供</h4>
                    <p class="text-muted">RSSから配信してほしい情報がある場合、<a href="https://disqus.com/home/forums/communication-incapable/" @click="link('Disqus')">Disqus</a>にポストして教えてください（必ず配信することを保証するものではありません）。</p>
                </div>
            </div>
        </div>

        <div id="disqus_thread" class="container page-header"></div>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        <script async>
            (function() { // DON'T EDIT BELOW THIS LINE
                var d = document, s = d.createElement('script');
                s.src = 'https://communication-incapable.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
            })();
        </script>

        <projects :projects="projects"></projects>

        <div id="footer">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div id="boxArea" class="pull-left" style="display:table;padding:0 0 0 2px;">
                                <div style="width:75px;height:64px;float:left;">
                                    <iframe src="https://www.facebook.com/v2.0/plugins/like.php?href=https%3A%2F%2Fattachmentstyletest.web.fc2.com%2Fcommunity%2F&amp;width&amp;layout=box_count&amp;action=like&amp;show_faces=false&amp;share=false&amp;height=90&amp;appId=" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:90px;" allowTransparency="true"></iframe>
                                </div>
                                <div style="width:85px;height:62px;float:left;">
                                    <a href="https://b.hatena.ne.jp/entry/s/attachmentstyletest.web.fc2.com/community" class="hatena-bookmark-button" data-hatena-bookmark-layout="vertical-balloon" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" /></a>
                                </div>
                                <div style="float:left;">
                                    <div class="line-it-button" data-lang="ja" data-type="share-b" data-ver="3" data-url="https://attachmentstyletest.web.fc2.com/community" data-color="default" data-size="small" data-count="true" style="display: none;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <p class="text-muted">
                                このサイトはGoogleアナリティクスやその他のトラッキングツールを利用しています。データは匿名で収集されており、個人を特定するものではありません。サイト利用者はこのサイトがCookieを使用してトラフィックデータを収集することに同意したものとみなします。
                            </p>
                            <p class="text-muted">
                                Amazonへのリンクを掲載していますが、このサイトはAmazonのアソシエイト・プログラムのメンバーではありません。掲載されているリンクは収益化を目的として設置したものではありません。
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 copyright">
                            <p>
                                Copyright &copy; 2019 Lobiでコミュニケーションとか無理くないですか
                            </p>
                        </div>
                        <div class="col-sm-6 social">
                            <ul>
                                <li>
                                    <a href="https://github.com/paithiov909/attachmentstyletest" target="_blank" rel="noopener noreferrer"><i class="fa fa-github" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <!-- End footer -->
        </div>

    </div>
</template>

<script>
import projects from "~/components/ProjectsBlock.vue"

export default {
    components: {
        "projects": projects
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
        }
    },
    methods: {
        link (idx) {
            this.$gtag("event", "click", {
                event_category: "link",
                event_label: idx
            });
        }
    },
    head () {
        const structuredData = {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://attachmentstyletest.web.fc2.com/community",
            "name": "Lobiでコミュニケーションとか無理くないですか"
        }
        return {
            title: "Lobiでコミュニケーションとか無理くないですか",
            meta: [
                { hid: "description", name: "description", content: "メンタルヘルスで悩んでいるひと、その支援者向けのコミュニティです。メンヘラやひきこもりなどについて、医療人類学・医療社会学・障害学などの観点から勉強しながら、情報をキュレーションしていきます。" },
                { hid: "og:image", property: "og:image", content: "https://attachmentstyletest.web.fc2.com/images/medicine.jpg" },
                { hid: "og:title", property: "og:title", content: "Lobiでコミュニケーションとか無理くないですか" },
                { hid: "og:description", property: "og:description", content: "メンタルヘルスで悩んでいるひと、その支援者向けのコミュニティです。メンヘラやひきこもりなどについて、医療人類学・医療社会学・障害学などの観点から勉強しながら、情報をキュレーションしていきます。" },
                { hid: "og:url", property: "og:url", content: "https://attachmentstyletest.web.fc2.com/community" },
            ],
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
