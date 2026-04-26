type WorkspaceShellProps = {
  workspaceId: string;
};

export function WorkspaceShell({ workspaceId }: WorkspaceShellProps) {
  return (
    <section className="container">
      <p className="eyebrow">Active Workspace</p>
      <h1 className="headline">Compose, edit, run, and preserve lineage</h1>
      <p className="subline">
        Candidate code from chat becomes tracked work. Runs always target explicit versions, and
        recoverable snapshots stay close to the action.
      </p>

      <p className="panel-copy" style={{ marginTop: '0.95rem' }}>
        Active workspace: {workspaceId}
      </p>
      <p className="panel-copy" style={{ marginTop: '0.15rem' }}>
        Project context can be attached to scope edits and runs.
      </p>

      <div className="workspace-layout">
        <div className="panel">
          <h2 className="panel-title">Candidate Change</h2>
          <p className="panel-copy">
            Suggested from chat: normalize snippet metadata before durable save.
          </p>
          <pre className="code-preview">
            <code>{`export function normalizeSnippetTitle(input: string) {
  return input.trim().replace(/\\s+/g, ' ');
}`}</code>
          </pre>
          <div className="action-row">
            <button className="ui-btn ui-btn-primary" type="button">
              Open in Editor
            </button>
            <button className="ui-btn ui-btn-subtle" type="button">
              Save to Snippets
            </button>
          </div>
        </div>

        <aside className="panel">
          <h2 className="panel-title">Run History</h2>
          <div className="run-list">
            <div className="run-row">
              <div>
                <div className="run-name">workspace-shell sanity check</div>
                <div className="run-meta">Node 20 | 23s</div>
              </div>
              <div className="run-meta">passed</div>
            </div>
            <div className="run-row">
              <div>
                <div className="run-name">snippet save regression</div>
                <div className="run-meta">Node 20 | 41s</div>
              </div>
              <div className="run-meta">failed</div>
            </div>
            <div className="run-row">
              <div>
                <div className="run-name">rerun from snapshot</div>
                <div className="run-meta">Node 20 | 34s</div>
              </div>
              <div className="run-meta">passed</div>
            </div>
          </div>

          <span className="status-pill">Snapshot ready</span>
          <p className="panel-copy">
            Restore point saved before multi-file apply. You can roll back instantly if the next
            patch drifts.
          </p>

          <span className="status-pill status-pill-warning">Recovery hint</span>
          <p className="panel-copy">
            Last failed run suggests tightening null guards around project metadata hydration.
          </p>
        </aside>
      </div>
    </section>
  );
}
