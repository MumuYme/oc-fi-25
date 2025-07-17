<template>
  <div class="p-4">
    <p class="mt-4">
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </p>
  </div>
  <div class=""><!-- fixed flex items-center justify-center inset-0 z-20 -->
      <button
        @click="openModal"
        class="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Open dialog
      </button>
    </div>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/30 backdrop-blur-md" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white/50 backdrop-blur-md p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                Deactivate account
              </DialogTitle>
              <DialogDescription class="sr-only">
                This will permanently deactivate your account
              </DialogDescription>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.
                </p>
              </div>

              <div class="mt-6 flex justify-end space-x-4">
                <button
                  type="button"
                  class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  @click="closeModal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  class="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-500"
                  @click="closeModal"
                >
                  Deactivate
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from '@headlessui/vue'

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>