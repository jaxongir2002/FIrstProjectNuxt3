export default defineEventHandler( async (event) => {


    //handle post data
// const {age} = await useBody(event)
  
const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=oxrsUizosoHmPmmSEY606uekRjovdGkcgChn1KQ6&currencies=EUR%2CUSD%2CCAD')

    return data
    }) 
