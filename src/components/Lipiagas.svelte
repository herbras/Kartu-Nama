<script lang="ts">
  import { writable } from "svelte/store";

  export const selectedID = writable(null);
  export const selectedName = writable(null);
  const Logo = [
    {
      Nama: "Logo LIPIA",
      Url: "https://ocnrhhktpxhcvtsspjdu.supabase.co/storage/v1/object/public/lipia/LIPIA%20LOGO.png?download",
    },
    {
      Nama: "Logo LIPIA Baru",
      Url: "https://ocnrhhktpxhcvtsspjdu.supabase.co/storage/v1/object/public/lipia/LOGO%20LIPIA%20BARU.JPG?download",
    },
    {
      Nama: "Mamlakah Syariah",
      Url: "https://ocnrhhktpxhcvtsspjdu.supabase.co/storage/v1/object/public/lipia/Mamlakah%20Syariah.PNG?download",
    },
    {
      Nama: "Mamlakah Hitam Rata Kanan",
      Url: "https://ocnrhhktpxhcvtsspjdu.supabase.co/storage/v1/object/public/lipia/Mamlakah_Hitam_Rata%20Kanan.png?download",
    },
    {
      Nama: "Mamlakah Hitam Rata Tengah",
      Url: "https://ocnrhhktpxhcvtsspjdu.supabase.co/storage/v1/object/public/lipia/Mamlakah_Hitam_Rata%20Tengah.PNG?download",
    },
    {
      Nama: "Mamlakah Putih Rata Kanan",
      Url: "https://ocnrhhktpxhcvtsspjdu.supabase.co/storage/v1/object/public/lipia/Mamlakah_Putih_Rata%20Kanan.PNG?download",
    },
    {
      Nama: "Mamlakah Putih Rata Kanan",
      Url: "https://ocnrhhktpxhcvtsspjdu.supabase.co/storage/v1/object/public/lipia/Mamlakah_Putih_Tengah%20Kanan.PNG?download",
    },
    {
      Nama: "Bismillah Tulis Tangan",
      Url: "https://ocnrhhktpxhcvtsspjdu.supabase.co/storage/v1/object/public/lipia/bismilah%20tulis%20tangan.png?download",
    },
  ];

</script>


<div
  class="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 lg:mb-16"
>
  {#each Logo as logos}
      <a
        href={logos.Url}
        class="square-container items-center bg-cover bg-center rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative"
    
      >
        <div class="absolute inset-0 bg-black opacity-40" />
        <!-- Masking ditambahkan di sini -->
        <h3 class="text-white text-lg font-bold absolute top-4 left-4">
          {logos.Nama}
        </h3>

        
      </a>
  {/each}
</div>

<style>
  .scroll-container::-webkit-scrollbar {
    height: 8px;
  }

  .scroll-container::-webkit-scrollbar-thumb {
    background: #a0aec0;
    border-radius: 999px;
  }

  /* CSS tambahan */
  .square-container::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .scroll-container::-webkit-scrollbar-track {
    background: #edf2f7;
    border-radius: 999px;
    margin-bottom: 45px;
  }
  .active {
    background-color: #007bff !important;
    color: white !important;
  }
</style>
