interface Hero {
  id: string;
  name: string;
  image: string;
}

interface HeroAttributes {
  str: number;
  int: number;
  agi: number;
  luk: number;
}

export { Hero, HeroAttributes };
