<template>
    <div>
        <p>product details for {{ id }}</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum accusantium officiis, nihil est cupiditate aliquam non? Obcaecati sapiente provident beatae, ut ullam sint laudantium aperiam ea perspiciatis odit officiis.</p>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    const { id } = useRoute().params;
</script>

<style scoped>

</style>