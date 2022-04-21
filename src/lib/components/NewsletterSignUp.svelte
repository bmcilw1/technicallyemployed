<script lang="ts">
  let email: string = '';

  function isValidEmail(s: string) {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    return emailRegex.test(s);
  }
</script>

<form
  class="w-full place-content-center object-center max-w-sm py-6 mt-5"
  name="newsletter"
  method="POST"
  action="/success"
  data-netlify="true"
>
  <div class="flex items-center border-b border-white-500 py-2">
    <input
      class="appearance-none bg-transparent border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
      type="email"
      name="email"
      bind:value={email}
      placeholder="Your Email"
      aria-label="Your Email"
    />
    <button
      class="flex-shrink-0 bg-pink-400 border border-pink-400 hover:bg-transparent hover:text-pink-400 text-white py-1 px-2 rounded disabled:opacity-50"
      type="submit"
      disabled={!isValidEmail(email)}
    >
      Join Newsletter
    </button>
  </div>
</form>
