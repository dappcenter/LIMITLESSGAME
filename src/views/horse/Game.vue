<template>
    <layout
        v-bind="$attrs"
        v-on="$listeners"
        :celebrateVisible.sync="celebrateVisible"
        game="horseracing"
    >
        <template v-slot:bg-cover>
            <div class="bg-cover-wrapper" :class="{result: $attrs.state != 'bet'}">
                <div class="bg-cover_item">
                    <div class="bg-cover_result">
                        <video class="horse-video" :src="result.video ? 'https://api1.limitless.vip/download?url=' + result.video : ''" autoplay  playsinline="" webkit-playsinline="" x5-playsinline="" style="height: 100%;"></video>    
                    </div> 
                </div>

                <div class="bg-cover_item">
                    <img src="../../assets/images/main-bg.png" alt="" class="main-bg">
                    <div class="main-ani">
                        <div class="main-ani_item" v-for="i in aniLength" :class="{active: i == activeIndex || i == activeIndex2}" :key="i"></div>
                    </div>
                    <div class="main-mask"></div>
                </div>
            </div>
        </template>

        <template v-slot:bet-cover>
            <div class="bet-cover-wrapper" :class="{result: $attrs.state != 'bet'}">
                <div class="bet-cover_item">
                    
                </div>

                <div class="bet-cover_item">
                    <ul class="horse-list">
                        <li @click="$emit('update:num', horseList[0])" class="horse-item" :class="{active: num == horseList[0]}">
                            <img v-show="num == horseList[0]" src="https://limitless.ink/horse1.gif" alt="" class="item-img">
                            <img v-show="num != horseList[0]" src="@/assets/images/horse/horse1.png" alt="" class="item-img">
                            
                            <div class="item-num">
                                <img src="@/assets/images/horse/num1.png" alt="" class="item-num_img">
                                <i class="item-num_name">Geoffery</i>
                            </div>
                        </li>
                        <li @click="$emit('update:num', horseList[1])" class="horse-item" :class="{active: num == horseList[1]}">
                            <img v-show="num == horseList[1]" src="https://limitless.ink/horse2.gif" alt="" class="item-img">
                            <img v-show="num != horseList[1]" src="@/assets/images/horse/horse2.png" alt="" class="item-img">
                            <div class="item-num">
                                <img src="@/assets/images/horse/num2.png" alt="" class="item-num_img">
                                <i class="item-num_name">Solomum</i>
                            </div>
                        </li>
                        <li @click="$emit('update:num', horseList[2])" class="horse-item" :class="{active: num == horseList[2]}">
                            <img v-show="num == horseList[2]" src="https://limitless.ink/horse3.gif" alt="" class="item-img">
                            <img v-show="num != horseList[2]" src="@/assets/images/horse/horse3.png" alt="" class="item-img">
                            <div class="item-num">
                                <img src="@/assets/images/horse/num3.png" alt="" class="item-num_img">
                                <i class="item-num_name">Tronic</i>
                            </div>
                        </li>
                        <li @click="$emit('update:num', horseList[3])" class="horse-item" :class="{active: num == horseList[3]}">
                            <img v-show="num == horseList[3]" src="https://limitless.ink/horse4.gif" alt="" class="item-img">
                            <img v-show="num != horseList[3]" src="@/assets/images/horse/horse4.png" alt="" class="item-img">
                            <div class="item-num">
                                <img src="@/assets/images/horse/num4.png" alt="" class="item-num_img">
                                <i class="item-num_name">Russel</i>
                            </div>
                        </li>
                        <li @click="$emit('update:num', horseList[4])" class="horse-item" :class="{active: num == horseList[4]}">
                            <img v-show="num == horseList[4]" src="https://limitless.ink/horse5.gif" alt="" class="item-img">
                            <img v-show="num != horseList[4]" src="@/assets/images/horse/horse5.png" alt="" class="item-img">
                            <div class="item-num">
                                <img src="@/assets/images/horse/num5.png" alt="" class="item-num_img">
                                <i class="item-num_name">Autumn</i>
                            </div>
                        </li>
                        <li @click="$emit('update:num', horseList[5])" class="horse-item" :class="{active: num == horseList[5]}">
                            <img v-show="num == horseList[5]" src="https://limitless.ink/horse6.gif" alt="" class="item-img">
                            <img v-show="num != horseList[5]" src="@/assets/images/horse/horse6.png" alt="" class="item-img">
                            <div class="item-num">
                                <img src="@/assets/images/horse/num6.png" alt="" class="item-num_img">
                                <i class="item-num_name">Jasmine</i>
                            </div>
                        </li>
                    </ul>

                    <div class="result-cell">
                        <div class="result-cell_item">{{$t('h')}} : {{num}}%</div>
                        <div class="result-cell_item">{{$t('g')}} : {{lossPer}}x</div>
                        <div class="result-cell_item ">{{$t('i')}} : {{bonus}}{{$attrs.symbol}}</div>
                        <div class="result-cell_line"></div>
                        <div>{{$t('k')}}: <countTo :startVal='jackpotStart' :decimals="decimal" :endVal='jackpotEnd' :duration='1500'></countTo> {{$attrs.symbol}}</div>
                    </div>
                </div>
            </div>
        </template>
    </layout>
