<script>
import SocialLinks from './components/social_links.svelte';
import '../routes/components/css/global.css';

</script>
<svelte:head>
    <title>Tuva Tech site</title>
</svelte:head>
<header>
    <nav></nav>
</header>
<main class="my-10">
    <slot></slot>
</main>
<footer class="w-screen bg-slate-400 h-full flex flex-col items-center justify-center">
    <div>
        <div>
            <SocialLinks />
        </div>
        <p class="text-white text-center">
            © 2020 Tuva Tech
        </p>
    </div>
    
</footer>