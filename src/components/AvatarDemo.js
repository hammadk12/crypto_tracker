import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

const AvatarDemo = () => (
  <div className="flex relative">
    <Avatar.Root className="bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle z-30">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Colm Tuite"
      />
      <Avatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        CT
      </Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root className="bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle z-20 -ml-3">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
        alt="Pedro Duarte"
      />
      <Avatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        JD
      </Avatar.Fallback>
    </Avatar.Root>
    <Avatar.Root className="bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle z-10 -ml-3">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRzaG90JTIwY2lyY3VsYXIlMjBwbmd8ZW58MHx8MHx8fDA%3D"
        alt="Colm Tuite"
      />
      <Avatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        CT
      </Avatar.Fallback>
    </Avatar.Root>
  </div>
);

export default AvatarDemo