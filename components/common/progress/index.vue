<template>
  <div class="bg-[rgba(255,255,255,0.15)] relative h-2 w-full rounded-[4px]">
    <div
      class="absolute top-0 left-0 h-full rounded-[4px]"
      :style="{
        width: `${percentage}%`,
        background: 'linear-gradient(272deg, #FDF2CB 1.35%, #DABB6B 98.65%)',
      }"
    >
      <span
        class="bg-[#FDF2CB] absolute -right-4 bottom-5 rounded-[6px] px-[7px] py-1 text-xs lg:text-[13px] text-[#000] font-semibold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="7"
          viewBox="0 0 15 7"
          fill="none"
          class="absolute -bottom-[7px] left-1/2 -translate-x-1/2"
        >
          <path d="M7.5 7L14.5 0H0.5L7.5 7Z" fill="#FDF2CB" />
        </svg>
        {{ percentage }}%
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TooltipProgress",
  props: {
    percentage: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped></style>
