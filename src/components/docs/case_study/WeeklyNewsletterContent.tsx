import NewsletterGenerationFlowchart from './flowchart/NewsletterGenerationFlowchart';

const NewsletterAutomationAgentContent = () => {
    return (
        <div className="space-y-8">
            {/* TITLE */}
            <h1 className="text-4xl font-bold mb-6">
                Tim Konten | Otomatisasi Newsletter Mingguan Berbasis AI
            </h1>

            {/* OVERVIEW */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Gambaran Proyek</h2>
                <p className="leading-relaxed">
                    Kami mengembangkan alur kerja <strong>n8n</strong> yang sepenuhnya mengotomatisasi proses pembuatan dan pemformatan newsletter bisnis mingguan. 
                    Sistem ini berfungsi sebagai <strong>tim konten digital</strong> yang menangani riset awal, perencanaan konten, penulisan per seksi, penyuntingan HTML, hingga pengiriman akhir ke <strong>Gmail</strong>.
                </p>
                <p className="leading-relaxed mt-3">
                    Proses yang sebelumnya memakan waktu berjam-jam kini digantikan oleh <strong>agen AI khusus</strong> (Perencana, Penulis, Editor) yang bekerja bersama dengan <strong>parser data terstruktur</strong>. 
                    Hasilnya: konten selalu konsisten, relevan, memiliki rujukan yang jelas, dan siap dikirim dalam format email yang profesional setiap minggu.
                </p>
            </div>

            <NewsletterGenerationFlowchart />

            {/* PHASE 1 */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Fase 1: Riset Terjadwal & Perencanaan Konten</h2>
                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed">
                    Berjalan otomatis berdasarkan <strong>jadwal mingguan</strong> (contoh: setiap Senin pukul 05.00) agar newsletter selalu diproduksi tepat waktu.
                </p>
                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Fungsi Utama:</span>
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Riset Dasar (Tavily):</span> Melakukan pencarian berbasis tren tujuh hari terakhir untuk mengambil tiga artikel paling relevan terkait topik (misalnya “adopsi AI untuk UMKM”).
                    </li>
                    <li>
                        <span className="font-medium text-white">Agen Perencana (OpenAI):</span> Mengolah hasil riset untuk membuat rancangan newsletter, mencakup <strong>judul utama</strong> dan tepat <strong>tiga topik inti</strong>.
                    </li>
                    <li>
                        <span className="font-medium text-white">Validasi Data Terstruktur:</span> Parser memastikan keluaran sesuai skema JSON yang ditentukan sebelum melanjutkan proses.
                    </li>
                </ul>
            </div>

            {/* PHASE 2 */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Fase 2: Penulisan Paralel & Pendalaman Riset</h2>
                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed">
                    Berjalan setelah tiga topik terstruktur dihasilkan oleh Agen Perencana.
                </p>
                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Fungsi Utama:</span>
                </p>

                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Eksekusi Paralel:</span> Sistem langsung membagi ketiga topik menjadi tiga jalur pengerjaan yang berjalan bersamaan untuk mempercepat proses penulisan.
                    </li>
                    <li>
                        <span className="font-medium text-white">Riset Mendalam (Tavily):</span> Setiap jalur melakukan pencarian lanjutan khusus untuk topik masing-masing.
                    </li>
                    <li>
                        <span className="font-medium text-white">Agen Penulis Seksi:</span> Agen AI menulis <strong>satu seksi newsletter profesional</strong> lengkap dengan judul seksi dan sumber terverifikasi.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Seluruh konten inti disusun dengan cepat dan tetap mempertahankan kualitas riset dan konsistensi gaya.
                </p>
            </div>

            {/* PHASE 3 */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Fase 3: Finalisasi HTML & Draf Pengiriman</h2>
                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed">
                    Berjalan setelah ketiga section selesai ditulis dan digabungkan.
                </p>
                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Fungsi Utama:</span>
                </p>

                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Penggabungan Konten:</span> Sistem menyatukan judul, pengantar, dan tiga seksi isi untuk proses peninjauan dan penyuntingan akhir.
                    </li>
                    <li>
                        <span className="font-medium text-white">Agen Editor (OpenRouter):</span> Bertindak sebagai editor profesional, merapikan struktur HTML, menambahkan pembuka dan penutup, serta membuat daftar sumber lengkap dengan tautan.
                    </li>
                    <li>
                        <span className="font-medium text-white">Validasi Output:</span> Memastikan hasil akhir berupa JSON bersih yang berisi `subject` dan HTML final.
                    </li>
                    <li>
                        <span className="font-medium text-white">Pengiriman Draf (Gmail):</span> Email dikirim sebagai <strong>draf</strong> untuk tinjauan terakhir sebelum dipublikasikan.
                    </li>
                </ul>
            </div>

            {/* ROI */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Dampak & Hasil (ROI)</h2>
                <p className="leading-relaxed">
                    Dengan otomatisasi ini, tim konten mendapatkan sistem penerbitan digital yang:
                </p>

                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><strong>Memangkas waktu pembuatan konten hingga 90%</strong>, dari jam kerja manual menjadi hanya 5 menit review.</li>
                    <li><strong>Menjaga konsistensi mingguan</strong> dengan standar editorial profesional.</li>
                    <li><strong>Menggunakan riset real-time</strong> untuk memastikan isi newsletter selalu relevan.</li>
                    <li><strong>Berjalan otomatis tanpa henti</strong> sesuai jadwal.</li>
                    <li><strong>Memastikan kerapian format</strong> melalui HTML yang bersih dan siap dikirim.</li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Dengan menghilangkan pekerjaan repetitif, tim dapat berfokus pada strategi, optimasi kanal, dan keputusan bernilai tinggi lainnya.
                </p>
            </div>
        </div>
    );
};

export default NewsletterAutomationAgentContent;