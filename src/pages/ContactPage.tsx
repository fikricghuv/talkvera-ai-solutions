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
const budgetOptions: SelectOption[] = [
    { value: '', label: 'Select Project Budget' },
    { value: '20k-50k', label: '$20,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-250k', label: '$100,000 - $250,000+' },
    { value: '250k+', label: 'Over $250,000' },
];

function ContactPage() {
    return (
        <div className="pt-16 min-h-screen text-white">
            
            {/* 1. Header and Title */}
            <section className="relative py-24 text-center overflow-hidden">
                {/* Background Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none"></div>

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
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-gray-800/50 rounded-3xl p-8 md:p-12 border border-gray-700/70 shadow-2xl shadow-blue-900/30">
                        
                        {/* Left Column: Contact Information (NO CHANGE) */}
                        <div className="lg:col-span-1 space-y-8">
                            <h2 className="text-3xl font-bold border-b border-gray-700/50 pb-4 mb-4">
                                Contact Information
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Our team is ready to assist you. Feel free to reach out via email, phone, or visit our office.
                            </p>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <Mail className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <div className="text-lg font-semibold">Email</div>
                                        <a href="mailto:hello@talkvera.ai" className="text-gray-400 hover:text-cyan-400 transition-colors">hello@talkvera.ai</a>
                                    </div>
                                </div>
                                {/* Phone (Hanya untuk informasi, bukan input) */}
                                <div className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <div className="text-lg font-semibold">Phone</div>
                                        <p className="text-gray-400">+62 21 XXXX XXXX</p>
                                    </div>
                                </div>
                                {/* Address */}
                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <div className="text-lg font-semibold">Address</div>
                                        <p className="text-gray-400">Jl. Teknologi No. 123, Jakarta, Indonesia</p>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="pt-6 text-sm text-gray-500 border-t border-gray-700/50">
                                Working Hours: Monday - Friday, 09:00 - 17:00 WIB (GMT+7)
                            </p>
                        </div>

                        {/* Right Column: Input Form (MODIFIED) */}
                        <div className="lg:col-span-2">
                            <form className="space-y-6">
                                {/* Row 1: Full Name and Work Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputComponent id="name" label="Full Name" type="text" placeholder="Enter your full name" required={true} />
                                    <InputComponent id="email" label="Work Email" type="email" placeholder="example@company.com" required={true} />
                                </div>
                                
                                {/* Row 2: Company Name and Project Budget (MODIFIED) */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputComponent id="company" label="Company Name" type="text" placeholder="Your Company Name" required={true} />
                                    {/* 💡 INI ADALAH FIELD BARU: Project Budget (Select) */}
                                    <SelectComponent 
                                        id="budget" 
                                        label="Project Budget" 
                                        options={budgetOptions} 
                                        required={true}
                                    />
                                </div>

                                {/* Row 3: Tell us about your project... (MODIFIED LABEL) */}
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
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
        ></textarea>
    </div>
);

// 💡 Komponen Select Baru untuk Project Budget
const SelectComponent = ({ id, label, options, required = false }: SelectComponentProps) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <select
            id={id}
            required={required}
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-700 rounded-lg text-white appearance-none focus:ring-blue-500 focus:border-blue-500 transition-colors"
        >
            {options.map((option) => (
                <option 
                    key={option.value} 
                    value={option.value} 
                    // Mengatur warna teks opsi agar terlihat gelap (jika browser tidak mendukung)
                    className="text-gray-900 bg-gray-200"
                >
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);


export default ContactPage;