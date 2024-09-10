<template>
    <section class="py-[60px] lg:py-[100px] xl:py-[200px]">
        <div class="flex justify-center items-center gap-4 pb-[50px]">
            <h3
                class="animate-ups__item text-[#01C159] font-BG text-[20px] md:text-[32px] xl:text-[60px] text-center lg:text-left font-semibold leading-[1 text-[52px] font-semibold">
                Đối tác của
            </h3>
            <div class="inline-flex relative w-[80px] h-[40px] md:w-[145px] md:h-[66px] xl:w-[132px] xl:h-[60px] mt-2">
                <nuxt-img format="webp" loading="lazy" alt="UPS" width="132" height="60" src="/logo/logo-cap-dark.png"
                    class="animate-ups__item absolute w-full h-full object-cover" />
            </div>
        </div>
        <client-only>
            <vue3-marquee :duration="50" :gradient="true" :gradient-color="[255, 255, 255]" gradient-length="20%">
                <div v-for="doc in 8" :key="doc" class="mx-[80px] group py-2">
                    <nuxt-img format="webp" loading="lazy" alt="UPS" height="60" :src="`/partner/partner-0${doc}.png`"
                        class="cursor-pointer object-contain transition-all duration-200 grayscale group-hover:grayscale-0 group-hover:scale-110" />
                </div>
            </vue3-marquee>
        </client-only>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { cn } from "~/lib/utils";

export default defineComponent({
    name: "partner-ups",
    components: {},
    setup(props, ctx) {
        return {
            cn,
        };
    },
});
</script>

<style scoped></style>
