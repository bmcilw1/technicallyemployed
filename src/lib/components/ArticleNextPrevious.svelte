<script lang="ts">
  export let previous = null;
  export let next = null;
</script>

<div class="container w-full flex flex-wrap place-items-stretch">
  {#if previous}
    <a
      href={previous.url}
      class="m-1 p-5 mx-auto sm:px-10 sm:ml-0 border rounded border-gray-200 hover:border-purple-400 text-slate-300"
      data-testid="previous-article"
    >
      ← Previous: {previous.name}
    </a>
  {/if}
  {#if next}
    <a
      href={next.url}
      class="m-1 p-5 mx-auto sm:px-10 sm:mr-0 sm:ml-auto border rounded border-gray-200 hover:border-purple-400 text-slate-300"
      data-testid="next-article"
    >
      Next: {next.name} →
    </a>
  {/if}
</div>
