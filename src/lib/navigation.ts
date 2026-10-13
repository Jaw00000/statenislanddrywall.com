import type { ServiceTierId } from '@/data/services';

export function navigateToService(slug: string) {
  window.history.pushState({}, '', `/services/${slug}`);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function navigateToHome() {
  if (window.location.pathname !== '/') {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export function getCurrentServiceSlug(): string | null {
  const match = window.location.pathname.match(/^\/services\/(.+)$/);
  return match ? match[1] : null;
}

export function scrollToSection(selector: string, fallbackNavigate = true) {
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  } else if (fallbackNavigate) {
    navigateToHome();
    setTimeout(() => {
      document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  }
}
