<template>
    <div id="projects" class="background-alt">
        <h2 class="heading">関連書籍</h2>
        <div class="container">
            <div class="row" v-for="(value, key, index) in projects" :key="value.link" v-once>
                <div class="project shadow-large">
                    <div class="project-image">
                        <img :src="value.img" width="100" height="160" />
                    </div>
                    <!-- End .project-image -->
                    <div class="project-info">
                        <h3>{{ value.title }}</h3>
                        <p>{{ value.info }}</p>
                        <a :href="value.link" target="_blank" rel="noopener" @click="amzlink(key, index)">Amazonで詳しく見る</a>
                    </div>
                    <!-- End .project-info -->
                </div>
            </div>
        </div>
    </div>
    <!-- End #projects -->
</template>

<script>
export default {
    props: ["projects"],
    methods: {
        amzlink (num, id) {
            this.$gtag("event", "click", {
                event_category: "amazon",
                event_label: num
            })
        }
    }
}
</script>