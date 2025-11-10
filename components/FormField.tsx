import React from 'react';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'date';
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  icon?: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ id, name, label, type, placeholder, value, onChange, error, icon }) => {
  const commonClasses = `
    block w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700
    border text-accent-dark-gray dark:text-gray-200
    placeholder-gray-400 dark:placeholder-gray-500
    focus:outline-none focus:ring-2 transition-colors duration-200
    text-base
  `;

  const borderClasses = error
    ? 'border-red-500 focus:ring-red-500'
    : 'border-sky-gray/60 dark:border-sky-gray/40 focus:border-primary-500 focus:ring-primary-500';
    
  const inputPadding = icon ? 'pl-11' : 'pl-4';
    
  return (
    <div>
      <label htmlFor={id} className="block text-base font-medium text-accent-dark-gray dark:text-gray-300 mb-2">
        {label}
      </label>
      <div className="relative">
        {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {icon}
            </div>
        )}
        {type === 'textarea' ? (
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={3}
            className={`${commonClasses} ${borderClasses} ${inputPadding}`}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${commonClasses} ${borderClasses} ${inputPadding}`}
            // Style for date placeholder visibility
            onFocus={(e) => { if (type === 'date') e.target.style.color = 'inherit'; }}
            onBlur={(e) => { if (type === 'date' && !e.target.value) e.target.style.color = ''; }}
            style={type === 'date' && !value ? { color: 'rgba(107, 114, 128, 1)' } : {}}
          />
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormField;