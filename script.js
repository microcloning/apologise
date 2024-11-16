function redirectToWhatsApp() {
    const phoneNumber = "6289524106602"; // Ganti dengan nomor WhatsApp tujuan
    const message = "aku sayang kamu  ❤️";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
