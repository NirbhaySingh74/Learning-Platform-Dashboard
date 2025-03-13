interface LanguageButtonProps {
    country: string;
    language: string;
    flag: string;
  }
  
  export default function LanguageButton({ country, language, flag }: LanguageButtonProps) {
    return (
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-gray-50">
        <img src={flag} alt={country} className="w-5 h-5 rounded-full" />
        <span className="text-gray-700">{language}</span>
      </button>
    );
  }