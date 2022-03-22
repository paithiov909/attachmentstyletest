<template>
    <footer id="footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="pull-left sharer">
                        <vue-goodshare-facebook
                            page_url="https://attachmentstyletest.web.fc2.com/"
                            title_social="Facebook"
                            has_icon
                        ></vue-goodshare-facebook>
                        <vue-goodshare-twitter
                            page_url="https://attachmentstyletest.web.fc2.com/"
                            page_title="愛着スタイル診断テスト"
                            title_social="Twitter"
                            has_icon
                        ></vue-goodshare-twitter>
                        <vue-goodshare-line
                            page_url="https://attachmentstyletest.web.fc2.com/"
                            title_social="LINE"
                            has_icon
                        ></vue-goodshare-line>
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
                        Copyright &copy; 2022 愛着スタイル診断テスト
                    </p>
                </div>
                <div class="col-sm-6 social">
                    <ul>
                        <li>
                            <a href="https://github.com/paithiov909/attachmentstyletest" target="_blank" rel="noopener"><i class="fa fa-github" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue"
import VueGoodshareLine from "vue-goodshare/src/providers/Line.vue";

export default {
  components: {
    VueGoodshareFacebook,
    VueGoodshareTwitter,
    VueGoodshareLine
  }
}
</script>

<style scoped>
.sharer {
  display: inline-block;
  margin-bottom: 1.2em;
}
</style>