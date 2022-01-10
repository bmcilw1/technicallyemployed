<script lang="ts">
  export let author: string;
  export let date: string;

  const formattedDate = new Date(date).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
</script>

<p>
  <span class="font-bold">{author}</span>
  <span> • <time>{formattedDate}</time></span>
</p>
