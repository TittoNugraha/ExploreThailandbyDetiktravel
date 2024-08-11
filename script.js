// Initialize Swiper
const swiper = new Swiper(".swiper-container", {
  loop: true, // Untuk looping gambar
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000, // Durasi transisi otomatis
    disableOnInteraction: false,
  },
  spaceBetween: 10, // Spasi antara gambar
  slidesPerView: 1, // Jumlah slide yang ditampilkan
});

$('.navbar-toggler').click(function() {
    $('.navbar-collapse').toggle();
});