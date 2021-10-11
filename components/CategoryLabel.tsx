import React from 'react';
import Link from 'next/link';

import { DiPython, DiJavascript1, DiCss3, DiPhp, DiRuby } from 'react-icons/di';

const enum colorKeys {
  JavaScript = 'yellow',
  CSS = 'blue',
  Python = 'green',
  PHP = 'purple',
  Ruby = 'red',
}

interface Props {
  category: string;
  width?: number;
}

const CategoryLabel: React.FC<Props> = ({ category, width = 8 }) => {
  let icon: JSX.Element | '';
  switch (category) {
    case 'JavaScript':
      icon = <DiJavascript1 className={`w-${width} h-${width}`} />;
      break;
    case 'CSS':
      icon = <DiCss3 className={`w-${width} h-${width}`} />;

      break;
    case 'Python':
      icon = <DiPython className={`w-${width} h-${width}`} />;

      break;
    case 'PHP':
      icon = <DiPhp className={`w-${width} h-${width}`} />;

      break;
    case 'Ruby':
      icon = <DiRuby className={`w-${width} h-${width}`} />;

      break;

    default:
      icon = '';
      break;
  }
  return (
    <span
      // @ts-ignore
      className={`text-${colorKeys[category]}-500 cursor-pointer`}
    >
      {/* // Todo: should use useRouter instead of hardcoded href. */}
      <Link href={`/blogs?category=${category.toLowerCase()}`}>{icon}</Link>
    </span>
  );
};

export default CategoryLabel;
