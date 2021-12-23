import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Picture src={src} alt={alt} />
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Picture = ({ src, alt }) => {
  const suffixes = [
    ".jpg 1x",
    ".avif 1x",
    "@2x.jpg 2x",
    "@2x.avif 2x",
    "@3x.jpg 3x",
    "@3x.avif 3x",
  ];
  const srcSet = suffixes
    .map((suffix) => src.replace(".jpg", suffix))
    .join(", ");

  return (
    <picture>
      <source srcSet={srcSet} />
      <Image src={src} alt={alt} />
    </picture>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
