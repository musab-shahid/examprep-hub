import { useData } from '@/hooks/useData';
import { getTopic } from '@/data/topics';
import { sectionMap } from '@/data/sections';
import { canAccessSubject } from '@/lib/learning-scope';
import { isTrackId, type TrackId } from '@/data/tracks';
import { EnrollmentRequired } from '@/components/track/EnrollmentRequired';
import { PageContainer, EmptyState, Card } from '@/components/ui';
import { BookOpen } from 'lucide-react';

/** Gate a topic route by resolving topic → subject → track enrollment + profile tags. */
export function TopicAccessGate({
  topicId,
  children,
}: {
  topicId: string;
  children: React.ReactNode;
}) {
  const { data } = useData();
  const topic = getTopic(topicId);
  if (!topic) {
    return (
      <PageContainer>
        <Card className="p-6">
          <EmptyState
            title="Topic not found"
            message="This topic id is missing or was renamed."
            icon={<BookOpen className="w-12 h-12" />}
          />
        </Card>
      </PageContainer>
    );
  }
  const subjectId = sectionMap[topic.sectionId]?.subjectId;
  if (!subjectId) {
    return (
      <PageContainer>
        <Card className="p-6">
          <EmptyState title="Topic unavailable" message="No subject mapping for this topic." icon={<BookOpen className="w-12 h-12" />} />
        </Card>
      </PageContainer>
    );
  }
  const access = canAccessSubject(data, subjectId, topic);
  if (!access.ok) {
    const track: TrackId | undefined =
      access.trackId && isTrackId(access.trackId) ? access.trackId : undefined;
    return <EnrollmentRequired requiredTrack={track}>{null}</EnrollmentRequired>;
  }
  return <>{children}</>;
}

/** Gate a section route by section → subject → track. */
export function SectionAccessGate({
  sectionId,
  children,
}: {
  sectionId: string;
  children: React.ReactNode;
}) {
  const { data } = useData();
  const section = sectionMap[sectionId];
  if (!section) {
    return (
      <PageContainer>
        <Card className="p-6">
          <EmptyState title="Section not found" message="Unknown section id." icon={<BookOpen className="w-12 h-12" />} />
        </Card>
      </PageContainer>
    );
  }
  const access = canAccessSubject(data, section.subjectId);
  if (!access.ok) {
    const track: TrackId | undefined =
      access.trackId && isTrackId(access.trackId) ? access.trackId : undefined;
    return <EnrollmentRequired requiredTrack={track}>{null}</EnrollmentRequired>;
  }
  return <>{children}</>;
}
