<script>
	import ServicesCard from './services_card.svelte';
    

    export let myList=[
        {
            img: '/app_dev.svg',
            title:'App Development',
            description:'I build scalable web, mobile, desktop and backend apps that are inuitive, responsive. I have experience in building web apps using Flutter, Svelte, Angular, Node, Express, Dart, HTML, Javascript and more.',
        },
        {
            img:'/web_dev.svg',
            title:'Web Development',
            description:'Have a business and tired of offline business operations, let me help you bring your business online and have your customers access your services through a tap of their fingers.',
        },
        {
            img:'/mobile_dev.svg',
            title:'Mobile Development',
            description:'Nowadays daily things are done on mobile apps, one may pay through an app, book a doctor or purchase online through an app. I create attractive, secure apps.',
        },
        {
            img:'/coding.svg',
            title:'Freelance',
            description:'I am available for freelance work and I am always looking for new opportunities. I am also available for consulting and training. Ohh! Almost forgot, I am also a self taught beginner UI, graphic designer',
        }
    ];
    
</script>

<ul class="flex flex-col items-center justify-center my-10 lg:flex lg:flex-col lg:items-center
           sm:grid sm:grid-cols-2 sm:mx-4 lg:mx-0 md:items-center lg:justify-center
           md:justify-center">
    {#each myList as item}
    <li class=" flex p-4 items-center justify-center lg:p-6">
        <ServicesCard item={item}/>
    </li>
    {/each}
</ul>
