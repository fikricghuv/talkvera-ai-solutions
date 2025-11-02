import React, { useState, useCallback } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CircleUser, Loader } from 'lucide-react';
import StarField from '../components/StarFieldAnimation';

// --- Type/Interface Declarations (Dianggap Anda menggunakan TypeScript/TSX) ---
interface SelectOption {
    value: string;
    label: string;
}

interface CommonProps {
    id: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<any>) => void;
}

interface TextareaComponentProps extends CommonProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

interface InputComponentProps extends CommonProps {
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SelectComponentProps extends CommonProps {
    options: SelectOption[];
    selectStyle: React.CSSProperties;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// --- Data Konstan ---
const employeeOptions: SelectOption[] = [
    { value: '', label: 'Select Employee Range' },
    { value: '1-10', label: '1 - 10 Employees (Startup)' },
    { value: '11-50', label: '11 - 50 Employees (Small Business)' },
    { value: '51-200', label: '51 - 200 Employees (Mid-size)' },
    { value: '201+', label: '201+ Employees (Enterprise)' },
];

const initialFormData = {
    firstName: '',
    lastName: '',
    role: '',
    website: '',
    email: '',
    company: '',
    companySize: '',
    projectDesc: '',
};

const API_ENDPOINT = 'https://n8n.server.talkvera.com/webhook/upload-contact-information';

function ContactPage() {
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error' | null; text: string | null }>({ type: null, text: null });

    // Style untuk panah dropdown custom
    const selectStyle = {
        backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%239CA3AF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3csvg%3e\")",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 0.75rem center',
        backgroundSize: '1.5em 1.5em',
        paddingRight: '2.5rem', 
    };

    // Handler universal untuk memperbarui state formulir
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        if (message.type) setMessage({ type: null, text: null });
    }, [message.type]);

    // Handler untuk pengiriman formulir
    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage({ type: null, text: null });

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'landing-page',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage({ 
                    type: 'success', 
                    text: 'Success! Your consultation request has been sent. We will contact you shortly.' 
                });
                setFormData(initialFormData); // Reset form
            } else {
                // Mencoba membaca response JSON untuk detail error
                const errorData = await response.json().catch(() => ({ message: 'Server responded with an error.' }));
                throw new Error(errorData.message || `HTTP Error: ${response.status}`);
            }
        } catch (error) {
            console.error('Submission failed:', error);
            setMessage({ 
                type: 'error', 
                text: `Submission Failed: ${error instanceof Error ? error.message : 'Unknown error occurred.'} Please try again.`
            });
        } finally {
            setIsSubmitting(false);
        }
    }, [formData]);

    return (
        <div className="pt-16 min-h-screen text-white">
            
            {/* 1. Header and Title */}
            <section className="relative py-24 text-center overflow-hidden">
                <StarField />
                <div className="relative max-w-4xl mx-auto px-6 z-10">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                        <CircleUser className="w-4 h-4 text-blue-400" />
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

            <section className="pb-32">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Container dengan Border Gradient Kustom */}
                    <div className="p-0.5 rounded-3xl bg-gradient-to-br from-blue-700/50 via-gray-800 to-cyan-700/50 shadow-2xl shadow-blue-900/50">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-gray-900 rounded-[calc(1.5rem-2px)] divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
                        
                            {/* Left Column: Contact Information */}
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
                                            <a href="mailto:hello@talkvera.com" className="text-gray-400 hover:text-blue-400 transition-colors text-base">hello@talkvera.com</a>
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

                            <div className="lg:col-span-2 p-8 md:p-12">
                                <h2 className='text-md font-semibold text-white pb-2'>Let's get to know you</h2>
                                
                                {/* Form Submission Feedback */}
                                {message.text && (
                                    <div className={`p-4 mb-6 rounded-lg font-medium ${message.type === 'success' ? 'bg-green-600/20 text-green-300 border border-green-700' : 'bg-red-600/20 text-red-300 border border-red-700'}`}>
                                        {message.text}
                                    </div>
                                )}

                                {/* FORM */}
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    
                                    {/* Row 1: First Name and Last Name */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputComponent id="firstName" label="First Name" type="text" placeholder="Enter your first name" required={true} value={formData.firstName} onChange={handleChange} />
                                        <InputComponent id="lastName" label="Last Name" type="text" placeholder="Enter your last name" required={true} value={formData.lastName} onChange={handleChange} />
                                    </div>
                                    
                                    {/* Row 2: Your Role and Website */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputComponent id="role" label="Your Role within Organization" type="text" placeholder="e.g., CTO, Head of AI" required={true} value={formData.role} onChange={handleChange} />
                                        {/* PERBAIKAN: Mengubah type="url" menjadi type="text" */}
                                        <InputComponent 
                                            id="website" 
                                            label="Website (Optional)" 
                                            type="text" 
                                            placeholder="e.g., www.company.com or https://www.company.com" 
                                            required={false} 
                                            value={formData.website} 
                                            onChange={handleChange} 
                                        />
                                    </div>

                                    {/* Row 3: Work Email and Company Name */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputComponent id="email" label="Work Email" type="email" placeholder="example@company.com" required={true} value={formData.email} onChange={handleChange} />
                                        <InputComponent id="company" label="Company Name" type="text" placeholder="Your Company Name" required={true} value={formData.company} onChange={handleChange} />
                                    </div>
                                    
                                    {/* Row 4: Company Size */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <SelectComponent 
                                            id="companySize" // ID harus sesuai dengan key di formData
                                            label="Company Size (Number of Employees)" 
                                            options={employeeOptions} 
                                            required={true}
                                            selectStyle={selectStyle} 
                                            value={formData.companySize}
                                            onChange={handleChange} 
                                        />
                                        {/* Kolom kosong untuk menjaga tata letak 2 kolom */}
                                        <div></div> 
                                    </div>

                                    {/* Row 5: Tell us about your project... */}
                                    <TextareaComponent id="projectDesc" label="How Can We Help?" placeholder="Describe your AI needs, current challenges, and goals..." required={true} value={formData.projectDesc} onChange={handleChange}/>
                                    
                                    {/* Submit Button */}
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.01] shadow-xl shadow-blue-500/30 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader className="animate-spin w-5 h-5" />
                                                <span>Sending Request...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Consultation Request</span>
                                                <ArrowRight size={20} />
                                            </>
                                        )}
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

// Reusable Input Component
const InputComponent = ({ id, label, type = 'text', placeholder, required = false, value, onChange }: InputComponentProps) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 
                       focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:outline-none transition-all duration-200"
        />
    </div>
);

// Reusable Textarea Component
const TextareaComponent = ({ id, label, placeholder, required = false, value, onChange }: TextareaComponentProps) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
            id={id}
            rows={4}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 
                       focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:outline-none transition-all duration-200 resize-none"
        ></textarea>
    </div>
);

// Komponen Select
const SelectComponent = ({ id, label, options, required = false, selectStyle, value, onChange }: SelectComponentProps) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <select
            id={id}
            required={required}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white appearance-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:outline-none transition-all duration-200"
            style={selectStyle} 
        >
            {options.map((option) => (
                <option 
                    key={option.value || 'default'} // Tambahkan 'default' key untuk opsi pertama yang kosong
                    value={option.value} 
                    className="text-gray-900 bg-gray-200"
                    disabled={option.value === ''} // Membuat opsi 'Select' tidak dapat dipilih
                >
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

export default ContactPage;
