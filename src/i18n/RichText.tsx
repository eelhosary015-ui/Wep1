import React from 'react';

/** Replaces {token} placeholders inside a translated sentence. */
export function interpolate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    values[key] === undefined ? match : String(values[key]),
  );
}

interface RichTextProps {
  text: string;
  values?: Record<string, string | number>;
  strongClassName?: string;
}

/**
 * Renders a translated sentence and highlights {token} values.
 * Used for messages such as the demo-success confirmation.
 */
export const RichText: React.FC<RichTextProps> = ({
  text,
  values = {},
  strongClassName = 'font-semibold text-slate-900',
}) => {
  const parts = text.split(/(\{\w+\})/g);

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\{(\w+)\}$/);
        if (match && values[match[1]] !== undefined) {
          return (
            <strong key={index} className={strongClassName}>
              {values[match[1]]}
            </strong>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
};
