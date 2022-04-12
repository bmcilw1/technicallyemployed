<script lang="ts">
  export let url: string;
  export let title: string;
  export let description = '';
  export let accentDescription = '';
</script>

<a
  href={url}
  class="p-5 border rounded border-gray-200 hover:border-pink-400"
  data-testid={`link-${accentDescription.toLowerCase()}`}
>
  <h3 class="text-slate-300">{title} →</h3>
  <p class="text-slate-300">
    {description}<span class="text-indigo-500 font-bold">{accentDescription}</span>
  </p>
</a>
