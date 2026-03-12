
export interface GreetingProps {
  name: string;
  greeting?: string;
}

export const Greeting = ({ name, greeting = 'Hello' }: GreetingProps) => {
  return (
    <div>
      <h1>{greeting}, {name}!</h1>
    </div>
  );
};