import SalesAgentFlowchart from './flowchart/SalesAgentFlowchart';

const SalesAgentContent = () => {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl font-bold mb-6">
                Sales Agent | Sistem CRM & Manajemen Penawaran Berbasis AI
            </h1>

            {/* --- 1. Gambaran Proyek --- */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Gambaran Proyek</h2>
                <p className="leading-relaxed">
                    <strong>Sales Agent</strong> adalah sistem interaksi pelanggan berbasis AI yang mengotomatisasi seluruh alur kerja penjualan—mulai dari pertanyaan awal, pengumpulan data pelanggan, pembuatan penawaran, hingga pencatatan CRM. Dibangun di atas <strong>platform otomasi n8n</strong>, agen ini menangani percakapan pelanggan, mengumpulkan informasi penting, menghasilkan penawaran secara akurat, dan melakukan notifikasi otomatis kepada tim orders.
                </p>
                <p className="leading-relaxed mt-3">
                    Agen ini menghilangkan entri data manual dengan menyimpan detail pelanggan (nama, email, nomor telepon, catatan) secara otomatis ke CRM PostgreSQL, mempertahankan konteks percakapan, dan mengirim notifikasi real-time ke Telegram saat penawaran selesai dibuat. Setiap data divalidasi sebelum disimpan, interaksi terdokumentasi sebagai catatan CRM, dan pelanggan mendapatkan layanan yang ramah serta responsif 24/7.
                </p>
            </div>

            <SalesAgentFlowchart />

            {/* --- 2. Fase 1: Input Bahasa Alami & Webhook Aman --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Fase 1: Input Bahasa Alami & Webhook Aman</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Dimulai saat pelanggan mengirim pertanyaan melalui <strong>POST request</strong> ke endpoint <code>/sales-agent</code> dengan <strong>header authentication</strong>.
                </p>

                <h3 className="text-xl font-semibold mt-4">Kemampuan Utama</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Gateway API Aman:</span> 
                        Menerima <strong>HTTP POST</strong> dengan autentikasi header, menjaga keamanan data pelanggan dan bisnis.
                    </li>
                    <li>
                        <span className="font-medium text-white">Antarmuka Percakapan:</span> 
                        Mendukung pesan bahasa alami seperti “Minta penawaran 100 unit Product X” atau “Berapa harga paket enterprise?”.
                    </li>
                    <li>
                        <span className="font-medium text-white">Manajemen Sesi:</span> 
                        Mempertahankan percakapan menggunakan <code>session_id</code> sehingga dialog multi-turn tetap konsisten.
                    </li>
                    <li>
                        <span className="font-medium text-white">Pemrosesan Raw Body:</span>
                        Menangani format JSON fleksibel dari chat apps, web forms, atau aplikasi kustom.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Fase ini menciptakan <strong>API percakapan yang aman dan fleksibel</strong>, dapat diintegrasikan dengan widget chat, aplikasi mobile, atau platform pesan apa pun.
                </p>
            </div>

            {/* --- 3. Fase 2: Manajemen Informasi Pelanggan --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Fase 2: Manajemen Informasi Pelanggan Cerdas</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Berjalan ketika agen AI perlu memverifikasi identitas pelanggan atau mengumpulkan informasi untuk CRM.
                </p>

                <h3 className="text-xl font-semibold mt-4">Kemampuan Utama</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Pemahaman Bahasa Lanjutan:</span> 
                        Menggunakan <strong>GPT-4o-mini via OpenRouter</strong> dengan output profesional dan natural.
                    </li>
                    <li>
                        <span className="font-medium text-white">Pengenalan Pelanggan Cerdas:</span> 
                        Mengecek CRM terlebih dahulu melalui <strong>Get Customer from CRM</strong> untuk mengidentifikasi pelanggan lama.
                    </li>
                    <li>
                        <span className="font-medium text-white">Pengumpulan Data Otomatis:</span> 
                        Mengumpulkan:
                        <ul className="list-disc space-y-1 mt-1 pl-6">
                            <li><strong>Nama lengkap</strong></li>
                            <li><strong>Email</strong> (dengan validasi format)</li>
                            <li><strong>Nomor telepon</strong> (opsional)</li>
                            <li><strong>Catatan awal</strong> dari kebutuhan pelanggan</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-medium text-white">Simpan Pelanggan ke CRM:</span>
                        Memasukkan data ke tabel <code>customers</code> dengan timestamp dan catatan awal.
                    </li>
                    <li>
                        <span className="font-medium text-white">Protokol Validasi Data:</span>
                        Memastikan format email benar sebelum penyimpanan.
                    </li>
                    <li>
                        <span className="font-medium text-white">Memori Percakapan PostgreSQL:</span>
                        Menyimpan riwayat percakapan berdasarkan session ID untuk interaksi multi-turn yang konsisten.
                    </li>
                </ul>
            </div>

            {/* --- 4. Fase 3: Pembuatan Penawaran Otomatis & Pencatatan CRM --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Fase 3: Pembuatan Penawaran Otomatis & Pencatatan CRM</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Dijalankan ketika kebutuhan pelanggan sudah jelas dan agen memiliki cukup informasi untuk membuat penawaran.
                </p>

                <h3 className="text-xl font-semibold mt-4">Kemampuan Utama</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">

                    <li>
                        <span className="font-medium text-white">Penyusunan Penawaran Cerdas:</span>
                        Agen menganalisis kebutuhan pelanggan dan bertanya ulang bila detail belum lengkap.
                    </li>

                    <li>
                        <span className="font-medium text-white">Simpan Penawaran ke CRM:</span>
                        Menyimpan ke tabel <code>quotes</code> termasuk:
                        <ul className="list-disc space-y-1 mt-1 pl-6">
                            <li><strong>Email pelanggan</strong></li>
                            <li><strong>List item & spesifikasi</strong></li>
                            <li><strong>Total harga</strong></li>
                            <li><strong>Tanggal berlaku</strong></li>
                            <li><strong>Detail penawaran & syarat</strong></li>
                        </ul>
                    </li>

                    <li>
                        <span className="font-medium text-white">Catatan CRM Otomatis:</span>
                        Merekam:
                        <ul className="list-disc space-y-1 mt-1 pl-6">
                            <li>Jenis interaksi</li>
                            <li>Ringkasan aktivitas</li>
                            <li>Timestamp</li>
                        </ul>
                    </li>

                    <li>
                        <span className="font-medium text-white">Protokol Konfirmasi Penawaran:</span>
                        Memastikan pemahaman yang sama sebelum penawaran dibuat.
                    </li>

                    <li>
                        <span className="font-medium text-white">Audit Trail Lengkap:</span>
                        Semua interaksi tercatat dan dapat dilacak.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Fase ini memastikan tidak ada data yang hilang dan semua penawaran terdokumentasi dengan rapi di CRM.
                </p>
            </div>

            {/* --- 5. Fase 4: Notifikasi Tim Orders & Pengiriman Respons --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Fase 4: Notifikasi Tim Orders & Pengiriman Respons</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Berjalan setelah penawaran selesai dibuat atau ketika perlu eskalasi ke tim orders.
                </p>

                <h3 className="text-xl font-semibold mt-4">Kemampuan Utama</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Notifikasi Telegram Real-Time:</span>
                        Mengirim ringkasan pelanggan, penawaran, urgensi, dan langkah berikutnya.
                    </li>

                    <li>
                        <span className="font-medium text-white">Handoff Mulus ke Tim Orders:</span>
                        Memberikan konteks lengkap tanpa perlu mengakses CRM.
                    </li>

                    <li>
                        <span className="font-medium text-white">Pengiriman Respons ke Pelanggan:</span>
                        Mengirim JSON terstruktur melalui <strong>Respond to Webhook</strong>.
                    </li>

                    <li>
                        <span className="font-medium text-white">Komunikasi Jelas & Profesional:</span>
                        Memberikan penjelasan, ringkasan, dan langkah selanjutnya.
                    </li>

                    <li>
                        <span className="font-medium text-white">Penanganan Error yang Baik:</span>
                        Menyampaikan solusi saat terjadi kesalahan.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Fase ini memastikan tidak ada penawaran atau peluang yang terlewat dan pelanggan tetap mendapatkan layanan prima.
                </p>
            </div>

            {/* --- ROI --- */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Return on Investment</h2>

                <p className="leading-relaxed">
                    Implementasi <strong>Sales Agent</strong> menghadirkan keuntungan bisnis yang signifikan:
                </p>

                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><span className="font-medium text-white">Eliminasi Entri Data Manual:</span> Mengurangi kesalahan dan mempercepat proses.</li>
                    <li><span className="font-medium text-white">Pembuatan Penawaran Otomatis:</span> Penawaran siap dalam hitungan detik.</li>
                    <li><span className="font-medium text-white">Layanan 24/7:</span> Menjawab pertanyaan dan membuat penawaran kapan saja.</li>
                    <li><span className="font-medium text-white">Waktu Respons Lebih Cepat:</span> Meningkatkan kepuasan pelanggan dan konversi.</li>
                    <li><span className="font-medium text-white">Skalabilitas Tanpa Penambahan SDM:</span> Menangani banyak pelanggan sekaligus.</li>
                    <li><span className="font-medium text-white">Kualitas Konsisten:</span> Validasi data & format penawaran seragam.</li>
                    <li><span className="font-medium text-white">Pengenalan Pelanggan:</span> Interaksi terasa personal dan relevan.</li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Arsitektur modular n8n juga memudahkan penambahan fitur di kemudian hari tanpa perubahan besar.
                </p>
            </div>
        </div>
    );
};

export default SalesAgentContent;
