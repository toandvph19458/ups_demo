<template>
  <div
    class="cursor_dot fixed top-0 left-0 z-[9999] pointer-events-none bg-[#02E56A] rounded-full hidden lg:block"
  ></div>
  <div
    class="cursor_dot_2 fixed top-0 left-0 z-[9999] pointer-events-none bg-[#15171E] rounded-full hidden xl:hidden lg:block"
  >
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
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
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
import { gsap } from "gsap";

export default defineComponent({
  name: "cursor-dot",
  setup() {
    onMounted(() => {
      const cursorDot = document.querySelector(".cursor_dot") as HTMLElement;
      const cursorDot2 = document.querySelector(".cursor_dot_2") as HTMLElement;
      const accountBtn = document.querySelector("#account-btn") as HTMLElement;
      const newItems = document.querySelectorAll(
        ".card"
      ) as NodeListOf<HTMLElement>;
      const btns = document.querySelectorAll(".btn") as NodeListOf<HTMLElement>;

      let mouseX = 0;
      let mouseY = 0;
      let currentX = 0;
      let currentY = 0;
      let lastTime = Date.now();
      const dampingFactor = 0.3;

      // Mouse movement handler for cursorDot2
      document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (cursorDot2.classList.contains("active")) {
          cursorDot2.style.left = `${mouseX}px`;
          cursorDot2.style.top = `${mouseY}px`;
        }
      });

      // Mouse movement handler for cursorDot
      document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (cursorDot.classList.contains("active")) {
          cursorDot.style.left = `${mouseX}px`;
          cursorDot.style.top = `${mouseY}px`;
        }
      });

      // Breathing effect
      let timeoutId: any;
      let isBreathing = false;

      function initiateBreathing() {
        isBreathing = true;
        gsap.to(cursorDot, {
          scale: 1.8,
          repeat: -1,
          yoyo: true,
          duration: 1,
        });
      }

      function stopBreathing() {
        isBreathing = false;
        gsap.killTweensOf(cursorDot);
        gsap.set(cursorDot, { scale: 1 });
      }

      // Animation function
      function animate() {
        const initialSize = "24px";
        const currentTime = Date.now();
        const timeDelta = currentTime - lastTime;

        const deltaX = (mouseX - currentX) * dampingFactor;
        const deltaY = (mouseY - currentY) * dampingFactor;

        currentX += deltaX;
        currentY += deltaY;

        const rect = cursorDot.getBoundingClientRect();
        gsap.set(cursorDot, {
          x: currentX - rect.width / 2,
          y: currentY - rect.height / 2,
          height: initialSize,
          width: initialSize,
        });

        lastTime = currentTime;
        requestAnimationFrame(animate);
      }
      animate();

      // Handle hover effect
      const handleMouseOver = (event: MouseEvent) => {
        gsap.to(cursorDot, {
          scale: 0.5,
          duration: 0.3,
          opacity: 0.5,
        });
        cursorDot.classList.add("xl:hidden");
        cursorDot2.classList.remove("xl:hidden");
        cursorDot2.classList.remove("lg:hidden");
        cursorDot2.classList.add("active");
        cursorDot2.style.left = `${event.clientX}px`;
        cursorDot2.style.top = `${event.clientY}px`;
        accountBtn.style.display = "block";
        accountBtn.style.left = `${event.clientX}px`;
        accountBtn.style.top = `${event.clientY + 30}px`;
      };

      const handleMouseOut = () => {
        gsap.to(cursorDot, {
          scale: 1,
          opacity: 1,
          duration: 2,
        });
        cursorDot.classList.remove("xl:hidden");
        cursorDot2.classList.add("hidden");
        cursorDot2.classList.add("xl:hidden");
        cursorDot2.classList.add("lg:hidden");
        accountBtn.style.display = "none";
      };

      // Apply hover events to buttons and news items
      newItems.forEach((item) => {
        item.addEventListener("mouseover", handleMouseOver);
        item.addEventListener("mouseout", handleMouseOut);
      });

      btns.forEach((btn) => {
        btn.addEventListener("mouseover", () => {
          gsap.to(cursorDot, {
            scale: 0.5,
            opacity: 1,
            duration: 0.3,
          });
        });
        btn.addEventListener("mouseout", () => {
          gsap.to(cursorDot, {
            scale: 1,
            opacity: 1,
            duration: 0.3,
          });
        });
      });

      // Ensure hover states are handled correctly
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
<style scoped>

.cursor_dot{

}
@media (max-width: 768px){
  .cursor_dot {
    display: none !important;
  }
  .cursor_dot_2 {
    display: none !important;
  }
}
</style>
