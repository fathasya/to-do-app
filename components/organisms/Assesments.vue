<template>
    <div class="w-full mx-auto min-h-screen bg-blue-200 p-5">
        <div class="w-full md:w-2/3 lg:w-1/2 mx-auto p-5 bg-white rounded shadow-md">
            <h6 class="font-bold uppercase text-center mb-4 border-b-2 pb-5">My Assesments Results</h6>
            <AssesmentOne />
            <AssesmentTwo />
            <AssesmentThree />
        </div>
    </div>
</template>

<script>
import AssesmentOne from '~/components/molecules/AssesmentOne.vue'
import AssesmentTwo from '~/components/molecules/AssesmentTwo.vue'
import AssesmentThree from '~/components/molecules/AssesmentThree.vue'

export default {
    components: {
        AssesmentOne,
        AssesmentTwo,
        AssesmentThree,
    },
}

</script>