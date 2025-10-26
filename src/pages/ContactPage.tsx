import { Mail, Phone, MapPin, ArrowRight, Zap } from 'lucide-react';

// --- Type/Interface Declarations (Dianggap Anda menggunakan TypeScript/TSX) ---
// Jika Anda tidak menggunakan TypeScript, HAPUS BARIS INI dan BARIS 6-17.
interface SelectOption {
    value: string;
    label: string;
}

interface TextareaComponentProps {
    id: string;
    label: string;
    placeholder?: string;
}

interface InputComponentProps {
    id: string;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
}

interface SelectComponentProps {
    id: string;
    label: string;
    options: SelectOption[];
    required?: boolean;
}
// -----------------------------------------------------------------------------

// Data untuk opsi Project Budget
const employeeOptions: SelectOption[] = [
    { value: '', label: 'Select Employee Range' },
    { value: '1-10', label: '1 - 10 Employees (Startup)' },
    { value: '11-50', label: '11 - 50 Employees (Small Business)' },
    { value: '51-200', label: '51 - 200 Employees (Mid-size)' },
    { value: '201+', label: '201+ Employees (Enterprise)' },
];

function ContactPage() {
    const selectStyle = {
        backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%239CA3AF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\")",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 0.75rem center',
        backgroundSize: '1.5em 1.5em',
        paddingRight: '2.5rem', // Memberi ruang untuk panah
    };

    return (
        <div className="pt-16 min-h-screen text-white">
            
            {/* 1. Header and Title */}
            <section className="relative py-24 text-center overflow-hidden">
                {/* Background Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-[200px] pointer-events-none"></div>

                <div className="relative max-w-4xl mx-auto px-6 z-10">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                        <Zap className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Contact Our AI Team</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight">
                        Get Started with Talkvera
                    </h1>
                    
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Speak to an expert and start a plan for your project.
                    </p>
                </div>
            </section>

            {/* 2. Contact Form (TrueHorizon 2-Column Layout) */}
            <section className="pb-32">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Container dengan Border Gradient Kustom */}
                    <div className="p-0.5 rounded-3xl bg-gradient-to-br from-blue-700/50 via-gray-800 to-cyan-700/50 shadow-2xl shadow-blue-900/50">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-gray-900 rounded-[calc(1.5rem-2px)] divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
                        
                            {/* Left Column: Contact Information - Menggunakan gradient background ringan */}
                            <div className="lg:col-span-1 space-y-8 p-8 md:p-12 
                                            bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-t-[calc(1.5rem-2px)] lg:rounded-l-[calc(1.5rem-2px)] lg:rounded-tr-none">
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent pb-4 mb-4">
                                    Contact Information
                                </h2>
                                <p className="text-gray-400 text-lg">
                                    Our team is ready to assist you. Feel free to reach out via email, phone, or visit our office.
                                </p>

                                <div className="space-y-6 pt-4">
                                    {/* Email */}
                                    <div className="flex items-start space-x-4">
                                        <Mail className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <div className="text-lg font-semibold text-white">Email</div>
                                            <a href="mailto:talkvera.agent@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors text-base">talkvera.agent@gmail.com</a>
                                        </div>
                                    </div>
                                    {/* Phone */}
                                    <div className="flex items-start space-x-4">
                                        <Phone className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <div className="text-lg font-semibold text-white">Phone</div>
                                            <p className="text-gray-400 text-base">+62 8517 1182 228</p>
                                        </div>
                                    </div>
                                    {/* Address */}
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                                        <div>
                                            <div className="text-lg font-semibold text-white">Address</div>
                                            <p className="text-gray-400 text-base">Jakarta, Indonesia</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="pt-6 text-sm text-gray-500 border-t border-gray-800/70">
                                    Working Hours: Monday - Friday, 09:00 - 17:00 WIB (GMT+7)
                                </p>
                            </div>

                            {/* Right Column: Input Form (MODIFIED) */}
                            <div className="lg:col-span-2 p-8 md:p-12">
                                <form className="space-y-6">
                                    {/* Row 1: Full Name and Work Email */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputComponent id="name" label="Full Name" type="text" placeholder="Enter your full name" required={true} />
                                        <InputComponent id="email" label="Work Email" type="email" placeholder="example@company.com" required={true} />
                                    </div>
                                    
                                    {/* Row 2: Company Name and Company Size (Diperbarui) */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputComponent id="company" label="Company Name" type="text" placeholder="Your Company Name" required={true} />
                                        <SelectComponent 
                                            id="company-size" // ID diperbarui
                                            label="Company Size (Number of Employees)" // Label diperbarui
                                            options={employeeOptions} // Menggunakan data karyawan
                                            required={true}
                                            selectStyle={selectStyle} // Pass the custom style
                                        />
                                    </div>

                                    {/* Row 3: Tell us about your project... */}
                                    <TextareaComponent id="project-desc" label="Tell us about your project..." placeholder="Describe your AI needs, current challenges, and goals..." />
                                    
                                    {/* Submit Button */}
                                    <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.01] shadow-xl shadow-blue-500/30 flex items-center justify-center space-x-2">
                                        <span>Send Consultation Request</span>
                                        <ArrowRight size={20} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Reusable Input Component (Standardized Style)
const InputComponent = ({ id, label, type = 'text', placeholder, required = false }: InputComponentProps) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            required={required}
            // Perubahan Styling: Menghapus outline dan mengubah fokus ring
            className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 
                       focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:outline-none transition-all duration-200"
        />
    </div>
);

// Reusable Textarea Component
const TextareaComponent = ({ id, label, placeholder }: TextareaComponentProps) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
            {label}
        </label>
        <textarea
            id={id}
            rows={4}
            placeholder={placeholder}
            // Perubahan Styling: Menghapus outline dan mengubah fokus ring
            className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 
                       focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:outline-none transition-all duration-200 resize-none"
        ></textarea>
    </div>
);

// Komponen Select (diperbarui untuk menerima custom style panah dropdown)
const SelectComponent = ({ id, label, options, required = false, selectStyle }: SelectComponentProps & { selectStyle: React.CSSProperties }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <select
            id={id}
            required={required}
            // Perubahan Styling: Menghapus outline dan mengubah fokus ring
            className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:outline-none transition-all duration-200"
            style={selectStyle} // Terapkan custom style untuk panah dropdown
        >
            {options.map((option) => (
                <option 
                    key={option.value} 
                    value={option.value} 
                    // Mengatur warna teks opsi agar terlihat gelap di menu dropdown
                    className="text-gray-900 bg-gray-200"
                >
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

export default ContactPage;