import { WorkspaceShell } from '@/components/workspace/workspace-shell';

type WorkspacePageProps = {
  params: { workspaceId: string };
};

export default function WorkspacePage({ params }: WorkspacePageProps) {
  return (
    <main className="shell">
      <WorkspaceShell workspaceId={params.workspaceId} />
    </main>
  );
}
