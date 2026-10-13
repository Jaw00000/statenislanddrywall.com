import { Phone, Calculator, ClipboardList } from 'lucide-react';
import { scrollToSection } from '@/lib/navigation';

export default function MobileConversionBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 glass-strong border-t border-champagne-400/20">
      <div className="flex items-center gap-2 p-2.5">
        <a
          href="tel:+17185550100"
          className="flex items-center justify-center gap-2 flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white active:scale-95 transition-transform"
        >
          <Phone className="h-4 w-4 text-champagne-300" />
          (718) 555-0100
        </a>
        <button
          onClick={() => scrollToSection('#quote')}
          className="flex items-center justify-center gap-2 flex-1 rounded-full bg-gradient-to-r from-champagne-400 to-champagne-500 px-4 py-3 text-sm font-bold text-ink-950 active:scale-95 transition-transform"
        >
          <ClipboardList className="h-4 w-4" />
          Free Quote
        </button>
      </div>
    </div>
  );
}
