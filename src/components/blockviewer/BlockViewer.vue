<template>
    <div class="block-section">
        <div class="block-header">
            <span class="block-title">
                <span>{{ header }}</span>
                <span class="badge-free" v-if="free">Free</span>
                <span class="badge-new" v-if="recent">New</span>
            </span>
            <div class="block-actions">
                <a
                    tabindex="0"
                    :class="{ 'block-action-active': blockView === BlockView.PREVIEW }"
                    @click="activateView($event, BlockView.PREVIEW)"
                    ><span>Preview</span></a
                >
                <a
                    :tabindex="codeDisabled ? null : '0'"
                    :class="{
                        'block-action-active': blockView === BlockView.CODE,
                        'block-action-disabled': codeDisabled,
                    }"
                    @click="activateView($event, BlockView.CODE)"
                >
                    <i class="pi pi-lock" v-if="codeDisabled"></i>
                    <span>Code</span>
                </a>
                <a
                    :tabindex="codeDisabled ? null : '0'"
                    class="block-action-copy"
                    :class="{ 'block-action-disabled': codeDisabled }"
                    @click="copyCode($event)"
                    v-tooltip.focus.bottom="{ value: 'Copied to clipboard', disabled: codeDisabled }"
                    ><i class="pi pi-copy"></i
                ></a>
            </div>
        </div>
        <div class="block-content">
            <div :class="containerClass" :style="previewStyle" v-if="blockView === BlockView.PREVIEW">
                <slot></slot>
            </div>
            <div v-if="blockView === BlockView.CODE && !codeDisabled">
                <pre v-code><code>{{code}}

</code></pre>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        header: {
            type: String,
            default: null,
        },
        code: null,
        recent: {
            type: Boolean,
            default: false,
        },
        free: {
            type: Boolean,
            default: false,
        },
        containerClass: null,
        previewStyle: null,
    },
    data() {
        return {
            BlockView: {
                PREVIEW: 0,
                CODE: 1,
            },
            blockView: 0,
        };
    },
    methods: {
        activateView(event, blockView) {
            if (!this.codeDisabled) {
                this.blockView = blockView;
            }

            event.preventDefault();
        },
        async copyCode(event) {
            if (!this.codeDisabled) {
                await navigator.clipboard.writeText(this.code);
            }

            event.preventDefault();
        },
    },
    computed: {
        codeDisabled() {
            return process.env.NODE_ENV === 'production' ? !this.free : false;
        },
    },
};
</script>
