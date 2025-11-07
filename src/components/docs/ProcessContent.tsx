const ProcessContent = () => {
    return (
        <div className="space-y-6 text-left">
            <h1 className="text-4xl font-bold mb-4">Proses Kerja Kami</h1>

            <div className="space-y-8 leading-relaxed">

              {/* DISCOVERY */}
              <section>
                <h2 className="text-2xl text-white mb-4">Tahap Discovery Awal</h2>
                <p>
                  Di TalkVera, kami tidak berperan sekadar sebagai penyedia layanan, melainkan sebagai mitra 
                  strategis jangka panjang dalam transformasi AI Anda. Kami menerapkan pendekatan konsultatif 
                  untuk memastikan setiap sistem yang dibangun selaras dengan visi perusahaan, mampu berkembang, 
                  dan memberi dampak nyata di berbagai level organisasi.
                </p>
                <p>
                  Fokus kami adalah menggali secara mendalam area yang dapat memberikan nilai bisnis 
                  berkelanjutan melalui implementasi AI.
                </p>
              </section>

              {/* ORGANIZATIONAL UNDERSTANDING */}
              <section>
                <h2 className="text-2xl text-white mb-4">Pemahaman Struktur & Operasi Organisasi</h2>
                <p>
                  Kami mulai dengan menyelami cara kerja organisasi Anda—bagaimana proses berjalan saat ini 
                  dan tujuan yang ingin dicapai ke depannya. Pada tahap ini kami mempelajari:
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                  <li>Model bisnis dan aliran pendapatan utama</li>
                  <li>Alur kerja internal serta proses pengambilan keputusan</li>
                  <li>Pain point operasional dan area yang tidak efisien</li>
                  <li>Departemen yang dapat menerima dampak cepat dari AI</li>
                </ul>
              </section>

              {/* STRATEGIC ROADMAP */}
              <section>
                <h2 className="text-2xl text-white mb-4">Perancangan Roadmap Strategis</h2>
                <p>
                  Dengan memahami struktur organisasi, kami membantu menyusun roadmap AI yang berpengaruh 
                  dan berorientasi hasil. Roadmap ini memastikan setiap langkah jangka pendek dibangun 
                  di atas fondasi sistem yang adaptif dan siap dikembangkan.
                </p>
                <p>Roadmap ini memberikan jawaban atas pertanyaan penting seperti:</p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                  <li>Solusi apa yang dapat menghasilkan ROI dalam waktu &lt;90 hari?</li>
                  <li>Sistem dasar apa yang dibutuhkan untuk automasi jangka panjang?</li>
                  <li>Area mana yang memberikan dampak bisnis paling signifikan?</li>
                  <li>Bagaimana memastikan interoperabilitas dan governance sejak awal?</li>
                </ul>
              </section>

              {/* SECURITY */}
              <section>
                <h2 className="text-2xl text-white mb-4">Keamanan & Kepatuhan</h2>
                <p>
                  Kepercayaan adalah fondasi dalam implementasi sistem AI—terutama saat menangani data sensitif, 
                  proses internal, atau komunikasi pelanggan. Pada tahap ini kami menilai:
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                  <li>Kebutuhan penanganan dan klasifikasi data</li>
                  <li>Kontrol akses dan hak izin</li>
                  <li>Kebutuhan kepatuhan dan batasan infrastruktur</li>
                  <li>Kebutuhan audit trail dan traceability</li>
                </ul>
              </section>

              {/* RAPID ITERATION */}
              <section>
                <h2 className="text-2xl text-white mb-4">Iterasi Cepat & Pengiriman Berkelanjutan</h2>
                <p>
                  Kami percaya kekuatan AI ada pada kemampuannya untuk berkembang. Itu sebabnya pendekatan 
                  pengembangan kami berfokus pada agility, modularitas, dan iterasi cepat. Setiap sistem dibangun 
                  secara kustom dan dikembangkan bersama tim Anda melalui siklus yang bergerak cepat dan 
                  berbasis feedback langsung.
                </p>
              </section>

              {/* AGILE */}
              <section>
                <h3 className="text-xl text-white mb-2">Metodologi Pengembangan Agile</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                  <li>Sprint 1–2 minggu dengan hasil yang dapat didemokan</li>
                  <li>Perencanaan sprint dan retrospektif untuk penyelarasan</li>
                  <li>Manajemen tugas melalui Kanban atau Jira untuk transparansi penuh</li>
                  <li>Feedback klien yang terintegrasi di setiap tahap</li>
                </ul>
              </section>

              {/* MODULAR ARCHITECTURE */}
              <section>
                <h3 className="text-xl text-white mb-2">Arsitektur Modular</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                  <li>Microservices dan agent yang berdiri independen</li>
                  <li>Model dasar atau layer RAG yang mudah diganti</li>
                  <li>Arsitektur API-first untuk integrasi eksternal</li>
                  <li>Vector store, LLM, dan pipeline yang dapat diganti atau ditingkatkan</li>
                </ul>
              </section>

              {/* QA & DEPLOYMENT */}
              <section>
                <h2 className="text-2xl text-white mb-4">Quality Assurance & Deployment</h2>
                <p>
                  Tahap terakhir dalam lifecycle AI kami berfokus pada pengujian komprehensif, deployment 
                  aman, dan keandalan jangka panjang. Kami menggabungkan pipeline otomatis dengan evaluasi 
                  manual untuk memastikan performa sistem tetap stabil dan aman di lingkungan produksi.
                </p>
              </section>

              {/* QA PROCESS */}
              <section>
                <h3 className="text-xl text-white mb-2">Proses Quality Assurance</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                  <li>Pipeline testing otomatis dengan integrasi CI/CD</li>
                  <li>Cakupan pengujian luas untuk fungsi-fungsi kritis</li>
                  <li>Deteksi dan pencegahan halusinasi</li>
                  <li>Pengujian keamanan terhadap prompt injection</li>
                  <li>Pengecekan bias & toksisitas sesuai standar industri</li>
                  <li>Evaluasi RAG dan validasi akurasi retrieval</li>
                </ul>
              </section>

              {/* DEPLOYMENT WORKFLOW */}
              <section>
                <h3 className="text-xl text-white mb-2">Alur Deployment</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                  <li>Konfigurasi lingkungan staging dan production</li>
                  <li>Pipeline deployment otomatis</li>
                  <li>Konfigurasi monitoring dan alerting</li>
                  <li>Validasi keamanan dan kepatuhan</li>
                  <li>Optimasi performa dan skalabilitas</li>
                </ul>
              </section>

              {/* ONGOING SUPPORT */}
              <section>
                <h2 className="text-2xl text-white mb-4">Dukungan Berkelanjutan & Optimasi</h2>
                <p>
                  Sistem AI tidak pernah benar-benar selesai. Kami menyediakan supervisi dan peningkatan 
                  berkelanjutan melalui:
                </p>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                  <li>Pemantauan sistem secara langsung</li>
                  <li>Siklus QA berkala dan pembaruan prompt</li>
                  <li>Re-embedding atau retraining bila diperlukan</li>
                  <li>Saluran dukungan khusus dengan opsi SLA</li>
                </ul>
              </section>

            </div>
        </div>
    );
};

export default ProcessContent;
