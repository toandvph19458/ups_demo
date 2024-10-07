<template>
	<section class="container-product">
		<div class="p-[60px_0_24px] md:p-[40px_0] lg:p-[60px_0] xl:-[80px_0] 3xl:p-[100px_0_100px]">
			<div
				class="w-full flex flex-col items-center gap-6 md:mt-10 xl:gap-[80px] bg-[url('./images/Grid.png')] bg-cover bg-center bg-no-repeat">

				<div class="animate-ups w-full">
					<p
						class="animate-ups__item text-[#15171E] font-BG text-center font-bold  text-[28px] md:text-[32] xl:text-[40px] 2xl:text-[45px] 3xl:text-[60px] leading-[1.3] md:leading-normal animate-ups__item">
						Câu hỏi thường gặp về
						<span class="block md:inline text-[#01C159] font-BG font-bold animate-ups__item">
							Zero - Fee
						</span>
					</p>
					<p
						class="animate-ups__item text-black text-center font-HG font-medium text-[16px] 3xl:text-[20px] leading-normal animate-ups__item mt-[5px] md:mt-[6px] lg:mt-2 xl:mt-3">
						Cập nhật các sản phẩm, dịch vụ mới nhất cũng như các hoạt động, sự kiện của UPS
					</p>
				</div>

				<div class="animate-ups w-full flex items-center flex-col">
					<Accordion type="single"
						class="animate-ups__item w-2/3 2xl:w-3/4 sm:w-full lg:w-2/3 space-y-4 md:space-y-6 3xl:space-y-[58px]"
						collapsible>
						<AccordionItem :value="1">
							<AccordionTrigger class="flex items-center hover:no-underline">
								<div class="flex items-start">
									<div
										class="lg:-translate-y-[6px] inline-flex items-center justify-center border rounded-[10px] size-7 lg:size-[50px]">
										<nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
											class="size-1/2 animate-ups__item" />
									</div>
									<div class="ml-5">
										<p
											class="text-[#15171E] text-left font-semibold 3xl:text-[30px] xl:text-[20px] text-[18px] 2xl:text-[24px] leading-[1.3] md:leading-normal animate-ups__item font-HG">
											1. Chương trình Zero Fee áp dụng cho những loại giao dịch nào?
										</p>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div class="md:pl-[70px] sm:pl-12">
									<p
										class="text-[#838383] font-medium text-[16px] 3xl:text-[20px] leading-normal font-HG">
										Chương trình áp dụng cho tất cả các giao dịch chứng khoán cơ sở được thực hiện
										trên nền tảng của UPS. Tuy nhiên, chương trình không áp dụng cho các giao dịch
										margin và các sản phẩm tài chính phái sinh khác.
									</p>
								</div>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem :value="2">
							<AccordionTrigger class="flex items-center hover:no-underline">
								<div class="flex items-start">
									<div
										class="lg:-translate-y-[6px] inline-flex items-center justify-center border rounded-[10px] size-7 lg:size-[50px]">
										<nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
											class="size-1/2 animate-ups__item" />
									</div>
									<div class="ml-5">
										<p
											class="text-[#15171E] text-left font-semibold 3xl:text-[30px] xl:text-[20px] text-[18px] 2xl:text-[24px] leading-[1.3] md:leading-normal animate-ups__item font-HG">
											2. Có giới hạn về số lượng giao dịch miễn phí không?
										</p>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div class="md:pl-[70px] sm:pl-12">
									<p
										class="text-[#838383] font-medium text-[16px] 3xl:text-[20px] leading-normal font-HG">
										Không có giới hạn về số lượng giao dịch! Bạn có thể giao dịch không giới hạn số
										lần, miễn là tổng giá trị giao dịch (GTGD) trong ngày không vượt quá 2 tỷ đồng.
										Phần GTGD vượt 2 tỷ sẽ được tính phí theo mức phí hiện hành là 0.15%.
									</p>
								</div>
							</AccordionContent>
						</AccordionItem>


						<AccordionItem :value="3">
							<AccordionTrigger class="flex items-center hover:no-underline">
								<div class="flex items-start">
									<div
										class="lg:-translate-y-[6px] inline-flex items-center justify-center border rounded-[10px] size-7 lg:size-[50px]">
										<nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
											class="size-1/2 animate-ups__item" />
									</div>
									<div class="ml-5">
										<p
											class="text-[#15171E] text-left font-semibold 3xl:text-[30px] xl:text-[20px] text-[18px] 2xl:text-[24px] leading-[1.3] md:leading-normal animate-ups__item font-HG">
											3. Tôi cần làm gì để có thể tham gia chương trình?
										</p>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div class="md:pl-[70px] sm:pl-12">
									<p
										class="text-[#838383] font-medium text-[16px] 3xl:text-[20px] leading-normal font-HG">
										Chỉ cần mở tài khoản mới tại UPS hoặc nếu bạn đã có tài khoản nhưng không giao
										dịch trong 6 tháng gần nhất (inactive), hãy đăng ký ngay. Chương trình sẽ tự
										động kích hoạt cho bạn mà không cần thêm điều kiện nào.
									</p>
								</div>
							</AccordionContent>
						</AccordionItem>


						<AccordionItem :value="4">
							<AccordionTrigger class="flex items-center hover:no-underline">
								<div class="flex items-start">
									<div
										class="lg:-translate-y-[6px] inline-flex items-center justify-center border rounded-[10px] size-7 lg:size-[50px]">
										<nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
											class="size-1/2 animate-ups__item" />
									</div>
									<div class="ml-5">
										<p
											class="text-[#15171E] text-left font-semibold 3xl:text-[30px] xl:text-[20px] text-[18px] 2xl:text-[24px] leading-[1.3] md:leading-normal animate-ups__item font-HG">
											4. Sau khi chương trình kết thúc, phí giao dịch sẽ được tính như thế nào?
										</p>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div class="md:pl-[70px] sm:pl-12">
									<p
										class="text-[#838383] font-medium text-[16px] 3xl:text-[20px] leading-normal font-HG">
										Sau khi chương trình kết thúc, phí giao dịch sẽ áp dụng theo biểu phí hiện hành
										của UPS. Mọi thay đổi về phí sẽ được thông báo trước đến quý khách hàng qua các
										kênh thông tin chính thức.
									</p>
								</div>
							</AccordionContent>
						</AccordionItem>


						<AccordionItem :value="5">
							<AccordionTrigger class="flex items-center hover:no-underline">
								<div class="flex items-start">
									<div
										class="lg:-translate-y-[6px] inline-flex items-center justify-center border rounded-[10px] size-7 lg:size-[50px]">
										<nuxt-img format="webp" loading="lazy" alt="UPS" src="/icons/file.svg"
											class="size-1/2 animate-ups__item" />
									</div>
									<div class="ml-5">
										<p
											class="text-[#15171E] text-left font-semibold 3xl:text-[30px] xl:text-[20px] text-[18px] 2xl:text-[24px] leading-[1.3] md:leading-normal animate-ups__item font-HG">
											5. Tôi có thể kết hợp chương trình Zero Fee với các ưu đãi khác không?
										</p>
									</div>
								</div>
							</AccordionTrigger>
							<AccordionContent>
								<div class="md:pl-[70px] sm:pl-12">
									<p
										class="text-[#838383] font-medium text-[16px] 3xl:text-[20px] leading-normal font-HG">
										Chương trình Zero Fee có thể kết hợp với một số ưu đãi khác tùy theo quy định
										của UPS tại từng thời điểm. Vui lòng liên hệ bộ phận hỗ trợ khách hàng của UPS
										để biết thêm chi tiết về các chương trình ưu đãi hiện tại.
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
