
export const applyTheme = (theme) => {
  if (theme === 'dark') {
    // document.documentElement.style.setProperty('--bg-color', 'var(--bg-color-dark)');
    // document.documentElement.style.setProperty('--text-color', 'var(--text-color-dark)');
    document.documentElement.style.setProperty('--button-bg-color', 'var(--button-bg-color-dark)');
    document.documentElement.style.setProperty('--button-text-color', 'var(--button-text-color-dark)');
    document.documentElement.style.setProperty('--button-border', 'var(--button-border-dark)');
    document.documentElement.style.setProperty('--button-box-shadow-color', 'var(--button-box-shadow-color-dark)');

  } else if (theme === 'light') {
    // document.documentElement.style.setProperty('--bg-color', 'var(--bg-color-light)');
    // document.documentElement.style.setProperty('--text-color', 'var(--text-color-light)');
    document.documentElement.style.setProperty('--button-bg-color', 'var(--button-bg-color-light)');
    document.documentElement.style.setProperty('--button-text-color', 'var(--button-text-color-light)');
    document.documentElement.style.setProperty('--button-border', 'var(--button-border-light)');
    document.documentElement.style.setProperty('--button-box-shadow-color', 'var(--button-box-shadow-color-light)');
  } else if (theme === 'season') {
    document.documentElement.style.setProperty('--bg-color', 'var(--bg-color-season)');
    document.documentElement.style.setProperty('--text-color', 'var(--text-color-season)');
    document.documentElement.style.setProperty('--button-bg-color', 'var(--button-bg-color-season)');
    document.documentElement.style.setProperty('--button-text-color', 'var(--button-text-color-season)');
    document.documentElement.style.setProperty('--button-border', 'var(--button-border-season)');
    document.documentElement.style.setProperty('--button-box-shadow-color', 'var(--button-box-shadow-color-season)');
  }
};


export default applyTheme;