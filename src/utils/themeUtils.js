// import './variables.css';

export const applyTheme = (theme) => {
  if (theme === 'dark') {
    document.documentElement.style.setProperty('--bg-color', 'var(--bg-color-dark)');
    document.documentElement.style.setProperty('--text-color', 'var(--text-color-dark)');
  } else if (theme === 'light') {
    document.documentElement.style.setProperty('--bg-color', 'var(--bg-color-light)');
    document.documentElement.style.setProperty('--text-color', 'var(--text-color-light)');
  } else if (theme === 'season') {
    document.documentElement.style.setProperty('--bg-color', 'var(--bg-color-season)');
    document.documentElement.style.setProperty('--text-color', 'var(--text-color-season)');
  }
};

export default applyTheme;