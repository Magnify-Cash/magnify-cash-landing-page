
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: React.ReactNode;
  wrapperClassName?: string;
}

export const Image = ({ 
  src, 
  alt, 
  className, 
  fallback = null,
  wrapperClassName,
  ...props 
}: ImageProps) => {
  const [error, setError] = useState(false);

  if (error && fallback) {
    return <div className={cn("", wrapperClassName)}>{fallback}</div>;
  }

  return (
    <div className={wrapperClassName}>
      <img
        src={src}
        alt={alt}
        className={className}
        onError={() => setError(true)}
        {...props}
      />
    </div>
  );
};
