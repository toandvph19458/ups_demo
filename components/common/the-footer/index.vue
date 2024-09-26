<template>
  <footer id="footer">
    <div class="bg-gradient-to-l from-[#02E56A] to-[#0AB157] from-30% to-95%">
      <div class="px-6 md:px-6 lg:px-10 xl:px-auto">
        <div class="w-full max-w-[1730px] mx-auto py-10 lg:pt-12 lg:pb-20 xl:py-[100px]">
          <div
            class="inline-flex w-full sm:w-[218px] md:w-[272px] lg:w-[272px] xl:w-[309px] 2xl:w-[409px] h-[54px] sm:h-[50px] md:h-[62px] lg:h-[62px] xl:h-[70px] 2xl:h-[94px] relative"
          >
            <nuxt-img
              format="webp"
              loading="lazy"
              quality="80"
              src="/logo/logo-footer.png"
              width="409"
              height="94"
              alt="UPS"
              class="absolute w-full h-full object-contain"
            />
          </div>
          <div
            class="h-max grid grid-cols-12 gap-y-10 md:gap-10 lg:gap-0"
          >
            <div class="col-span-full md:col-span-6 lg:col-span-5">
              <div class="w-full lg:w-[75%]">
                <div class="flex flex-col">
                  <div
                    class="w-full flex flex-col gap-5 md:gap-3 2xl:gap-4 mt-6 xl:mt-10"
                  >
                    <nuxt-link href="/" class="flex items-start gap-2">
                      <nuxt-img
                        format="webp"
                        width="24"
                        alt="UPS"
                        src="/icons/address-icon.svg"
                        class="w-[18px] h-[18px] 2xl:w-6 2xl:h-6"
                      />
                      <span
                        class="text-base 2xl:text-[13.5px] 3xl:text-xl text-[#15171E] font-bold"
                      >
                        Địa chỉ: Tầng 12, tòa nhà CDC số 25 phố Lê Đại Hành,
                        Phường Lê Đại Hành, Quận Hai Bà Trưng, Hà Nội
                      </span>
                    </nuxt-link>

                    <nuxt-link
                      href="tel:0243.944.6666"
                      class="flex items-start gap-2"
                    >
                      <nuxt-img
                        format="webp"
                        width="24"
                        alt="UPS"
                        src="/icons/phone-icon.svg"
                        class="w-[18px] h-[18px] 2xl:w-6 2xl:h-6"
                      />
                      <span
                        class="text-base 2xl:text-[13.5px] 3xl:text-xl text-[#15171E] font-bold"
                      >
                        Tel: (024) 3 944 6666 - Fax: (024) 3944 6969
                      </span>
                    </nuxt-link>

                    <nuxt-link
                      href="mailto:info@upstock.com.vn"
                      class="flex items-start gap-2"
                    >
                      <nuxt-img
                        format="webp"
                        width="24"
                        alt="UPS"
                        src="/icons/mail-icon.svg"
                        class="w-[18px] h-[18px] 2xl:w-6 2xl:h-6"
                      />
                      <span
                        class="text-base 2xl:text-[13.5px] 3xl:text-xl text-[#15171E] font-bold"
                      >
                        Email: info@upstock.com.vn
                      </span>
                    </nuxt-link>
                  </div>
                </div>

                <!-- SOSIAL -->
                <!-- <div class="mt-3 md:mt-4 flex gap-4">
									<nuxt-link
										href="/"
										target="_blank"
										class="inline-flex items-center justify-center relative w-[18px] 2xl:w-6 h-[18px] 2xl:h-6"
									>
										<nuxt-img
											format="webp"
											loading="lazy"
											alt="Facebook"
											width="24"
											src="/social/facebook.svg"
											class="absolute w-full h-full object-contain"
										/>
									</nuxt-link>
									<nuxt-link
										href="/"
										target="_blank"
										class="inline-flex items-center justify-center relative w-[18px] 2xl:w-6 h-[18px] 2xl:h-6"
									>
										<nuxt-img
											format="webp"
											loading="lazy"
											alt="instagram"
											width="24"
											src="/social/instagram.svg"
											class="absolute w-full h-full object-contain"
										/>
									</nuxt-link>
									<nuxt-link
										href="/"
										target="_blank"
										class="inline-flex items-center justify-center relative w-[18px] 2xl:w-6 h-[18px] 2xl:h-6"
									>
										<nuxt-img
											format="webp"
											loading="lazy"
											alt="Twitter"
											width="24"
											src="/social/twitter.svg"
											class="absolute w-full h-full object-contain"
										/>
									</nuxt-link>
									<nuxt-link
										href="/"
										target="_blank"
										class="inline-flex items-center justify-center relative w-[18px] 2xl:w-6 h-[18px] 2xl:h-6"
									>
										<nuxt-img
											format="webp"
											loading="lazy"
											alt="Tiktok"
											width="24"
											src="/social/tiktok.svg"
											class="absolute w-full h-full object-contain"
										/>
									</nuxt-link>
									<nuxt-link
										href="/"
										target="_blank"
										class="inline-flex items-center justify-center relative w-[18px] 2xl:w-6 h-[18px] 2xl:h-6"
									>
										<nuxt-img
											format="webp"
											loading="lazy"
											alt="Telegram"
											width="24"
											src="/social/telegram.svg"
											class="absolute w-full h-full object-contain"
										/>
									</i>
								</div>
							</nuxt-link>

							<nuxt-link
								to="https://trade.upstock.com.vn/#/price/bang-gia/vn30"
								target="_blank"
								class="btn h-8 2xl:h-12 px-4 2xl:px-5 inline-flex gap-3 items-center rounded-full border lg:border-transparent border-[#222] hover:border-[#222]"
							>
								<span class="text-sm 3xl:text-lg font-bold"> Đăng nhập/Giao dịch ngay </span>
								<div class="inline-flex gap-1 w-3 2xl:w-4 h-3 2xl:h-4 overflow-hidden relative">
									<i class="w-full h-full inline-flex absolute">
										<nuxt-img
											format="webp"
											loading="lazy"
											alt="Lulu"
											width="24"
											src="/social/lulu.svg"
											class="absolute w-full h-full object-contain"
										/>
									</nuxt-link>
								</div> -->
              </div>
            </div>

            <div
              class="col-span-full md:col-span-6 lg:col-span-7 flex flex-col justify-between w-full gap-10 lg:gap-10"
            >
              <div
                class="grid grid-cols-12 gap-y-7 gap-x-6 md:gap-x-4 md:gap-7 xl:gap-10 mt-0 md:mt-6 xl:mt-10 3xl:gap-[60px]"
              >
                <div
                  class="col-span-6 lg:col-span-3 space-y-4 md:space-y-2 3xl:space-y-3"
                >
                  <h4
                    class="text-base 2xl:text-lg 3xl:text-xl text-[#000] font-bold"
                  >
                  KH Cá nhân
                  </h4>

                  <div class="w-[10px] h-[1px] bg-[#3A6A50]"></div>

                  <div class="flex gap-4 md:gap-2 3xl:gap-3 flex-col">
                    <nuxt-link
                      to="/coming-soon"
                      class="text-base 2xl:text-xs 3xl:text-sm text-[#000] font-medium"
                    >
                      
                      <p class="link-effect inline-block">Hot Deals</p>
                    </nuxt-link>
                    
                    <nuxt-link
                      to="/bieu-phi"
                      class="text-base 2xl:text-xs 3xl:text-sm text-[#000] font-medium"
                    >
                    <p class="link-effect inline-block">Biểu phí giao dịch</p>
                    </nuxt-link>
                  </div>
                </div>

                <div class="col-span-6 lg:col-span-3 space-y-4 md:space-y-2 3xl:space-y-3">
                  <h4
                    class="text-base 2xl:text-lg 3xl:text-xl text-[#000] font-bold"
                  >
                    KH Doanh nghiệp
                  </h4>

                  <div class="w-[10px] h-[1px] bg-[#3A6A50]"></div>

                  <div class="flex gap-4 md:gap-2 3xl:gap-3 flex-col">
                    <nuxt-link
                      to="/coming-soon"
                      class="text-base 2xl:text-xs 3xl:text-sm text-[#000] font-medium "
                    >
                     <p class="link-effect inline-block">Tư vấn tài chính</p> 
                    </nuxt-link>
                    <nuxt-link
                      to="/tin-tuc"
                      class="text-base 2xl:text-xs 3xl:text-sm text-[#000] font-medium "
                    >
                      <p class="link-effect inline-block">Tin đấu giá</p>
                    </nuxt-link>
                  </div>
                </div>

                <div class="col-span-6 lg:col-span-3 space-y-4 md:space-y-2 3xl:space-y-3">
                  <h4
                    class="text-base 2xl:text-lg 3xl:text-xl text-[#000] font-bold"
                  >
                    Đầu tư cùng UPS
                  </h4>

                  <div class="w-[10px] h-[1px] bg-[#3A6A50]"></div>

                  <div class="flex gap-4 md:gap-2 3xl:gap-3 flex-col">
                    <nuxt-link
                      to="/coming-soon"
                      class="text-base 2xl:text-xs 3xl:text-sm text-[#000] font-medium"
                    >
                    <p class="link-effect inline-block">Nhận định thị trường</p>
                      
                    </nuxt-link>
                    <nuxt-link
                      to="/hdsd"
                      class="text-base 2xl:text-xs 3xl:text-sm text-[#000] font-medium"
                    >
                    <p class="link-effect inline-block">Hỗ trợ khách hàng</p>
                      
                    </nuxt-link>
                  </div>
                </div>

                <div class="col-span-6 lg:col-span-3 space-y-4 md:space-y-2 3xl:space-y-3">
                  <h4
                    class="text-base 2xl:text-lg 3xl:text-xl text-[#000] font-bold"
                  >
                    Về UPS
                  </h4>

                  <div class="w-[10px] h-[1px] bg-[#3A6A50]"></div>

                  <div class="flex gap-4 md:gap-2 3xl:gap-3 flex-col">
                    <nuxt-link
                      to="/cong-bo-thong-tin"
                      class="text-base 2xl:text-xs 3xl:text-sm text-[#000] font-medium"
                    >
                    <p class="link-effect inline-block">Công bố thông tin</p>
                    </nuxt-link>

                    <nuxt-link
                      to="/coming-soon"
                      class="text-base 2xl:text-xs 3xl:text-sm text-[#000] font-medium"
                    >
                    <p class="link-effect inline-block"> Gia nhập UPS</p>
                     
                    </nuxt-link>
                  </div>
                </div>
              </div>

              <div class="flex gap-4 flex-wrap">
                <nuxt-link
                  to="https://onboarding.upstock.com.vn/index.html#/./open-account/check-info"
                  class="btn active group"
                >
                  <span class="text-base 3xl:text-lg"> Mở tài khoản ngay </span>
                  <div
                    class="inline-flex gap-1 w-4 h-4 overflow-hidden relative"
                  >
                    <i
                      class="w-full h-full group-hover:inline-flex hidden absolute"
                    >
                      <nuxt-img
                        src="/icons/arrow-dark-icon.svg"
                        loading="lazy"
                        width="16"
                        height="16"
                        alt="UPS"
                      />
                    </i>

                    <i
                      class="w-full h-full group-hover:hidden inline-flex absolute"
                    >
                      <nuxt-img
                        src="/icons/arrow-icon.svg"
                        loading="lazy"
                        width="16"
                        height="16"
                        alt="UPS"
                      />
                    </i>
                  </div>
                </nuxt-link>

                <nuxt-link
                  to="https://trade.upstock.com.vn/#/price/bang-gia/vn30"
                  class="btn h-8 2xl:h-12 px-4 2xl:px-5 inline-flex gap-3 items-center rounded-full border lg:border-transparent border-[#222] hover:border-[#222]"
                >
                  <span class="text-base 3xl:text-lg font-bold">
                    Đăng nhập/Giao dịch ngay
                  </span>
                  <div
                    class="inline-flex gap-1 w-3 2xl:w-4 h-3 2xl:h-4 overflow-hidden relative"
                  >
                    <i class="w-full h-full inline-flex absolute">
                      <nuxt-img
                        src="/icons/arrow-dark-icon.svg"
                        loading="lazy"
                        width="16"
                        height="16"
                        alt="UPS"
                      />
                    </i>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- COPY RIGHT -->
    <div class="bg-[#15171E]">
      <div class="px-6 md:px-6 lg:px-10 xl:px-auto">
        <div class="w-full max-w-[1730px] mx-auto">
          <div
            class="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between py-5 2xl:py-[30px]"
          >
            <p class="text-sm md:text-xs 2xl:text-sm text-white opacity-75">
              © 2024 <span class="text-green-ups">UP Securities</span>. All
              right reserved
            </p>

            <div
              class="flex flex-col md:flex-row items-center mt-[10px] md:mt-0 gap-[10px] lg:gap-6"
            >
              <nuxt-link
                href="https://ups.truecms.io/assets/fe3751e3-1c6f-4442-a671-ed2ce3e28d7d"
                class="text-sm md:text-xs 2xl:text-sm text-white opacity-75 font-medium"
              >
                Điều khoản & Quyền hạn
              </nuxt-link>
              <nuxt-link
                href="/"
                class="text-sm md:text-xs 2xl:text-sm text-white opacity-75 font-medium"
              >
                Trung tâm hỗ trợ khách hàng
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "the-footer",
  components: {},
  setup(props, ctx) {},
});
</script>

<style scoped>
.link-effect {
  display: inline-block;
  position: relative;
  transition: background-size 0.8s ease;
  background-image: linear-gradient(180deg, transparent 95%, #080808 0);
  background-repeat: no-repeat;
  background-size: 0 100%;
}

.link-effect:hover {
  background-size: 100% 100%;
}
/* .link-effect {
  display: inline-block;
  position: relative;
}
.link-effect:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.link-effect:hover:after { 
  width: 100%; 
  left: 0; 
} */
</style>
