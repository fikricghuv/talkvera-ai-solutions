import GenerateTestScenarioFlowchart from './flowchart/GenerateTestScenarioFlowchart';

const QAAutomationContent = () => {
    return (
        <div className="space-y-8">

            {/* Title */}
            <h1 className="text-4xl font-bold mb-6">
                Tim QA | Sistem Otomatisasi Pembuatan Test Scenario Berbasis AI
            </h1>

            {/* Overview */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Ringkasan Proyek</h2>
                <p className="leading-relaxed">
                    Kami membangun sebuah workflow otomatis berbasis <strong>n8n</strong> yang dirancang
                    untuk mentransformasi proses penting dalam <strong>Quality Assurance (QA)</strong>. 
                    Sistem ini secara otomatis menghasilkan <strong>Test Scenario terstruktur</strong> 
                    langsung dari dokumen Business Requirements (BRD) atau Product Requirements (PRD) 
                    dalam format PDF.
                </p>
                <p className="leading-relaxed mt-3">
                    Alur ini menggantikan proses manual yang memakan waktu dengan serangkaian langkah 
                    cerdas—mulai dari ekstraksi dokumen, analisis AI, hingga ekspor otomatis ke 
                    <strong>Google Sheets</strong>. Hasilnya adalah proses QA yang lebih 
                    <strong>cepat, konsisten, dan dapat diskalakan</strong>.
                </p>
            </div>

            <GenerateTestScenarioFlowchart />

            {/* Phase 1 */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">
                    Fase 1: Analisis Dokumen & Pra-Pemrosesan
                </h2>

                <p className="leading-relaxed">
                    <span className="font-medium text-white">Trigger:</span> Berjalan otomatis ketika QA engineer mengunggah file PDF (BRD/PRD) ke webhook endpoint.
                </p>

                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Fungsi Utama:</span>
                </p>

                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Ekstraksi Teks Cerdas:</span> 
                        Sistem membaca dan mengekstrak teks mentah dari file PDF.
                    </li>

                    <li>
                        <span className="font-medium text-white">Konversi Struktur (PDF → Markdown):</span> 
                        Node <strong>JavaScript</strong> khusus mengubah teks menjadi format Markdown 
                        untuk mempertahankan struktur dokumen (heading, list, section) yang penting 
                        bagi pemahaman AI.
                    </li>

                    <li>
                        <span className="font-medium text-white">Normalisasi Teks:</span> 
                        Membersihkan whitespace dan karakter tak penting untuk menyiapkan input yang 
                        rapi bagi model AI.
                    </li>
                </ul>
            </div>

            {/* Phase 2 */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">
                    Fase 2: Pembuatan Test Scenario Berbasis AI
                </h2>

                <p className="leading-relaxed">
                    <span className="font-medium text-white">Trigger:</span> Aktif setelah dokumen selesai diproses dan dinormalisasi.
                </p>

                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Fungsi Utama:</span>
                </p>

                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">AI QA Expert Agent:</span> 
                        Menggunakan model <strong>OpenRouter: google/gemini-2.5-flash</strong> 
                        yang berperan sebagai pakar QA.  
                        AI membaca dokumen dan menghasilkan 10 test scenario komprehensif.
                    </li>

                    <li>
                        <span className="font-medium text-white">Validasi Output Terstruktur:</span> 
                        <strong>Structured Output Parser</strong> memastikan seluruh respons AI  
                        mengikuti format JSON yang konsisten—menghindari kesalahan format dan 
                        memudahkan proses selanjutnya.
                    </li>
                </ul>
            </div>

            {/* Phase 3 */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">
                    Fase 3: Dokumentasi Otomatis & Ekspor
                </h2>

                <p className="leading-relaxed">
                    <span className="font-medium text-white">Trigger:</span> Dimulai ketika semua test scenario berhasil dihasilkan dan divalidasi.
                </p>

                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Fungsi Utama:</span>
                </p>

                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Pembuatan Spreadsheet Dinamis:</span> 
                        Workflow membuat <strong>Google Sheet</strong> baru dengan judul otomatis 
                        sesuai hasil AI (misalnya: “Test Scenario – [Nama Proyek]”).
                    </li>

                    <li>
                        <span className="font-medium text-white">Pemrosesan Data & Looping:</span> 
                        JSON array dari AI dipecah menjadi item individual, kemudian diproses satu per satu.
                    </li>

                    <li>
                        <span className="font-medium text-white">Pengisian Otomatis:</span> 
                        Setiap test scenario ditulis sebagai baris baru dengan kolom lengkap  
                        <strong>ID, Case, Steps, Type, Expected</strong>.  
                        Kolom <strong>Actual</strong> & <strong>Status</strong> sengaja dikosongkan  
                        untuk proses uji manual.
                    </li>
                </ul>
            </div>

            {/* ROI */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Nilai Bisnis & Return on Investment</h2>

                <p className="leading-relaxed">
                    Dengan workflow ini, tim QA pada dasarnya “mempekerjakan” seorang analis QA senior digital yang:
                </p>

                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>Mengubah BRD 50 halaman menjadi test scenario dalam hitungan menit</li>
                    <li>Bekerja 24/7 tanpa training, cuti, atau onboarding</li>
                    <li>Memberikan format dokumentasi yang konsisten dan standar</li>
                    <li>Mengenali skenario dan edge-case yang sering dilewatkan manusia</li>
                    <li>Terintegrasi langsung dengan <strong>Google Sheets</strong></li>
                    <li>Menghemat waktu engineer senior dari pekerjaan repetitif</li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Hasil akhirnya adalah penurunan drastis waktu persiapan QA, peningkatan kualitas skenario, dan proses pengembangan produk yang jauh lebih cepat dan adaptif.
                </p>
            </div>
        </div>
    );
};

export default QAAutomationContent;