const ExternalLink = ({ mark, children }) => {
  const { blank, href } = mark;
  return blank ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <a href={href}>{children}</a>
  );
};

export default ExternalLink;
