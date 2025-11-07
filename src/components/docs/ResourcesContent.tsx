const ResourcesContent = () => {
    return (
        <div className="space-y-6 text-left">
            <h1 className="text-4xl font-bold mb-2">Resource Tambahan</h1>
            <p className="mb-2 mt-1 leading-relaxed">
              Referensi teknis dan panduan troubleshooting untuk membantu tim engineering, mitra, 
              dan technical stakeholders yang bekerja dengan sistem TalkVera.
            </p>

            {/* TECHNICAL FAQ */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">FAQ Teknis & Panduan Troubleshooting</h2>
              <p className="mb-4 leading-relaxed">
                Bagian ini membahas pertanyaan umum terkait teknis, implementasi, serta penggunaan produk. 
                Topik meliputi maintainability sistem, perilaku LLM, opsi hosting, dukungan multibahasa, 
                dan implementasi RAG.
              </p>
              <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                <li><strong className="text-white">Maintainability:</strong> Arsitektur modular, API berversi, dan pendekatan documentation-first.</li>
                <li><strong className="text-white">Penanganan halusinasi:</strong> Metrik RAG, audit data oleh manusia, dan retraining bila diperlukan.</li>
                <li><strong className="text-white">Hosting:</strong> Mendukung deployment di lingkungan klien (VPC/private cloud) dengan onboarding IAM yang aman.</li>
                <li><strong className="text-white">Sistem multibahasa:</strong> Lokalisasi bawaan dan adaptasi model untuk kebutuhan global.</li>
                <li><strong className="text-white">Dukungan RAG:</strong> Retrieval berbasis konteks dengan filter semantik dan penilaian QA (precision, recall, groundedness).</li>
              </ul>
            </section>

            {/* INFRASTRUCTURE */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Infrastruktur & DevOps</h2>
              <p className="mb-4 leading-relaxed">
                Kami menggunakan praktik infrastruktur modern untuk memastikan keandalan dan keamanan 
                di setiap deployment. CI/CD, provisioning environment, dan konfigurasi aman menjadi bagian 
                inti dari workflow DevOps kami.
              </p>
              <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                <li><strong className="text-white">Deployment:</strong> GitHub Actions atau pipeline berbasis n8n dengan environment staging dan production terisolasi.</li>
                <li><strong className="text-white">Provisioning:</strong> Dikelola menggunakan Docker, Terraform, Railway, atau Kubernetes.</li>
                <li><strong className="text-white">Keamanan:</strong> Enkripsi, secrets management, dan role-based access control (prinsip least privilege).</li>
              </ul>
            </section>

            {/* TROUBLESHOOTING */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Troubleshooting & Edge Cases</h2>
              <p className="mb-4 leading-relaxed">
                Untuk kasus respons yang tidak konsisten atau masalah latensi, kami menyediakan diagnostik 
                terstruktur serta mekanisme fallback guna menjaga stabilitas sistem.
              </p>
              <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                <li><strong className="text-white">Respons tidak konsisten:</strong> Analisis log, automated retries, dan evaluasi model fallback.</li>
                <li><strong className="text-white">Profiling latensi:</strong> Async tracing, caching, dan optimasi prompt untuk meningkatkan performa.</li>
              </ul>
            </section>

            {/* GLOSSARY */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Glosarium: Istilah Penting</h2>
              <p className="mb-4 leading-relaxed">
                Referensi cepat untuk terminologi dasar dalam AI dan desain sistem.
              </p>
              <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                <li><strong className="text-white">LLM (Large Language Model):</strong> Model neural network yang menghasilkan teks mirip bahasa manusia.</li>
                <li><strong className="text-white">RAG (Retrieval-Augmented Generation):</strong> Menggabungkan LLM dengan vector database untuk menghasilkan output yang ter-grounding.</li>
                <li><strong className="text-white">Vector Database:</strong> Sistem penyimpanan embedding untuk semantic search.</li>
                <li><strong className="text-white">Embedding:</strong> Representasi numerik yang menangkap makna suatu teks atau data.</li>
                <li><strong className="text-white">Prompt Engineering:</strong> Teknik menyusun prompt untuk mengarahkan perilaku model.</li>
                <li><strong className="text-white">Groundedness:</strong> Tingkat kesesuaian output AI dengan dokumen sumber atau konteks terpercaya.</li>
                <li><strong className="text-white">Token Limit:</strong> Batas panjang teks yang dapat diproses model dalam satu permintaan.</li>
                <li><strong className="text-white">Agent:</strong> Sistem AI yang menjalankan tugas secara otonom atau semi-otonom.</li>
                <li><strong className="text-white">Human-in-the-Loop (HITL):</strong> Workflow yang melibatkan manusia untuk validasi atau override output AI.</li>
                <li><strong className="text-white">CI/CD:</strong> Pipeline integrasi dan deployment berkelanjutan untuk pembaruan yang aman dan konsisten.</li>
              </ul>
            </section>
          </div>
    );
};

export default ResourcesContent;
