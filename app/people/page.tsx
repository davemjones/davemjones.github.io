import { Metadata } from 'next';
import BaseCard from '@/components/ui/BaseCard';
import CodeHeader from '@/components/ui/CodeHeader';
import ActionLink from '@/components/ui/ActionLink';

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
        {/* Person 1 */}
        <BaseCard>
          <CodeHeader level="h2" className="mb-2">
            Kent C. Dodds
          </CodeHeader>
          <p className="text-[var(--vscode-teal)] text-sm mb-3 font-mono">
            @kentcdodds
          </p>
          <p className="text-[var(--vscode-text-secondary)] mb-4">
            JavaScript educator and Testing Library creator. His approach to
            testing and teaching has transformed how I think about code quality.
          </p>
          <div className="flex gap-3">
            <ActionLink href="https://kentcdodds.com" external>
              Website
            </ActionLink>
            <ActionLink href="https://twitter.com/kentcdodds" external>
              Twitter
            </ActionLink>
          </div>
        </BaseCard>

        {/* Person 2 */}
        <BaseCard>
          <CodeHeader level="h2" className="mb-2">
            Dan Abramov
          </CodeHeader>
          <p className="text-[var(--vscode-teal)] text-sm mb-3 font-mono">
            @dan_abramov
          </p>
          <p className="text-[var(--vscode-text-secondary)] mb-4">
            React core team member and Redux creator. His deep dives into React
            internals have been invaluable for understanding modern frontend
            development.
          </p>
          <div className="flex gap-3">
            <ActionLink href="https://overreacted.io" external>
              Blog
            </ActionLink>
            <ActionLink href="https://twitter.com/dan_abramov" external>
              Twitter
            </ActionLink>
          </div>
        </BaseCard>

        {/* Person 3 */}
        <BaseCard>
          <CodeHeader level="h2" className="mb-2">
            Sarah Drasner
          </CodeHeader>
          <p className="text-[var(--vscode-teal)] text-sm mb-3 font-mono">
            @sarah_edo
          </p>
          <p className="text-[var(--vscode-text-secondary)] mb-4">
            VP of Developer Experience at Netlify. Her work on animations,
            Vue.js, and developer tooling has been incredibly influential.
          </p>
          <div className="flex gap-3">
            <ActionLink href="https://sarahdrasnerdesign.com" external>
              Website
            </ActionLink>
            <ActionLink href="https://twitter.com/sarah_edo" external>
              Twitter
            </ActionLink>
          </div>
        </BaseCard>

        {/* Person 4 */}
        <BaseCard>
          <CodeHeader level="h2" className="mb-2">
            Addy Osmani
          </CodeHeader>
          <p className="text-[var(--vscode-teal)] text-sm mb-3 font-mono">
            @addyosmani
          </p>
          <p className="text-[var(--vscode-text-secondary)] mb-4">
            Engineering Manager at Google Chrome. His insights on web
            performance and JavaScript patterns have shaped modern best
            practices.
          </p>
          <div className="flex gap-3">
            <ActionLink href="https://addyosmani.com" external>
              Website
            </ActionLink>
            <ActionLink href="https://twitter.com/addyosmani" external>
              Twitter
            </ActionLink>
          </div>
        </BaseCard>

        {/* Person 5 */}
        <BaseCard>
          <CodeHeader level="h2" className="mb-2">
            Wes Bos
          </CodeHeader>
          <p className="text-[var(--vscode-teal)] text-sm mb-3 font-mono">
            @wesbos
          </p>
          <p className="text-[var(--vscode-text-secondary)] mb-4">
            Full-stack developer and educator. His courses and podcasts have
            helped countless developers level up their skills.
          </p>
          <div className="flex gap-3">
            <ActionLink href="https://wesbos.com" external>
              Website
            </ActionLink>
            <ActionLink href="https://twitter.com/wesbos" external>
              Twitter
            </ActionLink>
          </div>
        </BaseCard>

        {/* Person 6 */}
        <BaseCard>
          <CodeHeader level="h2" className="mb-2">
            Cassidy Williams
          </CodeHeader>
          <p className="text-[var(--vscode-teal)] text-sm mb-3 font-mono">
            @cassidoo
          </p>
          <p className="text-[var(--vscode-text-secondary)] mb-4">
            CTO at Contenda. Her newsletter, coding challenges, and developer
            advocacy work inspire developers worldwide.
          </p>
          <div className="flex gap-3">
            <ActionLink href="https://cassidoo.co" external>
              Website
            </ActionLink>
            <ActionLink href="https://twitter.com/cassidoo" external>
              Twitter
            </ActionLink>
          </div>
        </BaseCard>
      </section>

      <section className="mt-8">
        <BaseCard hover={false}>
          <CodeHeader
            level="h2"
            syntax={[
              { text: '//', color: 'text-disabled' },
              { text: ' And Many More...', color: 'text-primary' },
            ]}
            className="mb-3"
          />
          <p className="text-[var(--vscode-text-primary)]">
            This is just a small sample of the amazing people in our community.
            Every day, I learn from developers on Twitter, GitHub, Stack
            Overflow, and in countless blog posts and tutorials. Thank you all
            for sharing your knowledge and making the web a better place! 🙏
          </p>
        </BaseCard>
      </section>
    </div>
  );
}
