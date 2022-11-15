<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProduct } from './Product.vue';

const route = useRoute();

// Fetched only once on mount
const productOnlyOnceOnMount = useProduct(parseInt(route.params.productId as string));

// In sync whenever the param changes
const productWheneverChange = useProduct(
  computed(() => {
    if (Array.isArray(route.params.productId)) {
      return 0;
    }

    return parseInt(route.params.productId);
  })
);
</script>

<style scoped>

</style>
