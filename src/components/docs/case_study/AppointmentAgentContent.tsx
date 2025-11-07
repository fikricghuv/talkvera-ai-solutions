import AppointmentAgentFlowchart from './flowchart/AppointmentAgentFlowchart';

const AppointmentAgentContent = () => {
    return (
        <div className="space-y-8">

            <h1 className="text-4xl font-bold mb-6">
                Appointment Agent | Sistem Penjadwalan & Manajemen Pengguna Berbasis AI
            </h1>

            {/* --- 1. Gambaran Proyek --- */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Gambaran Proyek</h2>
                <p className="leading-relaxed">
                    <strong>Appointment Agent</strong> adalah sistem penjadwalan cerdas yang mengintegrasikan 
                    <strong> Google Calendar</strong> dan <strong>PostgreSQL</strong> untuk memberikan pengalaman booking 
                    janji temu yang cepat, intuitif, dan sepenuhnya otomatis. Dibangun di atas platform 
                    <strong> n8n</strong>, agen berbasis AI ini memungkinkan pengguna menjadwalkan, memperbarui, 
                    atau mengelola janji temu melalui bahasa alami—tanpa formulir, tanpa UI rumit.
                </p>

                <p className="leading-relaxed mt-3">
                    Agen ini menangani seluruh siklus janji temu, mempertahankan profil pengguna, menerapkan aturan bisnis 
                    seperti jam kerja (08.00–17.00), serta memastikan konsistensi data melalui validasi cerdas. 
                    Ia mengingat konteks percakapan, meminta konfirmasi sebelum tindakan penting, dan menyampaikan komunikasi 
                    yang jelas sepanjang interaksi.
                </p>
            </div>

            <AppointmentAgentFlowchart />

            {/* --- 2. Fase 1: Input Bahasa Alami & Webhook Aman --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Fase 1: Input Bahasa Alami & Webhook Aman</h2>
                
                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Dimulai saat pengguna mengirim <strong>permintaan penjadwalan</strong> melalui 
                    <strong> POST request</strong> ke endpoint <code>/appointment-agent</code> dengan 
                    <strong> header authentication</strong>.
                </p>

                <h3 className="text-xl font-semibold mt-4">Kemampuan Utama</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Gateway API Aman:</span> 
                        Menerima <strong>HTTP POST</strong> dengan autentikasi header untuk memastikan hanya aplikasi sah 
                        yang dapat mengakses sistem penjadwalan.
                    </li>
                    <li>
                        <span className="font-medium text-white">Antarmuka Percakapan:</span> 
                        Mendukung permintaan bahasa alami seperti “Buatkan jadwal Senin jam 2 siang” atau 
                        “Ubah janji temu saya ke Rabu pagi”.
                    </li>
                    <li>
                        <span className="font-medium text-white">Konteks Percakapan Berkelanjutan:</span> 
                        Mempertahankan konteks agar pengguna dapat memperbaiki permintaan atau mengajukan pertanyaan lanjutan.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Fase ini menyediakan <strong>pintu masuk percakapan yang aman</strong>, ideal untuk integrasi dengan chat apps, 
                    mobile apps, atau frontend kustom.
                </p>
            </div>

            {/* --- 3. Fase 2: Manajemen Janji Temu Cerdas --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Fase 2: Manajemen Janji Temu Cerdas</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Berjalan ketika agen AI memproses permintaan dan menentukan tindakan sesuai intent pengguna.
                </p>

                <h3 className="text-xl font-semibold mt-4">Kemampuan Utama</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">

                    <li>
                        <span className="font-medium text-white">Pemahaman Bahasa Lanjutan:</span> 
                        Menggunakan <strong>OpenRouter Chat Model</strong> untuk mengekstraksi tanggal, waktu, 
                        dan tujuan dari kalimat percakapan.
                    </li>

                    <li>
                        <span className="font-medium text-white">Integrasi Google Calendar:</span>
                        <ul className="list-disc space-y-1 mt-1 pl-6">
                            <li><strong>Buat Janji Temu:</strong> Menjadwalkan janji dengan data lengkap.</li>
                            <li><strong>Lihat Janji Temu:</strong> Mengambil jadwal yang sudah ada.</li>
                            <li><strong>Perbarui Janji Temu:</strong> Memodifikasi jadwal secara aman.</li>
                            <li><strong>Batalkan Janji Temu:</strong> Menghapus janji setelah konfirmasi.</li>
                        </ul>
                    </li>

                    <li>
                        <span className="font-medium text-white">Penerapan Aturan Bisnis:</span> 
                        Menolak jadwal di luar jam kerja (08.00–17.00) dan memberi rekomendasi waktu alternatif.
                    </li>

                    <li>
                        <span className="font-medium text-white">Alur Logika Cerdas:</span> 
                        Selalu melakukan <strong>Get Appointment</strong> terlebih dahulu sebelum Update/Cancel.
                    </li>

                    <li>
                        <span className="font-medium text-white">Protokol Konfirmasi:</span> 
                        Merangkum jadwal dan meminta konfirmasi eksplisit sebelum tindakan eksekusi.
                    </li>

                    <li>
                        <span className="font-medium text-white">Memori Percakapan PostgreSQL:</span> 
                        Menyimpan konteks sesi untuk dialog multi-turn yang alami.
                    </li>
                </ul>
            </div>

            {/* --- 4. Fase 3: Manajemen Profil Pengguna --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Fase 3: Manajemen Profil Pengguna</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Terpicu ketika pengguna perlu membuat, memperbarui, atau mengambil profil yang tersimpan di PostgreSQL.
                </p>

                <h3 className="text-xl font-semibold mt-4">Kemampuan Utama</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">

                    <li>
                        <span className="font-medium text-white">Simpan Informasi Pengguna:</span> 
                        Membuat profil baru dengan validasi email sebelum penyimpanan.
                    </li>

                    <li>
                        <span className="font-medium text-white">Ambil Informasi Pengguna:</span> 
                        Mengambil data nama dan email berdasarkan alamat email pengguna.
                    </li>

                    <li>
                        <span className="font-medium text-white">Perbarui Informasi Pengguna:</span> 
                        Menggunakan pola wajib <strong>“get-then-update”</strong> untuk transparansi.
                        <ul className="list-disc space-y-1 mt-1 pl-6">
                            <li>Mengambil data & ID pengguna terlebih dahulu</li>
                            <li>Menampilkan informasi lama sebelum perubahan</li>
                            <li>Memperbarui hanya field yang diminta</li>
                        </ul>
                    </li>

                    <li>
                        <span className="font-medium text-white">Validasi Data:</span> 
                        Memastikan format email valid sebelum update/insert.
                    </li>

                    <li>
                        <span className="font-medium text-white">Integrasi PostgreSQL:</span> 
                        Menggunakan akun <strong>pgvector</strong> untuk penyimpanan terstruktur & reliabel.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Fase ini memastikan setiap janji temu selalu terhubung dengan identitas pengguna yang konsisten.
                </p>
            </div>

            {/* --- 5. Fase 4: Pemrosesan & Pengiriman Respons --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Fase 4: Pemrosesan & Pengiriman Respons</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Berjalan setelah agen AI menyelesaikan operasi penjadwalan atau manajemen pengguna.
                </p>

                <h3 className="text-xl font-semibold mt-4">Kemampuan Utama</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">

                    <li>
                        <span className="font-medium text-white">Komunikasi Jelas:</span> 
                        Memberikan respons bahasa alami yang mudah dipahami.
                    </li>

                    <li>
                        <span className="font-medium text-white">Ringkasan Tindakan:</span> 
                        Menyampaikan detail lengkap setelah membuat, memperbarui, atau membatalkan janji.
                    </li>

                    <li>
                        <span className="font-medium text-white">Webhook Response:</span> 
                        Mengirim output terstruktur melalui node <strong>Respond to Webhook</strong>.
                    </li>

                    <li>
                        <span className="font-medium text-white">Penanganan Error Elegan:</span> 
                        Memberikan penjelasan dan solusi bila terjadi masalah data atau proses.
                    </li>

                    <li>
                        <span className="font-medium text-white">Permintaan Konfirmasi:</span> 
                        Mencegah perubahan kritis tanpa persetujuan eksplisit.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Fase ini memastikan pengguna menerima respon yang akurat, profesional, dan mudah dipahami.
                </p>
            </div>

            {/* --- ROI --- */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Return on Investment</h2>

                <p className="leading-relaxed">
                    Implementasi <strong>Appointment Agent</strong> menghadirkan peningkatan efisiensi operasional yang nyata:
                </p>

                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><span className="font-medium text-white">Penjadwalan 24/7:</span> Dapat diakses kapan saja tanpa batas jam kantor.</li>
                    <li><span className="font-medium text-white">Tanpa Friksi:</span> Pengguna cukup mengirim teks, bukan membuka UI kalender.</li>
                    <li><span className="font-medium text-white">Minim Kesalahan:</span> Workflow get-before-update menghindari kesalahan fatal.</li>
                    <li><span className="font-medium text-white">Pengalaman Konsisten:</span> Memori percakapan membuat interaksi terasa personal.</li>
                    <li><span className="font-medium text-white">Beban Admin Turun:</span> Menghilangkan tugas manual dalam menjadwalkan.</li>
                    <li><span className="font-medium text-white">Profil Tersentralisasi:</span> Data pengguna terkelola dengan baik dan dapat dilacak.</li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Arsitektur modular n8n memungkinkan perluasan fitur ke depannya tanpa mengubah struktur inti.
                </p>
            </div>
        </div>
    );
};

export default AppointmentAgentContent;
