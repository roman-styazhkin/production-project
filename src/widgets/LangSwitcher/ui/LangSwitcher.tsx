import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import { Button } from 'shared/ui/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={className}
      onClick={toggleLang}
      type="button"
    >
      {t('Язык')}
    </Button>
  );
};
