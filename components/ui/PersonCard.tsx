import BaseCard from '@/components/ui/BaseCard';
import CodeHeader from '@/components/ui/CodeHeader';
import ActionLink from '@/components/ui/ActionLink';

interface SocialLink {
  label: string;
  url: string;
}

interface PersonCardProps {
  name: string;
  title: string;
  summary: string;
  socialLinks: SocialLink[];
}

export default function PersonCard({
  name,
  title,
  summary,
  socialLinks,
}: PersonCardProps) {
  return (
    <BaseCard>
      <CodeHeader level="h2" className="mb-2">
        {name}
      </CodeHeader>
      <p className="text-[var(--vscode-teal)] text-sm mb-3 font-mono">
        {title}
      </p>
      <p className="text-[var(--vscode-text-secondary)] mb-4">{summary}</p>
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((link, index) => (
          <ActionLink key={index} href={link.url} external>
            {link.label}
          </ActionLink>
        ))}
      </div>
    </BaseCard>
  );
}
