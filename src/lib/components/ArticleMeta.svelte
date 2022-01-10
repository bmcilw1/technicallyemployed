<script lang="ts">
  export let author: string;
  export let date: string;

  const formattedDate = new Date(date).toDateString();
</script>

<p>
  <span class="font-bold">{author}</span>
  <span>{formattedDate}</span>
</p>
