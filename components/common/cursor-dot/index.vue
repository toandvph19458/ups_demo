<template>
	<div class="cursor_dot fixed top-0 left-0 z-[9999] pointer-events-none bg-[#02E56A] rounded-full"></div>
	<div class="cursor_dot_2 fixed top-0 left-0 z-[9999] pointer-events-none bg-[#15171E] rounded-full hidden">
		<div
			to="/"
			id="account-btn"
			class="btn group flex items-center justify-center"
		>
			<span class="text-[#02E56A]"> Xem chi tiết </span>
			<i class="mt-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
				>
					<g filter="url(#filter0_d_129_13421)">
						<path
							d="M4.89594 10.4697C4.60305 10.7626 4.60305 11.2374 4.89594 11.5303C5.18883 11.8232 5.66371 11.8232 5.9566 11.5303L4.89594 10.4697ZM16.1763 1C16.1763 0.585787 15.8405 0.25 15.4263 0.25L8.67627 0.25C8.26206 0.25 7.92627 0.585786 7.92627 1C7.92627 1.41421 8.26206 1.75 8.67627 1.75H14.6763V7.75C14.6763 8.16421 15.0121 8.5 15.4263 8.5C15.8405 8.5 16.1763 8.16421 16.1763 7.75L16.1763 1ZM5.9566 11.5303L15.9566 1.53033L14.8959 0.46967L4.89594 10.4697L5.9566 11.5303Z"
							fill="#02E56A"
						/>
					</g>
					<defs>
						<filter
							id="filter0_d_129_13421"
							x="0.67627"
							y="0.25"
							width="19.5"
							height="19.5"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood
								flood-opacity="0"
								result="BackgroundImageFix"
							/>
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="4" />
							<feGaussianBlur stdDeviation="2" />
							<feComposite
								in2="hardAlpha"
								operator="out"
							/>
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_129_13421"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_129_13421"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
			</i>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import useGsap from "gsap";

export default defineComponent({
	name: "cursor-dot",
	setup() {
		onMounted(() => {
			const cursorDot: any = document.querySelector(".cursor_dot");
			const cursorDot2: any = document.querySelector(".cursor_dot_2");
			const accountBtn: any = document.querySelector("#account-btn");
			const newItems: NodeListOf<HTMLElement> = document.querySelectorAll(".news_layout_item");
			const btns: NodeListOf<HTMLElement> = document.querySelectorAll(".btn");

			let mouseX = 0;
			let mouseY = 0;
			let currentX = 0;
			let currentY = 0;
			let lastTime = Date.now();
			let dampingFactor = 0.3;

			document.addEventListener("mousemove", (e) => {
				mouseX = e.clientX;
				mouseY = e.clientY;

				if (cursorDot2.classList.contains("active")) {
					cursorDot2.style.left = `${mouseX}px`;
					cursorDot2.style.top = `${mouseY}px`;
				}
			});

			document.addEventListener("mousemove", (e) => {
				mouseX = e.clientX;
				mouseY = e.clientY;

				if (cursorDot.classList.contains("active")) {
					cursorDot.style.left = `${mouseX}px`;
					cursorDot.style.top = `${mouseY}px`;
				}
			});

			//Breathing
			let timeoutId: any;
			let isBreathing = false;

			function initiateBreathing() {
				isBreathing = true;
				useGsap.to(cursorDot, {
					scale: 1.8,
					repeat: -1, // Infinite repeating
					yoyo: true, // Reverses the animation on each cycle
					duration: 1, // Adjust duration as needed for the breathing speed
					//borderRadius: '0%',
				});
			}

			function stopBreathing() {
				isBreathing = false;
				useGsap.killTweensOf(cursorDot);
				useGsap.set(cursorDot, {
					scale: 1,
					//borderRadius: '50%',
				});
			}

			// document.addEventListener('mousemove', (e) => {
			//     mouseX = e.clientX;
			//     mouseY = e.clientY;

			//     clearTimeout(timeoutId);
			//     if (isBreathing) stopBreathing();

			//     timeoutId = setTimeout(initiateBreathing, 2000);  // 2 seconds delay
			// });

			function animate() {
				const initialWidth = "24px";
				const initialHeight = "24px";

				const currentTime = Date.now();
				const timeDelta = currentTime - lastTime;

				const deltaX = (mouseX - currentX) * dampingFactor;
				const deltaY = (mouseY - currentY) * dampingFactor;

				currentX += deltaX;
				currentY += deltaY;

				const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
				const speed = (Math.sqrt(deltaX * deltaX + deltaY * deltaY) / timeDelta) * 500;

				const rect = cursorDot.getBoundingClientRect();
				useGsap.set(cursorDot, {
					x: currentX - rect.width / 2,
					y: currentY - rect.height / 2,
					rotation: angle,
					height: initialHeight,
					width: initialWidth,
				});

				lastTime = currentTime;

				requestAnimationFrame(animate);
			}

			animate();

			const handleMouseOver = (event: any) => {
				useGsap.to(cursorDot, {
					scale: 0.5,
					duration: 0.3,
					opacity: 0.5, // Adjust opacity on hover
				});

				cursorDot.style.backgroundColor = "#15171E";
				cursorDot.classList.add("hidden");

				cursorDot2.classList.remove("hidden");
				cursorDot2.classList.add("active");
				cursorDot2.style.left = `${event.clientX}px`;
				cursorDot2.style.top = `${event.clientY}px`;

				accountBtn.style.display = "block";
				accountBtn.style.left = `${event.clientX}px`;
				accountBtn.style.top = `${event.clientY + 30}px`;
			};

			const handleMouseOut = () => {
				cursorDot.style.backgroundColor = "#02E56A";
				useGsap.to(cursorDot, {
					scale: 1,
					opacity: 1, // Reset opacity on mouse out
					duration: 2,
				});

				cursorDot.classList.remove("hidden");
				cursorDot2.classList.add("hidden");
				cursorDot2.classList.remove("active");
				accountBtn.style.display = "none";
			};

			btns.forEach((btn) => {
				btn.addEventListener("mouseover", () => {
					cursorDot.style.backgroundColor = "#15171E";
					useGsap.to(cursorDot, {
						scale: 0.5,
						opacity: 1, // Reset opacity on mouse out
						duration: 0.3,
					});
				});
				btn.addEventListener("mouseout", () => {
					cursorDot.style.backgroundColor = " #02E56A";
					useGsap.to(cursorDot, {
						scale: 1,
						opacity: 1, // Reset opacity on mouse out
						duration: 0.3,
					});
				});
			});

			newItems.forEach((item) => {
				item.addEventListener("mouseover", handleMouseOver);
				item.addEventListener("mouseout", handleMouseOut);
			});

			document.addEventListener("mousemove", () => {
				const isHovered =
					Array.from(btns).some((btn) => btn.matches(":hover")) ||
					Array.from(newItems).some((item) => item.matches(":hover"));

				if (!isHovered) {
					cursorDot.classList.remove("hidden");
					cursorDot2.classList.add("hidden");
					cursorDot2.classList.remove("active");
					accountBtn.style.display = "none";
				}
			});
		});
	},
});
</script>
