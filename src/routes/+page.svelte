<script>
    import Logo from '$lib/components/branding/Logo.svelte'
    import Wip from '$lib/components/icons/Wip.svelte'
</script>
<svelte:head>
    <title>Home</title>
    <meta name="description" content="BBS MEDIA - Temporary - Under construction"/>
</svelte:head>

<section>
    <div class="-mt-24 relative w-full py-12 px-12 bg-gray-700">
        <div class="relative z-10 text-center py-24 md:py-48">
            <Logo light/>
            <div class="relative text-center text-white">
                AV production & post since 1998
            </div>
            <div class="mt-12 text-white">
                <Wip size="50"/><br/>
                We are currently building an amazing website.<br/> Please come back in a few weeks and check it out.
            </div>
        </div>
        <img src="background.png" class="w-full h-full absolute inset-0 object-cover opacity-50" alt="background"/>
    </div>
</section>
