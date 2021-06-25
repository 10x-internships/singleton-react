export enum TypoTag {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  Span,
}

export const getTypoTag = (tag: TypoTag) => {
  switch (tag) {
    case TypoTag.H1:
      return 'h1';
    case TypoTag.H2:
      return 'h2';
    case TypoTag.H3:
      return 'h3';
    case TypoTag.H4:
      return 'h4';
    case TypoTag.H5:
      return 'h5';
    case TypoTag.H6:
      return 'h6';
    case TypoTag.Paragraph:
      return 'p';
    case TypoTag.Span:
      return 'span';
    default:
      return 'div';
  }
};
