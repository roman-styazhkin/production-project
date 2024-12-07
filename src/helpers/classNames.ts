type Mods = Record<string, boolean | string>

export function classNames(mainclass: string, mods: Mods, additional: string[]): string  {


  return [
    mainclass,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className)
  ].join(' ');
}
