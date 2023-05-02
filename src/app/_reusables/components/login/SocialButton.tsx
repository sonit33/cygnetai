interface Props {
  imageUrl: string;
  label: string;
  onClick: () => void;
}

export default function SocialButton({ imageUrl, label, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border-2 border-gray-200 bg-gray-100 w-72 px-6 p-2 lg:px-8 lg:p-4 lg:w-96 rounded flex items-center shadow hover:bg-blue-100 hover:border-blue-200"
    >
      <p className="w-8">
        <img src={imageUrl} className="h-5" />
      </p>
      <span className="flex-auto text-left">{label}</span>
    </button>
  );
}