</template>

<script>
import Layout from '../Layout.vue'
import { sliceNumber } from "@/js/utils"
import CountTo from "vue-count-to"
import NP from 'number-precision'
import { calcLossPer } from '@/js/game'

export default {
    data () {
        return {
            aniLength: 29,
            activeIndex: -1,
            activeIndex2: -1,
            celebrateVisible: false
        }
    },
    inheritAttrs: false,
    props: {
        num: {
            default: 95
        },
        result: Object,
        jackpotStart: {
            default: 0
        },
        jackpotEnd: {
            default: 0
        },
        decimal: { 
            default: 4
        },
        gas: {
            default: ""
        },
        min: {
            default:1
        },
        max: {
            default: 97
        },
        horseList: Array
    },
    components: {
        Layout,
        CountTo
    },

    created () {

    },

    mounted () {
         this.$el.querySelector('.horse-video').addEventListener('ended', () => {
            if (this.result.wins > 0) {
                this.$success(this.$t('aq',{num: this.result.wins, symbol: this.$attrs.symbol}), 3000)
                this.celebrateVisible = true
            } else {
                this.$error(this.$t('ar'))
            }

            this.$emit('ended')
        }, false)
    },

    computed: {
        lossPer() {
            return calcLossPer({
                min: this.min,
                max: this.max,
                bet: this.num
            })
        },
        bonus() {
            const res = NP.times(this.lossPer, this.$attrs.amount)
            return sliceNumber(res);
        },
    }
}
</script>

<style lang="scss">
    .en{
        .result-cell{
            font-size: 12px;
        }

        .result-cell_item{
            &:not(:first-child){
                margin-left: 20px;
            }
        }
    }

    .bg-cover-wrapper{
        transform: translate(0, -50%);
        transition: all .3s;
        &.result{
            transform: translate(0, 0)
        }
    }

    .bg-cover_item{
        height: 382px;
        position: relative;
    }

    .bg-cover_result{
        background: #0e002d;
        width: 1000px;
        height: 100%;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0)
    }

    .bet-cover-wrapper{
        transform: translate(0, -50%);
        transition: all .3s;
        &.result{
            transform: translate(0, 0)
        }
    }

    .bet-cover_item{
        height: 382px;
        position: relative;
        &:before{
            content: '';
            display: table
        }

        .result-num{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%)
        }
    }

    .horse-list{
        margin-left: -20px;
        margin-top: 30px;
    }

    .horse-item{
        display: inline-block;
        width: 167px;
        height: 136px;
        margin-left: 20px ;
        margin-bottom: 20px ;
        cursor: pointer;
        background: url(../../assets/images/horse/bg.png) no-repeat;
        background-size: 100% 100%;
        overflow: hidden;

        &.active{
            background: url(../../assets/images/horse/bg_active.png) no-repeat;
            background-size: 100% 100%;

            .item-img{
                width: 129px;
                margin-top: 4px;
            }
        }
    }

    .item-img{
        max-width: 100%;
        margin-top: 10px;
    }

    .item-num{
        margin-top: 8px;
    }

    .item-num_img{
        vertical-align: middle
    }

    .item-num_name{
        vertical-align: middle;
        font-style:italic;
        font-size: 14px;
        color: #fff;
        margin-left: 10px;
    }

    .result-cell{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #fff;
        font-weight: 400;
    }

    .result-cell_item{
        position: relative;
        &:not(:first-child){
            margin-left: 30px;
        }
    }


    .result-cell_line{
        width: 1px;
        height: 20px;
        background: rgba(255, 255, 255, .3);
        margin: 0 20px;
    }

    .main-ani {
        position: absolute;
        z-index: 2;
        width: 960px;
        top: 0px;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .main-bg {
        position: absolute;
        z-index: 1;
        width: 963px;
        left: 50%;
        margin-left: -483px;
    }

    .main-ani_item {
        height: 2px;
        background: rgba(97, 55, 218, 1);
        margin-bottom: 10px;

        &.active {
            box-shadow: 0 0 3px 2px rgba(255, 2552, 255, 0.6);
        }
    }

</style>

