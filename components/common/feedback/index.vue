<template>
	<div class="w-full">
		<div
			class="flex flex-col items-center justify-center h-min px-5 pt-10 pb-3 md:py-10 rounded-[30px] md:rounded-[40px] bg-[linear-gradient(304deg,#16181F_56.52%,#134A2F_96.86%)]"
		>
			<h3
				class="md:hidden animate-ups__item bg-[linear-gradient(99deg,_#FFF_-1.15%,_#FFF_71.81%,_rgba(255,255,255,0.30)_102.18%)] bg-clip-text text-transparent font-BG text-[28px] md:text-[32px] lg:text-[40px] 2xl:text-[45px] 3xl:text-[60px] text-center font-bold leading-[1.3]"
			>
				Kết nối cùng
				<span class="text-[#02D060]">UPS</span>
				<br/>ngay hôm nay!
			</h3>
			<h3
				class="hidden md:block animate-ups__item bg-[linear-gradient(99deg,_#FFF_-1.15%,_#FFF_71.81%,_rgba(255,255,255,0.30)_102.18%)] bg-clip-text text-transparent font-BG text-[28px] md:text-[32px] lg:text-[40px] 2xl:text-[45px] 3xl:text-[60px] text-center font-bold leading-[1.3]"
			>
				Kết nối cùng
				<span class="text-[#02D060]">UPS</span> ngay hôm nay!
			</h3>

			<p
				class="animate-ups__item text-base 3xl:text-xl text-center lg:text-left font-medium mt-3 text-white opacity-90 leading-normal"
			>
				Vinh dự đồng hành cùng
				<span class="text-[#02D060] font-bold text-base">hàng triệu nhà đầu tư</span>
				đạp gió rẽ sóng, vượt ngàn chông gai!
			</p>

			<div class="form w-full xl:w-[950px] max-w-full relative flex flex-col gap-3 mt-4 p-3 rounded-[20px]">
				<div class="glow"></div>

				<div class="w-full grid gap-3 grid-cols-1 md:grid-cols-3">
					<div>
						<nuxt-input
							class="w-full h-[50px] px-6 text-white bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] rounded-[40px] border-none focus:ring-0 placeholder:text-[#ADB2C0] text-base"
							placeholder="Tên của bạn"
							name="fullname"
							v-model="fullname"
							@change="fullnameErr = ''"
						/>
						<p
							v-if="fullnameErr"
							class="text-base text-[#F05] font-medium mt-1"
						>
							{{ fullnameErr }}
						</p>
					</div>

					<div>
						<nuxt-input
							class="w-full h-[50px] px-6 text-white bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] rounded-[40px] border-none focus:ring-0 placeholder:text-[#ADB2C0] text-base"
							placeholder="Số điện thoại"
							name="phone"
							v-model="phone"
							@change="phoneErr = ''"
						/>
						<p
							v-if="phoneErr"
							class="text-base text-[#F05] font-medium mt-1"
						>
							{{ phoneErr }}
						</p>
					</div>

					<div>
						<nuxt-input
							type="email"
							class="w-full h-[50px] px-6 text-white bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] rounded-[40px] border-none focus:ring-0 placeholder:text-[#ADB2C0] text-base"
							placeholder="Email"
							name="email"
							v-model="email"
							@change="emailErr = ''"
						/>
						<p
							v-if="emailErr"
							class="text-base text-[#F05] font-medium mt-1"
						>
							{{ emailErr }}
						</p>
					</div>
				</div>

				<div class="w-full">
					<textarea
						rows="6"
						v-model="content"
						class="w-full px-6 py-4 text-white bg-[rgba(255,255,255,0.08)] backdrop-blur-[20px] rounded-[25px] border-none focus:ring-0 placeholder:text-[#ADB2C0] text-base"
						placeholder="Nội dung"
					></textarea>
					
				</div>

				<button
					class="absolute z-50 bottom-7 left-6 md:left-auto right-6 inline-flex items-center justify-center h-[50px] px-8 text-base font-semibold text-green-ups bg-[rgba(255,255,255,0.08)] rounded-full"
					@click="submit"
				>
					Gửi tin nhắn
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { ref, defineComponent, type Ref } from "vue";
import NuxtInput from "~/components/ui/input/index.vue";
import { isEmail, isNullOrEmpty } from "~/lib/validate";

