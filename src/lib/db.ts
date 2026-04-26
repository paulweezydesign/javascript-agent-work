type WorkspaceRecord = {
  id: string;
  name: string;
  projectLabel: string | null;
  projectRootPath: string | null;
  createdAt: Date;
};

type WorkspaceCreateArgs = {
  data: {
    name: string;
    projectLabel?: string;
    projectRootPath?: string;
  };
  select: Record<string, boolean>;
};

const workspaceStore: WorkspaceRecord[] = [];
let workspaceCounter = 0;

function pickSelectedFields<TRecord extends Record<string, unknown>>(
  record: TRecord,
  select: Record<string, boolean>,
) {
  const result: Record<string, unknown> = {};

  for (const [key, enabled] of Object.entries(select)) {
    if (enabled) {
      result[key] = record[key];
    }
  }

  return result;
}

export const db = {
  workspace: {
    async create({ data, select }: WorkspaceCreateArgs) {
      workspaceCounter += 1;

      const record: WorkspaceRecord = {
        id: `workspace_${workspaceCounter}`,
        name: data.name,
        projectLabel: data.projectLabel ?? null,
        projectRootPath: data.projectRootPath ?? null,
        createdAt: new Date(),
      };

      workspaceStore.push(record);
      return pickSelectedFields(record, select);
    },
  },
};

export function resetDbForTests() {
  workspaceStore.length = 0;
  workspaceCounter = 0;
}
