<template>
  <section id="projects" class="bg-[#F8F8F8] py-16">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800">Project</h2>
        <h2 class="mb-1 mt-4 text-xl text-gray-800 sm:text-2xl lg:text-2xl">
          Berikut adalah beberapa projek yang telah saya buat, untuk lebih
          lengkapnya bisa ke akun
          <a href="https://github.com/Niervash"
            ><span class="text-[#4287f5] font-semibold">GitHub</span></a
          >

          saya
        </h2>
      </div>

      <!-- Projek -->
      <div class="mb-12">
        <div
          class="flex w-full flex-wrap justify-center px-5 xl:mx-auto xl:w-10/12"
        >
          <div class="mb-12 p-4 md:w-1/2">
            <div class="overflow-hidden rounded-md shadow-md">
              <img
                src="../assets/img/project/laporParkir-API.png"
                alt="Landing Page"
                width="w-full"
              />
            </div>
            <h3 class="mt-5 mb-3 text-2xl font-bold text-black">
              Deteksi Parkir liar - API
            </h3>
            <p class="text-base font-medium text-secondary">
              Sistem di buat dengan menggunakan bahasa pemrograman python,
              algoritma yang di gunakan hanya menggunakan algoritma sederhana
              yaitu
              <span class="text-[#4287f5] font-bold"><H2>KNN.</H2></span>
              Implementasi untuk pembuatan API menggunakan flask, dengan deploy
              model ML pada website Render. Berikut link repository :
              <span
                ><H2 class="text-[#4287f5] font-bold">
                  <a href="https://github.com/Niervash/Lapor_parkir_Ml"
                    >GITHUB.</a
                  ></H2
                ></span
              >
            </p>
          </div>
          <div class="mb-12 p-4 md:w-1/2">
            <div class="overflow-hidden rounded-md shadow-md">
              <img
                src="../assets/img/project/Batik_Detection-Paper.png"
                alt="Landing Page"
                width="w-full"
              />
            </div>
            <h3 class="mt-5 mb-3 text-2xl font-bold text-black">
              Batik Bomba Detection - Paper
            </h3>
            <p class="text-base font-medium text-secondary">
              Sistem di buat dengan menggunakan bahasa pemrograman python,
              metode deep learning di gunakan dalam penelitian tersebut dengan
              memanfaatkan algortima transfer learning yaitu algortima
              <span class="text-[#4287f5] font-bold"
                ><H2>Efficient-Net.</H2></span
              >
              Berikut link code program :
              <span
                ><H2 class="text-[#4287f5] font-bold">
                  <a
                    href="https://colab.research.google.com/drive/1YzEoloAyJq9N-slS70HJWXLcqCkL8Djl"
                    >COLAB.</a
                  ></H2
                ></span
              >
            </p>
          </div>
          <div class="mb-12 p-4 md:w-1/2">
            <div class="overflow-hidden rounded-md shadow-md">
              <img
                src="../assets/img/kamingsun.jpg"
                alt="Landing Page"
                width="w-full"
              />
            </div>
            <h3 class="mt-5 mb-3 text-2xl font-bold text-black">Coming Soon</h3>
            <p class="text-base font-medium text-secondary">Deskripsi</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
