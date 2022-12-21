import { Logo } from './Logo';
import { NavigationList } from './NavigationList';

export const Navigation = () => (
  <nav
    data-testid="navigation"
    className="min-w-[80px] fixed bg-black top-0 bottom-0 overflow-y-auto z-10 divide-y divide-gray-800"
  >
    <div className="p-4 pt-3 pb-3">
      <Logo />
    </div>
    <div className="pt-6">
      <NavigationList />
    </div>
  </nav>
);
