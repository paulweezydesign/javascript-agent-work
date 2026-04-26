'use client';

import { useRouter } from 'next/navigation';

const actions = [
  {
    title: 'Start New Chat',
    copy: 'Open a fresh workspace conversation and begin shaping candidate code changes.',
  },
  {
    title: 'Open Snippet',
    copy: 'Jump back into a saved snippet and continue refining it in editor context.',
  },
  {
    title: 'Recent Work',
    copy: 'Return to recent files, tracked runs, and the latest snapshot checkpoint.',
  },
];

export function UniversalLauncher() {
  const router = useRouter();

  return (
    <section className="container">
      <p className="eyebrow">Universal Launcher</p>
      <h1 className="headline">ChatGPT Snippet Workspace</h1>
      <p className="subline">
        Begin from one calm command surface, then move straight into chat, editing, runtime checks,
        and snippet promotion without changing products.
      </p>

      <div className="launcher-grid" aria-label="launcher-actions">
        {actions.map((action) => (
          <button
            key={action.title}
            type="button"
            className="launch-action"
            onClick={() => router.push('/workspaces/demo')}
          >
            <span className="launch-action-title">{action.title}</span>
            <span className="launch-action-copy">{action.copy}</span>
          </button>
        ))}

        <button
          type="button"
          className="launch-action"
          aria-label="Attach Project"
          title="Attach Project"
          onClick={() => router.push('/workspaces/demo')}
        >
          <span className="launch-action-title">Attach Project</span>
          <span className="launch-action-copy">
            Connect a real codebase so edits, runs, and snapshots stay in context.
          </span>
        </button>
      </div>
    </section>
  );
}
