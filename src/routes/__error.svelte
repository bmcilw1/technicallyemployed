<script lang="ts" context="module">
  export const load = ({ error, status }) => {
    return {
      props: {
        errorMessage: `${status}: ${error.message}`,
      },
    };
  };
</script>

<script lang="ts">
  export let errorMessage: any;
</script>

<h1>Error</h1>
<h4>{errorMessage}</h4>

<!-- Suppress slot warning https://github.com/sveltejs/kit/issues/981 -->
{#if false}<slot />{/if}
