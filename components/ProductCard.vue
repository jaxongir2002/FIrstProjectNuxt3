<template>
    <div class="card text-center bg-white shadow-md h-full p-3">
        <img :src="product.image" alt=" product thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate ">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4 text-white px-3 py-2 rounded-md text-sm">View Details</p>
        </NuxtLink>

    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
.btn {
    background-color: #12b488;
}
.thumb{
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}

</style>