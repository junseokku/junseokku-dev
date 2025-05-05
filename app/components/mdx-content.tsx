interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType>;
  [key: string]: unknown;
}

export const MDXContent = ({ code, ...props }: MDXProps) => {
  return <div dangerouslySetInnerHTML={{ __html: code }} {...props} />;
};
