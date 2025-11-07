const IntroductionContent = () => {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-bold mb-6">Pengenalan</h1>

            <p className="leading-relaxed">
                Selamat datang di dokumentasi TalkVera! Bagian ini menjadi titik awal untuk memahami alat, 
                layanan, dan cara kerja sistem kami. Tujuan kami adalah membantu Anda bekerja dengan 
                TalkVera secara lebih mudah, intuitif, dan tanpa hambatan.
            </p>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Menjelajahi Dokumentasi</h2>
                <p className="leading-relaxed">
                    Setiap kategori utama disajikan dalam bentuk menu tarik-turun yang berisi halaman 
                    penjelasan untuk setiap topik. Gunakan bilah sisi atau navigasi atas untuk menjelajahi 
                    area seperti 
                    <span className="text-white font-medium"> "Studi Kasus", "Proses Kerja", </span>
                    dan 
                    <span className="text-white font-medium"> "Agen AI".</span>
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Untuk Siapa Dokumentasi Ini</h2>
                <p className="leading-relaxed">
                    Dokumentasi ini ditujukan untuk pengembang, product lead, tim operasional, serta 
                    pemangku kepentingan yang ingin memahami dan menerapkan kemampuan AI ke dalam 
                    alur kerja mereka. Baik Anda sedang membangun proyek baru atau mengintegrasikan agen 
                    TalkVera ke sistem yang sudah ada, panduan ini membantu Anda memahami apa yang dapat 
                    dilakukan—dan bagaimana mencapainya.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Bagaimana Bekerja Sama dengan Kami</h2>
                <p className="leading-relaxed mb-3">
                    Untuk memulai, kunjungi halaman
                    <span className="text-white font-medium"> Kontak </span>
                    dan isi formulir dengan detail proyek Anda. Semakin lengkap informasi yang diberikan, 
                    semakin akurat kami dapat menentukan ruang lingkup dan solusi yang tepat untuk kebutuhan Anda.
                </p>
                <p className="leading-relaxed">
                    TalkVera berfokus pada pengembangan solusi otomatisasi AI yang sepenuhnya disesuaikan. 
                    Karena setiap bisnis memiliki kebutuhan unik, kami tidak menyediakan paket harga tetap. 
                    Sebagai gantinya, kami melakukan 
                    <span className="text-white font-medium"> asesmen teknis menyeluruh </span> 
                    untuk menyusun proposal khusus beserta estimasi investasinya.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Tips Menggunakan Dokumentasi</h2>
                <p className="leading-relaxed">
                    Setiap halaman dalam dokumentasi ditulis secara ringkas dan mudah dipahami. Anda akan 
                    menemukan judul terstruktur, penjelasan singkat, serta—bila relevan—diagram atau contoh 
                    prompt. Gunakan semua ini sebagai referensi untuk memahami cara kerja alat dan agen AI kami.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3">Masukan Sangat Kami Hargai</h2>
                <p className="leading-relaxed">
                    Kami berkomitmen menjaga dokumentasi ini tetap relevan dan bermanfaat. Jika Anda menemukan 
                    bagian yang kurang jelas atau perlu diperbaiki, jangan ragu untuk menghubungi kami. 
                    Dokumentasi ini terus berkembang mengikuti masukan pengguna dan kemajuan teknologi AI.
                </p>
            </div>
        </div>
    );
};

export default IntroductionContent;