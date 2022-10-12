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
        'w-full space-y-2 rounded-lg border bg-white p-5 drop-shadow-sm transition-all hover:scale-[1.02] hover:cursor-pointer' +
        (isSelected ? 'border-2 border-solid border-green-500' : 'border-none')
      }
      onClick={toggleSelect}
    >
      <h1 className="text-center text-lg font-semibold hover:text-blue-600">
        <a
          href={props.repolink}
          target="_blank"
          rel="noreferrer"
        >
          {props.title}
        </a>
      </h1>
      <p>{props?.description?.substring(0, 50) + '...'}</p>
    </div>
  );
}
