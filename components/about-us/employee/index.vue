<template>
	<section class="pt-[120px] pb-[60px] bg-[#EDEDF4]">
		<div class="container">
			<div class="flex">
				<div class="w-[630px] max-w-full">
					<div class="flex items-end">
						<h2 class="text-[76px] font-semibold font-BG text-black">
							<span>Hội đồng </span>
							<br />
							<span class="text-[#01C159]">Quản trị</span>
						</h2>

						<div class="mb-3">
							<nuxt-img
								fotmat="webp"
								loading="lazy"
								width="170"
								height="78"
								alt="UPS"
								src="/logo/logo-cap-dark.png"
							/>
						</div>
					</div>

					<p class="max-w-[380px] text-lg text-black font-medium mt-5">
						Chúng tôi luôn nỗ lực không ngừng để đạt được những mục tiêu đầy tham vọng và tạo ra những giá
						trị lâu dài
					</p>
				</div>

				<div class="w-full flex-1 grid gap-4 grid-cols-3">
					<div
						v-for="i in 3"
						:key="i"
						class="w-full h-[420px] relative group overflow-hidden"
					>
						<div class="absolute w-full h-full">
							<nuxt-img
								format="webp"
								loading="lazy"
								height="420"
								alt="UPS"
								src="/images/employee-01.png"
								class="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
							/>
						</div>

						<div class="w-[calc(100%-60px)] absolute left-[30px] bottom-[30px]">
							<div class="">
								<nuxt-img
									format="webp"
									loading="lazy"
									height="24"
									alt="UPS"
									src="/logo/logo-row.png"
								/>
							</div>

							<p class="mt-2 text-sm text-white font-medium">Phó Tổng giám đốc</p>
							<h4 class="mt-3 text-xl text-white font-semibold font-BG">Ông Nguyễn Quang Đạt</h4>
						</div>
					</div>
				</div>
			</div>

			<!-- /// -->
			<div class="mt-20 grid gap-4 grid-cols-5">
				<div
					v-for="i in 5"
					:key="i"
					class="flex flex-col group"
				>
					<div class="aspect-square overflow-hidden">
						<nuxt-img
							format="webp"
							loading="lazy"
							width="310"
							alt="UPS"
							src="/images/employee-02.png"
							class="aspect-square object-cover transition-all duration-300 group-hover:scale-110"
						/>
					</div>

					<div
						class="relative w-[calc(100%-30px)] h-auto ml-[30px] px-8 py-4 bg-white cursor-pointer transition-all duration-300 group-hover:bg-[#0AB157]"
					>
						<div
							class="absolute left-[-30px] top-0 w-[50px] h-[50px] inline-flex items-center justify-center bg-[#15171E]"
						>
							<nuxt-img
								format="webp"
								loading="lazy"
								height="24"
								alt="UPS"
								src="/logo/logo-row.png"
							/>
						</div>

						<p class="text-sm text-[#696B75] text-right group-hover:text-white">#Ban điều hành UPS</p>
						<h4 class="mt-6 text-lg text-black font-semibold">Trịnh Trần Tuấn Anh</h4>
						<p class="text-sm text-[#696B75] font-medium group-hover:text-white">Ban quản trị</p>

						<div class="flex justify-end">
							<nuxt-img
								format="webp"
								loading="lazy"
								height="40"
								alt="UPS"
								src="/icons/arrow-icon.svg"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "employee",
	components: {},
	setup(props, ctx) {
		return {};
	},
});
</script>
