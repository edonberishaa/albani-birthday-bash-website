
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface Wish {
  id: number;
  name: string;
  message: string;
}

const Wishes = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [wishes, setWishes] = useState<Wish[]>([
    { id: 1, name: 'Ervis', message: 'Gëzuar ditëlindjen shoku! Të uroj shëndet dhe lumturi!' },
    { id: 2, name: 'Arbër', message: 'Shumë urime për ditëlindjen! Ishalla i gëzon edhe 100 vite të tjera!' },
    { id: 3, name: 'Elton', message: 'Urime, vëlla! Gjithë të mirat në jetë!' }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      toast.error('Ju lutem plotësoni të gjitha fushat!');
      return;
    }
    
    const newWish = {
      id: Date.now(),
      name,
      message
    };
    
    setWishes([newWish, ...wishes]);
    setName('');
    setMessage('');
    
    toast.success('Urimi juaj u shtua!');
  };

  return (
    <section className="my-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Dërgo një urim</h2>
      
      <div className="max-w-xl mx-auto mb-8 p-6 bg-albani-black rounded-lg border border-albani-red">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Emri</label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Shkruaj emrin tënd"
              className="bg-albani-gray border-albani-red"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Mesazhi</label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Shkruaj urimin tënd për Albanin..."
              rows={4}
              className="bg-albani-gray border-albani-red"
            />
          </div>
          
          <Button type="submit" className="w-full bg-albani-red hover:bg-red-700">
            Dërgo urimin
          </Button>
        </form>
      </div>
      
      <div className="space-y-4">
        {wishes.map((wish) => (
          <div key={wish.id} className="p-4 rounded-lg bg-albani-black border border-albani-gray">
            <p className="font-bold text-albani-red">{wish.name}</p>
            <p className="text-gray-300">{wish.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wishes;
