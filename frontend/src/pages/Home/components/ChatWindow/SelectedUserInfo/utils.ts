export const getUserStatusDisplay = (
  timeSinceFunction: (date: string) => string,
  userStatus?: string,
  lastSeen?: Date | string,
) => {
  if (userStatus === 'online') {
    return 'online';
  } else if (lastSeen) {
    const lastSeenISO = lastSeen instanceof Date ? lastSeen.toISOString() : lastSeen;
    return `Last seen: ${timeSinceFunction(lastSeenISO)}`;
  }
  return 'Status unavailable';
};
