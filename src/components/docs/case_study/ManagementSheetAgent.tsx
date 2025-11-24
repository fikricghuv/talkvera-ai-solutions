import TalkveraFlowchart from "./flowchart/ManagementSheetFlowchart"

const ManagementSheetAgent = () => {
    return (
        <div className="space-y-8">

            <h1 className="text-4xl font-bold mb-6">
                Talkvera AI Assistant | Sistem Operasional Cerdas untuk Manajemen Bisnis
            </h1>

            {/* --- 1. Gambaran Proyek --- */}
            <div>
                <h2 className="text-2xl font-semibold mb-3">Gambaran Proyek</h2>
                <p className="leading-relaxed">
                    <strong>Talkvera AI Assistant</strong> adalah asisten operasional berbasis AI yang mengintegrasikan 
                    <strong> Telegram</strong>, <strong>Google Sheets</strong>, dan <strong>PostgreSQL</strong> untuk 
                    mengelola tiga database utama secara otomatis: Transaksi Keuangan, Manajemen Konten, dan CRM. 
                    Dibangun di atas platform <strong>n8n</strong>, sistem ini memungkinkan pengguna mengelola operasi 
                    bisnis kompleks melalui percakapan bahasa alami di Telegram.
                </p>

                <p className="leading-relaxed mt-3">
                    Sistem ini menangani seluruh siklus manajemen data—dari pencatatan transaksi keuangan otomatis, 
                    pembuatan konten marketing viral berbasis AI, hingga tracking lead dan client. Dengan memori percakapan 
                    PostgreSQL dan delegasi tugas ke specialized agents, Talkvera AI menghadirkan pengalaman operasional 
                    yang efisien, akurat, dan sepenuhnya hands-free.
                </p>
            </div>

            <TalkveraFlowchart />

            {/* --- 2. Fase 1: Telegram Trigger & Logging --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Fase 1: Telegram Trigger & Execution Logging</h2>
                
                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Dimulai saat pengguna mengirim <strong>pesan ke Telegram bot</strong> yang terhubung dengan 
                    workflow n8n melalui webhook Telegram API.
                </p>

                <h3 className="text-xl font-semibold mt-4">Kemampuan Utama</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li>
                        <span className="font-medium text-white">Telegram Integration: </span> 
                        Menerima pesan real-time dari Telegram dengan webhook authentication menggunakan 
                        credential <strong>Telegram Management</strong>.
                    </li>
                    <li>
                        <span className="font-medium text-white">Execution Tracking: </span> 
                        Setiap request otomatis dicatat ke <strong>Supabase</strong> table dengan execution_id, workflow_id, timestamp, 
                        dan status untuk audit trail.
                    </li>
                    <li>
                        <span className="font-medium text-white">User Context Recognition: </span> 
                        Mengidentifikasi pengguna berdasarkan <code>message.from.id</code> untuk personalisasi 
                        dan tracking memori percakapan.
                    </li>
                    <li>
                        <span className="font-medium text-white">Message Parsing: </span> 
                        Mengekstrak teks pesan dari <code>message.text</code> untuk diteruskan ke AI Agent.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Fase ini menyediakan <strong>pintu masuk operasional yang reliable</strong> dengan logging lengkap 
                    untuk monitoring dan debugging sistem.
                </p>
            </div>

            {/* --- 3. Fase 2: AI Agent & Transaction Management --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Fase 2: AI Agent & Manajemen Transaksi Keuangan</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Berjalan ketika Talkvera AI Agent menerima input dari Telegram dan menentukan intent pengguna.
                </p>

                <h3 className="text-xl font-semibold mt-4">Kemampuan Utama</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">

                    <li>
                        <span className="font-medium text-white">Natural Language Understanding: </span> 
                        Menggunakan <strong>OpenRouter GPT-5-mini</strong> untuk memahami request seperti 
                        "Beli makan siang 75rb" atau "Berapa total pengeluaran bulan ini?"
                    </li>

                    <li>
                        <span className="font-medium text-white">Smart Transaction Parsing: </span>
                        Otomatis mengekstraksi:
                        <ul className="list-disc space-y-1 mt-1 pl-6">
                            <li><strong>Amount:</strong> Angka murni (75000, 5000000)</li>
                            <li><strong>Type:</strong> Expense/Income berdasarkan kata kunci</li>
                            <li><strong>Category:</strong> Klasifikasi cerdas (F&B, Transport, Marketing, dll)</li>
                            <li><strong>Description:</strong> Ringkasan singkat & jelas</li>
                            <li><strong>Date:</strong> Format YYYY-MM-DD (default: hari ini)</li>
                        </ul>
                    </li>

                    <li>
                        <span className="font-medium text-white">Google Sheets Operations: </span>
                        <ul className="list-disc space-y-1 mt-1 pl-6">
                            <li><strong>Get Data Transactions:</strong> Filter by type, category, date dengan OR logic</li>
                            <li><strong>Create Data Transaction:</strong> Auto-generate ID, insert dengan user_id dan source "agent"</li>
                            <li><strong>Update Data Transactions:</strong> Update berdasarkan ID dengan get-before-update pattern</li>
                            <li><strong>Delete Data Transactions:</strong> Hapus berdasarkan row number dengan konfirmasi</li>
                        </ul>
                    </li>

                    <li>
                        <span className="font-medium text-white">ID Generation: </span> 
                        Generate unique transaction ID menggunakan 
                        <code>Date.now() + Math.random()</code> untuk keunikan maksimal.
                    </li>

                    <li>
                        <span className="font-medium text-white">PostgreSQL Memory: </span> 
                        Menyimpan konteks percakapan per user_id untuk dialog multi-turn yang context-aware.
                    </li>

                    <li>
                        <span className="font-medium text-white">Query Intelligence: </span> 
                        Memahami query kompleks seperti "total pengeluaran minggu ini" dengan filter otomatis.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Fase ini menghadirkan <strong>financial tracking otomatis</strong> yang akurat dengan 
                    zero manual input requirement.
                </p>
            </div>

            {/* --- 4. Fase 3: Content Management dengan Sub-Agent --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Fase 3: Manajemen Konten dengan Content Planner Agent</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Terpicu ketika pengguna request terkait konten marketing (TikTok/IG Reels) dan 
                    main agent mendelegasikan ke <strong>Content Planner</strong> specialized agent.
                </p>

                <h3 className="text-xl font-semibold mt-4">Kemampuan Utama</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">

                    <li>
                        <span className="font-medium text-white">Agent Delegation Architecture: </span> 
                        Main agent SELALU mendelegasikan content request ke Content Planner agent untuk 
                        specialized handling dengan system prompt tersendiri.
                    </li>

                    <li>
                        <span className="font-medium text-white">Viral Content Generation: </span> 
                        Content Planner AI menggunakan <strong>OpenRouter GPT-5-mini</strong> dengan 
                        deep understanding tentang:
                        <ul className="list-disc space-y-1 mt-1 pl-6">
                            <li>Talkvera brand context & value proposition</li>
                            <li>Target audience pain points</li>
                            <li>TikTok & IG Reels best practices</li>
                            <li>Hook patterns yang proven converting</li>
                        </ul>
                    </li>

                    <li>
                        <span className="font-medium text-white">Comprehensive Content Structure: </span> 
                        Setiap konten mencakup:
                        <ul className="list-disc space-y-1 mt-1 pl-6">
                            <li><strong>Content ID:</strong> Format TKTK-YYYYMMDD-XXX (auto-increment per hari)</li>
                            <li><strong>Judul:</strong> Clickbait honest max 60 char</li>
                            <li><strong>Hook:</strong> 3 detik pertama, max 10 kata, pattern interrupt</li>
                            <li><strong>Pain Point:</strong> Spesifik & quantified</li>
                            <li><strong>Big Idea/Angle:</strong> Unique perspective</li>
                            <li><strong>Script:</strong> 60-90 detik, 3 scene structure</li>
                            <li><strong>Caption:</strong> 150-200 kata storytelling</li>
                            <li><strong>Hashtags:</strong> 8-12 mix niche/medium/broad/trending</li>
                            <li><strong>CTA:</strong> Spesifik & actionable</li>
                            <li><strong>Visual Suggestions:</strong> Scene-by-scene descriptions</li>
                        </ul>
                    </li>

                    <li>
                        <span className="font-medium text-white">Google Sheets Content Operations: </span>
                        <ul className="list-disc space-y-1 mt-1 pl-6">
                            <li><strong>Get Data Contents:</strong> Retrieve untuk analisis & referensi</li>
                            <li><strong>Create Data Konten:</strong> Insert konten lengkap dengan semua field</li>
                            <li><strong>Update Data Konten:</strong> Modify berdasarkan Content ID matching</li>
                            <li><strong>Delete Data Konten:</strong> Remove berdasarkan row dengan konfirmasi</li>
                        </ul>
                    </li>

                    <li>
                        <span className="font-medium text-white">Performance Analytics: </span> 
                        Analisis metrics (views, likes, comments, shares, saves, leads) untuk 
                        identify top performers dan success patterns.
                    </li>

                    <li>
                        <span className="font-medium text-white">PostgreSQL Memory untuk Content Context: </span> 
                        Content Planner memiliki memori tersendiri untuk remember content preferences 
                        dan past interactions.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Fase ini menghadirkan <strong>AI-powered content creation engine</strong> yang menghasilkan 
                    konten marketing berkualitas tinggi dengan struktur viral-ready dalam hitungan detik.
                </p>
            </div>

            {/* --- 5. Fase 4: CRM & Lead Management --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Fase 4: Manajemen CRM & Lead Tracking</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Berjalan ketika pengguna perlu mengelola data lead dan client di sistem CRM.
                </p>

                <h3 className="text-xl font-semibold mt-4">Kemampuan Utama</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">

                    <li>
                        <span className="font-medium text-white">Smart Lead Parsing: </span> 
                        Ekstrak otomatis dari input natural language seperti 
                        "Ada lead baru: John Doe, email john@startup.com, perusahaan StartupXYZ, mau automasi HR"
                    </li>

                    <li>
                        <span className="font-medium text-white">Lead Data Structure: </span>
                        <ul className="list-disc space-y-1 mt-1 pl-6">
                            <li><strong>id:</strong> UUID unik auto-generated</li>
                            <li><strong>full_name:</strong> Nama lengkap lead</li>
                            <li><strong>work_email:</strong> Email dengan validasi format</li>
                            <li><strong>company_name:</strong> Nama perusahaan</li>
                            <li><strong>goal:</strong> Kebutuhan/tujuan spesifik</li>
                            <li><strong>type_submit:</strong> "get-started" atau "free-trial"</li>
                            <li><strong>created_at:</strong> Timestamp YYYY-MM-DD HH:mm:ss</li>
                        </ul>
                    </li>

                    <li>
                        <span className="font-medium text-white">Google Sheets CRM Operations: </span>
                        <ul className="list-disc space-y-1 mt-1 pl-6">
                            <li><strong>Get Data CRM:</strong> Retrieve semua lead data untuk viewing/analysis</li>
                            <li><strong>Create Data CRM:</strong> Insert lead baru dengan UUID generation</li>
                            <li><strong>Update Data CRM:</strong> Modify lead info dengan ID matching</li>
                            <li><strong>Delete Data CRM:</strong> Remove lead dengan row number & konfirmasi</li>
                        </ul>
                    </li>

                    <li>
                        <span className="font-medium text-white">Email Validation: </span> 
                        Validasi format email sebelum insert/update untuk data quality assurance.
                    </li>

                    <li>
                        <span className="font-medium text-white">Get-Before-Update Pattern: </span> 
                        Selalu retrieve current data sebelum update untuk transparency dan avoid errors.
                    </li>

                    <li>
                        <span className="font-medium text-white">Lead Qualification Tracking: </span> 
                        Membedakan type_submit untuk pipeline management (consultation vs trial).
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Fase ini memastikan <strong>lead management yang tersentralisasi</strong> dengan 
                    data quality tinggi dan tracking yang rapi untuk follow-up optimal.
                </p>
            </div>

            {/* --- 6. Fase 5: Response & Telegram Delivery --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Fase 5: Pemrosesan & Pengiriman Respons via Telegram</h2>

                <h3 className="text-xl font-semibold mt-4">Trigger</h3>
                <p className="leading-relaxed mt-2">
                    Berjalan setelah AI Agent menyelesaikan operasi apapun dan perlu mengirim hasil ke user.
                </p>

                <h3 className="text-xl font-semibold mt-4">Kemampuan Utama</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">

                    <li>
                        <span className="font-medium text-white">Bahasa Indonesia Natural: </span> 
                        Semua respons dalam Bahasa Indonesia yang professional, ramah, dan efisien.
                    </li>

                    <li>
                        <span className="font-medium text-white">Emoji Strategic: </span> 
                        Menggunakan emoji untuk clarity (✅ ❌ 💰 📊) tanpa berlebihan.
                    </li>

                    <li>
                        <span className="font-medium text-white">HTML Parse Mode: </span> 
                        Telegram messages support HTML formatting untuk rich text presentation.
                    </li>

                    <li>
                        <span className="font-medium text-white">Confirmation Messages: </span> 
                        Setiap action diikuti konfirmasi singkat & jelas:
                        <ul className="list-disc space-y-1 mt-1 pl-6">
                            <li>✅ "Transaksi beli kopi Rp 50.000 sudah dicatat di kategori F&B"</li>
                            <li>✅ "Data lead John Doe dari StartupXYZ berhasil ditambahkan"</li>
                            <li>✅ "Konten TKTK-20251123-001 sudah diupdate metriksnya"</li>
                        </ul>
                    </li>

                    <li>
                        <span className="font-medium text-white">Context-Aware Responses: </span> 
                        Mengingat konteks percakapan sebelumnya dari PostgreSQL memory.
                    </li>

                    <li>
                        <span className="font-medium text-white">Error Handling yang Elegan: </span> 
                        Menjelaskan masalah dengan solution offering, bukan hanya error message.
                    </li>

                    <li>
                        <span className="font-medium text-white">No Attribution Footer: </span> 
                        Setting <code>appendAttribution: false</code> untuk clean message tanpa "Sent via n8n".
                    </li>

                    <li>
                        <span className="font-medium text-white">Fixed Chat ID: </span> 
                        Response dikirim ke chat ID 975270162 untuk targeting yang tepat.
                    </li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Fase ini memastikan <strong>komunikasi yang smooth dan professional</strong> dengan 
                    user experience yang optimal di platform Telegram.
                </p>
            </div>

            {/* --- ROI --- */}
            <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-3">Return on Investment</h2>

                <p className="leading-relaxed">
                    Implementasi <strong>Talkvera AI Assistant</strong> menghadirkan transformasi operasional yang terukur:
                </p>

                <h3 className="text-xl font-semibold mt-4">Time Savings</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><span className="font-medium text-white">Financial Recording: </span> Dari 15 menit/transaksi manual entry → 30 detik conversational input (30x lebih cepat)</li>
                    <li><span className="font-medium text-white">Content Planning: </span> Dari 2-3 jam brainstorming & scripting → 1 menit AI generation (120x lebih cepat)</li>
                    <li><span className="font-medium text-white">Lead Entry: </span> Dari 5 menit copy-paste & formatting → 20 detik natural input (15x lebih cepat)</li>
                    <li><span className="font-medium text-white">Data Retrieval: </span> Dari 3 menit manual filtering di sheets → 10 detik conversational query (18x lebih cepat)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Operational Benefits</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><span className="font-medium text-white">Zero Training Required: </span> Natural language interface = instant usability</li>
                    <li><span className="font-medium text-white">Error Reduction: </span> AI validation & classification menghilangkan human error</li>
                    <li><span className="font-medium text-white">24/7 Availability: </span> Access dari Telegram kapan saja, dimana saja</li>
                    <li><span className="font-medium text-white">Consistent Quality: </span> Content generation dengan formula proven viral</li>
                    <li><span className="font-medium text-white">Unified Data: </span> Single source of truth di Google Sheets dengan audit trail</li>
                    <li><span className="font-medium text-white">Scalable: </span> Handle volume tinggi tanpa additional headcount</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Cost Efficiency</h3>
                <ul className="list-disc space-y-2 mt-2 leading-relaxed pl-6">
                    <li><span className="font-medium text-white">No Multiple Tool Subscriptions: </span> Eliminasi needs for separate expense tracker, content tool, CRM software</li>
                    <li><span className="font-medium text-white">Reduced Admin Time: </span> Estimate 10-15 jam/minggu saved = ROI positive dalam 2 bulan</li>
                    <li><span className="font-medium text-white">Content Production: </span> Replace 1 content writer (Rp 5-8jt/bulan) dengan AI generation</li>
                    <li><span className="font-medium text-white">LLM Cost-Efficient: </span> GPT-5-mini via OpenRouter = fraction of GPT-4 cost dengan similar quality</li>
                </ul>

                <p className="leading-relaxed mt-3">
                    Dengan arsitektur modular n8n, sistem dapat dengan mudah diperluas untuk handle use cases baru 
                    (inventory management, invoice automation, customer support) tanpa rebuild dari nol.
                </p>
            </div>
        </div>
    );
};

export default ManagementSheetAgent;