export default defineComponent({
	name: "feedback",
	components: {
		NuxtInput,
	},
	setup(props, ctx) {
		const fullname: Ref<string> = ref("");
		const fullnameErr: Ref<string> = ref("");
		const phone: Ref<string> = ref("");
		const phoneErr: Ref<string> = ref("");
		const email: Ref<string> = ref("");
		const emailErr: Ref<string> = ref("");
		const content: Ref<string> = ref("");

		const supportStore = useSupport();

		const submit = () => {
			if (val()) return;

			// call api
			const payload = {
				fullname: fullname.value,
				email: email.value,
				phone: phone.value,
				content: content.value,
			};

			supportStore
				.fnMutation(payload)
				.then((res: any) => {
					const str = String(res.status).startsWith("2");

					if (str) {
						alert("Thông tin của bạn đã được gửi đi thành công");
						reset();
					} else {
						alert("Thông tin của bạn đã được gửi đi thất bại");
					}
				})
				.catch((err) => {
					console.log("err", err);
				});
		};

		const val = () => {
			let hasErr = false;

			if (isNullOrEmpty(fullname.value) || isNullOrEmpty(fullname.value.trim())) {
				hasErr = true;
				fullnameErr.value = "Tên không được để trống !";
			}

			if (isNullOrEmpty(email.value) || isNullOrEmpty(email.value.trim())) {
				hasErr = true;
				emailErr.value = "Email không được để trống !";
			} else if (!isEmail(email.value)) {
				hasErr = true;
				emailErr.value = "Email không hợp lệ";
			}

			if (isNullOrEmpty(phone.value) || isNullOrEmpty(phone.value.trim())) {
				hasErr = true;
				phoneErr.value = "Số điện thoại không được để trống !";
			}

			return hasErr;
		};

		const reset = () => {
			fullname.value = "";
			fullnameErr.value = "";
			phone.value = "";
			phoneErr.value = "";
			email.value = "";
			emailErr.value = "";
			content.value = "";
		};

		// Function to handle mouse movement
		function handleMouseMove(e: any, form: any) {
			const rect = form.getBoundingClientRect();
			const mouseX = e.clientX - rect.left - rect.width / 2;
			const mouseY = e.clientY - rect.top - rect.height / 2;
			let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
			angle = (angle + 360) % 360;
			form.style.setProperty("--start", angle + 60);
		}

		onMounted(() => {
			const formEl = document.querySelectorAll(".form");
			formEl.forEach((form: any) => {
				form.addEventListener("mousemove", (e: any) => handleMouseMove(e, form));
			});
		});

		return {
			fullname,
			fullnameErr,
			phone,
			phoneErr,
			email,
			emailErr,
			content,
			submit,
		};
	},
});
</script>

<style scoped>
.form {
	--start: 0;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	border-radius: 20px;
	transition: border-color 0.3s ease-in-out;
}

.form::before {
	position: absolute;
	content: "";
	width: 100%;
	height: 100%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 20px;
	border: 2px solid transparent;
	background: conic-gradient(from 90deg at 50% 50%, #adb2c0, #adb2c0);
	background-attachment: fixed;
	mask: linear-gradient(#0000, #0000),
		conic-gradient(from calc((var(--start) - (20 * 1.1)) * 1deg), #ffffff1f 0deg, white, #ffffff00 100deg);
	mask-composite: intersect;
	mask-clip: padding-box, border-box;
	opacity: 0;
	transition: 0.5s ease;
}

.glow {
	pointer-events: none;
	position: absolute;
	width: 100%;
	height: 100%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	filter: blur(14px);
}

.glow::before {
	position: absolute;
	content: "";
	width: 98%;
	height: 98%;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 20px;
	border: 2px solid transparent;
	background: conic-gradient(from 90deg at 50% 50%, #adb2c0, #adb2c0);
	background-attachment: fixed;
	mask: linear-gradient(#0000, #0000),
		conic-gradient(from calc((var(--start) - (20 * 1.1)) * 1deg), #ffffff1f 0deg, white, #ffffff00 100deg);
	mask-composite: intersect;
	mask-clip: padding-box, border-box;
	opacity: 0;
	transition: 1s ease;
}

.form:hover > .glow::before {
	opacity: 1;
}

.form:hover::before {
	opacity: 0.6;
}
</style>
