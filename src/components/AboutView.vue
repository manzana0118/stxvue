<template>
    <section class="about">
            <div class="container">
                <div class="about-top">
                    <h2>
                        ABOUT US
                    </h2>
                    <p>
                        <b>
                            고객의 믿음과 신뢰로 성장하는 <br>
                            STX건설이 되겠습니다.
                        </b>
                        <span>
                            STX건설 이름으로 세계 어디에서, 세계 누구와 겨뤄도<br>
                            자신 있는 세계 최고를 향해 웅비합니다. STX건설이라는 날개를<br>
                            하나 더 피고 세계로, 미래로 나아가는 STX건설의 힘찬 비상을 주목해 <br>
                            주십시오.
                        </span>
                    </p>
                </div>
                <div class="about-bottom">
                    <a href="#">
                        <h3>경영이념</h3>
                    </a>
                    <a href="#">
                        <h3>공유가치</h3>
                    </a>
                    <a href="#">
                        <h3>중장기전략</h3>
                    </a>
                </div>
            </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 소개 */
    .about {
        position: relative;
        display: block;
    }

    .about .container {
        padding: 100px 0;
    }

    .about-top {
        position: relative;
        display: block;
        height: 370px;

        background: url('@/assets/images/img_about.png') no-repeat;
        background-position: right center;
    }

    .about-top h2 {
        position: relative;
        display: block;

        font-size: 44px;
        color: #111;
        font-weight: 600;
        text-transform: uppercase;

        padding-top: 40px;
        padding-bottom: 60px;
    }

    .about-top p {
        position: relative;
        display: block;

        padding-left: 100px;
    }

    .about-top p::before {
        content: '';

        position: absolute;
        left: 0;
        top: 10px;

        display: block;
        width: 35px;
        height: 5px;

        background-color: #ec1c24;
    }

    .about-top b {
        position: relative;
        display: block;
        
        font-size: 21px;
        font-weight: 500;
        color: #111;

        padding-bottom: 30px;
    }

    .about-top span {
        position: relative;
        display: block;

        font-size: 15px;
    }

    .about-bottom {
        position: relative;
        display: block;
        margin-top: 75px;

        text-align: center;

        font-size: 0px;
        white-space: nowrap;
    }

    .about-bottom a {
        position: relative;
        display: inline-block;
        width: 100px;
        height: 108px;

        background: url('@/assets/images/bg_icon.png') no-repeat;
        background-position: center;
    }

    .about-bottom a:nth-child(1) {
        background-position: 0px 0px;
    }

    .about-bottom a:nth-child(2) {
        background-position: -118px 0px;

        margin: 0 180px;
    }

    .about-bottom a:nth-child(3) {
        background-position: -233px 0px;
    }

    .about-bottom h3 {
        position: relative; 
        display: block;
        
        font-size: 22px;
        color: #111;
        font-weight: 500;

        margin-top: 130px;
    }

</style>