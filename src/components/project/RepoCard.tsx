import { useState } from 'react';

interface Props {
  id: string;
  title: string;
  description: string;
  repolink: string;
}

export default function RepoCard({ props }: { props: Props }) {
  // ** Move state to parent component.
  // ** This component should be a pure function.
  // ** It should not have any state.
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelect = () => {
    console.log('Selected this items', isSelected);
    setIsSelected(!isSelected);
  };

  return (
    <div
      key={props.id}
      className={
        'w-full space-y-2 rounded border border-gray-800 bg-gray-900 p-5 transition-all hover:cursor-pointer' +
        (isSelected ? 'border-2 border-solid border-green-500' : 'border-none')
      }
      onClick={toggleSelect}
    >
      <h1 className="text-center text-lg font-semibold hover:text-gray-600">
        <a
          href={props.repolink}
          target="_blank"
          rel="noreferrer"
          className="text-gray-0"
        >
          {props.title}
        </a>
      </h1>
      <p className="text-gray-300">
        {props?.description?.substring(0, 50) + '...'}
      </p>
    </div>
  );
}
