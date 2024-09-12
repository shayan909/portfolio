import { useTheme } from 'next-themes';

export const ThemeConfigurator = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <></>
  );
};
