<template>
    <div>
        <ProductDetails :product="product"/>   
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    const { id } = useRoute().params;
    const uri = 'https://fakestoreapi.com/products/' + id;

    // fetch the data and each time we land on a new product, we will fetch again (that is why we have the key)
        // otherwise fetch will use the previous fetched data
    const { data: product } = await useFetch(uri, { key: id });
</script>

<style scoped>

</style>