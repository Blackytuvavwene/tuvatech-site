<script lang="ts">
    import '../app.css';
    import SocialLinks from '$lib/components/social_links.svelte';
	import Header from '$lib/components/header/Header.svelte';

</script>
<svelte:head>
    <title>Tuva Tech site</title>
</svelte:head>


<Header/>
<main >
    <slot></slot>
</main>
<footer class="w-full bg-slate-400 h-full flex flex-col items-center justify-center">
    <div>
        <div>
            <SocialLinks />
        </div>
        <p class="text-white text-center">
            © 2020 Tuva Tech
        </p>
    </div>
    
</footer>