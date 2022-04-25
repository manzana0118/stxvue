<template>
    <section class="part">
            <div class="container">
                <div class="part-top">
                    <h2 class="part-title">
                        STX Engineering &amp; Construction Business
                    </h2>
                    <p class="part-txt">
                        STX건설은 건문 역량 강화를 통해 건축, 주택, 토목, 플랜트 사업 영역에서 <br>
                        탁월한 성과를 인정받은 기업으로 자연과 기술의 공간에 인류의 가치를 추구합니다.
                    </p>
                </div>
                <div class="part-bottom">
                    <ul class="part-list">
                        <li>
                            <a href="#">
                                <span class="part-list-img">
                                </span>
                                <span class="part-list-txt">
                                    건축사업
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="part-list-img">
                                </span>
                                <span class="part-list-txt">
                                    주택사업
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="part-list-img">
                                </span>
                                <span class="part-list-txt">
                                    토목사업
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="part-list-img">
                                </span>
                                <span class="part-list-txt">
                                    플랜트/공작기계사업
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="part-list-img">
                                </span>
                                <span class="part-list-txt">
                                    해외사업
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    /* 비즈니스 */
    .part {
        position: relative;
        display: block;
    }

    .part .container {
        padding-top: 110px;
        padding-bottom: 130px;
    }

    .part-top {
        position: relative;
        display: block;
    }

    .part-title {
        position: relative;
        display: block;

        color: #111;
        font-size: 44px;
        font-weight: 600;
        text-align: center;

        padding-bottom: 25px;
    }

    .part-title::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        display: block;
        width: 37px;
        height: 5px;

        background-color: #ed1c24;
    }

    .part-txt {
        position: relative;
        display: block;
        text-align: center;

        padding-top: 30px;
    }

    .part-bottom {
        position: relative;
        display: block;

        padding-top: 70px;
    }

    .part-list {
        position: relative;
        display: block;
        width: 100%;

        overflow: hidden;
    }

    .part-list li {
        position: relative;
        /* left: 0;
        top: 0; */
        display: block;
        width: 20%;
        height: 420px;

        float: left;
        cursor: default;

        background: url('@/assets/images/img_business.png') no-repeat;
    }

    .part-list li:nth-child(1) {
        background-position: 0px 0px;
    }

    .part-list li:nth-child(2) {
        background-position: -240px 0px;
    }

    .part-list li:nth-child(3) {
        background-position: -480px 0px;
    }

    .part-list li:nth-child(4) {
        background-position: -720px 0px;
    }

    .part-list li:nth-child(5) {
        background-position: -960px 0px;
    }

    .part-list li a {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }

    .part-list-img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, 0%);

        display: block;
        width: 130px;
        height: 111px;
        background: url('@/assets/images/bg_common.png') no-repeat;

        font-size: 0;
    }

    .part-list li:nth-child(1) a .part-list-img {
        background-position: -164px 0px;
    }

    .part-list li:nth-child(2) a .part-list-img {
        background-position: -298px 0px;
    }

    .part-list li:nth-child(3) a .part-list-img {
        background-position: 0px -120px;
    }

    .part-list li:nth-child(4) a .part-list-img {
        background-position: -140px -122px;
    }

    .part-list li:nth-child(5) a .part-list-img {
        background-position: -268px -119px;
    }

    .part-list-txt {
        position: relative;
        display: block;
        text-align: center;
        color: #fff;

        font-size: 24px;

        padding-top: 98px;
    }

    /* 아이콘 애니메이션 시작 */
    .part-list-img {
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.3s;
    }

    .part-list li a {
        background-color: rgba(243, 127, 37, 0.0);
        transition: background-color 0.3s;
    }

    .part-list li a:hover {
        background-color: rgba(243, 127, 37, 1.0);
    }

    .part-list li a:hover .part-list-img {
        visibility: visible;
        opacity: 1.0;
    }

/* 아이콘 애니메이션 끝 */

</style>