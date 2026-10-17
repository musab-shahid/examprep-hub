import { useData } from '@/hooks/useData';
import { useRouter } from '@/router';
import { assertCanStudy } from '@/lib/track-access';
import { openTrackOptions } from '@/router/openTrack';
import { listTrackDefinitions } from '@/data/tracks';
import { isTrackId, type TrackId } from '@/data/tracks';
import { PageContainer, Button, Card } from '@/components/ui';

type Props = {
  children: React.ReactNode;
  /**
   * When set, user must be enrolled in this track (not merely any track).
   * Omit for generic stages that use the active enrolled focus only.
   */
  requiredTrack?: TrackId;
};

/**
 * Blocks learning screens until enrollment (and optional track) is satisfied.
 */
export function EnrollmentRequired({ children, requiredTrack }: Props) {
  const { data } = useData();
  const { navigate } = useRouter();

  const check = requiredTrack
    ? assertCanStudy(data, requiredTrack)
    : assertCanStudy(data);

  if (check.ok) {
    return <>{children}</>;
  }

  const exploreTrack: TrackId | null =
    requiredTrack && isTrackId(requiredTrack) ? requiredTrack : null;

  return (
    <PageContainer>
      <Card className="p-3.5 sm:p-5 max-w-lg">
        <h2 className="text-lg font-semibold text-slate-900">
          {requiredTrack
            ? `Begin ${requiredTrack.toUpperCase()} to continue`
            : 'Choose a track to begin'}
        </h2>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          {requiredTrack
            ? `This content belongs to the ${requiredTrack.toUpperCase()} track. Preview the track, then use Begin — opening a page does not enroll you.`
            : 'Study, practice, and review unlock after you begin a track. Preview FPSC or HAT first — beginning is an explicit step.'}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {exploreTrack ? (
            <Button type="button" onClick={() => navigate({ ...openTrackOptions(exploreTrack) })}>
              Explore {exploreTrack.toUpperCase()}
            </Button>
          ) : (
            <>
              <Button type="button" onClick={() => navigate({ ...openTrackOptions('fpsc') })}>
                Explore FPSC
              </Button>
              <Button type="button" variant="secondary" onClick={() => navigate({ ...openTrackOptions('hat') })}>
                Explore HAT
              </Button>
            </>
          )}
        </div>
      </Card>
    </PageContainer>
  );
}
