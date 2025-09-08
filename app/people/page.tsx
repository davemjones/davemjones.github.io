import { Metadata } from 'next';
import BaseCard from '@/components/ui/BaseCard';
import CodeHeader from '@/components/ui/CodeHeader';
import PersonCard from '@/components/ui/PersonCard';
import peopleData from './people.json';

export const metadata: Metadata = {
  title: 'People Smarter than Me - Dave Jones',
  description:
    'Amazing developers and thought leaders who inspire me to keep learning.',
};

export default function PeoplePage() {
  return (
    <div className="animate-fade-in">
      <section className="mb-8">
        <CodeHeader
          syntax={[
            { text: 'import', color: 'teal' },
            { text: ' { ', color: 'text-primary' },
            { text: 'inspiration', color: 'blue' },
            { text: ' } ', color: 'text-primary' },
            { text: 'from', color: 'teal' },
            { text: ' ', color: 'text-primary' },
            { text: "'./amazing-people'", color: 'orange' },
            { text: ';', color: 'text-primary' },
          ]}
        />

        <BaseCard className="mb-6" hover={false}>
          <p className="text-[var(--vscode-text-primary)] leading-relaxed">
            The tech community is filled with brilliant minds who share their
            knowledge generously. Here are some of the developers, thought
            leaders, and creators who inspire me to keep learning and pushing
            boundaries.
          </p>
        </BaseCard>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        {peopleData.map((person, index) => (
          <PersonCard
            key={index}
            name={person.name}
            title={person.title}
            summary={person.summary}
            socialLinks={person.socialLinks}
          />
        ))}
      </section>
    </div>
  );
}
