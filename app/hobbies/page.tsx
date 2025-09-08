import { Metadata } from 'next';
import BaseCard from '@/components/ui/BaseCard';
import TechTag from '@/components/ui/TechTag';
import CodeHeader from '@/components/ui/CodeHeader';
import ActionLink from '@/components/ui/ActionLink';
import BulletList from '@/components/ui/BulletList';

export const metadata: Metadata = {
  title: 'Hobbies & Side Projects - Dave Jones',
  description:
    'Personal projects and hobbies that fuel my passion for development.',
};

export default function HobbiesPage() {
  return (
    <div className="animate-fade-in">
      <section className="mb-8">
        <CodeHeader
          syntax={[
            { text: '//', color: 'text-disabled' },
            { text: ' ', color: 'text-primary' },
            { text: 'Side Projects & Hobbies', color: 'green' },
          ]}
        />

        <BaseCard className="mb-6" hover={false}>
          <p className="text-[var(--vscode-text-primary)] leading-relaxed">
            Beyond my professional work, I love exploring new technologies and
            building projects that challenge me to learn and grow. Here are some
            of my recent side projects and ongoing hobbies.
          </p>
        </BaseCard>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Project 1 */}
        <BaseCard>
          <CodeHeader level="h2">🚀 Open Source CLI Tool</CodeHeader>
          <p className="text-[var(--vscode-text-secondary)] mb-3">
            A command-line tool for automating development workflows, written in
            Go.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <TechTag>Go</TechTag>
            <TechTag>CLI</TechTag>
            <TechTag>Open Source</TechTag>
          </div>
          <ActionLink href="#" external>
            View on GitHub
          </ActionLink>
        </BaseCard>

        {/* Project 2 */}
        <BaseCard>
          <CodeHeader level="h2">📊 Data Visualization Dashboard</CodeHeader>
          <p className="text-[var(--vscode-text-secondary)] mb-3">
            Interactive dashboard for visualizing complex datasets using D3.js
            and React.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <TechTag>React</TechTag>
            <TechTag>D3.js</TechTag>
            <TechTag>TypeScript</TechTag>
          </div>
          <ActionLink href="#" external>
            Live Demo
          </ActionLink>
        </BaseCard>

        {/* Project 3 */}
        <BaseCard>
          <CodeHeader level="h2">🤖 Machine Learning Experiments</CodeHeader>
          <p className="text-[var(--vscode-text-secondary)] mb-3">
            Exploring ML algorithms and building predictive models with Python
            and TensorFlow.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <TechTag>Python</TechTag>
            <TechTag>TensorFlow</TechTag>
            <TechTag>Jupyter</TechTag>
          </div>
          <ActionLink href="#" external>
            View Notebooks
          </ActionLink>
        </BaseCard>

        {/* Project 4 */}
        <BaseCard>
          <CodeHeader level="h2">🎮 Game Development</CodeHeader>
          <p className="text-[var(--vscode-text-secondary)] mb-3">
            Building indie games using Unity and C# in my spare time.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <TechTag>Unity</TechTag>
            <TechTag>C#</TechTag>
            <TechTag>Game Dev</TechTag>
          </div>
          <ActionLink href="#" external>
            Play on itch.io
          </ActionLink>
        </BaseCard>
      </section>

      <section>
        <CodeHeader
          level="h2"
          syntax={[
            { text: '#', color: 'text-disabled' },
            { text: ' Other Interests', color: 'text-primary' },
          ]}
        />
        <BaseCard hover={false}>
          <BulletList
            items={[
              'Contributing to open source projects',
              'Writing technical blog posts',
              'Attending tech meetups and conferences',
              'Learning new programming languages',
              'Building home automation projects',
              'Photography and digital art',
            ]}
            bulletStyle="dot"
            className="grid md:grid-cols-2 gap-3"
            itemClassName="flex items-center"
          />
        </BaseCard>
      </section>
    </div>
  );
}
