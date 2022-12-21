import { Link, useLocation } from 'react-router-dom';

import type { NavigationListItemProps } from './NavigationListItem.types';

export const NavigationListItem = ({
  Icon,
  label,
  to = '/',
  testId,
}: NavigationListItemProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <li>
      <Link
        aria-label={label}
        data-testid={testId}
        aria-current={isActive ? 'page' : undefined}
        to={to}
        className={`${
          isActive && 'border-r-4 border-r-[#1db954]'
        } flex justify-around pt-2 pb-2`}
      >
        <Icon width={28} height={28} />
      </Link>
    </li>
  );
};
