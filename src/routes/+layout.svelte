<script lang="ts">
    import SocialLinks from '../lib/components/social_links.svelte';
    import '$lib/css/global.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';

</script>

<Navbar />
<main>
    <slot></slot>
</main>
<Footer />