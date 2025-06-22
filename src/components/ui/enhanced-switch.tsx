import { Switch, Transition } from '@headlessui/react';
import { cn } from '@/lib/utils';

interface EnhancedSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
}

export function EnhancedSwitch({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  size = 'md',
  className,
  showIcon = false
}: EnhancedSwitchProps) {
  const sizeClasses = {
    sm: {
      switch: 'h-4 w-7',
      thumb: 'h-3 w-3',
      translate: 'translate-x-3'
    },
    md: {
      switch: 'h-6 w-11',
      thumb: 'h-5 w-5',
      translate: 'translate-x-5'
    },
    lg: {
      switch: 'h-8 w-14',
      thumb: 'h-6 w-6',
      translate: 'translate-x-6'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={cn("flex items-center", className)}>
      <Switch
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={cn(
          "relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
          "focus:outline-none focus:ring-2 focus:ring-aeron-purple focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          currentSize.switch,
          checked 
            ? "bg-gradient-to-r from-aeron-purple to-aeron-blue" 
            : "bg-muted"
        )}
      >
        <span className="sr-only">{label || 'Toggle switch'}</span>
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none inline-block rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
            currentSize.thumb,
            checked ? currentSize.translate : "translate-x-0"
          )}
        >
          {showIcon && (
            <Transition
              show={checked}
              enter="transition-opacity duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="flex h-full w-full items-center justify-center">
                <svg
                  className="h-3 w-3 text-aeron-purple"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                </svg>
              </div>
            </Transition>
          )}
        </span>
      </Switch>
      
      {(label || description) && (
        <div className="ml-3">
          {label && (
            <Switch.Label 
              as="span" 
              className={cn(
                "text-sm font-medium text-foreground cursor-pointer",
                disabled && "cursor-not-allowed opacity-50"
              )}
            >
              {label}
            </Switch.Label>
          )}
          {description && (
            <Switch.Description 
              as="span" 
              className={cn(
                "text-sm text-muted-foreground",
                label ? "block" : ""
              )}
            >
              {description}
            </Switch.Description>
          )}
        </div>
      )}
    </div>
  );
} 