<template>
	<div class="w-full p-5 border border-[#ECECEC] rounded-[20px] bg-[#F6F6F7]">
		<div class="mb-5">
			<p class="text-base font-medium text-[#535662]">Giúp chúng tôi cải thiện hướng dẫn này</p>
			<p class="text-[28px] text-black font-semibold font-BG">Chấm điểm độ hữu dụng của bài viết</p>
		</div>

		<div class="flex gap-2">
			<div
				class="px-6 py-3 text-base font-semibold cursor-pointer bg-white border-[1px] border-[#ECECEC] rounded-[12px] hover:bg-black hover:text-green-ups"
			>
				Chưa hữu dụng 😡
			</div>
			<div
				class="px-6 py-3 text-base font-semibold cursor-pointer bg-white border-[1px] border-[#ECECEC] rounded-[12px] hover:bg-black hover:text-green-ups"
			>
				Chưa đủ nội dung 😅
			</div>
			<div
				class="px-6 py-3 text-base font-semibold cursor-pointer bg-white border-[1px] border-[#ECECEC] rounded-[12px] hover:bg-black hover:text-green-ups"
			>
				Đủ hữu dụng 😍
			</div>
			<div
				class="px-6 py-3 text-base font-semibold cursor-pointer bg-white border-[1px] border-[#ECECEC] rounded-[12px] hover:bg-black hover:text-green-ups"
			>
				Hướng dẫn tuyệt vời 😍
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "comment",
	components: {},
	setup(props, ctx) {},
});
</script>
