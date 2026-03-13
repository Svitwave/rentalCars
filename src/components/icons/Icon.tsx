interface IconProps {
  id: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Icon({ id, width = 16, height = 16, className }: IconProps) {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`/svg/symbol-defs.svg#${id}`} />
    </svg>
  );
}