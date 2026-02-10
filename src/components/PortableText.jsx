import { PortableText as PT } from '@portabletext/react';

const components = {
  types: {
    image: ({ value }) => (
      <img
        src={value.asset.url}
        alt={value.alt || ''}
        className="my-4 rounded shadow-md"
      />
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold my-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold my-2">{children}</h3>,
    normal: ({ children }) => <p className="my-2">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 my-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 my-2">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 rounded px-1 py-0.5 text-sm">{children}</code>
    ),
    link: ({ children, value }) => (
      <a
        href={value.href}
        target={value.blank ? '_blank' : '_self'}
        className="text-blue-600 underline hover:text-blue-800"
      >
        {children}
      </a>
    ),
  },
};

export default function PortableText({ value }) {
  return <PT value={value} components={components} />;
}
