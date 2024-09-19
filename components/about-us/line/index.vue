<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <canvas id="myCanvas" width="400" height="400" class="border border-black"></canvas>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const canvas = document.getElementById("myCanvas");
      const ctx = canvas.getContext("2d");
  
      // Vẽ đường theo mô tả
      ctx.beginPath();
      ctx.moveTo(50, 350); // Điểm bắt đầu
  
      // Đoạn thẳng đi lên
      ctx.lineTo(50, 250);
  
      // Đoạn cong sang trái
      ctx.bezierCurveTo(50, 200, 0, 200, 0, 150);
  
      // Đường chéo lên trên sang trái
      ctx.lineTo(-50, 100);
  
      // Đoạn cong lên trên sang phải
      ctx.bezierCurveTo(-50, 50, 0, 50, 50, 50);
  
      // Đoạn thẳng lên trên tiếp
      ctx.lineTo(50, 0);
  
      // Kết thúc và vẽ
      ctx.stroke();
    }
  }
  </script>
  
  <style>
  /* Thêm các style tùy chỉnh nếu cần */
  </style>
  