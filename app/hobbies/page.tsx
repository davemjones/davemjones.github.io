import { Metadata } from 'next';
import BaseCard from '@/components/ui/BaseCard';
import TechTag from '@/components/ui/TechTag';
import CodeHeader from '@/components/ui/CodeHeader';
import ActionLink from '@/components/ui/ActionLink';
import BulletList from '@/components/ui/BulletList';
import projectsData from './projects.json';

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
        {projectsData.map((project, index) => (
          <BaseCard key={index}>
            <CodeHeader level="h2">{project.projectName}</CodeHeader>
            <p className="text-[var(--vscode-text-secondary)] mb-3">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.techTags.map((tech, techIndex) => (
                <TechTag key={techIndex}>{tech}</TechTag>
              ))}
            </div>
            <ActionLink href={project.url} external>
              View on GitHub
            </ActionLink>
          </BaseCard>
        ))}
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
              'Learning to sew menswear 🧵',
              'Jogging city trails 🏃🏻',
              'Senior pet adoptions',
              'Learning new technologies - AT Protocol (Bluesky)',
              'Building home automation projects - Home Assistant',
              'Responsible AI use',
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
