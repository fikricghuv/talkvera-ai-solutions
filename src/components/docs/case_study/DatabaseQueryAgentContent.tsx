import RAGDatabaseAgentFlowchart from './flowchart/RAGDatabaseAgentFlowchart';

const DatabaseQueryAgentContent = () => {
    return (
        <div className="space-y-8">

            <h1 className="text-4xl font-bold mb-6">
                Analisis Database Berbasis AI | Sistem Cerdas Akses Data Enterprise
            </h1>

            {/* --- 1. Project Overview --- */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Gambaran Proyek</h2>
                <p className="leading-relaxed">
                    <strong>RAG Database Agent</strong> memanfaatkan kombinasi 
                    <strong> Retrieval-Augmented Generation (RAG)</strong> dan 
                    <strong>query SQL dinamis</strong> untuk memberikan akses data enterprise 
                    berbasis bahasa alami. Dibangun dengan <strong>platform otomasi n8n</strong>, 
                    sistem ini memungkinkan pengguna mengajukan pertanyaan sehari-hari dan mendapatkan 
                    jawaban akurat dari <strong>database terstruktur</strong> maupun 
                    <strong>repositori dokumen</strong>.
                </p>
                <p className="leading-relaxed mt-3">
                    Agen ini secara otomatis menentukan apakah permintaan perlu menggunakan 
                    <strong> pgvector</strong> atau eksekusi <strong>SQL</strong>. Ia memahami struktur 
                    database, memvalidasi input, membangun query JOIN yang optimal, dan mempertahankan 
                    konteks percakapan—menghadirkan pengalaman akses data yang cepat, aman, dan tidak 
                    memerlukan kemampuan teknis.
                </p>
            </div>

            <RAGDatabaseAgentFlowchart />

            {/* --- 2. Phase 1 --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">
                    Fase 1: Input Bahasa Alami & Webhook Interface
                </h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Dimulai ketika pengguna mengirimkan pertanyaan berbasis bahasa alami melalui 
                    <strong> POST request</strong> ke endpoint 
                    <code>/rag-database-agent</code>.
                </p>

                <h3 className="text-xl font-semibold mt-4">Kemampuan Utama</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Webhook Entry Point: </span> 
                        Mendukung POST request dalam format JSON, raw body, dan <strong>CORS (*)</strong>, 
                        sehingga mudah diintegrasikan dengan aplikasi internal ataupun chat UI.
                    </li>
                    <li>
                        <span className="font-medium text-white">Manajemen Sesi: </span> 
                        Menggunakan <code>body.id</code> sebagai session identifier untuk menjaga 
                        percakapan setiap pengguna tetap terpisah dan konsisten.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Tahap ini menyediakan <strong>RESTful interface</strong> yang stabil bagi aplikasi 
                    internal, dashboard, atau chatbot untuk menjalankan query berbasis bahasa alami.
                </p>
            </div>

            {/* --- 3. Phase 2 --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">
                    Fase 2: Inteligensi Hibrida — Vector Store & SQL Query Engine
                </h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Berjalan otomatis setelah webhook menerima dan memvalidasi pertanyaan dari 
                    <code> $json.body.question</code>.
                </p>

                <h3 className="text-xl font-semibold mt-4">Kemampuan Utama</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">

                    <li>
                        <span className="font-medium text-white">Advanced Language Model: </span> 
                        Menggunakan <strong>OpenAI GPT-5-mini</strong> via OpenRouter dengan konfigurasi 
                        seimbang—menganalisis maksud pengguna sekaligus memilih strategi pengambilan data.
                    </li>

                    <li>
                        <span className="font-medium text-white">Dual Data Source Strategy: </span>
                        <ul className="list-circle space-y-1 mt-1 pl-6">
                            <li>
                                <strong>Vector Store (RAG): </strong> 
                                Menggunakan <strong>pgvector</strong> + embeddings OpenAI + 
                                <strong>Cohere reranking</strong> untuk pertanyaan yang membutuhkan 
                                konteks dokumen.
                            </li>
                            <li>
                                <strong>SQL Database: </strong> 
                                Menjalankan query PostgreSQL untuk analisis tabular seperti agregasi, 
                                filtering, dan perhitungan detail.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <span className="font-medium text-white">Schema Discovery Cerdas: </span> 
                        Workflow mengekstrak tabel, kolom, tipe data, dan foreign key untuk 
                        menyusun JOIN yang tepat dan efisien.
                    </li>

                    <li>
                        <span className="font-medium text-white">Validasi Data: </span> 
                        Menjalankan <strong>SELECT DISTINCT LIMIT 100</strong> guna memastikan nilai 
                        input benar-benar ada di database.
                    </li>

                    <li>
                        <span className="font-medium text-white">Optimized Query Construction: </span> 
                        Menggunakan relasi foreign key untuk membangun query tunggal yang optimal, 
                        menghindari multi-query yang boros.
                    </li>

                    <li>
                        <span className="font-medium text-white">PostgreSQL Chat Memory: </span> 
                        Menyimpan seluruh konteks percakapan untuk mendukung pertanyaan lanjutan secara alami.
                    </li>
                </ul>
            </div>

            {/* --- 4. Phase 3 --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Fase 3: Schema Discovery Workflow</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Dipanggil ketika agen menjalankan tool 
                    <strong>“Get table, schemas, columns, and foreign keys”</strong>.
                </p>

                <h3 className="text-xl font-semibold mt-4">Kemampuan Utama</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">

                    <li>
                        <span className="font-medium text-white">Dynamic Schema Query: </span> 
                        Mengambil seluruh struktur tabel dari <code>information_schema</code> dalam 
                        format ringkas dan mudah dipahami model AI.
                    </li>

                    <li>
                        <span className="font-medium text-white">Type Normalization: </span> 
                        Menyederhanakan tipe data PostgreSQL untuk mencegah kesalahpahaman interpretasi.
                    </li>

                    <li>
                        <span className="font-medium text-white">Ordered Results: </span> 
                        Mengembalikan hasil terurut untuk konsistensi di seluruh permintaan.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Tahap ini memastikan agen memahami seluruh struktur database tanpa harus menggunakan 
                    hardcode atau konfigurasi manual.
                </p>
            </div>

            {/* --- 5. Phase 4 --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Fase 4: Pemrosesan & Penyampaian Respons</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Berjalan setelah agen menyelesaikan eksekusi query dan menyusun jawaban akhirnya.
                </p>

                <h3 className="text-xl font-semibold mt-4">Kemampuan Utama</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">

                    <li>
                        <span className="font-medium text-white">Response Formatting: </span> 
                        Hasil analisis disusun dalam format JSON bersih melalui field 
                        <code>answer</code>, baik dari vector search maupun SQL.
                    </li>

                    <li>
                        <span className="font-medium text-white">Webhook Response: </span> 
                        JSON dikirim kembali ke aplikasi melalui node 
                        <strong>Respond to Webhook</strong>.
                    </li>

                    <li>
                        <span className="font-medium text-white">Graceful Error Handling: </span> 
                        Mengembalikan respons “I don’t know” bila data tidak ditemukan dan menangani 
                        error database dengan aman.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Tahap akhir memastikan output yang konsisten, mudah diparse, dan siap digunakan 
                    oleh aplikasi downstream.
                </p>
            </div>

            {/* --- ROI --- */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Return on Investment (ROI)</h2>
                <p className="leading-relaxed">
                    Implementasi <strong>RAG Database Agent</strong> memberikan manfaat nyata:
                </p>

                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Akses Data Tanpa Hambatan: </span> 
                        Pengguna non-teknis dapat mengajukan pertanyaan tanpa memahami SQL.
                    </li>
                    <li>
                        <span className="font-medium text-white">Inteligensi Hibrida: </span> 
                        Pertanyaan diarahkan secara otomatis ke sumber data paling relevan.
                    </li>
                    <li>
                        <span className="font-medium text-white">Kecepatan Pengambilan Keputusan: </span> 
                        Jawaban instan mengurangi ketergantungan pada tim data.
                    </li>
                    <li>
                        <span className="font-medium text-white">Skalabilitas Enterprise: </span> 
                        Didukung manajemen sesi sehingga multi-user bekerja tanpa konflik.
                    </li>
                    <li>
                        <span className="font-medium text-white">Integrasi Mudah: </span> 
                        Menggunakan standar REST API sehingga mudah dihubungkan ke sistem apa pun.
                    </li>
                    <li>
                        <span className="font-medium text-white">Mengurangi Beban Teknis: </span> 
                        Mengurangi permintaan data ad-hoc yang menghambat tim engineering.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Dengan arsitektur modular n8n, sistem ini dapat berkembang seiring kebutuhan—
                    mulai dari penambahan vector store, koneksi multi-database, hingga integrasi BI.
                </p>
            </div>
        </div>
    );
};

export default DatabaseQueryAgentContent;