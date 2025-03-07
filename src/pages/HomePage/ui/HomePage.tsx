import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation('home');

  return (
    <div className="page-wrapper">
      <h1>{t('Главная страница')}</h1>
    </div>
  );
};

export default HomePage;
