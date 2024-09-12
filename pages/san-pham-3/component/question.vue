<template>
	<section>
		<div
			class="flex px-6 pt-[60px] pb-6 flex-col items-center gap-6 3xl:px-[225px] 3xl:pt-[100px] 3xl:pb-[160px] 3xl:gap-[80px]">
			<div
				class="w-full flex flex-col items-center 2xl:gap-[80px] lg:gap-[40px] gap-6 bg-[url('./images/Grid.png')] bg-cover bg-center bg-no-repeat">
				<div class="w-full">
					<p
						class="text-[#15171E] font-BG text-center font-bold  text-[20px] leading-normal animate-ups__item 3xl:text-[60px]">
						Câu hỏi thường gặp về
						<span
							class="text-[#01C159] font-BG font-bold text-[20px] leading-normal animate-ups__item 3xl:text-[60px]">
							Zero - Fee
						</span>
					</p>
					<p
						class="text-black text-center font-HG font-medium text-[20px] xl:text-[14px] lg:text-[12px] sm:text-[12px] 2xl:text-[16px] leading-normal animate-ups__item 3xl:text-[20px]">
						Cập nhật các sản phẩm, dịch vụ mới nhất cũng như các hoạt động, sự kiện của UPS
					</p>
				</div>
				<div class="w-full flex items-center flex-col">
					<Accordion type="single" class="w-2/3 2xl:w-3/4 sm:w-full lg:w-2/3" collapsible>
						<AccordionItem :value="1">
							<AccordionTrigger class="flex items-center hover:no-underline">
								<div class="flex items-center">
									<i
										class="inline-flex items-center justify-center border rounded-[10px] md:w-[50px] md:h-[50px] w-7 h-7">
										<nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
											class="w-1/2 h-1/2 object-cover animate-ups__item" />
									</i>
									<div class="ml-5">
										<p
											class="text-[#15171E] text-left font-semibold 3xl:text-[30px] xl:text-[20px] lg:text-[16px] md:text-[16px] text-[14px] 2xl:text-[24px] leading-normal animate-ups__item font-HG">
											Chương trình Zero-Fee áp dụng cho những loại giao dịch nào?
										</p>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div class="md:pl-[70px] sm:pl-12">
									<p
										class="text-[#838383] font-medium 3xl:text-[20px] xl:text-[14px] lg:text-[12px] text-[12px] 2xl:text-[16px] leading-normal font-HG">
										Chương trình áp dụng cho tất cả các giao dịch chứng khoán cơ sở được thực hiện
										thông qua nền tảng của UPS. Không áp dụng cho các giao dịch margin và các sản
										phẩm tài chính phái sinh khác.
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
											Có giới hạn về số lượng giao dịch miễn phí không?
										</p>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div class="md:pl-[70px] sm:pl-12">
									<p
										class="text-[#838383] font-medium leading-normal 2xl:text-[20px] lg:text-[12px] sm:text-[12px] xl:text-[14px] text-[16px] font-HG">
										Không, bạn có thể thực hiện không giới hạn số lượng giao dịch với phí 0 đồng
										trong thời gian diễn ra chương trình.
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
											Tôi cần làm gì để có thể tham gia chương trình?
										</p>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div class="md:pl-[70px] sm:pl-12">
									<p
										class="text-[#838383] font-medium leading-normal 2xl:text-[20px] lg:text-[12px] sm:text-[12px] xl:text-[14px] text-[16px] font-HG">
										Khách hàng mới chỉ cần mở tài khoản và sẽ tự động được áp dụng ưu đãi. Khách
										hàng hiện tại không cần đăng ký thêm, ưu đãi sẽ tự động được kích hoạt cho tài
										khoản của bạn.
									</p>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem :value="4">
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
											Sau khi chương trình kết thúc, phí giao dịch sẽ được tính
											như thế nào?
										</p>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div class="md:pl-[70px] sm:pl-12">
									<p
										class="text-[#838383] font-medium leading-normal 2xl:text-[20px] lg:text-[12px] sm:text-[12px] xl:text-[14px] text-[16px] font-HG">
										Phí giao dịch sẽ được áp dụng theo biểu phí hiện hành của UPS. Mọi thay đổi sẽ
										được thông báo trước đến quý khách hàng.
									</p>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem :value="5">
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
											Tôi có thể kết hợp chương trình Zero-Fee với các ưu đãi khác không?
										</p>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div class="md:pl-[70px] sm:pl-12">
									<p
										class="text-[#838383] font-medium leading-normal 2xl:text-[20px] lg:text-[12px] sm:text-[12px] xl:text-[14px] text-[16px] font-HG">
										Chương trình Zero-Fee có thể được kết hợp với một số ưu đãi khác tùy theo quy
										định của UPS tại từng thời điểm. Vui lòng liên hệ bộ phận hỗ trợ khách hàng để
										biết thêm chi tiết.
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
	name: "question-sanpham",
	components: {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger,
	},

});
</script>
