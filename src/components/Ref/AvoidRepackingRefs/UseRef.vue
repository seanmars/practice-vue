<script lang="ts">
import { reactive, watch, toRef, toRefs, computed } from 'vue';

const user = reactive({
  id: 1,
});

// ✅ Works!
watch(user, () => {
  // ...
});

// ❌ Doesn't work
watch(user.id, () => {
  // ...
});

// ❓ How to watch the property of reactive object

// converts all entries to refs
const userRef = toRefs(user);
watch(userRef.id, () => {
  // ...
});

// You can also destruct it
const { id } = toRefs(user);
watch(id, () => {
  // ...
});

// convert a single entry to reactive version of it
const idRef = toRef(user, 'id');
watch(idRef, () => {
  // ...
});

// just extract the value in a computed prop
const idComp = computed(() => user.id);
watch(idComp, () => {
  // ...
});

</script>