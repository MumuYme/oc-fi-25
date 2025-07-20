<template>
  <button :data-modal-target="termsModalId" :data-modal-toggle="termsModalId" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    利用規約を開く
  </button>

  <ReusableModal
    :modal-id="termsModalId"
    title="Terms of Service"
    @accept="handleAccept"
    @decline="handleDecline"
  >
    <template #body>
      <p class="text-base leading-relaxed text-white dark:text-gray-400">
        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
      </p>
      <p class="text-base leading-relaxed text-white dark:text-gray-400">
        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
      </p>
    </template>
    
    </ReusableModal>
</template>

<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import ReusableModal from './ReusableModal.vue'; // 作成したモーダルコンポーネントをインポート

// モーダルにユニークなIDを割り当てる
const termsModalId = 'terms-of-service-modal';

// モーダルからのイベントを処理するメソッド
const handleAccept = () => {
  console.log('Accepted! ✅');
  // ここに承諾時の処理を書く
};

const handleDecline = () => {
  console.log('Declined. ❌');
  // ここに拒否時の処理を書く
};

// Flowbiteの初期化は親コンポーネントで行う
onMounted(() => {
  initFlowbite();
});
</script>