<script>
export let day;
export let hour;
export let minute;
export let second;
export let diff;
// calculated time left countdown
const timeLeft = () => {
    const now = new Date().getTime();
    const eventDate = new Date("September 21, 2022 21:00:00").getTime();
    diff = eventDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    // if(diff<=0){
    //     diff=eventDate-now;
    // }
    return { days, hours, minutes, seconds };
}


setInterval(() => {
    const time = timeLeft();
    day= time.days;
    hour = time.hours;
    minute = time.minutes;
    second = time.seconds;
}, 1000);

</script>


<div class="items-center justify-center mt-6">
    <ul class="flex flex-row uppercase items-center justify-center">
        {#if diff >0}
        <div class="border-2 border-orange-700 rounded-lg mx-2 w-20 h-20 items-center justify-center"> 
            <li class="flex flex-col items-center my-3">
            {#if day ===1}
                <span class="font-bold text-center ">Day</span>
                {:else}
                <span class="font-bold text-center">Days</span>
                {/if}
                <span class="text-center">{day}</span>
            </li>
        </div>
        <div class="border-2 border-orange-700 rounded-lg mx-2 w-20 h-20 items-center justify-center">
            <li class="flex flex-col items-center my-3">
                {#if hour ===1}
                <span class="font-bold">Hr</span>
                {:else}
                <span class="font-bold">Hrs</span>
                {/if}
                <span class="days">{hour}</span>
           </li> 
        </div>
        <div class="border-2 border-orange-700 rounded-lg mx-2 w-20 h-20 items-center justify-center">
            <li class="flex flex-col items-center my-3">
                {#if minute ===1}
                <span class="font-bold">Min</span>
                {:else}
                <span class="font-bold">Mins</span>
                {/if}
                <span class="days">{minute}</span>
            </li> 
        </div>
        <div class="border-2 border-orange-700 rounded-lg mx-2 w-20 h-20 items-center justify-center">
            <li class="flex flex-col items-center my-3">
                {#if second ===1}
                <span class="font-bold">Sec</span>
                {:else}
                <span class="font-bold">Secs</span>
                {/if}
                <span class="days">{second}</span>
            </li>
       </div>
        {:else}
        <p class="go-to-site">Go to new site</p>
        {/if}
    </ul>
</div>




