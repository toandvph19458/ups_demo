<template>
    <div
        class="flex flex-col items-center gap-[80px] lg:gap-[40px] sm:gap-6 px-[225px] xl:px-[100px] lg:px-[60px] sm:px-6 xxl:px-[120px] py-[100px] lg:py-[60px] xxl:py-[80px] sm:py-10 self-stretch">
        <div class="w-full ">
            <p
                class="text-[#15171E] text-center font-bold text-[60px] xl:text-[40px] lg:text-[32px] sm:text-[20px] xxl:text-[45px] leading-none">
                Câu hỏi thường gặp về
                <span
                    class="text-[#F51666] font-bold text-[60px] xl:text-[40px] lg:text-[32px] xxl:text-[45px] sm:text-[20px] leading-none">
                    Margin T+3
                </span>
            </p>
            <p
                class="text-black text-center font-medium text-[20px] xl:text-[14px] lg:text-[12px] sm:text-[12px] xxl:text-[16px] leading-normal">
                Cập nhật các sản phẩm, dịch vụ mới nhất cũng như các hoạt động, sự kiện của UPS
            </p>
        </div>
        <div class="w-full flex items-center flex-col">
            <Accordion type="single" class="w-2/3 xxl:w-3/4 sm:w-full lg:w-2/3" collapsible>
                <AccordionItem :value="1">
                    <AccordionTrigger class="flex items-center hover:no-underline">
                        <div class="flex items-center">
                            <i
                                class="inline-flex items-center justify-center border rounded-[10px] w-[50px] h-[50px] sm:w-7 sm:h-7">
                                <nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
                                    class="w-1/2 h-1/2 object-cover" />
                            </i>
                            <div class="ml-5 ">
                                <p
                                    class="text-[#15171E] text-left font-semibold text-[30px] xl:text-[20px] lg:text-[16px] sm:text-[14px] xxl:text-[24px] leading-normal">
                                    Lãi suất của
                                    Margin T+3 có
                                    thay đổi không?</p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div class="pl-[70px] sm:pl-12">
                            <p
                                class="text-[#838383] font-medium text-[20px] xl:text-[14px] lg:text-[12px] sm:text-[12px] xxl:text-[16px] leading-normal">
                                Không,
                                lãi suất
                                của Margin T+3 là cố định 6.8% trong suốt thời gian nắm giữ cổ phiếu.</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem :value="2">
                    <AccordionTrigger class="flex items-center hover:no-underline">
                        <div class="flex items-center">
                            <i
                                class="inline-flex items-center justify-center border rounded-[10px] w-[50px] h-[50px] sm:w-7 sm:h-7">
                                <nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
                                    class="w-1/2 h-1/2 object-cover" />
                            </i>
                            <div class="ml-5 ">
                                <p
                                    class="text-[#15171E] text-left font-semibold text-[30px] xl:text-[20px] lg:text-[16px] sm:text-[14px] xxl:text-[24px] leading-normal">
                                    Tôi có thể
                                    giữ cổ
                                    phiếu lâu hơn 3 ngày không?</p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div class="pl-[70px] sm:pl-12">
                            <p
                                class="text-[#838383] font-medium text-[20px] xl:text-[14px] lg:text-[12px] sm:text-[12px] xxl:text-[16px] leading-normal">
                                Không,
                                lãi suất
                                của Margin T+3 là cố định 6.8% trong suốt thời gian nắm giữ cổ phiếu.</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem :value="3">
                    <AccordionTrigger class="flex items-center hover:no-underline">
                        <div class="flex items-center">
                            <i
                                class="inline-flex items-center justify-center border rounded-[10px] w-[50px] h-[50px] sm:w-7 sm:h-7">
                                <nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
                                    class="w-1/2 h-1/2 object-cover" />
                            </i>
                            <div class="ml-5">
                                <p
                                    class="text-[#15171E] text-left font-semibold text-[30px] xl:text-[20px] lg:text-[16px] sm:text-[14px] xxl:text-[24px] leading-normal">
                                    Margin T+3
                                    phù
                                    hợp với đối tượng nào?</p>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div class="pl-[70px] sm:pl-12">
                            <p
                                class="text-[#838383] font-medium  leading-normal xxl:text-[20px] lg:text-[12px] sm:text-[12px] xl:text-[14px] text-[16px]">
                                Không,
                                lãi suất
                                của Margin T+3 là cố định 6.8% trong suốt thời gian nắm giữ cổ phiếu.</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export default defineComponent({
    name: "question",
    components: {
        Accordion,
        AccordionContent,
        AccordionItem,
        AccordionTrigger,
    },
});
</script>

<style></style>