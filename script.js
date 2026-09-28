function hubungiKami() {
  const nomor = "6281234567890";

  const pesan = encodeURIComponent("Halo, saya tertarik membuat website.");

  window.open(`https://wa.me/${nomor}?text=${pesan}`, "_blank");
}
