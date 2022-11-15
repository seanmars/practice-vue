<script lang="ts">
import { unref, ref, isRef, onMounted, watch } from 'vue';
import { MaybeRef } from '../types'

async function fetchProduct(id: number) {
  // returns products from API
  return fetch(`/api/products/${id}`).then((res) => res.json());
}

export function useProduct(id: MaybeRef<number>) {
  const product = ref(null);

  onMounted(async () => {
    product.value = await fetchProduct(unref(id));
  });

  // If is ref define the watch
  if (isRef(id)) {
    watch(id, async (newId) => {
      product.value = await fetchProduct(newId);
    });
  }

  return product;
}
</script>