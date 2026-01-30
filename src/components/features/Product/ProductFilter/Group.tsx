import type { GroupProp } from './Group.type';

export const Group = ({
  title,
  children,
  k,
  setExpanded,
  expanded,
}: GroupProp) => (
  <div className="border-b border-light-300 py-4">
    <button
      className="flex w-full items-center justify-between text-body-medium text-dark-900"
      onClick={() => setExpanded(s => ({ ...s, [k]: !s[k] }))}
      aria-expanded={expanded[k]}
      aria-controls={`${k}-section`}
    >
      <span>{title}</span>
      <span className="text-caption text-dark-700">
        {expanded[k] ? '−' : '+'}
      </span>
    </button>
    <div
      id={`${k}-section`}
      className={`${expanded[k] ? 'mt-3 block' : 'hidden'}`}
    >
      {children}
    </div>
  </div>
);
