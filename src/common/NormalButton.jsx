
export default function NormalButton({ children,color,text,text_color,onClick}) {
  return (
    <button className={`${color} ${text_color}  rounded-full text-center hover:bg-gray-300`} onClick={onClick}>
      {children}{text}
    </button>
  );
}
