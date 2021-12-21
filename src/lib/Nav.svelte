<script lang="ts">
  import { page } from '$app/stores';

  let expandMenu = false;
  const toggleExpandMenu = () => (expandMenu = !expandMenu);

  // List of navigation items
  const navItems = [
    { label: 'About', href: 'about' },
    { label: 'Blog', href: 'blog' },
    { label: 'Coins', href: 'coins' },
  ];
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          on:click={() => {
            toggleExpandMenu();
          }}
        >
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg
            class="{expandMenu ? 'hidden' : 'block'} h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg
            class="{expandMenu ? 'block' : 'hidden'} h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <a href="/" class="text-indigo-500 font-bold text-lg">Technically Employed</a>
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a
              href="/"
              class="{$page.path === '/'
                ? 'bg-gray-900'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'} text-white px-3 py-2 rounded-md text-sm font-medium"
              aria-current="page">Home</a
            >
            <a
              href="about"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >About</a
            >
            <a
              href="blog"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >Blog</a
            >
            <a
              href="coins"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >Coins</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class:hidden={!expandMenu} class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a
        href="/"
        class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
        aria-current="page">Home</a
      >

      <a
        href="about"
        class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >About</a
      >

      <a
        href="blog"
        class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >Blog</a
      >

      <a
        href="coins"
        class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >Coins</a
      >
    </div>
  </div>
</nav>
