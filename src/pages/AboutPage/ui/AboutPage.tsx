import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      <h1>{t('О нашем сайте')}</h1>
      <h1>{t('О нашем сайте1234234234')}</h1>
    </div>
  );
};

export default AboutPage;
