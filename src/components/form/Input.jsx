'use client';

import React from 'react';
import { useController } from 'react-hook-form';
import { AlertOctagonIcon } from 'lucide-react';

export default function Input({
  label,
  control,
  defaultValue = '',
  name,
  rules,
  type = 'text',
  ...props
}) {
  const {
    field,
    fieldState: { error },
  } = useController({ control, defaultValue, name, rules });

  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <label className='text-white text-lg font-semibold font-Ubuntu'>
          {label}
        </label>
      )}
      <input
        value={field.value}
        onChange={field.onChange}
        type={type}
        className='h-[48px] bg-[#1d1c2d] rounded-md p-[15px] text-white'
        {...props}
      />
      {error?.message && (
        <div className='flex items-center ml-4 gap-2'>
          <AlertOctagonIcon
            size={15}
            className={`${error?.message && 'text-error'}`}
          />
          <p className='text-sm text-error font-semibold'>{error?.message}</p>
        </div>
      )}
    </div>
  );
}
