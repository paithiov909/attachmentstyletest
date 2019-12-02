<template>
    <div id="header">
        <div id="mobile-menu-open" class="shadow-large" @click="mobileMenuOpen">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <!-- End #mobile-menu-toggle -->
        <header>
            <div id="mobile-menu-close" @click="mobileMenuClose">
                <span>Close</span> <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <ul id="menu" class="shadow">
                <li><a href="#top" @click.prevent="scrollEffect('#top')">TOPへもどる</a></li>
                <li><a href="#education" @click.prevent="scrollEffect('#education')">診断結果を見る</a></li>
                <li><a href="#projects" @click.prevent="scrollEffect('#projects')">関連書籍を見る</a></li>
                <li><a href="#footer" @click.prevent="scrollEffect('#footer')">この診断をシェアする</a></li>
            </ul>
        </header>
        <!-- End header -->
    </div>
</template>

<script>
export default {
    methods: {
        scrollEffect (href) {

            const heading = href;
            const scrollDistance = $(heading).offset().top;

            $('html, body').animate({
                scrollTop: scrollDistance + 'px'
            }, Math.abs(window.pageYOffset - $(heading).offset().top) / 10);

            // Hide the menu once clicked if mobile
            if ($('header').hasClass('active')) {
                $('header, body').removeClass('active');
            }
        },
        mobileMenuOpen () {
            // Open mobile menu
            $('header, body').addClass('active');
        },
        mobileMenuClose () {
            // Close mobile menu
            $('header, body').removeClass('active');
        }
    }
}
</script>
