<template>
	<section class="animate-ups">
		<div
			class="2xl:px-[225px] lg:px-[60px] md:px-[60px] px-6 xl:px-[120px] 2xl:py-[100px] lg:py-[60px] xl:py-[80px] py-10 self-stretch">
			<div
				class="w-full flex flex-col items-center 2xl:gap-[80px] lg:gap-[40px] gap-6 bg-[url('./images/Grid.png')] bg-cover bg-center bg-no-repeat">
				<div class="w-full">
					<p
						class="text-[#15171E] font-BG text-center font-bold 3xl:text-[60px] xl:text-[40px] lg:text-[32px] md:text-[28px] text-[20px] 2xl:text-[45px] leading-normal 2xl:my-2 animate-ups__item">
						Câu hỏi thường gặp về
						<span
							class="text-[#F51666] font-BG font-bold 3xl:text-[60px] xl:text-[40px] lg:text-[32px] 2xl:text-[45px] md:text-[28px] text-[20px] leading-normal animate-ups__item">
							Margin T+3
						</span>
					</p>
					<p
						class="text-black text-center font-HG font-medium text-[20px] xl:text-[14px] lg:text-[12px] sm:text-[12px] 2xl:text-[16px] leading-normal animate-ups__item">
						Cập nhật các sản phẩm, dịch vụ mới nhất cũng như các hoạt động, sự kiện của UPS
					</p>
				</div>
				<div class="w-full flex items-center flex-col">
					<Accordion type="single" class="w-2/3 2xl:w-3/4 sm:w-full lg:w-2/3" collapsible>
						<AccordionItem :value="1">
							<AccordionTrigger class="flex items-center hover:no-underline">
								<div class="flex items-center">
									<i
										class="inline-flex items-center justify-center border rounded-[10px] md:w-[50px] md:h-[50px] sm:w-7 sm:h-7">
										<nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
											class="w-1/2 h-1/2 object-cover animate-ups__item" />
									</i>
									<div class="ml-5">
										<p
											class="text-[#15171E] text-left font-semibold 3xl:text-[30px] xl:text-[20px] lg:text-[16px] md:text-[16px] text-[14px] 2xl:text-[24px] leading-normal animate-ups__item font-HG">
											Lãi suất của Margin T+3 có thay đổi không?
										</p>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div class="md:pl-[70px] sm:pl-12">
									<p
										class="text-[#838383] font-medium 3xl:text-[20px] xl:text-[14px] lg:text-[12px] text-[12px] 2xl:text-[16px] leading-normal font-HG">
										Không, lãi suất của Margin T+3 là cố định 6.8% trong suốt thời gian nắm giữ cổ
										phiếu.
									</p>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem :value="2">
							<AccordionTrigger class="flex items-center hover:no-underline">
								<div class="flex items-center">
									<i
										class="inline-flex items-center justify-center border rounded-[10px] md:w-[50px] md:h-[50px] sm:w-7 sm:h-7">
										<nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
											class="w-1/2 h-1/2 object-cover animate-ups__item" />
									</i>
									<div class="ml-5">
										<p
											class="text-[#15171E] text-left font-semibold 3xl:text-[30px] xl:text-[20px] lg:text-[16px] md:text-[16px] text-[14px] 2xl:text-[24px] leading-normal animate-ups__item font-HG">
											Tôi có thể giữ cổ phiếu lâu hơn 3 ngày không?
										</p>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div class="md:pl-[70px] sm:pl-12">
									<p
										class="text-[#838383] font-medium leading-normal 2xl:text-[20px] lg:text-[12px] sm:text-[12px] xl:text-[14px] text-[16px] font-HG">
										Không, Margin T+3 chỉ áp dụng cho các giao dịch nắm giữ trong 3 ngày. Sau thời
										gian này, hệ thống sẽ tự động đóng vị thế.
									</p>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem :value="3">
							<AccordionTrigger class="flex items-center hover:no-underline">
								<div class="flex items-center">
									<i
										class="inline-flex items-center justify-center border rounded-[10px] md:w-[50px] md:h-[50px] sm:w-7 sm:h-7">
										<nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
											class="w-1/2 h-1/2 object-cover animate-ups__item" />
									</i>
									<div class="ml-5">
										<p
											class="text-[#15171E] text-left font-semibold 3xl:text-[30px] xl:text-[20px] lg:text-[16px] text-[14px] 2xl:text-[24px] leading-normal animate-ups__item font-HG">
											Margin T+3 phù hợp với đối tượng nào?
										</p>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div class="md:pl-[70px] sm:pl-12">
									<p
										class="text-[#838383] font-medium leading-normal 2xl:text-[20px] lg:text-[12px] sm:text-[12px] xl:text-[14px] text-[16px] font-HG">
										Margin T+3 phù hợp với những nhà đầu tư thích giao dịch ngắn hạn và muốn tận
										dụng các cơ hội nhanh chóng trên thị trường.
									</p>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>
	</section>
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
