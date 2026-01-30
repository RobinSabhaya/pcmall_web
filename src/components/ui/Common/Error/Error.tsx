import type { ErrorProp } from './Error.type';

export default function Error({
  field,
  message,
  className = 'flex justify-start text-brand-primary text-sm my-1',
  style = {},
}: ErrorProp) {
  return (
    <>
      {field ? (
        <p className={className} style={style}>
          {field.state.meta.errors.at(0)?.message ?? ''}
        </p>
      ) : (
        <p className={className} style={style}>
          {message}
        </p>
      )}
    </>
  );
}
