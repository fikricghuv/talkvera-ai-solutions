const TechStackContent = () => {
    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Fondasi Teknologi Kami</h1>

            <p className="leading-relaxed">
              Di TalkVera, kami menggunakan teknologi yang modern, modular, dan dirancang untuk kecepatan, 
              fleksibilitas, serta skalabilitas jangka panjang. Seluruh tools yang kami pilih merupakan 
              gabungan dari infrastruktur cloud terkini, platform yang ramah bagi developer, dan framework AI 
              yang telah teruji. Pemilihan teknologi dilakukan berdasarkan performa, kedalaman integrasi, 
              kekuatan komunitas open-source, serta kesesuaiannya dengan kebutuhan spesifik setiap klien. 
              Baik Anda seorang pemangku kepentingan teknis maupun baru memulai perjalanan di dunia AI, 
              stack kami dirancang agar inovasi tetap mudah diakses dan dapat diandalkan.
            </p>

            <h2 className="text-3xl font-semibold mt-12 mb-4">Arsitektur Infrastruktur Cloud</h2>
            <p className="leading-relaxed">
              Kami beroperasi sebagai <strong className="text-white">full AWS shop</strong>, yang berarti sistem kami 
              dijalankan, dikelola, dan diskalakan menggunakan 
              <strong className="text-white"> Amazon Web Services</strong> — platform cloud yang aman 
              dan berkinerja tinggi.
            </p>

            <p className="leading-relaxed">
              <strong className="text-white">Engineer infrastruktur cloud</strong> kami juga berpengalaman 
              dalam lingkungan <strong className="text-white">multi-cloud</strong>, sehingga dapat mendukung 
              kebutuhan pada <strong className="text-white">Azure</strong>, 
              <strong className="text-white">Google Cloud Platform (GCP)</strong>, 
              dan <strong className="text-white">DigitalOcean</strong> bila diperlukan. Fleksibilitas ini sangat 
              penting bagi klien yang memiliki regulasi khusus atau kebutuhan infrastruktur yang unik.
            </p>

            <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
              <li><strong className="text-white">Supabase:</strong> Autentikasi aman dan pembaruan real-time untuk pengembangan fitur yang lebih cepat.</li>
              <li><strong className="text-white">PostgreSQL:</strong> Database utama kami—stabil, scalable, dan dapat diandalkan.</li>
              <li><strong className="text-white">Vector Databases:</strong> Teknologi seperti <strong>Pinecone</strong>, <strong>Weaviate</strong>, dan <strong>Qdrant</strong> untuk semantic search dan pemahaman konteks dalam sistem AI.</li>
              <li><strong className="text-white">API Key Provisioning:</strong> Kunci API per proyek untuk kontrol akses yang tersegmentasi dan aman.</li>
              <li><strong className="text-white">Internal Developer Tooling:</strong> Skrip internal, CLI tools, dan integrasi dengan <strong>GitHub</strong> guna menjaga efisiensi operasional.</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-12 mb-4">Pemrograman & Integrasi Sistem</h2>
            <p className="leading-relaxed">
              Proses pengembangan kami didukung oleh tools yang memungkinkan 
              <strong className="text-white"> iterasi cepat</strong>, 
              <strong className="text-white"> automasi cerdas</strong>, dan 
              <strong className="text-white"> integrasi mendalam</strong> dengan sistem eksternal.
            </p>

            <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
              <li>
                <strong className="text-white">Bahasa Pemrograman:</strong> 
                <strong> Python</strong> untuk sistem AI dan backend, serta 
                <strong> JavaScript/TypeScript</strong> untuk front-end dan logika ringan.
              </li>
              <li>
                <strong className="text-white">Developer Tools:</strong> Platform seperti 
                <strong> Replit</strong>, <strong>Cursor</strong>, <strong>Lovable</strong>, 
                dan <strong>Bolt</strong> untuk kolaborasi real-time dan prototyping cepat.
              </li>
              <li>
                <strong className="text-white">Integration Layer:</strong> Menggunakan 
                <strong> n8n</strong> yang mendukung lebih dari 850 integrasi dengan SaaS, 
                database, dan layanan berbasis webhook.
              </li>
              <li>
                <strong className="text-white">Voice AI:</strong> Didukung oleh 
                <strong> ElevenLabs</strong> dan teknologi voice retail untuk agen suara yang natural 
                dan memahami konteks.
              </li>
            </ul>

            <h2 className="text-3xl font-semibold mt-12 mb-4">Teknologi Kecerdasan Buatan</h2>
            <p className="leading-relaxed">
              Kami menerapkan pendekatan <strong className="text-white">model-agnostic</strong> — melakukan 
              benchmarking lintas penyedia untuk memilih model dengan performa terbaik sesuai tujuan Anda. 
              Baik mengoptimalkan <strong className="text-white">kecepatan</strong>, 
              <strong className="text-white">akurasi</strong>, 
              <strong className="text-white">efisiensi biaya</strong>, maupun 
              <strong className="text-white"> output multibahasa</strong>, setiap deployment 
              kami sesuaikan untuk menghasilkan dampak maksimal.
            </p>

            <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
              <li>
                <strong className="text-white">Retrieval-Augmented Generation (RAG): </strong> 
                Menghubungkan respons LLM dengan data internal yang relevan untuk meningkatkan akurasi 
                dan mengurangi halusinasi.
              </li>
              <li>
                <strong className="text-white">Pemilihan & Pengujian Embedding Model: </strong> 
                Eksperimen terkontrol untuk menentukan strategi embedding paling efektif untuk dataset Anda.
              </li>
              <li>
                <strong className="text-white">Agent Frameworks & Builders: </strong> 
                Agen modular yang dapat <strong>mencari</strong>, <strong>meringkas</strong>, 
                <strong> menjalankan workflow</strong>, atau <strong>mengambil tindakan</strong> secara real-time.
              </li>
              <li>
                <strong className="text-white">Evaluasi LLM & Model Routing: </strong> 
                Sistem penilaian internal (LLM-as-a-judge) untuk merutekan tugas ke model dengan performa terbaik.
              </li>
            </ul>
        </div>
    );
};

export default TechStackContent;
