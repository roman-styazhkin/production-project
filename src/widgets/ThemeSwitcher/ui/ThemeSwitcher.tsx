import { FC } from 'react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Button } from 'shared/ui/Button';
import { ButtonThemes } from 'shared/ui/Button/ui/Button';

interface ThemeSwitcherProps {
    className?: string;
    theme?: Theme;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      buttonTheme={ButtonThemes.CLEAR}
      onClick={toggleTheme}
      type="button"
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
