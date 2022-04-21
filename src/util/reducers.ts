export const partition = <T>(
  check: (_: T) => boolean
): ((__: T[][], ___: T) => T[][]) => {
  return (acc: T[][], curr: T) => {
    if (acc.length === 0) return check(curr) ? [[curr], []] : [[], [curr]];
    if (check(curr)) acc[0].push(curr);
    else acc[1].push(curr);
    return acc;
  };
};
