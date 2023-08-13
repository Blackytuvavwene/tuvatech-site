<script>

// nav links
const navLinks = [
    {
        name: 'Home',
        url: '/',
        id: 'home'
    },
    {
        name: 'About',
        url: '/about',
        id: 'about'
    },
    {
        name: 'Services',
        url: '/services',
        id: 'services'
    },
    {
        name: 'Contact',
        url: '/contact',
        id: 'contact'
    },
];
</script>

<header class="w-full h-fit bg-pink-800">
    <nav class="w-full h-fit flex flex-row justify-between items-center">
        <div class="float-left px-10 h-full">
            <a href="/" class="text-3xl font-bold text-blue-600">Tuva<span class="text-2xl text-pink-200">Tech</span></a>
        </div>
        <div class="float-right px-10 h-full">
            <ul class="h-full">
                {#each navLinks as link}
                <li class="inline-block h-full ">
                    <a href={link.url} class="text-white h-full text-xl p-6 bg-black font-bold">{link.name}</a>
                </li>
                {/each}
            </ul>
        </div>
    </nav>
</header>