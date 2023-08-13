<script lang="ts">

	import { page } from '$app/stores';
	import { socialLinks } from '$lib/utils/links/social.links.js';
    
    // nav links
    let navLinks = [
        {
            name: 'Home',
            path: '/',
            id: 1
        },
        {
            name: 'About',
            path: '/about',
            id: 2
        },
        {
            name: 'Services',
            path: '/services',
            id: 4
        },
        {
            name: 'Projects',
            path: '/projects',
            id: 5
        },
        {
            name: 'Contact',
            path: '/contact',
            id: 6
        }
    ]

    
</script>

<header class="w-full flex-auto flex">
    <nav class="navbar box-border px-2 py-0 md:justify-between bg-base-200">
        <div class="navbar-start lg:hidden">
            <div class="dropdown">
                <button tabindex={0} class="btn btn-ghost">
                    Menu
                </button>
                <ul class="menu menu-compact dropdown-content mt-4 bg-primary w-28">
                    {#each navLinks as nav (nav.id)}
                        <li class="w-full box-border border h-full  {$page.url.pathname === nav.path ? 'text-primary' : ''}">
                            <a href={nav.path}
                                class="w-full justify-between items-center flex flex-col h-full"
                            >
                                <p class=" text-primary-content">
                                    {nav.name}
                                </p>
                                <!-- <div class="{$page.url.pathname === nav.path ? 'bg-primary transition-all h-1 w-8' : ''}"></div> -->
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
        <div class="btn btn-ghost w-1/2 lg:w-0 ">
            Logo
        </div>
        <button class="lg:hidden btn btn-primary">
            Contact
        </button>
        <ul class="hidden lg:flex h-16 justify-evenly w-[50%]">
            {#each navLinks as nav (nav.id)}
                <li class="w-full box-border h-full  {$page.url.pathname === nav.path ? 'text-primary' : ''}">
                    <a href={nav.path}
                        class="w-full justify-between items-center flex flex-col h-full"
                    >
                    <span></span>
                        <p class="">
                            {nav.name}
                        </p>
                        <div class="{$page.url.pathname === nav.path ? 'bg-primary transition-all h-1 w-8' : ''}"></div>
                    </a>
                </li>
            {/each}
        </ul>
        <ul class="hidden lg:flex h-16 justify-evenly">
            {#each socialLinks as socialLink (socialLink.props.id)}
                <li class="w-full box-border h-full">
                    <a class="w-full flex flex-col items-center justify-center h-full" href={socialLink.props.path}>
                        <img class=" w-10 h-10" src={socialLink.icon} alt={socialLink.props.name}>
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</header>