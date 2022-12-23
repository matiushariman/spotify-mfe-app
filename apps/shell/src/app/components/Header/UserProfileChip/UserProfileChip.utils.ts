export const getGreetings = () => {
  const currentTime = new Date().getHours();

  if (currentTime < 12) {
    return 'Good morning';
  } else if (currentTime < 18) {
    return 'Good afternoon';
  }

  return 'Good evening';
};

export const getFirstName = (displayName?: string | null) => {
  if (!displayName) {
    return '-';
  }

  return displayName.split(' ')[0];
};
