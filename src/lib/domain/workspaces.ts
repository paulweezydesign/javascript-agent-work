import { db } from '@/lib/db';
import { normalizeProjectContext } from '@/lib/domain/project-context';

type WorkspaceProjectContext = {
  label: string;
  rootPath: string;
};

export async function createWorkspace(
  name: string,
  projectContext?: WorkspaceProjectContext | null,
) {
  const normalizedProject = projectContext
    ? normalizeProjectContext(projectContext)
    : null;

  return db.workspace.create({
    data: {
      name,
      ...(normalizedProject
        ? {
            projectLabel: normalizedProject.label,
            projectRootPath: normalizedProject.rootPath,
          }
        : {}),
    },
    select: {
      id: true,
      name: true,
      projectLabel: true,
      projectRootPath: true,
      createdAt: true,
    },
  });
}
