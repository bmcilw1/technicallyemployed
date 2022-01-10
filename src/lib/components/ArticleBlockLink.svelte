<script lang="ts">
  export let url: string;
  export let title: string;
  export let description = '';
</script>

<a href={url} class="p-5 border rounded border-gray-200 hover:border-pink-400">
  <h3 class="text-slate-300">{title} →</h3>
  <p class="text-slate-300">{description}</p>
</a>
