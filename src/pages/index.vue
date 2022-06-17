<script setup lang="ts">
import { onBeforeMount } from 'vue'
const router = useRouter()
onBeforeMount(() => {
  router.replace('/users')
})
</script>
