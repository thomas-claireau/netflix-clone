type Props = {
	children: React.ReactNode;
}

export default function Button({ children }: Props) {
  return <button className="bg-red py-2 px-4 rounded">{children}</button>;
}
