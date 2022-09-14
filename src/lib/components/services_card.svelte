<script>
	import { onMount } from 'svelte';
    export let item;
   

    //handle image loading
    let loaded=false;
    let failed=false;
    let loading=false;

    onMount(() => {
       const img=new Image();

       img.src=item.img;

         img.onload=()=>{
              loaded=true;
              loading=false;
         };

        img.onerror=()=>{
              failed=true;
              loading=false;
         };
    });
</script>

<div class="border-2 items-center justify-center max-w-md md:max-w-2xl border-slate-700
            lg:flex rounded-xl lg:w-full lg:min-w-full lg:h-4/5 lg:border-none">
    <div class="flex justify-center items-center h-60 w-full mb-6 bg-red-200 rounded-t-xl 
                lg:mb-0 lg:rounded-none ">
        <div class="flex items-center justify-center h-50 w-52 lg:h-60">
            <img src={item.img} alt={item.title} class="p-4 w-full h-full">
        </div>
        
    </div>
    
    <div class="lg:flex lg:items-center lg:justify-center lg:flex-col">
        <h3 class="text-start text-xl font-bold mx-4 mb-2 lg:text-right lg:text-2xl">
            {item.title}</h3>
        <div class="h-full w-full">
            <p class="text-start text-sm pb-4 mx-4 lg:text-lg lg:text-center lg:my-10">{item.description}</p>
        </div>
    </div>
  
   

    
</div>