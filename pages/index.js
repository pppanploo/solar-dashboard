import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { Text } from '../locales/Text';
import DashboardCard from '../components/DashboardCard';

export default function Home() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const t = Text[language];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{t.title}</h1>
        <button onClick={toggleLanguage} className="bg-orange-400 px-3 py-1 text-white rounded">
          {language === 'th' ? '🇹🇭 ไทย' : '🇬🇧 English'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard title={t.production} value="168 kWh" />
        <DashboardCard title={t.efficiency} value="91%" />
        <DashboardCard title={t.status} value={t.online} />
      </div>
    </div>
  );
}