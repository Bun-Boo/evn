export const CheckPermission = (
  eventName?: string,
  listRole?: string[],
): boolean | undefined => {
  if (!listRole) {
    return false;
  }
  if (eventName && listRole && listRole.length > 0) {
    const check = listRole?.some(element => element === eventName);
    return check;
  }
  return true;
};

export const isIncludePermission = (
  groupRole?: any,
  listRoleUser?: string[],
): boolean | undefined => {
  if (!groupRole || !listRoleUser) {
    return false;
  }
  return Object.values(groupRole).some(permission =>
    listRoleUser.includes(permission as string),
  );
};
