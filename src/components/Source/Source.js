const suffixes = [
  ".jpg 1x",
  ".avif 1x",
  "@2x.jpg 2x",
  "@2x.avif 2x",
  "@3x.jpg 3x",
  "@3x.avif 3x",
];

const toSrcSet = (src) =>
  suffixes.map((suffix) => src.replace(".jpg", suffix)).join(", ");

const Source = ({ src }) => <source srcSet={toSrcSet(src)} />;

export default Source;
