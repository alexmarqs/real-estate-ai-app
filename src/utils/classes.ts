export const cls = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};
