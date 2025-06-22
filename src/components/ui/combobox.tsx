import { useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { cn } from '@/lib/utils';

export interface ComboboxOption {
  id: string | number;
  name: string;
  description?: string;
  disabled?: boolean;
}

interface ComboboxProps {
  options: ComboboxOption[];
  value?: ComboboxOption | null;
  onChange: (value: ComboboxOption | null) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  displayValue?: (option: ComboboxOption | null) => string;
  filterFunction?: (query: string, option: ComboboxOption) => boolean;
}

export function EnhancedCombobox({
  options,
  value,
  onChange,
  placeholder = "Select an option...",
  className,
  disabled = false,
  displayValue = (option) => option?.name || '',
  filterFunction = (query, option) =>
    option.name.toLowerCase().includes(query.toLowerCase())
}: ComboboxProps) {
  const [query, setQuery] = useState('');

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) => filterFunction(query, option));

  return (
    <div className={cn("relative", className)}>
      <Combobox value={value} onChange={onChange} disabled={disabled}>
        <div className="relative">
          <Combobox.Input
            className={cn(
              "w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
              "placeholder:text-muted-foreground",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "pr-10"
            )}
            displayValue={displayValue}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-background py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredOptions.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-muted-foreground">
                Nothing found.
              </div>
            ) : (
              filteredOptions.map((option) => (
                <Combobox.Option
                  key={option.id}
                  className={({ active }) =>
                    cn(
                      "relative cursor-default select-none py-2 pl-10 pr-4",
                      active ? "bg-accent text-accent-foreground" : "text-foreground",
                      option.disabled && "opacity-50 cursor-not-allowed"
                    )
                  }
                  value={option}
                  disabled={option.disabled}
                >
                  {({ selected, active }) => (
                    <>
                      <div className="flex flex-col">
                        <span
                          className={cn(
                            "block truncate",
                            selected ? "font-medium" : "font-normal"
                          )}
                        >
                          {option.name}
                        </span>
                        {option.description && (
                          <span className="text-sm text-muted-foreground">
                            {option.description}
                          </span>
                        )}
                      </div>
                      {selected ? (
                        <span
                          className={cn(
                            "absolute inset-y-0 left-0 flex items-center pl-3",
                            active ? "text-accent-foreground" : "text-primary"
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
} 