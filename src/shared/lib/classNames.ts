type Mods = Record<string, boolean | string>
export function classNames(mainclass: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    mainclass,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className, _]) => className),
  ].join(' ');
}
