interface NameDisplayProps {
  className?: string;
}

export default function NameDisplay({ className = '' }: NameDisplayProps) {
  return (
    <span className={`text-green-primary glow-text font-display ${className}`}>
      Stiven Villa
    </span>
  );
}