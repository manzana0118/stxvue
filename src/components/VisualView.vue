<template>
    <section class="visual">
            <div class="container">
                <h2 class="visual-title">
                    BEST OF THE WORLD <br>
                    STX Engineering & Construction
                </h2>
                <span class="visual-txt">
                    세계최고를 향해 STX건설이 힘차게 질주합니다!
                </span>

                <button type="button" class="visual-bt">
                    하단섹션보기
                </button>
            </div>
        </section>
</template>

<script>
import { onMounted } from 'vue'
import $ from 'jquery'

export default {
    setup(){
        onMounted( () => {
            // 내용 더보기 버튼 기능
            let visual_bt = $('.visual-bt');
            let part_pos = $('.part').offset().top;            
            visual_bt.click(function(){
                $('html').animate({
                    scrollTop: part_pos
                });
            });
        });

        return{

        }
    }
}
</script>

<style scoped>
    /* 비주얼 */
    .visual {
        position: relative;
        display: block;
        height: 910px;

        background: url('@/assets/images/img_visual01.png') no-repeat center;
        background-size: cover;
        background-attachment: fixed;
    }

    .visual .container {
        padding-top: 180px;
        height: 100%;
    }

    .visual-title {
        position: relative;
        display: block;

        font-size: 70px;
        line-height: 1.1;
        font-weight: 500;
        color: #fff;

        padding-top: 64px;
        padding-bottom: 42px;
    }

    .visual-title::before {
        content: '';
        position: absolute;
        left: 4px;
        top: 0;

        display: block;
        width: 60px;
        height: 5px;

        background-color: #ed1c24;
    }

    .visual-txt {
        position: relative;
        display: block;

        font-size: 21px;
        color: #fff;
    }

    .visual-bt {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 40px;

        display: block;
        width: 33px;
        height: 33px;
        background: url('@/assets/images/bg_common.png') no-repeat;
        background-position: -122px 0;

        border: 0;
        font-size: 0;

        cursor: pointer;
    }
</style>