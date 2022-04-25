<template>
    <div class="modal-wrap">
        <div class="modal">
            <button @click="closeModal"><i class="fas fa-times"></i></button>
            <i class="fas fa-exclamation-triangle m-warning"></i>
            <h2 class="modal-tit">이 사이트는 스터디용으로 제작되었으며 <br> 리소스는 원저작자에게 있습니다</h2>
            <span class="modal-desc">본 사이트는 Chrome에 최적화되어 있습니다</span>
        </div>
    </div>
</template>

<script>
import { getCurrentInstance } from 'vue';

export default {
    emits: ['close-modal'],
    setup() {
        const {emit} = getCurrentInstance();
        const closeModal = () => {
            emit('close-modal');
        }
        return {
            closeModal
        }
    }
}
</script>

<style>
    .modal-wrap {
        position: fixed;
        left: 0;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 99999;
    }

    .modal {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 500px;
        height: 350px;
        background-color: #fff;
        border-radius: 20px;
    }

    .modal button {
        position: absolute;
        top: 20px;
        left: 20px;
        display: block;
        font-size: 20px;
        border: 0;
        cursor: pointer;
        background-color: #fff;
    }

    .m-warning {
        position: absolute;
        left: 50%;
        top: 80px;
        transform: translateX(-50%);
        font-size: 50px;
        border: 0;
    }

    .modal-tit {
        font-family: 'Noto Sans KR', sans-serif;
        position: absolute;
        left: 50%;
        top: 170px;
        transform: translateX(-50%);
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        white-space: nowrap;
    }

    .modal-desc {
        font-family: 'Noto Sans KR', sans-serif;
        position: absolute;
        left: 50%;
        top: 250px;
        transform: translateX(-50%);
        font-size: 15px;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
    }
</style>