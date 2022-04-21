<script>
  import NewsletterSignUp from '$lib/components/NewsletterSignUp.svelte';
</script>

<section id="home" class="container mx-auto h-screen flex flex-col justify-center items-center">
  <h1>
    <strong
      class="bg-clip-text text-transparent bg-gradient-to-r w-full block from-blue-500 to-purple-500"
    >
      Technically Employed
    </strong>
  </h1>

  <p class="px-2 text-center">
    My thoughts on <span class="text-blue-300">tech</span> and
    <span class="text-pink-300">markets</span>
    <span class="py-1"
      >with a special focus on
      <span class="text-purple-400 font-bold">crypto</span></span
    >
  </p>

  <div class="p-2">
    <NewsletterSignUp />
  </div>
</section>
