export const updateFavicon = (theme: 'dark' | 'light'): void => {
    const link = document.getElementById('favicon-link') as HTMLLinkElement | null;
    if (link) {
        link.href = theme === 'dark' ? '/favicon-dark.svg' : '/favicon-light.svg';
    }
};

export const setTheme = (theme: 'dark' | 'light'): void => {
    const root = document.documentElement;
    if (theme === 'dark') {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
    updateFavicon(theme);
};