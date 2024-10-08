export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm">
      {"success" in message && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
          {message.success}
        </div>
      )}
      {"error" in message && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          {message.error}
        </div>
      )}
      {"message" in message && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">{message.message}</div>
      )}
    </div>
  );
}
