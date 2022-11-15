import { Ref } from 'vue';

// Make reactivity optional
/**
 * import { isRef, ref, unref } from 'vue';

 * // ✅ Valid
 * const raw: MaybeRef<number> = 1;
 * // ✅ Valid
 * const reffed: MaybeRef<number> = ref(1);
 * 
 * unref(raw); //  1
 * unref(reffed); //  1
 * 
 * isRef(raw); // false
 * isRef(reffed); // true
 */
export type MaybeRef<T> = Ref<T> | T;