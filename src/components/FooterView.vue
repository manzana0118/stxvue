<template>
    <footer class="footer">
            <div class="container">
                <div class="f-left">

                </div>
                <div class="f-right">
                    <address>
                        부산사무소 : (48059) 부산 해운대구 센텀동로 49(우동) 아이피파빌리온 8층 · TEL : 051-791-3000 · FAX :
                        051-791-3099<br>
                        창원사무소 : (51494) 경상남도 창원시 성산구 중앙대로 84번길 3, 9층904호 · TEL : 055-263-2060 · FAX :
                        055-263-2087
                    </address>
                    <p class="copy">Copyright &copy; 2018 STX CONSTRUCTION. LTD. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
    /* 하단 */
    .footer {
        position: relative;
        display: block;
        width: 100%;
        height: 169px;

        background-color: #4e4e4e;
    }

    .footer .container {
        position: relative;
        display: block;

        padding: 55px 0px 50px 0px;
    }

    .f-left {
        position: relative;
        display: block;
        width: 255px;
        height: 60px;

        float: left;

        background: url('@/assets/images/logo_footer.png') no-repeat;
    }

    .f-right {
        position: relative;
        display: block;
        width: calc(100% - 255px);
        height: 60px;

        float: left;
    }

    .f-right > address {
        color: #c3c3c3;
        font-size: 13px;
        line-height: 1.8;
    }


    .f-right > p {
        color: #c3c3c3;
        font-size: 13px;
        line-height: 1.8;
    }
</style>