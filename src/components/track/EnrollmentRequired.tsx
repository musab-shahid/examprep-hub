import { useData } from '@/hooks/useData';
import { useRouter } from '@/router';
import { assertCanStudy } from '@/lib/track-access';
import { openTrackOptions } from '@/router/openTrack';
import { PageContainer, Button, Card } from '@/components/ui';

/** Blocks learning screens when the user has not begun any track. */
export function EnrollmentRequired({ children }: { children: React.ReactNode }) {
  const { data } = useData();
  const { navigate } = useRouter();

  if (assertCanStudy(data).ok) {
    return <>{children}</>;
  }

  return (
    <PageContainer>
      <Card className="p-3.5 sm:p-5 max-w-lg">
        <h2 className="text-lg font-semibold text-slate-900">Choose a track to begin</h2>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Study, practice, and review unlock after you begin a track. Preview FPSC or HAT first —
          beginning is an explicit step and does not happen just by opening a page.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button type="button" onClick={() => navigate({ ...openTrackOptions('fpsc') })}>
            Explore FPSC
          </Button>
          <Button type="button" variant="secondary" onClick={() => navigate({ ...openTrackOptions('hat') })}>
            Explore HAT
          </Button>
        </div>
      </Card>
    </PageContainer>
  );
}
