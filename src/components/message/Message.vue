<template>
    <transition name="message">
        <div v-if="visible" class="message-comp" :class="[type]">
            <svg v-if="type == 'success' " class="icon" aria-hidden="true">
                <use xlink:href="#icon-success-circle"></use>
            </svg>
            <svg v-if="type == 'error' " class="icon" aria-hidden="true">
                <use xlink:href="#icon-shibai-yin"></use>
            </svg>
            <svg v-if="type == 'warning' "  class="icon" aria-hidden="true">
                <use xlink:href="#icon-jinggao"></use>
            </svg>
            <span class="comp-text">{{text}}</span>
        </div>
    </transition>
</template>

<script>
export default {
    data () {
        return {
            visible: false
        }
    },
    props: {
        text: {
            default: '请求失败'
        },
        
        duration: {
            default: 2500
        },

        type: {
            default: 'error'
        }
    },

    mounted () {
        this.$nextTick(() => {
            this.visible = true
        })
        
        if (this.duration ){
            setTimeout(() => {
                this.visible = false
            }, this.duration)
        }
        
    }
}
</script>

<style lang="scss" scoped>
    .message-comp{
        position: fixed;
        z-index: 10001;
        left: 50%;
        top: 20%;
        transform: translate(-50%,0);
        border-radius: 4px;
        background: #fff;
        font-size: 16px;
        height: 48px;
        line-height: 48px;
        min-width: 140px;
        text-align: center;
        padding: 0 30px;

        &.success {
            color: rgba(11, 234, 106, 0.8)
        }

        &.error{
            color: rgba(234, 11, 11, 0.8)
        }

        &.warning{
            color: #ffad39
        }

        .comp-text{
            vertical-align: middle
        }
    }

    .icon{
        font-size: 20px;
        margin-right: 10px;
        vertical-align: middle
    }

    .message-enter-active, .message-leave-active {
        transition: all .5s;
    }

    .message-enter, .message-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translate(-50%, -20px)
    }
</style>

