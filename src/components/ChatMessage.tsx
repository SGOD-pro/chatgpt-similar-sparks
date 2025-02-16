
import React from 'react';
import { cn } from '@/lib/utils';
import { Message } from '@/types';

export function ChatMessage({ message }: { message: Message }) {
  return (
    <div
      className={cn(
        "message-appear px-4 py-6 rounded-lg",
        message.role === 'user' 
          ? "bg-secondary text-secondary-foreground ml-12" 
          : "bg-muted text-muted-foreground mr-12"
      )}
    >
      <div className="max-w-3xl mx-auto">
        <p className="leading-7 whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}
