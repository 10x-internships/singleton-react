export enum TypoTag {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
}

export const getTypoTag = (tag: number) => {
  switch (tag) {
    case 0:
      return 'h1';
    case 1:
      return 'h2';
    case 2:
      return 'h3';
    case 3:
      return 'h4';
    case 4:
      return 'h5';
    case 5:
      return 'h6';
    case 6:
      return 'p';
    default:
      return 'div';
  }
};
