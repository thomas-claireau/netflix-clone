import World from './ui/World';

export default function Languages() {
  return (
    <div className="flex bg-transparent border-2 border-white p-1.5">
      <World />
      <select className="bg-transparent">
        <option value="#fr">Français</option>
        <option value="#en">English</option>
      </select>
    </div>
  );
}
