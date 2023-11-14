export enum MetaSeason {
  Spring = "Spring",
  Summer = "Summer",
  Autumn = "Autumn",
  Winter = "Winter",
}

export enum Modifier {
  Bright = "Bright",
  Soft = "Soft",
  Dark = "Dark",
  Light = "Light",
  True = "True",
}

export enum ColorCategory {
  Neutrals = "neutrals",
  Reds = "reds",
  Oranges = "oranges",
  Yellows = "yellows",
  Greens = "greens",
  Blues = "blues",
  Purples = "purples",
}

export const rainbow: ColorCategory[] = [
  ColorCategory.Reds,
  ColorCategory.Oranges,
  ColorCategory.Yellows,
  ColorCategory.Greens,
  ColorCategory.Blues,
  ColorCategory.Purples,
  ColorCategory.Neutrals,
];

abstract class ColorSeason {
  metaSeason: MetaSeason;
  modifier: Modifier;

  constructor(metaSeason: MetaSeason, modifier: Modifier) {
    this.metaSeason = metaSeason;
    this.modifier = modifier;
  }

  abstract isWarm(): boolean;

  abstract getColors(): { [k in ColorCategory]: string[] };
}

abstract class SpringSeason extends ColorSeason {
  constructor(modifier: Modifier) {
    super(MetaSeason.Spring, modifier);
  }

  isWarm(): boolean {
    return true;
  }
}

export class BrightSpring extends SpringSeason {
  constructor() {
    super(Modifier.Bright);
  }

  getColors(): { [k in ColorCategory]: string[] } {
    return {
      [ColorCategory.Reds]: ["#EA3446", "#DB4533"],
      [ColorCategory.Oranges]: ["#E36C47"],
      [ColorCategory.Yellows]: ["#FAE95E"],
      [ColorCategory.Greens]: ["#5CC84D"],
      [ColorCategory.Blues]: ["#55BDF9", "#8FCBEE"],
      [ColorCategory.Purples]: ["#D7478C"],
      [ColorCategory.Neutrals]: ["#FFFEF2", "#473D34"],
    };
  }
}

export class TrueSpring extends SpringSeason {
  constructor() {
    super(Modifier.True);
  }

  getColors(): { [k in ColorCategory]: string[] } {
    return {
      [ColorCategory.Reds]: ["#DB4533", "#DE5959"],
      [ColorCategory.Oranges]: ["#E57F3B"],
      [ColorCategory.Yellows]: ["#F9DB6E"],
      [ColorCategory.Greens]: ["#B8D273", "#939841"],
      [ColorCategory.Blues]: ["#5CBED7"],
      [ColorCategory.Purples]: ["#D65E80"],
      [ColorCategory.Neutrals]: ["#FFFDD5", "#855D38"],
    };
  }
}

export class SoftSpring extends SpringSeason {
  constructor() {
    super(Modifier.Soft);
  }

  getColors(): { [k in ColorCategory]: string[] } {
    return {
      [ColorCategory.Reds]: ["#DA345E", "#E16C68"],
      [ColorCategory.Oranges]: ["#EBA582"],
      [ColorCategory.Yellows]: ["#FBE5B9"],
      [ColorCategory.Greens]: ["#CBDFAD"],
      [ColorCategory.Blues]: ["#81CBEF"],
      [ColorCategory.Purples]: ["#E47190"],
      [ColorCategory.Neutrals]: ["#FFFED5", "#867A60"],
    };
  }
}

export function getVariants(metaSeason: MetaSeason): ColorSeason[] {
  switch (metaSeason) {
    case MetaSeason.Spring: {
      return [new BrightSpring(), new TrueSpring(), new SoftSpring()];
    }
    default: {
      return [];
    }
  }
}
