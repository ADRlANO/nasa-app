type ErrorMessageProps = {
  error: string;
};

export default function ErrorMessage(props: ErrorMessageProps) {
  return (
    <div class="rounded-md bg-red-50 p-4">
      <div class="flex">
        <div class="ml-3">
          <h3 class="text-sm font-medium text-red-800">Error</h3>
          <div class="mt-2 text-sm text-red-700">{props.error}</div>
        </div>
      </div>
    </div>
  );
}
