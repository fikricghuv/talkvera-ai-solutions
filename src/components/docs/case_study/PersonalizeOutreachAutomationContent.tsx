import SendGreetingEmailFlowchart from './flowchart/SendGreetingsEmail';

const PersonalizeOutreachAutomationContent = () => {
    return (
        <div className="space-y-8">

            <h1 className="text-4xl font-bold mb-6">
                Otomatisasi Penangkapan Lead & Email Personalisasi Berbasis AI
            </h1>

            {/* Overview */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Gambaran Proyek</h2>
                <p className="leading-relaxed">
                    Sistem ini dirancang untuk mengelola permintaan konsultasi dari landing page TalkVera secara otomatis. 
                    Alur kerjanya menangkap data prospek secara instan, menyimpannya dengan aman, dan menghasilkan email sambutan 
                    yang sangat personal melalui agen AI khusus.
                </p>
                <p className="leading-relaxed mt-3">
                    Dengan pendekatan ini, setiap prospek menerima <strong>respons cepat dan bernuansa manusia</strong>, sehingga 
                    meningkatkan peluang engagement sejak interaksi pertama. Penyimpanan data dan memori percakapan dikelola dengan 
                    <strong> PostgreSQL</strong> untuk memastikan konsistensi dan skalabilitas jangka panjang.
                </p>
            </div>

            <SendGreetingEmailFlowchart />

            {/* Phase 1 */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Fase 1: Penangkapan Lead Instan & Verifikasi</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Dimulai otomatis saat prospek mengirimkan formulir pada landing page, memicu proses pengolahan data awal.
                </p>

                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Kemampuan Utama:</span>
                </p>

                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Penerimaan Data Webhook yang Aman:</span> 
                        Menerima data formulir (nama, email, deskripsi proyek) melalui endpoint POST yang dilindungi.
                    </li>
                    <li>
                        <span className="font-medium text-white">Standardisasi Data:</span> 
                        Membersihkan dan memetakan input ke format internal yang konsisten sebelum disimpan.
                    </li>
                    <li>
                        <span className="font-medium text-white">Penyimpanan Lead yang Andal:</span> 
                        Menyimpan data prospek ke tabel <strong>customer_consultation</strong> di <strong>PostgreSQL</strong> 
                        dengan status awal “Baru”.
                    </li>
                </ul>
            </div>

            {/* Phase 2 */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Fase 2: Personalisasi Pesan Berbasis AI</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Dimulai setelah data prospek tersimpan dengan sukses dan siap diproses oleh agen AI.
                </p>

                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Fungsionalitas:</span>
                </p>

                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Agen AI yang Memahami Konteks:</span> 
                        Agen “Greeting Email Agent” menganalisis input prospek untuk memahami kebutuhan dan tujuan mereka.
                    </li>
                    <li>
                        <span className="font-medium text-white">Pembuatan Pesan Dinamis:</span> 
                        Menghasilkan dua paragraf sambutan profesional yang disesuaikan dengan konteks menggunakan 
                        <strong> OpenRouter Chat Model</strong>.
                    </li>
                    <li>
                        <span className="font-medium text-white">Memori AI yang Persisten:</span> 
                        Menyimpan konteks di <strong>PostgreSQL Chat Memory</strong> menggunakan email prospek sebagai 
                        kunci sesi untuk interaksi lanjutan.
                    </li>
                </ul>
            </div>

            {/* Phase 3 */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Fase 3: Pemformatan Otomatis & Pengiriman Email</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Dimulai segera setelah AI menyelesaikan draf email personalisasi.
                </p>

                <p className="leading-relaxed mt-3">
                    <span className="font-medium text-white">Fungsionalitas:</span>
                </p>

                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Perakitan Email HTML:</span> 
                        Node <strong>JavaScript</strong> mengubah draf AI menjadi email HTML profesional yang konsisten dengan brand.
                    </li>
                    <li>
                        <span className="font-medium text-white">Pengiriman Email Otomatis:</span> 
                        Mengirim email menggunakan <strong>Gmail</strong> dengan subjek “Welcome To TalkVera!”.
                    </li>
                    <li>
                        <span className="font-medium text-white">Pelacakan Status Real-time:</span> 
                        Memperbarui status prospek menjadi “Terkirim” dan menyimpan salinan email untuk audit.
                    </li>
                </ul>
            </div>

            {/* ROI */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Return on Investment</h2>

                <p className="leading-relaxed">
                    Dengan workflow ini, TalkVera secara efektif memperoleh seorang <strong>asisten penjualan digital</strong> yang:
                </p>

                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>Merespons prospek dalam hitungan detik, kapan saja</li>
                    <li>Menyediakan personalisasi yang konsisten dan mendalam</li>
                    <li>Memastikan tidak ada prospek yang terlewat</li>
                    <li>Beroperasi tanpa kesalahan administratif</li>
                    <li>Menghilangkan pekerjaan input manual dan copy-paste</li>
                    <li>Menyimpan rekam jejak lengkap untuk setiap percakapan</li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Penyebutan teknologi—seperti <strong>PostgreSQL</strong>, <strong>Gmail</strong>, dan 
                    <strong> OpenRouter</strong>—diberikan langsung pada konteks fungsinya agar lebih relevan dan mudah dipahami.
                </p>

                <p className="leading-relaxed mt-3">
                    Solusi ini secara signifikan meningkatkan kecepatan respons dan kualitas interaksi, 
                    memungkinkan tim sales berfokus pada penutupan penjualan daripada tugas rutin administratif.
                </p>
            </div>
        </div>
    );
};

export default PersonalizeOutreachAutomationContent;
